window.SITE_META = {
  "course": "Stanford CS329Z · Engineering AI Agents · Fall 2025",
  "order": [
    "L01",
    "L02",
    "L03",
    "L04",
    "L05",
    "L06",
    "L07",
    "L08",
    "L09",
    "L10",
    "L11",
    "L12",
    "L13",
    "L14",
    "L15",
    "L16",
    "L17",
    "L18",
    "L19",
    "L20"
  ],
  "staff": {
    "instructors": [
      "Diyi Yang",
      "Michael Ryan",
      "John Yang"
    ],
    "term": "Fall 2025 · Mon/Wed",
    "when": "Stanford / 公开课程",
    "guests": [
      {
        "name": "Ryan Marten & Alex Shaw"
      },
      {
        "name": "Andrew Ng"
      },
      {
        "name": "Carlos Jimenez & Alexander Wettig"
      }
    ]
  },
  "official_site": "https://cs329z.stanford.edu",
  "edges": [
    [
      "L01",
      "L02"
    ],
    [
      "L02",
      "L03"
    ],
    [
      "L03",
      "L04"
    ],
    [
      "L04",
      "L05"
    ],
    [
      "L05",
      "L06"
    ],
    [
      "L06",
      "L07"
    ],
    [
      "L07",
      "L08"
    ],
    [
      "L08",
      "L09"
    ],
    [
      "L09",
      "L10"
    ],
    [
      "L10",
      "L11"
    ],
    [
      "L11",
      "L12"
    ],
    [
      "L12",
      "L13"
    ],
    [
      "L13",
      "L14"
    ],
    [
      "L14",
      "L15"
    ],
    [
      "L15",
      "L16"
    ],
    [
      "L16",
      "L17"
    ],
    [
      "L17",
      "L18"
    ],
    [
      "L18",
      "L19"
    ],
    [
      "L19",
      "L20"
    ]
  ],
  "lectures": {
    "L01": {
      "id": "L01",
      "code": "L01",
      "title": "Introduction — What Are Agentic Systems?",
      "date": "Wed Sep 23",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/DGI4vucR71w",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture01.pdf",
      "page": "lectures/L01.html",
      "readings": [
        {
          "text": "Zaharia et al. \"The Shift from Models to Compound AI Systems.\" BAIR Blog (2024).",
          "url": "https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/"
        },
        {
          "text": "Weng. \"LLM Powered Autonomous Agents.\" Lil'Log (2023).",
          "url": "https://lilianweng.github.io/posts/2023-06-23-agent/"
        },
        {
          "text": "Kapoor et al. \"AI Agents That Matter.\" TMLR (2025).",
          "url": "https://arxiv.org/abs/2407.01502"
        }
      ],
      "description": "Course logistics, a brief history of agents, and the anatomy of an agent: LLM core, reasoning, memory, tools, and environment. Compound AI systems and workflows vs. agents, plus the key challenges of reliability, training, safety, and evaluation.",
      "theme": "Foundations & Landscape",
      "speakers": []
    },
    "L02": {
      "id": "L02",
      "code": "L02",
      "title": "LLMs for Builders",
      "date": "Mon Sep 28",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/Vr1NzH8bT44",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture02.pdf",
      "page": "lectures/L02.html",
      "readings": [
        {
          "text": "Vaswani et al. \"Attention Is All You Need.\" NeurIPS (2017).",
          "url": "https://arxiv.org/abs/1706.03762"
        },
        {
          "text": "Katharopoulos et al. \"Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention.\" ICML (2020).",
          "url": "https://arxiv.org/abs/2006.16236"
        },
        {
          "text": "Rajasekaran et al. \"Effective Context Engineering for AI Agents.\" Anthropic (2025).",
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
        }
      ],
      "description": "Language model internals for agent builders: decoding strategies, transformer attention (including linear and hybrid) and context length, the pretraining-to-post-training pipeline, inference and test-time scaling, structured I/O and constrained decoding, and context engineering.",
      "theme": "Foundations & Landscape",
      "speakers": []
    },
    "L03": {
      "id": "L03",
      "code": "L03",
      "title": "Retrieval-Augmented Generation (RAG)",
      "date": "Wed Sep 30",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/psLc-46GqY0",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture03.pdf",
      "page": "lectures/L03.html",
      "readings": [
        {
          "text": "Lewis et al. \"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.\" NeurIPS (2020).",
          "url": "https://arxiv.org/abs/2005.11401"
        },
        {
          "text": "Karpukhin et al. \"Dense Passage Retrieval for Open-Domain Question Answering.\" EMNLP (2020).",
          "url": "https://arxiv.org/abs/2004.04906"
        },
        {
          "text": "Khattab & Zaharia. \"ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT.\" SIGIR (2020).",
          "url": "https://arxiv.org/abs/2004.12832"
        }
      ],
      "description": "Why retrieval helps, then the RAG pipeline end to end: indexing (chunking, contextual retrieval, RAPTOR, HNSW), retrievers from BM25 and DPR to hybrid search, reranking, and ColBERT, agentic RAG (Self-RAG, Search-R1), and common failure modes. Plus a course project overview.",
      "theme": "Building Blocks",
      "speakers": []
    },
    "L04": {
      "id": "L04",
      "code": "L04",
      "title": "Tool Use & Function Calling",
      "date": "Mon Oct 5",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/s0S38lz6O7M",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture04.pdf",
      "page": "lectures/L04.html",
      "readings": [
        {
          "text": "Schick et al. \"Toolformer: Language Models Can Teach Themselves to Use Tools.\" NeurIPS (2023).",
          "url": "https://arxiv.org/abs/2302.04761"
        },
        {
          "text": "Patil et al. \"Gorilla: Large Language Model Connected with Massive APIs.\" NeurIPS (2024).",
          "url": "https://arxiv.org/abs/2305.15334"
        },
        {
          "text": "Model Context Protocol Specification, revision 2025-06-18. modelcontextprotocol.io (2025).",
          "url": "https://modelcontextprotocol.io/specification/2025-06-18"
        }
      ],
      "description": "Why LLMs need tools and how they learn to use them: Toolformer, scaling to thousands of APIs with Gorilla and ToolLLM, standard interfaces from REST to function calling to MCP, evaluating tool use with BFCL, ToolBench, and τ-bench, and common failure modes.",
      "theme": "Building Blocks",
      "speakers": []
    },
    "L05": {
      "id": "L05",
      "code": "L05",
      "title": "Frameworks & Orchestration",
      "date": "Wed Oct 7",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/q0Q-Hy8TTps",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture05.pdf",
      "page": "lectures/L05.html",
      "readings": [
        {
          "text": "Khattab et al. \"DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines.\" ICLR (2024).",
          "url": "https://arxiv.org/abs/2310.03714"
        },
        {
          "text": "LangChain. \"LangGraph Overview.\" LangChain Docs.",
          "url": "https://docs.langchain.com/oss/python/langgraph/overview"
        },
        {
          "text": "Arena.ai. \"HarnessTax: How Much Does the Harness Matter for Coding Agents?\" Arena Blog (2026).",
          "url": "https://arena.ai/blog/coding-agents-harness-tax"
        }
      ],
      "description": "The data, system, and evals pillars of agent engineering, with live demos of DSPy (signatures, modules, optimizers) and LangGraph (state, nodes, edges). A tour of open-source agent harnesses (mini-SWE-agent, OpenHands, Pi), durable orchestration with Temporal, observability tooling, and best practices.",
      "theme": "Frameworks & Agent Design",
      "speakers": []
    },
    "L06": {
      "id": "L06",
      "code": "L06",
      "title": "Agent Design Patterns & Scaffolds",
      "date": "Mon Oct 12",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/JC_pLC5EX_w",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture06.pdf",
      "page": "lectures/L06.html",
      "readings": [
        {
          "text": "Yao et al. \"ReAct: Synergizing Reasoning and Acting in Language Models.\" ICLR (2023).",
          "url": "https://arxiv.org/abs/2210.03629"
        },
        {
          "text": "Schluntz & Zhang. \"Building Effective AI Agents.\" Anthropic (2024).",
          "url": "https://www.anthropic.com/engineering/building-effective-agents"
        },
        {
          "text": "LangChain. \"Context Engineering.\" LangChain Blog (2025).",
          "url": "https://www.langchain.com/blog/context-engineering-for-agents"
        },
        {
          "text": "Shinn et al. \"Reflexion: Language Agents with Verbal Reinforcement Learning.\" NeurIPS (2023).",
          "url": "https://arxiv.org/abs/2303.11366"
        },
        {
          "text": "Wang et al. \"Executable Code Actions Elicit Better LLM Agents.\" ICML (2024).",
          "url": "https://arxiv.org/abs/2402.01030"
        }
      ],
      "description": "Workflows vs. agents and the design patterns for each: five composable workflow patterns, reasoning and acting patterns (ReAct, Reflexion, CodeAct, ReWOO), and context-management patterns (event logs, compaction, observation masking, context isolation). Case study of the Pi harness.",
      "theme": "Frameworks & Agent Design",
      "speakers": []
    },
    "L07": {
      "id": "L07",
      "code": "L07",
      "title": "Agent Memory Architectures",
      "date": "Wed Oct 14",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/qh5tP6PBZ6U",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture07.pdf",
      "page": "lectures/L07.html",
      "readings": [
        {
          "text": "Sumers et al. \"Cognitive Architectures for Language Agents.\" TMLR (2024).",
          "url": "https://arxiv.org/abs/2309.02427"
        },
        {
          "text": "Packer et al. \"MemGPT: Towards LLMs as Operating Systems.\" arXiv (2023).",
          "url": "https://arxiv.org/abs/2310.08560"
        },
        {
          "text": "Park et al. \"Generative Agents: Interactive Simulacra of Human Behavior.\" UIST (2023).",
          "url": "https://arxiv.org/abs/2304.03442"
        }
      ],
      "description": "Why agents need memory and the four types (working, episodic, semantic, procedural). Four architecture patterns: skill libraries, tiered hierarchies like MemGPT, reflective consolidation, and memory maintenance. Memory benchmarks and open problems in forgetting, privacy, and over-personalization.",
      "theme": "Memory & Multi-Agent Systems",
      "speakers": []
    },
    "L08": {
      "id": "L08",
      "code": "L08",
      "title": "Multi-Agent Systems",
      "date": "Mon Oct 19",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/TlX_ft_PQIM",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture08.pdf",
      "page": "lectures/L08.html",
      "readings": [
        {
          "text": "Wu et al. \"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation.\" COLM (2024).",
          "url": "https://arxiv.org/abs/2308.08155"
        },
        {
          "text": "Cemri et al. \"Why Do Multi-Agent LLM Systems Fail?\" NeurIPS Datasets & Benchmarks (2025).",
          "url": "https://arxiv.org/abs/2503.13657"
        },
        {
          "text": "Kim et al. \"Towards a Science of Scaling Agent Systems.\" arXiv (2025).",
          "url": "https://arxiv.org/abs/2512.08296"
        }
      ],
      "description": "When to use single vs. multi-agent systems and how to build them: orchestration patterns (orchestrator, swarm, hybrid), communication through handoffs, message boards, and the A2A protocol, and coordination infrastructure (task ledgers, shared memory, worktree isolation). Why multi-agent systems fail.",
      "theme": "Memory & Multi-Agent Systems",
      "speakers": []
    },
    "L09": {
      "id": "L09",
      "code": "L09",
      "title": "Optimization",
      "date": "Wed Oct 21",
      "icon": "📚",
      "source": "youtube",
      "source_label": "YT 录像",
      "youtube": "https://youtu.be/e_m99aR7_3Q",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture09.pdf",
      "page": "lectures/L09.html",
      "readings": [
        {
          "text": "Agrawal et al. \"GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning.\" ICLR (2026).",
          "url": "https://arxiv.org/abs/2507.19457"
        },
        {
          "text": "Opsahl-Ong et al. \"Optimizing Instructions and Demonstrations for Multi-Stage Language Model Programs.\" EMNLP (2024).",
          "url": "https://arxiv.org/abs/2406.11695"
        },
        {
          "text": "Shao et al. \"DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models.\" arXiv (2024).",
          "url": "https://arxiv.org/abs/2402.03300"
        }
      ],
      "description": "When optimization pays off and how to do it: context optimization (bootstrapped few-shot, MIPROv2, OPRO, TextGrad, GEPA), weight optimization (SFT on agent rollouts, RL with PPO and GRPO, on-policy distillation), agents as optimizers (Darwin Gödel Machine, autoresearch), and when to optimize prompts vs. weights.",
      "theme": "Optimization",
      "speakers": []
    },
    "L10": {
      "id": "L10",
      "code": "L10",
      "title": "Guest Lecture: Terminal-Bench",
      "date": "Mon Oct 26",
      "icon": "👤",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture10.pdf",
      "page": "lectures/L10.html",
      "readings": [
        {
          "text": "Terminal-Bench project site (leaderboard, tasks, and harness).",
          "url": "https://www.tbench.ai/"
        },
        {
          "text": "Merrill et al. \"Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces.\" ICLR (2026).",
          "url": "https://arxiv.org/abs/2601.11868"
        }
      ],
      "description": "Ryan Marten and Alex Shaw (Laude Institute), co-creators of Terminal-Bench, on benchmarking how well AI agents accomplish real-world tasks in a terminal environment.",
      "theme": "",
      "speakers": [
        {
          "name": "Ryan Marten",
          "url": "https://ryanmarten.com"
        },
        {
          "name": "Alex Shaw",
          "url": "https://www.alexgshaw.com"
        }
      ]
    },
    "L11": {
      "id": "L11",
      "code": "L11",
      "title": "What Data Do Agents Need?",
      "date": "Wed Oct 28",
      "icon": "📊",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture11.pdf",
      "page": "lectures/L11.html",
      "readings": [
        {
          "text": "Shankar. \"Data Flywheels for LLM Applications.\" (2024).",
          "url": "https://www.sh-reya.com/blog/ai-engineering-flywheel/"
        },
        {
          "text": "Tan et al. \"Large Language Models for Data Annotation and Synthesis: A Survey.\" EMNLP (2024).",
          "url": "https://aclanthology.org/2024.emnlp-main.54/"
        }
      ],
      "description": "Traces, demonstrations, and feedback, data for optimization vs. evaluation, data flywheels, synthetic data generation, and collecting data from human-agent interaction.",
      "theme": "Data for Agentic Systems",
      "speakers": []
    },
    "L12": {
      "id": "L12",
      "code": "L12",
      "title": "Data Selection & Quality",
      "date": "Mon Nov 2",
      "icon": "📊",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture12.pdf",
      "page": "lectures/L12.html",
      "readings": [
        {
          "text": "Yang et al. \"SWE-smith: Scaling Data for Software Engineering Agents.\" NeurIPS D&B (2025).",
          "url": "https://arxiv.org/abs/2504.21798"
        },
        {
          "text": "Shankar et al. \"Who Validates the Validators? Aligning LLM-Assisted Evaluation with Human Preferences.\" UIST (2024).",
          "url": "https://arxiv.org/abs/2404.12272"
        },
        {
          "text": "Zhou et al. \"LIMA: Less Is More for Alignment.\" NeurIPS (2023).",
          "url": "https://arxiv.org/abs/2305.11206"
        }
      ],
      "description": "Finding maximally informative data, filtering and selection strategies, tiny-but-targeted benchmarks, annotation practices, quality assessment, and building datasets from agent traces.",
      "theme": "Data for Agentic Systems",
      "speakers": []
    },
    "L13": {
      "id": "L13",
      "code": "L13",
      "title": "Evaluation Fundamentals & Benchmark Design",
      "date": "Wed Nov 4",
      "icon": "📊",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture13.pdf",
      "page": "lectures/L13.html",
      "readings": [
        {
          "text": "Zhu et al. \"Establishing Best Practices for Building Rigorous Agentic Benchmarks.\" (2025).",
          "url": "https://arxiv.org/abs/2507.02825"
        },
        {
          "text": "Press. \"How to Build Good Language Modeling Benchmarks.\" (2024).",
          "url": "https://ofir.io/How-to-Build-Good-Language-Modeling-Benchmarks/"
        },
        {
          "text": "Polo et al. \"tinyBenchmarks: Evaluating LLMs with Fewer Examples.\" ICML (2024).",
          "url": "https://arxiv.org/abs/2402.14992"
        }
      ],
      "description": "Why evals are hard, the 4-tuple framework (request, environment, stopping criteria, scorer), designing each component, properties of good benchmarks, realistic scaffolding, and reliability dimensions.",
      "theme": "Evaluation for Agentic Systems",
      "speakers": []
    },
    "L14": {
      "id": "L14",
      "code": "L14",
      "title": "Fireside Chat with Andrew Ng",
      "date": "Mon Nov 9",
      "icon": "👤",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "",
      "page": "lectures/L14.html",
      "readings": [],
      "description": "A fireside chat with Andrew Ng, hosted by Diyi Yang. Professor Ng is the founder of DeepLearning.AI, co-founder of Coursera, founding lead of Google Brain, and an Adjunct Professor of Computer Science at Stanford.",
      "theme": "",
      "speakers": [
        {
          "name": "Andrew Ng",
          "url": "https://www.andrewng.org"
        }
      ]
    },
    "L15": {
      "id": "L15",
      "code": "L15",
      "title": "LLM-as-Judge & Evaluation Infrastructure",
      "date": "Wed Nov 11",
      "icon": "📊",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture15.pdf",
      "page": "lectures/L15.html",
      "readings": [
        {
          "text": "Grace et al. \"Demystifying Evals for AI Agents.\" Anthropic (2026).",
          "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
        },
        {
          "text": "Zheng et al. \"Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.\" NeurIPS (2023).",
          "url": "https://arxiv.org/abs/2306.05685"
        },
        {
          "text": "Ryan et al. \"AutoMetrics: Approximate Human Judgements with Automatically Generated Evaluators.\" ICLR (2026).",
          "url": "https://arxiv.org/abs/2512.17267"
        },
        {
          "text": "Zhu et al. \"AutoLibra: Agent Metric Induction from Open-Ended Human Feedback.\" ICLR (2026).",
          "url": "https://openreview.net/forum?id=4BjGVZ7Bxn"
        }
      ],
      "description": "The three grader types, designing judge prompts, known biases, pairwise vs. pointwise evaluation, non-determinism metrics (pass@k vs. pass^k), harness design, and Anthropic's 8-step roadmap.",
      "theme": "Evaluation for Agentic Systems",
      "speakers": []
    },
    "L16": {
      "id": "L16",
      "code": "L16",
      "title": "Guest Lecture: SWE-bench",
      "date": "Mon Nov 16",
      "icon": "👤",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "",
      "page": "lectures/L16.html",
      "readings": [
        {
          "text": "Jimenez et al. \"SWE-bench: Can Language Models Resolve Real-World GitHub Issues?\" ICLR (2024).",
          "url": "https://arxiv.org/abs/2310.06770"
        }
      ],
      "description": "Carlos Jimenez and Alexander Wettig (Anthropic), creators of SWE-bench, on the evolution and future of evaluations for coding capabilities and beyond.",
      "theme": "",
      "speakers": [
        {
          "name": "Carlos Jimenez",
          "url": "https://www.carlosejimenez.com"
        },
        {
          "name": "Alexander Wettig",
          "url": "https://codecreator.github.io"
        }
      ]
    },
    "L17": {
      "id": "L17",
      "code": "L17",
      "title": "Agent Safety & Guardrails",
      "date": "Wed Nov 18",
      "icon": "🛡️",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "https://web.stanford.edu/class/cs329z/slides/lecture17.pdf",
      "page": "lectures/L17.html",
      "readings": [
        {
          "text": "Shao et al. \"PrivacyLens: Evaluating Privacy Norm Awareness of LMs in Action.\" NeurIPS D&B (2024).",
          "url": "https://arxiv.org/abs/2409.00138"
        },
        {
          "text": "Zhang & Yang. \"Searching for Privacy Risks in LLM Agents via Simulation.\" arXiv (2025).",
          "url": "https://arxiv.org/abs/2508.10880"
        },
        {
          "text": "Li. \"Agentic LLMs as Powerful Deanonymizers.\" arXiv (2026).",
          "url": "https://arxiv.org/abs/2601.05918"
        },
        {
          "text": "Wen et al. \"Contextualized Privacy Defense for LLM Agents.\" arXiv (2026).",
          "url": "https://arxiv.org/abs/2603.02983"
        },
        {
          "text": "OpenAI. \"Understanding Prompt Injections: A Frontier Security Challenge.\" (2025).",
          "url": "https://openai.com/index/prompt-injections/"
        },
        {
          "text": "Anthropic. \"Anthropic's Responsible Scaling Policy.\" (2023).",
          "url": "https://www.anthropic.com/news/anthropics-responsible-scaling-policy"
        }
      ],
      "description": "Privacy risks of tool access, prompt injection (including indirect injection), red-teaming, sandboxing and permission models, output guardrails, liability considerations, responsible deployment, and human-in-the-loop patterns.",
      "theme": "Safety",
      "speakers": []
    },
    "L18": {
      "id": "L18",
      "code": "L18",
      "title": "Coding & Software Agents",
      "date": "Mon Nov 30",
      "icon": "📚",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "",
      "page": "lectures/L18.html",
      "readings": [
        {
          "text": "Yang et al. \"SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering.\" NeurIPS (2024).",
          "url": "https://arxiv.org/abs/2405.15793"
        },
        {
          "text": "Wang et al. \"OpenHands: An Open Platform for AI Software Developers.\" ICLR (2025).",
          "url": "https://arxiv.org/abs/2407.16741"
        },
        {
          "text": "Anthropic. \"Claude Code: Best Practices for Agentic Coding.\" (2025).",
          "url": "https://www.anthropic.com/engineering/claude-code-best-practices"
        },
        {
          "text": "Young. \"Effective Harnesses for Long-Running Agents.\" Anthropic (2025).",
          "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
        }
      ],
      "description": "How coding agents work end to end: the SWE-agent, Claude Code, and OpenHands architectures, scaffolds as design decisions, SWE-bench and the 4-tuple framework in practice, and the future of software development with agents.",
      "theme": "Coding Agents & Personal Agents",
      "speakers": []
    },
    "L19": {
      "id": "L19",
      "code": "L19",
      "title": "Personal Agents",
      "date": "Wed Dec 2",
      "icon": "📚",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "",
      "page": "lectures/L19.html",
      "readings": [
        {
          "text": "Shaikh et al. \"Creating General User Models from Computer Use.\" UIST (2025).",
          "url": "https://arxiv.org/abs/2505.10831"
        },
        {
          "text": "Shaikh et al. \"Learning Next Action Predictors from Human-Computer Interaction.\" arXiv (2026).",
          "url": "https://arxiv.org/abs/2603.05923"
        },
        {
          "text": "Steinberger. \"OpenClaw: Open-source proactive AI agent.\" (2025).",
          "url": "https://github.com/openclaw/openclaw"
        }
      ],
      "description": "From reactive to proactive, personal agents: General User Models (GUM), Next Action Prediction, open-source proactive personal agents, privacy and trust implications, and when agents should initiate vs. wait (mixed initiative).",
      "theme": "Coding Agents & Personal Agents",
      "speakers": []
    },
    "L20": {
      "id": "L20",
      "code": "L20",
      "title": "Final Project Demo Day",
      "date": "Wed Dec 9",
      "icon": "🎯",
      "source": "slides",
      "source_label": "Slides 补读",
      "youtube": "",
      "slides": "",
      "page": "lectures/L20.html",
      "readings": [],
      "description": "Held during the end-quarter examination period, 3:30–6:30 p.m. Location TBA.",
      "theme": "Open Problems & Final Demos",
      "speakers": []
    }
  },
  "papers": [
    {
      "lecture": "L01",
      "title": "Zaharia et al. \"The Shift from Models to Compound AI Systems.\" BAIR Blog (2024).",
      "url": "https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L01",
      "title": "Weng. \"LLM Powered Autonomous Agents.\" Lil'Log (2023).",
      "url": "https://lilianweng.github.io/posts/2023-06-23-agent/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L01",
      "title": "Kapoor et al. \"AI Agents That Matter.\" TMLR (2025).",
      "url": "https://arxiv.org/abs/2407.01502",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L02",
      "title": "Vaswani et al. \"Attention Is All You Need.\" NeurIPS (2017).",
      "url": "https://arxiv.org/abs/1706.03762",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L02",
      "title": "Katharopoulos et al. \"Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention.\" ICML (2020).",
      "url": "https://arxiv.org/abs/2006.16236",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L02",
      "title": "Rajasekaran et al. \"Effective Context Engineering for AI Agents.\" Anthropic (2025).",
      "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L03",
      "title": "Lewis et al. \"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.\" NeurIPS (2020).",
      "url": "https://arxiv.org/abs/2005.11401",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L03",
      "title": "Karpukhin et al. \"Dense Passage Retrieval for Open-Domain Question Answering.\" EMNLP (2020).",
      "url": "https://arxiv.org/abs/2004.04906",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L03",
      "title": "Khattab & Zaharia. \"ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT.\" SIGI",
      "url": "https://arxiv.org/abs/2004.12832",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L04",
      "title": "Schick et al. \"Toolformer: Language Models Can Teach Themselves to Use Tools.\" NeurIPS (2023).",
      "url": "https://arxiv.org/abs/2302.04761",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L04",
      "title": "Patil et al. \"Gorilla: Large Language Model Connected with Massive APIs.\" NeurIPS (2024).",
      "url": "https://arxiv.org/abs/2305.15334",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L04",
      "title": "Model Context Protocol Specification, revision 2025-06-18. modelcontextprotocol.io (2025).",
      "url": "https://modelcontextprotocol.io/specification/2025-06-18",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L05",
      "title": "Khattab et al. \"DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines.\" ICLR (2024).",
      "url": "https://arxiv.org/abs/2310.03714",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L05",
      "title": "LangChain. \"LangGraph Overview.\" LangChain Docs.",
      "url": "https://docs.langchain.com/oss/python/langgraph/overview",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L05",
      "title": "Arena.ai. \"HarnessTax: How Much Does the Harness Matter for Coding Agents?\" Arena Blog (2026).",
      "url": "https://arena.ai/blog/coding-agents-harness-tax",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L06",
      "title": "Yao et al. \"ReAct: Synergizing Reasoning and Acting in Language Models.\" ICLR (2023).",
      "url": "https://arxiv.org/abs/2210.03629",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L06",
      "title": "Schluntz & Zhang. \"Building Effective AI Agents.\" Anthropic (2024).",
      "url": "https://www.anthropic.com/engineering/building-effective-agents",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L06",
      "title": "LangChain. \"Context Engineering.\" LangChain Blog (2025).",
      "url": "https://www.langchain.com/blog/context-engineering-for-agents",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L06",
      "title": "Shinn et al. \"Reflexion: Language Agents with Verbal Reinforcement Learning.\" NeurIPS (2023).",
      "url": "https://arxiv.org/abs/2303.11366",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L06",
      "title": "Wang et al. \"Executable Code Actions Elicit Better LLM Agents.\" ICML (2024).",
      "url": "https://arxiv.org/abs/2402.01030",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L07",
      "title": "Sumers et al. \"Cognitive Architectures for Language Agents.\" TMLR (2024).",
      "url": "https://arxiv.org/abs/2309.02427",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L07",
      "title": "Packer et al. \"MemGPT: Towards LLMs as Operating Systems.\" arXiv (2023).",
      "url": "https://arxiv.org/abs/2310.08560",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L07",
      "title": "Park et al. \"Generative Agents: Interactive Simulacra of Human Behavior.\" UIST (2023).",
      "url": "https://arxiv.org/abs/2304.03442",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L08",
      "title": "Wu et al. \"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation.\" COLM (2024).",
      "url": "https://arxiv.org/abs/2308.08155",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L08",
      "title": "Cemri et al. \"Why Do Multi-Agent LLM Systems Fail?\" NeurIPS Datasets & Benchmarks (2025).",
      "url": "https://arxiv.org/abs/2503.13657",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L08",
      "title": "Kim et al. \"Towards a Science of Scaling Agent Systems.\" arXiv (2025).",
      "url": "https://arxiv.org/abs/2512.08296",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L09",
      "title": "Agrawal et al. \"GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning.\" ICLR (2026).",
      "url": "https://arxiv.org/abs/2507.19457",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L09",
      "title": "Opsahl-Ong et al. \"Optimizing Instructions and Demonstrations for Multi-Stage Language Model Programs.\" EMNLP (2024).",
      "url": "https://arxiv.org/abs/2406.11695",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L09",
      "title": "Shao et al. \"DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models.\" arXiv (2024).",
      "url": "https://arxiv.org/abs/2402.03300",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L10",
      "title": "Terminal-Bench project site (leaderboard, tasks, and harness).",
      "url": "https://www.tbench.ai/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L10",
      "title": "Merrill et al. \"Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces.\" ICLR (2026).",
      "url": "https://arxiv.org/abs/2601.11868",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L11",
      "title": "Shankar. \"Data Flywheels for LLM Applications.\" (2024).",
      "url": "https://www.sh-reya.com/blog/ai-engineering-flywheel/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L11",
      "title": "Tan et al. \"Large Language Models for Data Annotation and Synthesis: A Survey.\" EMNLP (2024).",
      "url": "https://aclanthology.org/2024.emnlp-main.54/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L12",
      "title": "Yang et al. \"SWE-smith: Scaling Data for Software Engineering Agents.\" NeurIPS D&B (2025).",
      "url": "https://arxiv.org/abs/2504.21798",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L12",
      "title": "Shankar et al. \"Who Validates the Validators? Aligning LLM-Assisted Evaluation with Human Preferences.\" UIST (2024).",
      "url": "https://arxiv.org/abs/2404.12272",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L12",
      "title": "Zhou et al. \"LIMA: Less Is More for Alignment.\" NeurIPS (2023).",
      "url": "https://arxiv.org/abs/2305.11206",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L13",
      "title": "Zhu et al. \"Establishing Best Practices for Building Rigorous Agentic Benchmarks.\" (2025).",
      "url": "https://arxiv.org/abs/2507.02825",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L13",
      "title": "Press. \"How to Build Good Language Modeling Benchmarks.\" (2024).",
      "url": "https://ofir.io/How-to-Build-Good-Language-Modeling-Benchmarks/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L13",
      "title": "Polo et al. \"tinyBenchmarks: Evaluating LLMs with Fewer Examples.\" ICML (2024).",
      "url": "https://arxiv.org/abs/2402.14992",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L15",
      "title": "Grace et al. \"Demystifying Evals for AI Agents.\" Anthropic (2026).",
      "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L15",
      "title": "Zheng et al. \"Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.\" NeurIPS (2023).",
      "url": "https://arxiv.org/abs/2306.05685",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L15",
      "title": "Ryan et al. \"AutoMetrics: Approximate Human Judgements with Automatically Generated Evaluators.\" ICLR (2026).",
      "url": "https://arxiv.org/abs/2512.17267",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L15",
      "title": "Zhu et al. \"AutoLibra: Agent Metric Induction from Open-Ended Human Feedback.\" ICLR (2026).",
      "url": "https://openreview.net/forum?id=4BjGVZ7Bxn",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L16",
      "title": "Jimenez et al. \"SWE-bench: Can Language Models Resolve Real-World GitHub Issues?\" ICLR (2024).",
      "url": "https://arxiv.org/abs/2310.06770",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "Shao et al. \"PrivacyLens: Evaluating Privacy Norm Awareness of LMs in Action.\" NeurIPS D&B (2024).",
      "url": "https://arxiv.org/abs/2409.00138",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "Zhang & Yang. \"Searching for Privacy Risks in LLM Agents via Simulation.\" arXiv (2025).",
      "url": "https://arxiv.org/abs/2508.10880",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "Li. \"Agentic LLMs as Powerful Deanonymizers.\" arXiv (2026).",
      "url": "https://arxiv.org/abs/2601.05918",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "Wen et al. \"Contextualized Privacy Defense for LLM Agents.\" arXiv (2026).",
      "url": "https://arxiv.org/abs/2603.02983",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "OpenAI. \"Understanding Prompt Injections: A Frontier Security Challenge.\" (2025).",
      "url": "https://openai.com/index/prompt-injections/",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L17",
      "title": "Anthropic. \"Anthropic's Responsible Scaling Policy.\" (2023).",
      "url": "https://www.anthropic.com/news/anthropics-responsible-scaling-policy",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L18",
      "title": "Yang et al. \"SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering.\" NeurIPS (2024).",
      "url": "https://arxiv.org/abs/2405.15793",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L18",
      "title": "Wang et al. \"OpenHands: An Open Platform for AI Software Developers.\" ICLR (2025).",
      "url": "https://arxiv.org/abs/2407.16741",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L18",
      "title": "Anthropic. \"Claude Code: Best Practices for Agentic Coding.\" (2025).",
      "url": "https://www.anthropic.com/engineering/claude-code-best-practices",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L18",
      "title": "Young. \"Effective Harnesses for Long-Running Agents.\" Anthropic (2025).",
      "url": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
      "arxiv": "链接",
      "topics": []
    },
    {
      "lecture": "L19",
      "title": "Shaikh et al. \"Creating General User Models from Computer Use.\" UIST (2025).",
      "url": "https://arxiv.org/abs/2505.10831",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L19",
      "title": "Shaikh et al. \"Learning Next Action Predictors from Human-Computer Interaction.\" arXiv (2026).",
      "url": "https://arxiv.org/abs/2603.05923",
      "arxiv": "arXiv",
      "topics": []
    },
    {
      "lecture": "L19",
      "title": "Steinberger. \"OpenClaw: Open-source proactive AI agent.\" (2025).",
      "url": "https://github.com/openclaw/openclaw",
      "arxiv": "链接",
      "topics": []
    }
  ]
};
