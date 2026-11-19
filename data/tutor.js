/* DeepTutor-inspired mastery model: knowledge points, prerequisites, self-check prompts.
   Local-only: stored in localStorage, nothing leaves the browser. */
window.TUTOR = (function(){
  'use strict';
  /* nodes: id, lecture, label, kind(concept|mechanism|system|safety), prereq[] */
  const nodes=[
    {id:'agent-def',lec:'L01',label:'sense–act 回路 / 四要素',kind:'concept',prereq:[]},
    {id:'tool-token',lec:'L02',label:'动作即 token · tool call 链路',kind:'mechanism',prereq:['agent-def']},
    {id:'tool-design',lec:'L02',label:'工具描述/schema/错误返回设计',kind:'system',prereq:['tool-token']},
    {id:'ctx-strategy',lec:'L03',label:'无损压缩 / ReSum / KV 复用',kind:'mechanism',prereq:['tool-token']},
    {id:'lost-middle',lec:'L03',label:'lost-in-the-middle 现象',kind:'concept',prereq:['ctx-strategy']},
    {id:'mem-skill',lec:'L04',label:'memory / skill / ASI 分层',kind:'system',prereq:['ctx-strategy']},
    {id:'planning',lec:'L05',label:'ReAct vs Plan-and-Execute',kind:'mechanism',prereq:['mem-skill']},
    {id:'multi-agent',lec:'L05',label:'多 agent 接口与责任',kind:'system',prereq:['planning']},
    {id:'swe-loop',lec:'L06',label:'locate→edit→test→iterate',kind:'mechanism',prereq:['planning']},
    {id:'swe-eval',lec:'L06',label:'SWE-bench / patch 验证',kind:'concept',prereq:['swe-loop']},
    {id:'cua-ground',lec:'L07',label:'DOM/截图/VNC grounding',kind:'mechanism',prereq:['planning']},
    {id:'cua-safety',lec:'L07',label:'GUI 场景安全接入',kind:'safety',prereq:['cua-ground']},
    {id:'sft-traj',lec:'L08',label:'演示轨迹 + rejection sampling',kind:'mechanism',prereq:['swe-eval','cua-ground']},
    {id:'rl-tri',lec:'L09',label:'state/action/reward in agents',kind:'concept',prereq:['sft-traj']},
    {id:'grpo',lec:'L09',label:'GRPO 组内优势',kind:'mechanism',prereq:['rl-tri']},
    {id:'dr-pipe',lec:'L10',label:'deep research 多步流水线',kind:'system',prereq:['planning','swe-loop']},
    {id:'cite-fid',lec:'L10',label:'citation fidelity',kind:'concept',prereq:['dr-pipe']},
    {id:'ppo-grpo-dpo',lec:'L11',label:'PPO / GRPO / DPO 取舍',kind:'mechanism',prereq:['grpo']},
    {id:'sparse-r',lec:'L11',label:'稀疏奖励与信用分配',kind:'concept',prereq:['ppo-grpo-dpo']},
    {id:'rl-sys',lec:'L12',label:'disaggregated rollout/train',kind:'system',prereq:['sparse-r']},
    {id:'partial-roll',lec:'L12',label:'partial rollout / env 并发成本',kind:'system',prereq:['rl-sys']},
    {id:'sandbox',lec:'L13',label:'sandbox / 凭证 / 监控 / guardrail',kind:'safety',prereq:['agent-def','swe-loop']},
    {id:'traj-review',lec:'L13',label:'轨迹回放审计',kind:'safety',prereq:['sandbox']},
    {id:'oh-loop',lec:'L14',label:'OpenHands controller/runtime/obs',kind:'system',prereq:['sandbox','swe-loop']},
    {id:'oh-skill',lec:'L14',label:'AgentSkills 库形态',kind:'system',prereq:['oh-loop']},
    {id:'orch',lec:'L15',label:'编排/状态持久化/重试',kind:'system',prereq:['traj-review','oh-loop']},
    {id:'slo',lec:'L15',label:'成功率/延迟/成本/介入率 SLO',kind:'system',prereq:['orch']},
    {id:'trace-mon',lec:'L15',label:'长轨迹监控与成本预算',kind:'safety',prereq:['slo']}
  ];
  /* Mastery levels: 0=未接触 1=了解 2=理解 3=会用 4=能教别人 */
  const levels=['未接触','了解','理解','会用','能讲清'];
  const prompts={
    concept:['一句话说清楚它解决什么问题？','举一个它失效的反例。','它和相邻概念的分界线在哪？'],
    mechanism:['画出从输入到输出的完整链路。','哪一步最可能出错？如何观测？','如果去掉它会怎样？'],
    system:['为真实任务画出部件交互图。','关键接口/契约是什么？','成本与回退策略怎么设计？'],
    safety:['列出该场景的攻击面。','最小权限该如何落地？','出事后的审计与回滚路径？']
  };
  /* Spaced repetition: due in days per level */
  const interval=[0,1,3,7,21];
  function load(){try{return JSON.parse(localStorage.getItem('CS329Z_tutor')||'{}');}catch(_){return {};}}
  function save(s){try{localStorage.setItem('CS329Z_tutor',JSON.stringify(s));}catch(_){/* ok */}}
  function state(){const s=load();s.mastery=s.mastery||{};s.review=s.review||{};s.notes=s.notes||{};return s;}
  function setMastery(id,lv){const s=state();s.mastery[id]=Math.max(0,Math.min(4,lv));const d=new Date();d.setDate(d.getDate()+interval[lv]);s.review[id]=d.toISOString().slice(0,10);save(s);}
  function mastery(id){return state().mastery[id]||0;}
  function due(){const t=new Date().toISOString().slice(0,10);const s=state();return nodes.filter(n=>s.review[n.id]&&s.review[n.id]<=t&&(s.mastery[n.id]||0)<4);}
  function lectureProgress(lec){const ns=nodes.filter(n=>n.lec===lec);const avg=ns.reduce((a,n)=>a+mastery(n.id),0)/ns.length;return {avg,mastered:ns.filter(n=>mastery(n.id)>=3).length,total:ns.length};}
  function weak(limit=6){return nodes.map(n=>({n,m:mastery(n.id)})).filter(x=>x.m<2).slice(0,limit);}
  return {nodes,levels,prompts,setMastery,mastery,due,lectureProgress,weak,state,save};
})();
