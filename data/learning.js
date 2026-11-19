/* CS329Z learning routes: 5 phases / 3 tracks for Engineering AI Agents. */
(function () {
  const lessons = {
    L01: ['建立 agent 的工程坐标系','说清 compound AI system vs single agent，列出 harness/data/evals 三支柱。',[],'tool_call_parse.py'],
    L02: ['把 LLM 当构件理解','说清 decoding、attention、context length、约束解码这些会影响 agent 的关键机制。',['L01']],
    L03: ['搭出 RAG 流水线','把 indexing/retrieval/reranking/generation 五步画出来，指出每步可替换件。',['L02']],
    L04: ['让 LLM 会调工具','比较 Toolformer/Gorilla/MCP/BFCL 的标准化路径，写出 tool schema 与 dispatch。',['L02','L03'],'tool_call_parse.py'],
    L05: ['会用 agent 框架','比较 DSPy vs LangGraph vs OpenHands 三种范式，并说明何时选哪一种。',['L04'],'react_loop.py'],
    L06: ['按 pattern 设计 agent','列出 workflow vs agent 的边界，应用 ReAct/Reflexion/CodeAct/ReWOO 模式到具体场景。',['L05'],'react_loop.py'],
    L07: ['给 agent 加记忆','区分 working/episodic/semantic/procedural 四种记忆及对应架构。',['L06'],'memory_skill_router.py'],
    L08: ['判断多 agent 是否划算','列出 single vs multi-agent 的取舍、通信模式、以及失败案例。',['L06','L07']],
    L09: ['选择优化路径','比较 prompt 优化（GEPA/MIPROv2）与权重优化（SFT/RL）的适用边界。',['L04','L06'],'grpo_advantage.py'],
    L10: ['借鉴终端 benchmark','用 Terminal-Bench 看真实 CLI 任务的评测思路。',['L06','L08']],
    L11: ['规划 agent 数据','区分 trace/demonstration/feedback，描述数据飞轮与合成数据策略。',['L09']],
    L12: ['做高质量数据选择','写出 informative data 挑选策略、tiny benchmark 设计、标注流程。',['L11']],
    L13: ['设计 agent 评测','用 4-tuple 框架（request/env/stop/scorer）写一个真实 benchmark。',['L10','L12']],
    L14: ['理解 Andrew Ng 的产业视角','总结对 agent 工程化、工作流、应用方向的判断。',['L13']],
    L15: ['搭出 LLM-as-Judge','写出 judge prompt、识别 bias、选择 pairwise vs pointwise、设计 pass@k/pass^k 指标。',['L13']],
    L16: ['借鉴 SWE-bench 演进','用 SWE-bench 看真实 issue→patch 评测的演化路径。',['L13','L15']],
    L17: ['给 agent 上安全栏','列出 sandbox/凭证/监控/human-in-loop 四层防护及 prompt injection 防御。',['L15','L16'],'cua_step_log.py'],
    L18: ['落地 coding agent','比较 SWE-agent/Claude Code/OpenHands 架构，写一份 scaffold 决策表。',['L15','L17'],'swe_patch_loop.py'],
    L19: ['构建主动式 personal agent','区分 reactive vs proactive，说明 mixed initiative 与隐私边界。',['L07','L17']],
    L20: ['交付课程项目','完成端到端 agent 系统 + 真实评测 + demo，复盘设计决策。',['L18','L19']]
  };
  const phases = [
    {title:'能力底座', ids:['L01','L02','L03','L04'], output:'写出 agent = LLM + tool + env 的完整定义；跑通 RAG 流水线与 tool call 解析。', work:'playground.html?ex=tool_call_parse.py', label:'运行 tool_call 解析示例'},
    {title:'框架与设计', ids:['L05','L06','L07','L08','L09'], output:'给出 workflow vs agent 决策树 + 四种 memory 架构 + 多 agent 取舍。', work:'playground.html?ex=react_loop.py', label:'运行 ReAct 示例'},
    {title:'数据与评测', ids:['L10','L11','L12','L13','L15','L16'], output:'用 4-tuple 写一个 benchmark + LLM-as-Judge prompt + pass@k 指标。', work:'playground.html?ex=swe_patch_loop.py', label:'运行 SWE 示例'},
    {title:'安全与领域落地', ids:['L14','L17','L18','L19'], output:'提交 sandbox/凭证/监控 checklist + 一个领域 agent 落地方案。', work:'playground.html?ex=cua_step_log.py', label:'运行 CUA 风险门示例'},
    {title:'项目交付', ids:['L20'], output:'端到端 agent 系统 + 真实评测数据 + demo。', work:'assignments.html', label:'选择综合项目模板'}
  ];
  const tracks = {
    full:{title:'系统学习', duration:'10 周参考节奏', intro:'20 讲全量，含 3 个 guest 与 final demo。适合把 agent 工程化全流程过一遍。', ids:phases.flatMap(p=>p.ids), outcome:'完整 agent 系统 + 评测套件 + 上线 checklist', phases},
    builder:{title:'工程实践', duration:'5 周参考节奏', intro:'重点是 harness、workflow、memory、eval、安全；guest 与理论讲次按需。', ids:['L01','L02','L03','L04','L05','L06','L07','L08','L11','L12','L13','L15','L17','L18'], outcome:'可运行 agent + benchmark + sandbox 清单', phases:[
      {title:'能力底座',ids:['L01','L02','L03','L04'],output:'tool call+RAG 流水线跑通',work:'playground.html?ex=tool_call_parse.py',label:'运行解析示例'},
      {title:'框架与记忆',ids:['L05','L06','L07','L08'],output:'workflow vs agent 决策+memory 分层',work:'playground.html?ex=memory_skill_router.py',label:'运行记忆示例'},
      {title:'数据与评测',ids:['L11','L12','L13','L15'],output:'4-tuple benchmark+judge prompt',work:'playground.html?ex=swe_patch_loop.py',label:'运行 SWE 示例'},
      {title:'安全落地',ids:['L17','L18'],output:'sandbox+监控+coding agent scaffold',work:'assignments.html',label:'选综合项目'}]},
    pm:{title:'产品与交付', duration:'按项目推进', intro:'面向 AI 产品经理与解决方案：workflow/agent 边界、eval 指标、安全落地、产品化。', ids:['L01','L02','L06','L08','L11','L13','L15','L17','L18','L19','L20'], outcome:'agent 产品方案 + benchmark + 上线 checklist', phases:[
      {title:'边界与价值',ids:['L01','L02','L06','L08'],output:'写清 workflow vs agent 的取舍',work:'learning-lab.html?lab=react',label:'做 ReAct 实验'},
      {title:'数据与验收',ids:['L11','L13','L15'],output:'benchmark+judge+指标定义',work:'playground.html?ex=swe_patch_loop.py',label:'运行 SWE 示例'},
      {title:'安全与上线',ids:['L17','L18','L19','L20'],output:'上线 checklist+领域落地+复盘',work:'assignments.html',label:'选业务延伸项目'}]}
  };
  window.LEARNING = {lessons,tracks,midterms:[],
    source(id){return SITE_META.lectures[id].youtube?'视频教案 · YT':'Slides 补读';},
    coverage(p,k){return 1-Math.pow(1-p,k);},
    advantages(rewards){const mean=rewards.reduce((a,b)=>a+b,0)/rewards.length;const sd=Math.sqrt(rewards.reduce((s,r)=>s+(r-mean)**2,0)/rewards.length);return rewards.map(r=>sd?(r-mean)/sd:0);}
  };
})();
