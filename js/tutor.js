/* Mastery dashboard + guided classroom page logic (DeepTutor/OpenMAIC-inspired, localStorage only). */
(function(){
  'use strict';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const lvlColors=['#94a3b8','#f59e0b','#3b82f6','#10b981','#8b5cf6'];
  function renderDashboard(){
    const host=document.getElementById('masteryBoard');if(!host)return;
    const byLec={};TUTOR.nodes.forEach(n=>{(byLec[n.lec]=byLec[n.lec]||[]).push(n);});
    const lecRows=Object.entries(byLec).map(([lec,ns])=>{
      const p=TUTOR.lectureProgress(lec),meta=SITE_META.lectures[lec],lv=Math.round(p.avg);
      return {lec,title:meta.title,avg:p.avg,lv,mastered:p.mastered,total:ns.length};
    });
    const totalKp=TUTOR.nodes.length,rated=TUTOR.nodes.filter(n=>TUTOR.mastery(n.id)>0).length,mastered=TUTOR.nodes.filter(n=>TUTOR.mastery(n.id)>=3).length,due=TUTOR.due(),weak=TUTOR.weak();
    const rows=lecRows.map(r=>`<tr><td><a href="lectures/${r.lec}.html">${r.lec}</a></td><td>${esc(r.title)}</td><td><div class="bar"><span style="width:${(r.avg/4*100).toFixed(0)}%"></span></div></td><td>${r.mastered}/${r.total}</td><td><span class="pill p${r.lv}">${TUTOR.levels[r.lv]}</span></td></tr>`).join('');
    host.innerHTML=`<div class="mastery-stats">
      <div class="stat"><div class="n">${rated}<span class="muted" style="font-size:14px">/${totalKp}</span></div><div class="l">已自评知识点</div></div>
      <div class="stat"><div class="n">${mastered}</div><div class="l">≥会用（3 级+）</div></div>
      <div class="stat"><div class="n">${due.length}</div><div class="l">今日到期复习</div></div>
      <div class="stat"><div class="n">${weak.length}</div><div class="l">待补强（≤1 级）</div></div>
    </div>
    <div class="mastery-cols">
      <div class="card"><h3>各讲掌握度</h3><table class="mastery-table"><thead><tr><th>讲</th><th>主题</th><th>掌握度</th><th>≥会用</th><th>当前层</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="side-stack">
        <div class="card"><h3>今日复习</h3>${due.length?`<ul>${due.map(n=>`<li><span class="dot" style="background:${lvlColors[TUTOR.mastery(n.id)]}"></span><span><a href="lectures/${n.lec}.html">${n.lec}</a> · ${esc(n.label)}</span></li>`).join('')}</ul>`:'<p class="muted">今天没有到期项。去推进「待补强」里的知识点。</p>'}</div>
        <div class="card"><h3>待补强知识点</h3><ul>${weak.map(({n,m})=>`<li><span class="dot" style="background:${lvlColors[m]}"></span><span><a href="lectures/${n.lec}.html">${n.lec}</a> ${esc(n.label)}<br><small class="muted">${TUTOR.levels[m]}</small></span></li>`).join('')}</ul></div>
      </div>
    </div>`;
  }
  function renderLecturePanel(){
    const host=document.getElementById('tutorPanel');if(!host)return;
    const lec=host.dataset.lecture;
    const ns=TUTOR.nodes.filter(n=>n.lec===lec),scenes=CLASSROOM.get(lec);
    host.innerHTML=`<div class="tutor-grid">
      <section class="card"><h2>知识点掌握度 <span class="badge self">自评 · 本地存储</span></h2>
        ${ns.map(n=>{const m=TUTOR.mastery(n.id);return `<div class="kp-row"><div class="kp-label"><span class="dot" style="background:${lvlColors[m]}"></span><div><b>${esc(n.label)}</b><small class="muted">${TUTOR.prompts[n.kind][0]}</small></div></div><div class="kp-btns">${TUTOR.levels.map((l,i)=>`<button type="button" data-kp="${n.id}" data-lv="${i}" aria-pressed="${m===i}" title="${l}">${i===0?'○':i}</button>`).join('')}</div></div>`;}).join('')}
      </section>
      <section class="card"><h2>互动课堂 <span class="badge self">OpenMAIC 式</span></h2><div id="sceneHost"></div></section>
    </div>`;
    host.querySelectorAll('[data-kp]').forEach(b=>b.onclick=()=>{TUTOR.setMastery(b.dataset.kp,+b.dataset.lv);renderLecturePanel();});
    let i=0;const sh=document.getElementById('sceneHost');
    function draw(){
      const s=scenes[i];if(!s){sh.innerHTML='<p class="muted">本讲课堂完成。去讲义或自测继续。</p>';return;}
      const icons={explain:'📖',probe:'🧠',decision:'⚖️',compare:'🔁',build:'🛠',recall:'✅'};
      sh.innerHTML=`<div class="scene"><div class="scene-hd"><span>${icons[s.type]||'•'} ${s.type.toUpperCase()} ${i+1}/${scenes.length}</span><b>${esc(s.title)}</b></div><p>${s.body}</p>
      ${s.options?`<div class="choice-row">${s.options.map(o=>`<button type="button" class="choice" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div><div class="answer muted" hidden>${s.answer?esc(s.answer):''}</div>`:''}
      <textarea class="scene-note" placeholder="写下你的答案/思考，会存在本地。"></textarea>
      <div class="scene-nav"><button type="button" id="prevS" ${i===0?'disabled':''}>← 上一幕</button><button type="button" id="nextS">${i===scenes.length-1?'完成本讲':'下一幕 →'}</button></div></div>`;
      sh.querySelectorAll('.choice').forEach(c=>c.onclick=()=>{sh.querySelector('.answer').hidden=false;c.style.outline='2px solid var(--brand)';});
      const ta=sh.querySelector('.scene-note');const skey=`note:${lec}:${i}`;try{ta.value=localStorage.getItem(skey)||'';}catch(_){}
      ta.oninput=()=>{try{localStorage.setItem(skey,ta.value);}catch(_){}};
      sh.querySelector('#prevS').onclick=()=>{i=Math.max(0,i-1);draw();};
      sh.querySelector('#nextS').onclick=()=>{i=Math.min(scenes.length,i+1);draw();};
    }
    draw();
  }
  function renderPlan(){
    const host=document.getElementById('tutorPlan');if(!host)return;
    const weeks=[
      {w:'第 1 周',ids:['L01','L02','L03'],goal:'建立坐标系：定义、tool call、上下文策略',deliver:'四要素图 + 工具 schema'},
      {w:'第 2 周',ids:['L04','L05','L06'],goal:'记忆/技能/规划 + coding 闭环',deliver:'skill 库草案 + locate-edit-test trace'},
      {w:'第 3 周',ids:['L07','L08','L09'],goal:'GUI 安全 + SFT + RL 词汇',deliver:'CUA 接入清单 + 演示轨迹模板'},
      {w:'第 4 周',ids:['L10','L11','L12'],goal:'深度研究 + 高级 RL + 系统开销',deliver:'DR 流水线图 + rollout/train 架构'},
      {w:'第 5 周',ids:['L13','L14','L15'],goal:'安全 + OpenHands + 上线',deliver:'上线前 checklist + SLO 清单'},
      {w:'第 6 周',ids:['capstone'],goal:'综合项目：选 harness 或训练方向',deliver:'可演示项目 + 评测指标 + 复盘'}
    ];
    const done=id=>!!CS329Z.loadProgress().lectures?.[id]?.done;
    host.innerHTML=`<div class="week-grid">${weeks.map(w=>`<div class="card"><div class="plan-w">${w.w}</div><h3 style="font-size:15px;margin:6px 0 4px">${w.goal}</h3><ul class="plan-ids">${w.ids.map(id=>id==='capstone'?'<li><a href="assignments.html">综合项目</a></li>':`<li><a href="lectures/${id}.html">${id}</a> ${done(id)?'<span class="ok">已读</span>':''}</li>`).join('')}</ul><p class="muted" style="font-size:13px;margin:8px 0 0">交付物：${w.deliver}</p></div>`).join('')}</div>`;
  }
  function init(){
    if(window.TUTOR&&window.SITE_META){
      renderDashboard();renderPlan();
      const lec=(location.pathname.match(/L\d{2}/)||[])[0];if(lec){const p=document.getElementById('tutorPanel');if(p)p.dataset.lecture=lec;renderLecturePanel();}
    }
  }
  document.addEventListener('DOMContentLoaded',init);
})();
