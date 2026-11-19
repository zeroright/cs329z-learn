/* Shared classroom engine: renders a 4-scene interactive class + knowledge-point rating
   into any container. Used by classroom.html (full page) and lecture overlay. */
(function(){
  'use strict';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const COLORS=['#94a3b8','#f59e0b','#3b82f6','#10b981','#8b5cf6'];
  const ICONS={explain:'📖',probe:'🧠',decision:'⚖️',compare:'🔁',build:'🛠',recall:'✅'};
  const TYPEN={explain:'讲解',probe:'追问',decision:'决策',compare:'对比',build:'动手',recall:'带走'};
  const STAGE_LABEL=['讲 · Explain','问 · Probe','做 · Apply','回忆 · Recall'];

  function renderMastery(lec){
    const ns=TUTOR.nodes.filter(n=>n.lec===lec);
    return ns.map(n=>{const m=TUTOR.mastery(n.id);
      return `<div class="kp-row"><div class="kp-label"><span class="dot" style="background:${COLORS[m]}"></span><div><b>${esc(n.label)}</b><small class="muted">${esc(TUTOR.prompts[n.kind][0])}</small></div></div><div class="kp-btns">${TUTOR.levels.map((l,i)=>`<button type="button" data-kp="${n.id}" data-lv="${i}" aria-pressed="${m===i}" title="${l}">${i===0?'–':i}</button>`).join('')}</div></div>`;
    }).join('');
  }

  /* container: element; lec: 'L01'; opts: {onDone,compact} */
  function mount(container,lec){
    const scenes=(window.CLASSROOM&&CLASSROOM.get(lec))||[];
    let i=0;
    container.innerHTML=`<div class="cr">
      <div class="cr-stage">${STAGE_LABEL.map((l,k)=>`<span class="cr-step" data-step="${k}">${k+1}. ${l}</span>`).join('<span class="cr-arrow">→</span>')}</div>
      <div class="cr-body"><div id="crScene"></div>
        <details class="cr-mastery"><summary>本讲知识点自评（${TUTOR.nodes.filter(n=>n.lec===lec).length} 个 · 0-4 级）</summary><div class="cr-kps">${renderMastery(lec)}</div></details>
      </div>
      <div class="cr-foot"><span class="cr-progress" id="crProg"></span><div><button type="button" class="btn ghost sm" id="crPrev">← 上一幕</button> <button type="button" class="btn sm" id="crNext">下一幕 →</button></div></div>
    </div>`;
    const sh=container.querySelector('#crScene');
    function markStep(){container.querySelectorAll('.cr-step').forEach((el,k)=>{el.classList.toggle('cur',k===Math.min(i,3));el.classList.toggle('done',k<Math.min(i,3));});
      container.querySelector('#crProg').textContent=`第 ${Math.min(i+1,scenes.length)} / ${scenes.length} 幕`;}
    function draw(){
      const s=scenes[i];
      if(!s){sh.innerHTML=`<div class="scene done"><h3>本讲课堂完成 ✅</h3><p>已过完「讲→问→做→回忆」。建议：把最后一幕写的那句话贴到 Notion，再到讲义做标记或自测。</p><p><a class="btn ghost sm" href="${lec==='L15'?'../':'../'}lectures/${lec}.html">回到本讲讲义 →</a> <a class="btn sm" href="../mastery.html">看掌握度 →</a></p></div>`;
        container.querySelector('#crPrev').disabled=false;container.querySelector('#crNext').disabled=true;markStep();return;}
      container.querySelector('#crNext').disabled=false;
      const typeIcon=ICONS[s.type]||'•';
      sh.innerHTML=`<div class="scene">
        <div class="scene-hd"><span class="scene-type">${typeIcon} ${TYPEN[s.type]||s.type} · ${i+1}/${scenes.length}</span><b>${esc(s.title)}</b></div>
        <p class="scene-body">${s.body}</p>
        ${s.options?`<div class="choice-row">${s.options.map(o=>`<button type="button" class="choice">${esc(o)}</button>`).join('')}</div><div class="answer" hidden>${s.answer?esc(s.answer):''}</div>`:''}
        <textarea class="scene-note" rows="3" placeholder="写下你的答案 / 思考（只存本机）"></textarea>
      </div>`;
      sh.querySelectorAll('.choice').forEach(c=>c.onclick=()=>{sh.querySelector('.answer').hidden=false;c.classList.add('picked');});
      const ta=sh.querySelector('.scene-note'),k=`note:${lec}:${i}`;
      try{ta.value=localStorage.getItem(k)||'';}catch(e){}
      ta.oninput=()=>{try{localStorage.setItem(k,ta.value);}catch(e){}};
      container.querySelector('#crPrev').disabled=(i===0);
      container.querySelector('#crNext').textContent=(i===scenes.length-1?'完成本讲':'下一幕 →');
      markStep();
    }
    container.querySelector('#crPrev').onclick=()=>{i=Math.max(0,i-1);draw();};
    container.querySelector('#crNext').onclick=()=>{i=Math.min(scenes.length,i+1);draw();};
    container.querySelectorAll('[data-kp]').forEach(b=>b.onclick=()=>{TUTOR.setMastery(b.dataset.kp,+b.dataset.lv);b.parentElement.querySelectorAll('button').forEach(x=>{x.setAttribute('aria-pressed',x===b?'true':'false');x.style.background=x===b?'var(--brand)':'var(--bg2)';x.style.color=x===b?'#fff':'var(--muted)';});});
    draw();
  }
  /* overlay for lecture pages */
  function openOverlay(lec){
    document.getElementById('crOverlay')?.remove();
    const o=document.createElement('div');o.id='crOverlay';o.className='cr-overlay';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label',lec+' 互动课堂');
    o.innerHTML=`<div class="cr-sheet"><div class="cr-top"><div><b>${lec} 互动课堂</b><span class="muted">讲→问→做→回忆 · 只存本机</span></div><button type="button" class="iconbtn" id="crClose" aria-label="关闭">✕</button></div><div class="cr-mount"></div></div>`;
    document.body.appendChild(o);
    const close=()=>{o.remove();document.removeEventListener('keydown',onKey);};
    const onKey=e=>{if(e.key==='Escape')close();};
    document.addEventListener('keydown',onKey);
    o.querySelector('#crClose').onclick=close;
    o.addEventListener('click',e=>{if(e.target===o)close();});
    mount(o.querySelector('.cr-mount'),lec);
  }
  window.CR={mount,openOverlay};
})();
