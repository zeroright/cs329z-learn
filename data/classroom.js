/* OpenMAIC-inspired classroom scenes: each lecture gets an interactive teaching script
   with explain → probe → apply → reflect, plus scene types for interactivity. */
window.CLASSROOM=(function(){
  'use strict';
  /* scene: {type:'explain'|'probe'|'decision'|'compare'|'build'|'recall', title, body, options?, answer?} */
  const scenes={
    L01:[
      {type:'explain',title:'先建立坐标系',body:'别急着看定义。先回答：一个“订外卖”的动作流，传感器是什么、执行器是什么？把答案写在草稿里，再对照 Russell-Norvig 的四要素。'},
      {type:'decision',title:'自主边界投票',body:'六个任务你各选「完全自主/先问再做/永远别碰」，再解释为什么。「支付API迁移」为什么比「买票」分歧更大？',options:['完全自主','先问再做','永远别碰'],answer:'分歧不在难度，在可逆性/可验证性/爆炸半径。'},
      {type:'probe',title:'删邮件事故复盘',body:'如果硬约束被压缩进 summary 就丢，harness 层该怎么兜底？想 2 条不同层面的修复。'},
      {type:'recall',title:'一句话带走',body:'Agent 是系统不是模型。写出你自己的一句话定义，包含 harness。'}
    ],
    L02:[
      {type:'explain',title:'动作即 token',body:'tool call 是模型生成的文本，harness 才是执行者。这意味着工具能力可以被训练，也意味着格式错误可被解码约束。'},
      {type:'compare',title:'extend vs facilitate',body:'判断一个工具值不值得加：它是「提供新能力」还是「已有能力做更快更稳」？给 3 个你常用工具分类。'},
      {type:'build',title:'设计一个 read_file 工具',body:'写出 name/description/parameters schema，并写出 2 种失败情况下的错误返回格式。'},
      {type:'recall',title:'一句话带走',body:'工具描述的质量 = 调用质量的上限，因为那是模型唯一能看到的信息。'}
    ],
    L03:[
      {type:'explain',title:'长上下文三条路',body:'无损压缩、ReSum 递归摘要、KV cache 复用。它们解决的分别是「装不下」「记不住」「算得慢」。'},
      {type:'probe',title:'lost-in-the-middle',body:'为什么把硬约束放中间位置容易丢？对你的 harness 设计意味着什么？'},
      {type:'decision',title:'压缩策略选型',body:'一个 1 小时的代码调试任务，近 8 轮 raw + 约束 pin + 滚动摘要，为什么比「全保留」或「全摘要」更稳？',options:['全保留','全摘要','分层保留'],answer:'分层保留：事实可压，约束必须原样保留。'},
      {type:'recall',title:'一句话带走',body:'上下文管理的本质是分层记忆，不是无限窗口。'}
    ],
    L04:[
      {type:'explain',title:'memory 和 skill 分家',body:'memory 回答「发生过什么」，skill 回答「下次怎么做」。把它们混在一个 RAG 里，是 agent 失忆的常见根因。'},
      {type:'build',title:'设计技能库',body:'为你的一个真实 agent 场景写 3 个 skill：名称、触发条件、输入、输出、失败回退。'},
      {type:'compare',title:'ASI vs 手写 skill',body:'Agent Skill Induction 从轨迹归纳 skill，比纯手工写强在哪、险在哪？'},
      {type:'recall',title:'一句话带走',body:'技能是可复用的过程性资产，需要被“写入”，不是只被“想起”。'}
    ],
    L05:[
      {type:'explain',title:'ReAct 与 Plan-and-Execute',body:'边想边做 vs 先谋后动。前者灵活，后者省 token。选择标准：环境是否稳定、子问题是否可预知。'},
      {type:'compare',title:'两种骨架写同一件事',body:'把「调研三家竞品定价」分别写成 ReAct 与 P&E 伪码，标出各自会失败的分叉点。'},
      {type:'probe',title:'多 agent 的代价',body:'为什么「加一个 agent」不是免费增益？列出接口契约、状态同步、责任归属三个成本。'},
      {type:'recall',title:'一句话带走',body:'规划是预算问题，不是智力问题。'}
    ],
    L06:[
      {type:'explain',title:'SWE-bench 的闭环',body:'locate→edit→test→iterate。harness 的价值不在写代码，在把反馈变成下一轮输入。'},
      {type:'probe',title:'没有 test 怎么办',body:'SWE-bench 里隐藏测试是 reward。真实项目里缺失时，你用什么代理信号判断 patch 对不对？'},
      {type:'build',title:'写一个 patch trace',body:'挑一个你最近的 bug，写出完整定位→修改→验证→迭代的轨迹。'},
      {type:'recall',title:'一句话带走',body:'coding agent 的核心是“让模型有可调试的环境”，不是更长的 prompt。'}
    ],
    L07:[
      {type:'explain',title:'DOM / 截图 / VNC 三选一',body:'结构化但脆、通用但需 grounding、最深但部署重。选接入方式时看任务频率与容错成本。'},
      {type:'decision',title:'安全接入清单',body:'GUI agent 最容易出事的不是点错，而是「不可逆 + 凭证泄露」。列出你的 5 项前置防线。',options:['sandbox 虚拟桌面','凭证最小权限','敏感页面确认','操作回放日志','动作白名单'],answer:'全选，且凭证不进 context。'},
      {type:'probe',title:'grounding 的本质',body:'把「点那个绿色的提交按钮」变成 (x,y)，模型需要的中间表示是什么？'},
      {type:'recall',title:'一句话带走',body:'CUA 的难点是把语言落到像素，安全是把像素关进笼子。'}
    ],
    L08:[
      {type:'explain',title:'SFT 在 agent 里的新角色',body:'教模型「什么时候调工具、何时停」，轨迹格式是训练核心。'},
      {type:'build',title:'写一条演示轨迹',body:'instruction → thought/action/obs 序列 → 终止条件。哪一步错了会让整条数据变毒？'},
      {type:'compare',title:'rejection sampling 为什么便宜',body:'跑 100 条轨迹留 20 条好的，比人工标 20 条好在哪？'},
      {type:'recall',title:'一句话带走',body:'agent SFT 学的是节奏与格式，不是答案。'}
    ],
    L09:[
      {type:'explain',title:'RL 三元组映射',body:'state = context+env 观察，action = tool call，reward = 任务成败。把 chat 的 RL 词汇平移过来。'},
      {type:'probe',title:'稀疏奖励',body:'长轨迹只在终点 0/1，哪一步该给过程分？给多了会发生什么？'},
      {type:'build',title:'为你的任务写 reward',body:'设计一个可执行、可规模化、难被 hack 的奖励函数。'},
      {type:'recall',title:'一句话带走',body:'没有评测，RL 就是在优化噪声。'}
    ],
    L10:[
      {type:'explain',title:'Deep Research 流水线',body:'分解 → 检索 → 筛选 → 综合 → 引用。比 RAG 多的不是步数，是控制与证据。'},
      {type:'probe',title:'引用忠实度',body:'一条 claim 配一条 citation，为什么“引用数量多”不等于可靠？'},
      {type:'build',title:'设计 DR 骨架',body:'为「评估某产品市场机会」写出可并行、可追溯、可综合的子问题树。'},
      {type:'recall',title:'一句话带走',body:'研究 agent 的核心是证据链，不是搜索次数。'}
    ],
    L11:[
      {type:'explain',title:'PPO/GRPO/DPO 取舍',body:'三模型共舞 vs 组内相对优势 vs 离线偏好对。成本、稳定性、数据要求各不相同。'},
      {type:'probe',title:'reward hacking',body:'process reward 怎么防 agent “做对步骤但走错方向”？'},
      {type:'compare',title:'什么时候用 DPO',body:'什么场景下离线偏好对比在线 rollout 更划算？'},
      {type:'recall',title:'一句话带走',body:'算法选择是工程权衡，先定数据形态再定算法。'}
    ],
    L12:[
      {type:'explain',title:'RL 系统的真正瓶颈',body:'不是 train，是 rollout。长轨迹推理 + 真实 env 并发，决定了吞吐与成本。'},
      {type:'build',title:'画 disaggregated 架构',body:'inference 群、env worker、trainer 的配比怎么估？什么指标决定扩容顺序？'},
      {type:'probe',title:'partial rollout 的意义',body:'为什么 checkpoint + 续跑比「跑到结束才训练」更实用？'},
      {type:'recall',title:'一句话带走',body:'RL 系统 = 推理服务 + 环境工厂 + 训练流水线，三者解耦才能并行。'}
    ],
    L13:[
      {type:'explain',title:'能力是安全的前提',body:'「不该做的事」没学进策略，再多外挂防线也可能被绕过。安全是能力的一部分。'},
      {type:'decision',title:'四层防线逐项过',body:'sandbox / 凭证 / 监控 / 模型 guardrail，各举一个你项目里的真实缺口与补救。',options:['sandbox 最小权限','凭证不进 context','关键操作确认','轨迹回放'],answer:'全部都要有，且需要同时成立。'},
      {type:'build',title:'写上线前 checklist',body:'至少包含 sandbox、凭证、确认、监控、回滚、红队六项。'},
      {type:'recall',title:'一句话带走',body:'单层防御会失守，安全是与关系。'}
    ],
    L14:[
      {type:'explain',title:'OpenHands 部件拆解',body:'controller 管循环，runtime 是 sandbox 执行环境，observation 统一各种 env 反馈，AgentSkills 是可调用函数库。'},
      {type:'build',title:'画交互图',body:'User → Controller → Agent → Action → Runtime → Observation → Agent → FinalAnswer，标出每步状态。'},
      {type:'probe',title:'为什么是事件源',body:'事件源分离对调试、审计、恢复有什么好处？'},
      {type:'recall',title:'一句话带走',body:'看懂 OpenHands，就看懂了工程化 agent 的标准形态。'}
    ],
    L15:[
      {type:'explain',title:'编排与监控',body:'任务队列、状态持久化、失败重试是骨架；成功率、延迟、成本、人工介入率是 SLO。'},
      {type:'build',title:'写你的 SLO 清单',body:'成功率≥X、P95延迟≤Y、月成本≤Z、人工介入率≤W，并写 graceful degradation。'},
      {type:'probe',title:'为什么难监控',body:'长轨迹 + 真实副作用 + 多状态，让传统 ML 监控不够用。你缺的是哪一层？'},
      {type:'recall',title:'一句话带走',body:'上线 agent 不是部署模型，是运营一个会行动的服务。'}
    ]
  };
  function get(id){return scenes[id]||[];}
  return {get};
})();
