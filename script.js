const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const storageKey = "simatrix-language";
const supportedLanguages = ["zh", "en", "ja", "ko"];

const translations = {
  zh: {
    htmlLang: "zh-CN",
    common: {
      brandName: "SiMatrix",
      brandSubtitle: "共生秩序",
      nav: ["首页", "能力", "实践", "关于我们", "联系"],
      footerCopyright: "© 2026 上海共生秩序人工智能技术有限公司",
      footerTagline: "SiMatrix / 共生矩阵",
    },
    pages: {
      home: {
        title: "SiMatrix 共生秩序 | 人与智能协同进化系统",
        description: "共生秩序 SiMatrix 是一家致力于构建人与智能协同进化系统的人工智能技术公司。",
        hero: ["共生矩阵", "构建人与智能协同进化的新世界系统", "共生秩序 SiMatrix 致力于将 AI 嵌入组织、流程、产品与现实场景，形成可持续运行的人机协同系统。", "了解我们的能力", "联系合作"],
        build: {
          kicker: "我们构建什么",
          title: "我们构建的不是单点工具，而是可以持续运行的智能系统。",
          lead: "从组织上下文、智能体工作流、权限边界到业务场景集成，SiMatrix 关注的是 AI 如何真正进入现实工作，而不是停留在演示层。",
          cards: [
            { title: "AI 原生组织系统", body: "围绕人类判断、AI 执行、上下文流转与审计反馈，重新设计组织的工作方式。" },
            { title: "智能体工作流基础设施", body: "搭建调度器、智能体、技能、消息队列、权限边界与自动化运行机制。" },
            { title: "行业场景智能交付", body: "把 AI 能力连接到文档、表格、企业微信、研发支持、ERP 与复杂业务流程。" },
          ],
        },
        stack: {
          kicker: "能力体系",
          title: "从战略、系统到交付的完整能力层。",
          lead: "我们帮助企业把“想用 AI”转化为明确的系统结构、工具链、流程规则和可验证交付。",
          rows: [
            ["战略层", "AI 原生组织设计", "定义人和 AI 的职责边界、审核节点、上下文组织方式和长期演化路径。"],
            ["系统层", "智能体 / 技能 / 工作流架构", "建设可复用、可诊断、可迁移的智能工作系统，而不是一次性的脚本堆叠。"],
            ["应用层", "企业工具与业务场景接入", "连接企业微信、微信、文档、表格、项目管理、研发资料与内部工作台。"],
            ["交付层", "原型、流程、培训与持续迭代", "以真实任务作为反馈源，持续优化模型行为、工具能力与组织使用习惯。"],
          ],
        },
        quote: ["于无形处连接万物，于微小处重塑世界。", "真正改变世界的力量，往往诞生于微小、隐秘而持续的连接之中。"],
        practice: {
          kicker: "实践",
          title: "从内部系统开始，在真实任务中验证 AI 的价值。",
          lead: "我们的实践聚焦在真实工作流：消息入口、文档交付、项目管理、研发支持与组织知识沉淀。",
          cards: [
            { title: "企业微信机器人", body: "构建企业消息入口，实现群聊通知、文件发送、长连接回调与低风险问答。" },
            { title: "人类与 AI 工作区", body: "以人类文件系统和 AI 智能体工作区协同承载组织上下文。" },
            { title: "ERP 数字化原型", body: "面向制造业务场景，设计订单、生产、扫码、进度与交付管理流程。" },
            { title: "研发支持材料", body: "将技术资料、方案文档、客户沟通与交付材料转化为可复用能力。" },
          ],
        },
      },
      capabilities: {
        title: "能力 | SiMatrix 共生秩序",
        description: "共生秩序的 AI 原生组织、智能体工作流、企业工具接入与行业场景智能交付能力。",
        hero: ["能力", "把 AI 从工具使用，推进到系统能力。", "我们关注的不只是模型调用，而是企业如何拥有可持续运行、可治理、可复用的人机协同能力。"],
        cards: [
          { number: "01 / 战略", title: "AI 原生组织设计", body: "梳理组织中哪些工作应由人判断、哪些工作可由 AI 执行、哪些节点必须审计与确认。", items: ["AI 工作角色与权限边界", "组织上下文结构设计", "人机协作流程与反馈闭环"] },
          { number: "02 / 基础设施", title: "智能体工作系统搭建", body: "将智能体、技能、MCP、消息队列、日志和权限机制组合成稳定的本地或云端工作系统。", items: ["调度器与任务路由", "技能固化与工具迁移", "后台服务、定时任务和诊断机制"] },
          { number: "03 / 集成", title: "企业工具接入", body: "把 AI 接入企业微信、微信、文档、表格、文件系统和内部业务软件，让信息流动起来。", items: ["企业微信机器人与文件消息", "桌面软件自动化与低风险操作", "文档、表格、PPT 与业务数据处理"] },
          { number: "04 / 交付", title: "场景原型与持续交付", body: "以真实业务任务为训练和迭代来源，让系统从原型走向稳定工作流。", items: ["管理系统原型设计", "研发支持与资料转化", "流程培训、运维与版本管理"] },
        ],
      },
      work: {
        title: "实践 | SiMatrix 共生秩序",
        description: "共生秩序的 AI 系统实践、企业工具接入、ERP 原型、研发支持与方法论。",
        hero: ["实践", "在真实任务中验证系统，并让方法从实践中生长。", "这里记录的是可继续演化的实践方向：从消息入口到工作系统，从业务原型到行业研发支持。方法论不单独悬置，而是嵌入每一次真实任务。"],
        method: {
          kicker: "实践方法",
          title: "我们的实践方法",
          lead: "智能系统的关键不只是“模型更强”，而是让人类判断、组织上下文、工具调用和现实反馈形成可进化的闭环。",
          items: [
            ["原则 01", "上下文即工作流", "一个清晰的上下文文件，包含目标、约束、历史、标准和输出要求。智能体读取上下文、执行任务、沉淀结果，组织由此获得可追溯的智能协作基础。"],
            ["原则 02", "真实任务驱动进化", "AI 能力不应停留在演示。系统需要接入真实工作，通过每一次任务、错误、反馈和复盘持续进化。"],
            ["原则 03", "权限边界先于自动化", "越强的自动化越需要清晰的权限、审计和人类确认机制。安全的系统不是不执行，而是知道什么时候不能执行。"],
            ["原则 04", "从工具到基础设施", "单个 AI 工具可以提高效率，但基础设施才能改变组织。我们把一次性能力沉淀成技能、智能体、队列、服务和文档。"],
          ],
        },
        selected: {
          kicker: "代表性实践",
          title: "实践方向",
          lead: "这些实践不是孤立案例，而是围绕组织上下文、工具链和真实业务场景持续沉淀的系统能力。",
          cards: [
            { title: "企业微信机器人与智能体接入", body: "通过企业微信长连接接收 @ 消息，支持群聊通知、文件发送、低风险问答和后续智能体路由。" },
            { title: "微信消息与文件自动发送", body: "在 macOS 桌面环境中构建本地队列和监听器，实现向指定微信会话发送文字、文件和图片。" },
            { title: "人类与 AI 双工作区", body: "以人类文件夹承载人类可读资料，以 AI 工作区承载智能体运行逻辑，让协作过程可追溯。" },
            { title: "制造 ERP 数字化原型", body: "围绕订单、工序、扫码、工位、报工与项目进度，设计适用于中小制造现场的数字化系统。" },
            { title: "AI 辅助研发支持", body: "把技术资料、客户访谈、行业文档和交付材料转化为结构化方案与可复用知识资产。" },
            { title: "组织流程与模板体系", body: "沉淀会议纪要、公司介绍、项目文档、日报和管理台账，让 AI 能够稳定接入组织日常工作。" },
          ],
        },
      },
      about: {
        title: "关于我们 | SiMatrix 共生秩序",
        description: "上海共生秩序人工智能技术有限公司，SiMatrix，构建人与智能协同进化系统。",
        hero: ["关于 SiMatrix", "共生秩序，意味着在人与智能之间建立新的协同结构。", "SiMatrix 意为共生矩阵。它代表一个由人、AI、数据、系统与现实场景共同构成的共生矩阵。"],
        about: {
          kicker: "关于我们",
          title: "关于我们",
          lead: "上海共生秩序人工智能技术有限公司，简称“共生秩序”，英文品牌 SiMatrix。我们致力于构建人与人工智能协同进化的新世界系统。",
          cards: [
            { title: "使命", body: "于无形处连接万物，于微小处重塑世界。我们构建那些看不见、却真正推动世界运行的智能系统。" },
            { title: "愿景", body: "构建人与智能协同进化的新世界系统，让 AI 成为人类认知、创造力与文明延展的一部分。" },
            { title: "价值观", body: "共生、进化、求真、破界、向光、成事。我们重视真实问题、长期积累和能够改变现实的行动。" },
          ],
        },
        advisor: {
          kicker: "技术顾问与学术协作",
          title: "让前沿研究进入真实工程判断。",
          lead: "SiMatrix 通过外部资深技术顾问机制，为算法方向、技术路线和产学研协作补充长期专业视角。",
          role: "资深技术顾问",
          name: "殷锐 教授",
          field: "智能优化与边缘智能方向",
          bio: "教授、博士生导师，长期从事智能信息处理、无线通信、边缘智能、联邦学习与数字孪生研究。作为 SiMatrix 资深技术顾问，为公司提供算法与技术路线评审、前沿研究连接及产学研协作支持。",
          metricsLabel: "代表性成果数据",
          metrics: [["3", "主持国家自然科学基金"], ["80+", "学术论文"], ["23", "专利及申请"]],
          award: "代表性荣誉：2019年度浙江省科技进步二等奖（排名第三）",
        },
        contact: {
          kicker: "联系",
          title: "联系",
          lead: "如果你正在思考企业如何真正使用 AI、如何搭建智能体工作系统，或如何把 AI 接入真实业务流程，可以从这里开始。",
          info: [
            ["公司全称", "上海共生秩序人工智能技术有限公司"],
            ["公司简称", "共生秩序"],
            ["英文品牌", "SiMatrix / 共生矩阵"],
            ["合作方向", "AI 原生组织、智能体工作流、企业工具接入、行业智能系统"],
            ["邮箱", "contact@simatrix.cn"],
            ["电话", "15026469395"],
            ["地址", "江苏省苏州市兆丰路8号江苏国际商务大厦601-6"],
          ],
        },
      },
      contact: {
        title: "联系 | SiMatrix 共生秩序",
        description: "联系上海共生秩序人工智能技术有限公司，了解 AI 原生组织、智能体工作流和企业智能系统合作。",
        hero: ["联系", "联系", "如果你正在思考企业如何真正使用 AI、如何搭建智能体工作系统，或如何把 AI 接入真实业务流程，可以从这里开始。"],
        contact: {
          kicker: "联系",
          title: "联系",
          lead: "如果你正在思考企业如何真正使用 AI、如何搭建智能体工作系统，或如何把 AI 接入真实业务流程，可以从这里开始。",
          info: [
            ["公司全称", "上海共生秩序人工智能技术有限公司"],
            ["公司简称", "共生秩序"],
            ["英文品牌", "SiMatrix / 共生矩阵"],
            ["合作方向", "AI 原生组织、智能体工作流、企业工具接入、行业智能系统"],
            ["邮箱", "contact@simatrix.cn"],
            ["电话", "15026469395"],
            ["地址", "江苏省苏州市兆丰路8号江苏国际商务大厦601-6"],
          ],
        },
      },
    },
  },
  en: {
    htmlLang: "en",
    common: {
      brandName: "SiMatrix",
      brandSubtitle: "Symbiotic Matrix",
      nav: ["Home", "Capabilities", "Work", "About Us", "Contact"],
      footerCopyright: "© 2026 Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd.",
      footerTagline: "SiMatrix / Symbiotic Matrix",
    },
    pages: {
      home: {
        title: "SiMatrix | Human-AI Co-evolution Systems",
        description: "SiMatrix builds human-AI co-evolution systems for organizations, workflows, products, and real-world scenarios.",
        hero: ["Symbiotic Matrix", "Building a new world system for human-AI co-evolution", "SiMatrix embeds AI into organizations, workflows, products, and real-world scenarios to create sustainable human-machine collaboration systems.", "Explore our capabilities", "Contact us"],
        build: {
          kicker: "What We Build",
          title: "We do not build isolated tools. We build intelligent systems that keep running.",
          lead: "From organizational context and Agent workflows to permission boundaries and scenario integration, SiMatrix focuses on how AI enters real work rather than staying at the demo layer.",
          cards: [
            { title: "AI-native organization systems", body: "Redesign how organizations work around human judgment, AI execution, context flow, and auditable feedback." },
            { title: "Agent workflow infrastructure", body: "Build Dispatchers, Agents, Skills, queues, permission boundaries, and automation mechanisms." },
            { title: "Scenario-based intelligent delivery", body: "Connect AI to documents, spreadsheets, WeCom, R&D support, ERP, and complex business workflows." },
          ],
        },
        stack: {
          kicker: "Capability Stack",
          title: "A complete capability layer from strategy to systems to delivery.",
          lead: "We help organizations turn the intention to use AI into clear structures, toolchains, process rules, and verifiable delivery.",
          rows: [
            ["Strategy", "AI-native organization design", "Define the boundaries between human and AI responsibilities, review points, context structure, and long-term evolution path."],
            ["Systems", "Agent / Skill / Workflow architecture", "Build reusable, diagnosable, and portable intelligent work systems instead of one-off script stacks."],
            ["Application", "Enterprise tools and business integration", "Connect WeCom, WeChat, documents, spreadsheets, project management, R&D materials, and internal workbenches."],
            ["Delivery", "Prototypes, processes, training, and iteration", "Use real tasks as feedback sources to continuously improve model behavior, tools, and organizational habits."],
          ],
        },
        quote: ["Connecting everything in the unseen, reshaping the world through the smallest details.", "The forces that truly change the world often emerge from small, hidden, and persistent connections."],
        practice: {
          kicker: "Practice",
          title: "We start with internal systems and validate AI in real tasks.",
          lead: "Our practice focuses on real workflows: message entry points, document delivery, project management, R&D support, and organizational knowledge capture.",
          cards: [
            { title: "WeCom Bot", body: "Create an enterprise message entry point for group notifications, file sending, long-connection callbacks, and low-risk Q&A." },
            { title: "HUMAN & AI workspace", body: "Use human-readable files and AI Agent workspaces together to carry organizational context." },
            { title: "ERP digital prototype", body: "Design order, production, scan, station, reporting, and delivery workflows for manufacturing scenarios." },
            { title: "R&D support materials", body: "Turn technical materials, solution documents, customer conversations, and delivery assets into reusable capabilities." },
          ],
        },
      },
      capabilities: {
        title: "Capabilities | SiMatrix",
        description: "SiMatrix capabilities in AI-native organization design, Agent workflows, enterprise integration, and scenario-based intelligent delivery.",
        hero: ["Capabilities", "Move AI from tool usage into system capability.", "We care not only about model calls, but about how organizations build sustainable, governable, and reusable human-AI collaboration capabilities."],
        cards: [
          { number: "01 / Strategy", title: "AI-native organization design", body: "Clarify which work needs human judgment, which work can be executed by AI, and which nodes require review and confirmation.", items: ["AI roles and permission boundaries", "Organizational context structure", "Human-AI workflow and feedback loops"] },
          { number: "02 / Infrastructure", title: "Agent work system setup", body: "Combine Agents, Skills, MCP, queues, logs, and permissions into stable local or cloud-based work systems.", items: ["Dispatcher and task routing", "Skill crystallization and tool migration", "Background services, scheduled tasks, and diagnostics"] },
          { number: "03 / Integration", title: "Enterprise tool integration", body: "Connect AI to WeCom, WeChat, documents, spreadsheets, file systems, and internal business software so information can flow.", items: ["WeCom Bot and file messages", "Desktop automation with low-risk operation", "Documents, spreadsheets, decks, and business data processing"] },
          { number: "04 / Delivery", title: "Scenario prototypes and continuous delivery", body: "Use real business tasks as the source of training and iteration so systems can move from prototype to stable workflow.", items: ["Management system prototyping", "R&D support and material transformation", "Process training, operations, and version management"] },
        ],
      },
      work: {
        title: "Work | SiMatrix",
        description: "SiMatrix practices in AI systems, enterprise integration, ERP prototypes, R&D support, and methodology.",
        hero: ["Work", "Validate systems in real tasks, and let methods grow from practice.", "This page records practice directions that can continue to evolve: from message entry points to work systems, and from business prototypes to industry R&D support. Methodology is embedded in each real task."],
        method: {
          kicker: "Method in Practice",
          title: "Our practice method",
          lead: "The key to intelligent systems is not just stronger models, but forming an evolvable loop among human judgment, organizational context, tool calls, and real-world feedback.",
          items: [
            ["Principle 01", "Context is workflow", "A clear context file contains goals, constraints, history, standards, and output requirements. Agents read context, execute tasks, and preserve results, giving the organization a traceable collaboration base."],
            ["Principle 02", "Real tasks drive evolution", "AI should not stop at demos. Systems need to enter real work and evolve through each task, error, feedback loop, and retrospective."],
            ["Principle 03", "Permission boundaries before automation", "The stronger the automation, the clearer the permissions, audit trails, and human confirmations must be. A safe system knows when not to execute."],
            ["Principle 04", "From tools to infrastructure", "A single AI tool can improve efficiency, but infrastructure changes organizations. We crystallize one-off capabilities into Skills, Agents, queues, services, and documents."],
          ],
        },
        selected: {
          kicker: "Selected Practices",
          title: "Practice directions",
          lead: "These are not isolated cases. They are system capabilities accumulated around organizational context, toolchains, and real business scenarios.",
          cards: [
            { title: "WeCom Bot and Agent integration", body: "Receive @ messages through WeCom long connections, supporting group notifications, file sending, low-risk Q&A, and later Agent routing." },
            { title: "WeChat messages and file sending", body: "Build a local queue and watcher on macOS to send text, files, and images to specified WeChat conversations." },
            { title: "HUMAN & AI dual workspace", body: "Use the HUMAN folder for human-readable materials and the AI workspace for Agent runtime logic, making collaboration traceable." },
            { title: "Manufacturing ERP digital prototype", body: "Design digital workflows for orders, operations, scans, stations, reporting, and project progress in small and midsize manufacturing." },
            { title: "AI-assisted R&D support", body: "Transform technical materials, customer interviews, industry documents, and delivery assets into structured plans and reusable knowledge." },
            { title: "Organizational process and templates", body: "Build meeting minutes, company introductions, project documents, daily reports, and management ledgers so AI can reliably enter daily operations." },
          ],
        },
      },
      about: {
        title: "About Us | SiMatrix",
        description: "Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd. builds human-AI co-evolution systems.",
        hero: ["About SiMatrix", "Symbiotic Matrix means creating a new collaboration structure between humans and intelligence.", "SiMatrix stands for Symbiotic Matrix: a matrix jointly formed by people, AI, data, systems, and real-world scenarios."],
        about: {
          kicker: "About Us",
          title: "About Us",
          lead: "Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd., known as SiMatrix, is committed to building new world systems where humans and AI co-evolve.",
          cards: [
            { title: "Mission", body: "Connect everything in the unseen and reshape the world through the smallest details. We build intelligent systems that are often invisible yet truly move the world." },
            { title: "Vision", body: "Build a new world system for human-AI co-evolution, making AI part of human cognition, creativity, and the extension of civilization." },
            { title: "Values", body: "Symbiosis, evolution, truth-seeking, boundary-breaking, light, and execution. We value real problems, long-term accumulation, and actions that change reality." },
          ],
        },
        advisor: {
          kicker: "Technical Advisor and Academic Collaboration",
          title: "Bringing frontier research into real engineering decisions.",
          lead: "SiMatrix works with senior external advisors to strengthen algorithm direction, technical roadmap review, and academic-industry collaboration.",
          role: "Senior Technical Advisor",
          name: "Professor Rui Yin",
          field: "Intelligent optimization and edge intelligence",
          bio: "A professor and doctoral supervisor whose research spans intelligent information processing, wireless communications, edge intelligence, federated learning, and digital twins. As a senior technical advisor to SiMatrix, he supports algorithm and technical roadmap reviews, frontier research connections, and academic-industry collaboration.",
          metricsLabel: "Representative achievement metrics",
          metrics: [["3", "National Natural Science Foundation projects led"], ["80+", "Academic papers"], ["23", "Patents and applications"]],
          award: "Representative recognition: Second Prize, Zhejiang Provincial Science and Technology Progress Award, 2019 (ranked third)",
        },
        contact: {
          kicker: "Contact",
          title: "Contact",
          lead: "If you are thinking about how enterprises can truly use AI, how to build Agent work systems, or how to connect AI to real business processes, start here.",
          info: [
            ["Company name", "Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd."],
            ["Brand name", "SiMatrix"],
            ["Brand meaning", "SiMatrix / Symbiotic Matrix"],
            ["Collaboration", "AI-native organizations, Agent workflows, enterprise tool integration, industry intelligent systems"],
            ["Email", "contact@simatrix.cn"],
            ["Phone", "+86 150 2646 9395"],
            ["Address", "Room 601-6, Jiangsu International Business Building, No. 8 Zhaofeng Road, Suzhou, Jiangsu, China"],
          ],
        },
      },
      contact: {
        title: "Contact | SiMatrix",
        description: "Contact Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd. for AI-native organization, Agent workflow, and intelligent enterprise system collaboration.",
        hero: ["Contact", "Contact", "If you are thinking about how enterprises can truly use AI, how to build Agent work systems, or how to connect AI to real business processes, start here."],
        contact: {
          kicker: "Contact",
          title: "Contact",
          lead: "If you are thinking about how enterprises can truly use AI, how to build Agent work systems, or how to connect AI to real business processes, start here.",
          info: [
            ["Company name", "Shanghai Symbiotic Matrix Artificial Intelligence Technology Co., Ltd."],
            ["Brand name", "SiMatrix"],
            ["Brand meaning", "SiMatrix / Symbiotic Matrix"],
            ["Collaboration", "AI-native organizations, Agent workflows, enterprise tool integration, industry intelligent systems"],
            ["Email", "contact@simatrix.cn"],
            ["Phone", "+86 150 2646 9395"],
            ["Address", "Room 601-6, Jiangsu International Business Building, No. 8 Zhaofeng Road, Suzhou, Jiangsu, China"],
          ],
        },
      },
    },
  },
  ja: {
    htmlLang: "ja",
    common: {
      brandName: "SiMatrix",
      brandSubtitle: "共生秩序",
      nav: ["ホーム", "能力", "実践", "私たちについて", "お問い合わせ"],
      footerCopyright: "© 2026 上海共生秩序人工知能技術有限公司",
      footerTagline: "SiMatrix / 共生マトリクス",
    },
    pages: {
      home: {
        title: "SiMatrix 共生秩序 | 人と知能の協調進化システム",
        description: "SiMatrix は、人と知能が協調進化するシステムを構築する人工知能技術会社です。",
        hero: ["共生マトリクス", "人と知能が協調進化する新しい世界システムを構築する", "SiMatrix は AI を組織、ワークフロー、プロダクト、現実の場面に組み込み、持続的に機能する人間と機械の協働システムをつくります。", "能力を見る", "お問い合わせ"],
        build: {
          kicker: "私たちが構築するもの",
          title: "私たちが構築するのは単発ツールではなく、継続して動く知能システムです。",
          lead: "組織のコンテキスト、エージェントのワークフロー、権限境界、業務シーン統合まで、SiMatrix は AI が実際の仕事にどう入るかに焦点を当てます。",
          cards: [
            { title: "AI ネイティブ組織システム", body: "人間の判断、AI の実行、コンテキストの流れ、監査可能なフィードバックを中心に、組織の働き方を再設計します。" },
            { title: "エージェントのワークフロー基盤", body: "ディスパッチャー、エージェント、スキル、メッセージキュー、権限境界、自動化機構を構築します。" },
            { title: "業務シーン別の知能導入", body: "AI を文書、表計算、WeCom、研究開発支援、ERP、複雑な業務フローにつなぎます。" },
          ],
        },
        stack: {
          kicker: "能力体系",
          title: "戦略、システム、導入までをつなぐ能力レイヤー。",
          lead: "企業の「AI を使いたい」を、明確なシステム構造、ツールチェーン、プロセスルール、検証可能な成果に変えます。",
          rows: [
            ["戦略層", "AI ネイティブ組織設計", "人と AI の責任境界、レビュー地点、コンテキスト構造、長期的な進化経路を定義します。"],
            ["システム層", "エージェント / スキル / ワークフロー構成", "一回限りのスクリプトではなく、再利用、診断、移行ができる知能ワークシステムを構築します。"],
            ["応用層", "企業ツールと業務シーンの接続", "WeCom、WeChat、文書、表計算、プロジェクト管理、研究開発資料、内部ワークベンチを接続します。"],
            ["導入層", "プロトタイプ、プロセス、研修、継続改善", "実際のタスクをフィードバック源にし、モデルの挙動、ツール能力、組織の利用習慣を改善します。"],
          ],
        },
        quote: ["見えないところで万物をつなぎ、小さなところから世界をつくり変える。", "本当に世界を変える力は、小さく、見えにくく、持続するつながりから生まれます。"],
        practice: {
          kicker: "実践",
          title: "内部システムから始め、実際のタスクで AI の価値を検証します。",
          lead: "私たちの実践は、メッセージ窓口、文書作成、プロジェクト管理、研究開発支援、組織知識の蓄積といった現実のワークフローに集中しています。",
          cards: [
            { title: "WeCom ボット", body: "企業メッセージの窓口を構築し、グループ通知、ファイル送信、長接続コールバック、低リスクの質疑応答を実現します。" },
            { title: "人間と AI のワークスペース", body: "人間が読めるファイルシステムと AI エージェントのワークスペースを組み合わせ、組織コンテキストを保持します。" },
            { title: "ERP デジタルプロトタイプ", body: "製造現場向けに、受注、生産、スキャン、工程、報告、納品管理の流れを設計します。" },
            { title: "研究開発支援資料", body: "技術資料、提案文書、顧客コミュニケーション、納品物を再利用可能な能力へ変換します。" },
          ],
        },
      },
      capabilities: {
        title: "能力 | SiMatrix 共生秩序",
        description: "AI ネイティブ組織、エージェントのワークフロー、企業ツール接続、業務シーン別知能導入における SiMatrix の能力。",
        hero: ["能力", "AI をツール利用からシステム能力へ進める。", "私たちは単なるモデル呼び出しではなく、企業が持続的でガバナンス可能、再利用可能な人間と AI の協働能力をどう持つかに注目します。"],
        cards: [
          { number: "01 / 戦略", title: "AI ネイティブ組織設計", body: "どの仕事を人が判断し、どの仕事を AI が実行し、どの地点で監査と確認が必要かを整理します。", items: ["AI の役割と権限境界", "組織コンテキスト構造設計", "人間と AI の協働フローとフィードバック"] },
          { number: "02 / 基盤", title: "エージェントのワークシステム構築", body: "エージェント、スキル、MCP、メッセージキュー、ログ、権限機構を安定したローカルまたはクラウドシステムに組み合わせます。", items: ["ディスパッチャーとタスクルーティング", "スキルの固定化とツール移行", "バックグラウンドサービス、定時タスク、診断機構"] },
          { number: "03 / 統合", title: "企業ツール接続", body: "AI を WeCom、WeChat、文書、表計算、ファイルシステム、内部業務ソフトにつなぎ、情報を流れやすくします。", items: ["WeCom ボットとファイルメッセージ", "低リスクなデスクトップ自動化", "文書、表計算、PPT、業務データ処理"] },
          { number: "04 / 導入", title: "業務プロトタイプと継続導入", body: "実際の業務タスクを学習と改善の源にし、システムをプロトタイプから安定したワークフローへ進めます。", items: ["管理システムのプロトタイプ設計", "研究開発支援と資料変換", "プロセス研修、運用、バージョン管理"] },
        ],
      },
      work: {
        title: "実践 | SiMatrix 共生秩序",
        description: "AI システム、企業ツール接続、ERP プロトタイプ、研究開発支援、方法論に関する SiMatrix の実践。",
        hero: ["実践", "実際のタスクでシステムを検証し、実践から方法を育てます。", "ここでは、メッセージ窓口からワークシステム、業務プロトタイプから産業研究開発支援まで、進化し続ける実践方向を記録します。方法論は独立して存在するのではなく、各タスクに埋め込まれています。"],
        method: {
          kicker: "実践方法",
          title: "私たちの実践方法",
          lead: "知能システムの鍵は、より強いモデルだけではありません。人間の判断、組織コンテキスト、ツール呼び出し、現実のフィードバックが進化可能なループになることです。",
          items: [
            ["原則 01", "コンテキストはワークフロー", "明確なコンテキストファイルには、目標、制約、履歴、基準、出力要件が含まれます。エージェントはそれを読み、タスクを実行し、結果を蓄積します。"],
            ["原則 02", "実タスクが進化を駆動する", "AI はデモで止まるべきではありません。システムは実際の仕事に入り、タスク、エラー、フィードバック、振り返りを通じて進化します。"],
            ["原則 03", "自動化の前に権限境界", "自動化が強くなるほど、権限、監査、人間の確認が明確である必要があります。安全なシステムは、実行しない時を知っています。"],
            ["原則 04", "ツールから基盤へ", "単一の AI ツールは効率を高めますが、組織を変えるのは基盤です。私たちは一回限りの能力をスキル、エージェント、キュー、サービス、文書に固定化します。"],
          ],
        },
        selected: {
          kicker: "主な実践",
          title: "実践方向",
          lead: "これらは孤立した事例ではなく、組織コンテキスト、ツールチェーン、実際の業務シーンを中心に蓄積されるシステム能力です。",
          cards: [
            { title: "WeCom ボットとエージェントの接続", body: "WeCom の長接続で @ メッセージを受信し、通知、ファイル送信、低リスクの質疑応答、後続エージェントのルーティングを支援します。" },
            { title: "WeChat メッセージとファイル自動送信", body: "macOS 上でローカルキューと監視処理を構築し、指定した WeChat 会話にテキスト、ファイル、画像を送信します。" },
            { title: "人間と AI の二重ワークスペース", body: "人間向けフォルダは人間可読資料を、AI ワークスペースはエージェントの実行ロジックを保持し、協働過程を追跡可能にします。" },
            { title: "製造 ERP デジタルプロトタイプ", body: "受注、工程、スキャン、工位、報告、進捗を中心に、中小製造現場に適したデジタルシステムを設計します。" },
            { title: "AI による研究開発支援", body: "技術資料、顧客インタビュー、業界文書、納品資料を構造化された計画と再利用可能な知識資産に変換します。" },
            { title: "組織プロセスとテンプレート体系", body: "議事録、会社紹介、プロジェクト文書、日報、管理台帳を整備し、AI が日常業務に安定して入れるようにします。" },
          ],
        },
      },
      about: {
        title: "私たちについて | SiMatrix 共生秩序",
        description: "上海共生秩序人工知能技術有限公司 SiMatrix は、人と AI が協調進化するシステムを構築します。",
        hero: ["SiMatrix について", "共生秩序とは、人と知能の間に新しい協働構造をつくることです。", "SiMatrix は共生マトリクスを意味します。人、AI、データ、システム、現実の場面がともにつくる構造です。"],
        about: {
          kicker: "私たちについて",
          title: "私たちについて",
          lead: "上海共生秩序人工知能技術有限公司、略称「共生秩序」、英語ブランド SiMatrix。人と人工知能が協調進化する新しい世界システムの構築に取り組んでいます。",
          cards: [
            { title: "使命", body: "見えないところで万物をつなぎ、小さなところから世界をつくり変える。私たちは見えにくいが世界を実際に動かす知能システムを構築します。" },
            { title: "ビジョン", body: "人と知能が協調進化する新しい世界システムを構築し、AI を人間の認知、創造力、文明の延長の一部にします。" },
            { title: "価値観", body: "共生、進化、真実の追求、境界突破、光へ向かうこと、成し遂げること。現実の問題、長期蓄積、現実を変える行動を重視します。" },
          ],
        },
        advisor: {
          kicker: "技術顧問と産学連携",
          title: "先端研究を実際の技術判断へ。",
          lead: "SiMatrix は外部の上級技術顧問と連携し、アルゴリズムの方向性、技術ロードマップの評価、産学連携に長期的な専門視点を取り入れています。",
          role: "上級技術顧問",
          name: "殷鋭 教授",
          field: "知能最適化・エッジ知能",
          bio: "教授・博士課程指導教員として、知能情報処理、無線通信、エッジ知能、連合学習、デジタルツインを長年研究しています。SiMatrix の上級技術顧問として、アルゴリズムと技術ロードマップの評価、先端研究との接続、産学連携を支援します。",
          metricsLabel: "主な実績データ",
          metrics: [["3", "国家自然科学基金プロジェクトを主宰"], ["80+", "学術論文"], ["23", "特許および出願"]],
          award: "主な受賞：2019年度浙江省科学技術進歩賞二等賞（第3位）",
        },
        contact: {
          kicker: "お問い合わせ",
          title: "お問い合わせ",
          lead: "企業が AI を本当に活用する方法、エージェントのワークシステム構築、AI と実業務プロセスの接続を考えているなら、ここから始められます。",
          info: [
            ["会社名", "上海共生秩序人工知能技術有限公司"],
            ["略称", "共生秩序"],
            ["英語ブランド", "SiMatrix / 共生マトリクス"],
            ["協業領域", "AI ネイティブ組織、エージェントのワークフロー、企業ツール接続、産業知能システム"],
            ["メール", "contact@simatrix.cn"],
            ["電話", "+86 150 2646 9395"],
            ["住所", "中国江蘇省蘇州市兆豊路8号 江蘇国際商務ビル601-6室"],
          ],
        },
      },
      contact: {
        title: "お問い合わせ | SiMatrix 共生秩序",
        description: "AI ネイティブ組織、エージェントのワークフロー、企業知能システムについて SiMatrix にお問い合わせください。",
        hero: ["お問い合わせ", "お問い合わせ", "企業が AI を本当に活用する方法、エージェントのワークシステム構築、AI と実業務プロセスの接続を考えているなら、ここから始められます。"],
        contact: {
          kicker: "お問い合わせ",
          title: "お問い合わせ",
          lead: "企業が AI を本当に活用する方法、エージェントのワークシステム構築、AI と実業務プロセスの接続を考えているなら、ここから始められます。",
          info: [
            ["会社名", "上海共生秩序人工知能技術有限公司"],
            ["略称", "共生秩序"],
            ["英語ブランド", "SiMatrix / 共生マトリクス"],
            ["協業領域", "AI ネイティブ組織、エージェントのワークフロー、企業ツール接続、産業知能システム"],
            ["メール", "contact@simatrix.cn"],
            ["電話", "+86 150 2646 9395"],
            ["住所", "中国江蘇省蘇州市兆豊路8号 江蘇国際商務ビル601-6室"],
          ],
        },
      },
    },
  },
  ko: {
    htmlLang: "ko",
    common: {
      brandName: "SiMatrix",
      brandSubtitle: "공생 질서",
      nav: ["홈", "역량", "실천", "회사 소개", "문의"],
      footerCopyright: "© 2026 상하이 공생질서 인공지능 기술 유한회사",
      footerTagline: "SiMatrix / 공생 매트릭스",
    },
    pages: {
      home: {
        title: "SiMatrix 공생 질서 | 인간과 지능의 협동 진화 시스템",
        description: "SiMatrix는 인간과 지능이 함께 진화하는 시스템을 구축하는 인공지능 기술 회사입니다.",
        hero: ["공생 매트릭스", "인간과 지능이 함께 진화하는 새로운 세계 시스템을 구축합니다", "SiMatrix는 AI를 조직, 워크플로, 제품, 실제 현장에 내장해 지속적으로 작동하는 인간-기계 협업 시스템을 만듭니다.", "역량 보기", "문의하기"],
        build: {
          kicker: "우리가 만드는 것",
          title: "우리가 만드는 것은 단일 도구가 아니라 계속 작동하는 지능 시스템입니다.",
          lead: "조직 컨텍스트, 에이전트 워크플로, 권한 경계, 업무 시나리오 통합까지 SiMatrix는 AI가 실제 업무에 어떻게 들어가는지에 집중합니다.",
          cards: [
            { title: "AI 네이티브 조직 시스템", body: "인간의 판단, AI 실행, 컨텍스트 흐름, 감사 가능한 피드백을 중심으로 조직의 일하는 방식을 다시 설계합니다." },
            { title: "에이전트 워크플로 인프라", body: "디스패처, 에이전트, 스킬, 메시지 큐, 권한 경계, 자동화 메커니즘을 구축합니다." },
            { title: "산업 시나리오 지능형 구현", body: "AI를 문서, 스프레드시트, 기업 위챗, 연구개발 지원, ERP, 복잡한 업무 프로세스에 연결합니다." },
          ],
        },
        stack: {
          kicker: "역량 체계",
          title: "전략, 시스템, 구현까지 이어지는 완전한 역량 레이어.",
          lead: "기업의 “AI를 쓰고 싶다”를 명확한 시스템 구조, 툴체인, 프로세스 규칙, 검증 가능한 결과로 바꿉니다.",
          rows: [
            ["전략층", "AI 네이티브 조직 설계", "인간과 AI의 책임 경계, 검토 지점, 컨텍스트 구성 방식, 장기 진화 경로를 정의합니다."],
            ["시스템층", "에이전트 / 스킬 / 워크플로 아키텍처", "일회성 스크립트 묶음이 아니라 재사용, 진단, 이전이 가능한 지능형 업무 시스템을 구축합니다."],
            ["응용층", "기업 도구와 업무 시나리오 연결", "기업 위챗, WeChat, 문서, 스프레드시트, 프로젝트 관리, 연구개발 자료, 내부 워크벤치를 연결합니다."],
            ["구현층", "프로토타입, 프로세스, 교육, 지속 개선", "실제 업무를 피드백 원천으로 삼아 모델 행동, 도구 역량, 조직 사용 습관을 계속 개선합니다."],
          ],
        },
        quote: ["보이지 않는 곳에서 모든 것을 연결하고, 작은 곳에서 세계를 다시 만듭니다.", "세상을 실제로 바꾸는 힘은 작고, 숨겨져 있으며, 지속되는 연결에서 태어납니다."],
        practice: {
          kicker: "실천",
          title: "내부 시스템에서 시작해 실제 업무에서 AI의 가치를 검증합니다.",
          lead: "우리의 실천은 메시지 창구, 문서 전달, 프로젝트 관리, 연구개발 지원, 조직 지식 축적 등 실제 워크플로에 집중합니다.",
          cards: [
            { title: "기업 위챗 봇", body: "기업 메시지 창구를 구축해 그룹 알림, 파일 발송, 장기 연결 콜백, 저위험 질의응답을 구현합니다." },
            { title: "사람과 AI 워크스페이스", body: "사람이 읽을 수 있는 파일 시스템과 AI 에이전트 워크스페이스를 함께 사용해 조직 컨텍스트를 담습니다." },
            { title: "ERP 디지털 프로토타입", body: "제조 현장을 대상으로 주문, 생산, 스캔, 공정, 보고, 납품 관리 흐름을 설계합니다." },
            { title: "연구개발 지원 자료", body: "기술 자료, 솔루션 문서, 고객 커뮤니케이션, 납품 자료를 재사용 가능한 역량으로 전환합니다." },
          ],
        },
      },
      capabilities: {
        title: "역량 | SiMatrix 공생 질서",
        description: "SiMatrix의 AI 네이티브 조직, 에이전트 워크플로, 기업 도구 연결, 산업 시나리오 지능형 구현 역량.",
        hero: ["역량", "AI를 도구 사용에서 시스템 역량으로 확장합니다.", "우리는 단순한 모델 호출이 아니라 기업이 지속 가능하고, 거버넌스 가능하며, 재사용 가능한 인간-AI 협업 역량을 어떻게 갖추는지에 집중합니다."],
        cards: [
          { number: "01 / 전략", title: "AI 네이티브 조직 설계", body: "어떤 업무는 사람이 판단해야 하고, 어떤 업무는 AI가 실행할 수 있으며, 어떤 지점은 감사와 확인이 필요한지 정리합니다.", items: ["AI 업무 역할과 권한 경계", "조직 컨텍스트 구조 설계", "인간-AI 협업 프로세스와 피드백 루프"] },
          { number: "02 / 인프라", title: "에이전트 업무 시스템 구축", body: "에이전트, 스킬, MCP, 메시지 큐, 로그, 권한 메커니즘을 안정적인 로컬 또는 클라우드 업무 시스템으로 결합합니다.", items: ["디스패처와 작업 라우팅", "스킬 고정화와 도구 이전", "백그라운드 서비스, 예약 작업, 진단 메커니즘"] },
          { number: "03 / 통합", title: "기업 도구 연결", body: "AI를 기업 위챗, WeChat, 문서, 스프레드시트, 파일 시스템, 내부 업무 소프트웨어에 연결해 정보가 흐르게 합니다.", items: ["기업 위챗 봇과 파일 메시지", "저위험 데스크톱 자동화", "문서, 스프레드시트, PPT, 업무 데이터 처리"] },
          { number: "04 / 구현", title: "시나리오 프로토타입과 지속 구현", body: "실제 업무를 학습과 반복의 원천으로 삼아 시스템을 프로토타입에서 안정적인 워크플로로 발전시킵니다.", items: ["관리 시스템 프로토타입 설계", "연구개발 지원과 자료 전환", "프로세스 교육, 운영, 버전 관리"] },
        ],
      },
      work: {
        title: "실천 | SiMatrix 공생 질서",
        description: "AI 시스템, 기업 도구 연결, ERP 프로토타입, 연구개발 지원, 방법론에 관한 SiMatrix의 실천.",
        hero: ["실천", "실제 업무에서 시스템을 검증하고, 실천에서 방법을 키웁니다.", "여기에는 메시지 창구부터 업무 시스템까지, 업무 프로토타입부터 산업 연구개발 지원까지 계속 진화할 수 있는 실천 방향을 기록합니다. 방법론은 별도로 떠 있는 것이 아니라 매번의 실제 업무 안에 들어 있습니다."],
        method: {
          kicker: "실천 방법",
          title: "우리의 실천 방법",
          lead: "지능 시스템의 핵심은 더 강한 모델만이 아니라 인간 판단, 조직 컨텍스트, 도구 호출, 현실 피드백이 진화 가능한 루프를 이루는 것입니다.",
          items: [
            ["원칙 01", "컨텍스트가 곧 워크플로", "명확한 컨텍스트 파일에는 목표, 제약, 이력, 기준, 산출 요구가 들어 있습니다. 에이전트는 이를 읽고 실행하며 결과를 축적해 조직에 추적 가능한 협업 기반을 제공합니다."],
            ["원칙 02", "실제 업무가 진화를 이끕니다", "AI 역량은 시연에 머물러서는 안 됩니다. 시스템은 실제 업무에 연결되어 매 작업, 오류, 피드백, 회고를 통해 계속 진화해야 합니다."],
            ["원칙 03", "자동화보다 먼저 권한 경계", "자동화가 강해질수록 권한, 감사, 인간 확인이 더 명확해야 합니다. 안전한 시스템은 언제 실행하지 말아야 하는지도 압니다."],
            ["원칙 04", "도구에서 인프라로", "하나의 AI 도구는 효율을 높일 수 있지만 조직을 바꾸는 것은 인프라입니다. 우리는 일회성 역량을 스킬, 에이전트, 큐, 서비스, 문서로 고정합니다."],
          ],
        },
        selected: {
          kicker: "주요 실천",
          title: "실천 방향",
          lead: "이 실천들은 고립된 사례가 아니라 조직 컨텍스트, 툴체인, 실제 업무 시나리오를 중심으로 축적되는 시스템 역량입니다.",
          cards: [
            { title: "기업 위챗 봇과 에이전트 연결", body: "기업 위챗 장기 연결을 통해 @ 메시지를 수신하고, 그룹 알림, 파일 발송, 저위험 질의응답, 후속 에이전트 라우팅을 지원합니다." },
            { title: "WeChat 메시지와 파일 자동 발송", body: "macOS 환경에서 로컬 큐와 감시 프로세스를 구축해 지정된 WeChat 대화로 텍스트, 파일, 이미지를 보냅니다." },
            { title: "사람과 AI 이중 워크스페이스", body: "사람용 폴더는 사람이 읽는 자료를, AI 워크스페이스는 에이전트 실행 로직을 담아 협업 과정을 추적 가능하게 합니다." },
            { title: "제조 ERP 디지털 프로토타입", body: "주문, 공정, 스캔, 작업대, 보고, 프로젝트 진행을 중심으로 중소 제조 현장에 맞는 디지털 시스템을 설계합니다." },
            { title: "AI 보조 연구개발 지원", body: "기술 자료, 고객 인터뷰, 산업 문서, 납품 자료를 구조화된 방안과 재사용 가능한 지식 자산으로 전환합니다." },
            { title: "조직 프로세스와 템플릿 체계", body: "회의록, 회사 소개, 프로젝트 문서, 일일 보고, 관리 대장을 축적해 AI가 일상 업무에 안정적으로 들어오게 합니다." },
          ],
        },
      },
      about: {
        title: "회사 소개 | SiMatrix 공생 질서",
        description: "상하이 공생질서 인공지능 기술 유한회사 SiMatrix는 인간과 AI의 협동 진화 시스템을 구축합니다.",
        hero: ["SiMatrix 소개", "공생 질서는 인간과 지능 사이에 새로운 협업 구조를 만드는 것을 의미합니다.", "SiMatrix는 공생 매트릭스를 뜻합니다. 사람, AI, 데이터, 시스템, 실제 현장이 함께 구성하는 구조입니다."],
        about: {
          kicker: "회사 소개",
          title: "회사 소개",
          lead: "상하이 공생질서 인공지능 기술 유한회사, 약칭 공생 질서, 영문 브랜드 SiMatrix. 우리는 인간과 인공지능이 함께 진화하는 새로운 세계 시스템 구축에 집중합니다.",
          cards: [
            { title: "미션", body: "보이지 않는 곳에서 모든 것을 연결하고, 작은 곳에서 세계를 다시 만듭니다. 우리는 눈에 잘 보이지 않지만 세계를 실제로 움직이는 지능 시스템을 구축합니다." },
            { title: "비전", body: "인간과 지능이 함께 진화하는 새로운 세계 시스템을 구축해 AI가 인간 인지, 창의력, 문명 확장의 일부가 되게 합니다." },
            { title: "가치관", body: "공생, 진화, 진실 추구, 경계 돌파, 빛을 향함, 완수. 우리는 실제 문제, 장기 축적, 현실을 바꾸는 행동을 중시합니다." },
          ],
        },
        advisor: {
          kicker: "기술 고문 및 산학 협력",
          title: "첨단 연구를 실제 기술 판단으로 연결합니다.",
          lead: "SiMatrix는 외부 수석 기술 고문과 협력해 알고리즘 방향, 기술 로드맵 검토, 산학 협력에 장기적인 전문 관점을 더합니다.",
          role: "수석 기술 고문",
          name: "인루이 교수",
          field: "지능형 최적화 및 엣지 지능",
          bio: "교수이자 박사과정 지도교수로서 지능형 정보 처리, 무선 통신, 엣지 지능, 연합학습, 디지털 트윈을 오랫동안 연구해 왔습니다. SiMatrix 수석 기술 고문으로서 알고리즘과 기술 로드맵 검토, 첨단 연구 연계, 산학 협력을 지원합니다.",
          metricsLabel: "주요 성과 지표",
          metrics: [["3", "국가자연과학기금 과제 주관"], ["80+", "학술 논문"], ["23", "특허 및 출원"]],
          award: "주요 수상: 2019년 저장성 과학기술진보상 2등상(3위)",
        },
        contact: {
          kicker: "문의",
          title: "문의",
          lead: "기업이 AI를 실제로 어떻게 사용할지, 에이전트 업무 시스템을 어떻게 구축할지, AI를 실제 업무 프로세스에 어떻게 연결할지 고민하고 있다면 여기서 시작할 수 있습니다.",
          info: [
            ["회사명", "상하이 공생질서 인공지능 기술 유한회사"],
            ["약칭", "공생 질서"],
            ["영문 브랜드", "SiMatrix / 공생 매트릭스"],
            ["협업 방향", "AI 네이티브 조직, 에이전트 워크플로, 기업 도구 연결, 산업 지능 시스템"],
            ["이메일", "contact@simatrix.cn"],
            ["전화", "+86 150 2646 9395"],
            ["주소", "중국 장쑤성 쑤저우시 자오펑로 8호 장쑤국제비즈니스빌딩 601-6호"],
          ],
        },
      },
      contact: {
        title: "문의 | SiMatrix 공생 질서",
        description: "AI 네이티브 조직, 에이전트 워크플로, 기업 지능 시스템 협업을 위해 SiMatrix에 문의하세요.",
        hero: ["문의", "문의", "기업이 AI를 실제로 어떻게 사용할지, 에이전트 업무 시스템을 어떻게 구축할지, AI를 실제 업무 프로세스에 어떻게 연결할지 고민하고 있다면 여기서 시작할 수 있습니다."],
        contact: {
          kicker: "문의",
          title: "문의",
          lead: "기업이 AI를 실제로 어떻게 사용할지, 에이전트 업무 시스템을 어떻게 구축할지, AI를 실제 업무 프로세스에 어떻게 연결할지 고민하고 있다면 여기서 시작할 수 있습니다.",
          info: [
            ["회사명", "상하이 공생질서 인공지능 기술 유한회사"],
            ["약칭", "공생 질서"],
            ["영문 브랜드", "SiMatrix / 공생 매트릭스"],
            ["협업 방향", "AI 네이티브 조직, 에이전트 워크플로, 기업 도구 연결, 산업 지능 시스템"],
            ["이메일", "contact@simatrix.cn"],
            ["전화", "+86 150 2646 9395"],
            ["주소", "중국 장쑤성 쑤저우시 자오펑로 8호 장쑤국제비즈니스빌딩 601-6호"],
          ],
        },
      },
    },
  },
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const getStoredLanguage = () => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    return;
  }
};

const getPageKey = () => {
  const fileName = decodeURIComponent(location.pathname.split("/").pop() || "index.html");
  if (fileName === "capabilities.html") return "capabilities";
  if (fileName === "work.html") return "work";
  if (fileName === "about.html") return "about";
  if (fileName === "contact.html") return "contact";
  return "home";
};

const setText = (selector, value, root = document) => {
  const element = root.querySelector(selector);
  if (element && value !== undefined) {
    element.textContent = value;
  }
};

const setMeta = (page, languagePack) => {
  document.documentElement.lang = languagePack.htmlLang;
  document.title = page.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", page.description);
  }
};

const setCards = (selector, cards) => {
  document.querySelectorAll(selector).forEach((card, index) => {
    const data = cards[index];
    if (!data) return;
    setText(".card-number", data.number, card);
    setText("h3", data.title, card);
    setText("p", data.body, card);
    card.querySelectorAll("li").forEach((item, itemIndex) => {
      item.textContent = data.items?.[itemIndex] || item.textContent;
    });
  });
};

const setRows = (selector, rows) => {
  document.querySelectorAll(selector).forEach((row, index) => {
    const data = rows[index];
    if (!data) return;
    setText("strong", data[0], row);
    setText("h3", data[1], row);
    setText("p", data[2], row);
  });
};

const setTimeline = (items) => {
  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const data = items[index];
    if (!data) return;
    setText("span", data[0], item);
    setText("h3", data[1], item);
    setText("p", data[2], item);
  });
};

const setContactInfo = (info) => {
  document.querySelectorAll(".info-line").forEach((line, index) => {
    const data = info[index];
    if (!data) return;
    setText("strong", data[0], line);
    const link = line.querySelector("span a");
    if (link) {
      link.textContent = data[1];
    } else {
      setText("span", data[1], line);
    }
  });
};

const setCommon = (languagePack) => {
  const { common } = languagePack;
  setText(".brand-name strong", common.brandName);
  setText(".brand-name span", common.brandSubtitle);
  [".nav-links > a[href='index.html']", ".nav-links > a[href='capabilities.html']", ".nav-links > a[href='work.html']", ".nav-links > a[href='about.html']", ".nav-links > a[href='contact.html']"].forEach((selector, index) => {
    setText(selector, common.nav[index]);
  });
  setText(".site-footer .footer-copyright", common.footerCopyright);
  setText(".site-footer .footer-tagline", common.footerTagline);
};

const setHome = (page) => {
  setText(".hero .eyebrow", page.hero[0]);
  setText(".hero h1", page.hero[1]);
  setText(".hero-copy", page.hero[2]);
  setText(".hero-actions .primary", page.hero[3]);
  setText(".hero-actions .secondary", page.hero[4]);
  setText("main > .section:nth-of-type(2) .section-kicker", page.build.kicker);
  setText("main > .section:nth-of-type(2) h2", page.build.title);
  setText("main > .section:nth-of-type(2) .section-lead", page.build.lead);
  setCards("main > .section:nth-of-type(2) .grid-3 .card", page.build.cards);
  setText("main > .section:nth-of-type(3) .section-kicker", page.stack.kicker);
  setText("main > .section:nth-of-type(3) h2", page.stack.title);
  setText("main > .section:nth-of-type(3) .section-lead", page.stack.lead);
  setRows(".capability-row", page.stack.rows);
  setText(".quote", page.quote[0]);
  setText(".quote-caption", page.quote[1]);
  setText("main > .section:nth-of-type(5) .section-kicker", page.practice.kicker);
  setText("main > .section:nth-of-type(5) h2", page.practice.title);
  setText("main > .section:nth-of-type(5) .section-lead", page.practice.lead);
  setCards("main > .section:nth-of-type(5) .grid-4 .card", page.practice.cards);
};

const setCapabilities = (page) => {
  setText(".page-hero .eyebrow", page.hero[0]);
  setText(".page-hero h1", page.hero[1]);
  setText(".page-hero p", page.hero[2]);
  setCards(".grid-2 .card", page.cards);
};

const setWork = (page) => {
  setText(".page-hero .eyebrow", page.hero[0]);
  setText(".page-hero h1", page.hero[1]);
  setText(".page-hero p", page.hero[2]);
  setText("main > .section:nth-of-type(2) .section-kicker", page.method.kicker);
  setText("main > .section:nth-of-type(2) h2", page.method.title);
  setText("main > .section:nth-of-type(2) .section-lead", page.method.lead);
  setTimeline(page.method.items);
  setText("main > .section:nth-of-type(3) .section-kicker", page.selected.kicker);
  setText("main > .section:nth-of-type(3) h2", page.selected.title);
  setText("main > .section:nth-of-type(3) .section-lead", page.selected.lead);
  setCards("main > .section:nth-of-type(3) .grid-2 .card", page.selected.cards);
};

const setAbout = (page) => {
  setText(".page-hero .eyebrow", page.hero[0]);
  setText(".page-hero h1", page.hero[1]);
  setText(".page-hero p", page.hero[2]);
  setText("#about .section-kicker", page.about.kicker);
  setText("#about h2", page.about.title);
  setText("#about .section-lead", page.about.lead);
  setCards("#about .grid-3 .card", page.about.cards);
  setText("#advisor .section-kicker", page.advisor.kicker);
  setText("#advisor h2", page.advisor.title);
  setText("#advisor .section-lead", page.advisor.lead);
  setText("#advisor .advisor-role", page.advisor.role);
  setText("#advisor .advisor-heading h3", page.advisor.name);
  setText("#advisor .advisor-heading p", page.advisor.field);
  setText("#advisor .advisor-bio", page.advisor.bio);
  document.querySelector("#advisor .advisor-metrics")?.setAttribute("aria-label", page.advisor.metricsLabel);
  document.querySelectorAll("#advisor .advisor-metric").forEach((metric, index) => {
    const data = page.advisor.metrics[index];
    if (!data) return;
    setText("strong", data[0], metric);
    setText("span", data[1], metric);
  });
  setText("#advisor .advisor-award", page.advisor.award);
};

const setContact = (page) => {
  setText(".page-hero .eyebrow", page.hero[0]);
  setText(".page-hero h1", page.hero[1]);
  setText(".page-hero p", page.hero[2]);
  setContactInfo(page.contact.info);
};

const applyTranslations = (language) => {
  const safeLanguage = supportedLanguages.includes(language) ? language : "zh";
  const languagePack = translations[safeLanguage];
  const pageKey = getPageKey();
  const page = languagePack.pages[pageKey];

  if (!page) return;
  setMeta(page, languagePack);
  setCommon(languagePack);
  document.querySelectorAll(".lang-switch select").forEach((select) => {
    select.value = safeLanguage;
  });

  if (pageKey === "home") setHome(page);
  if (pageKey === "capabilities") setCapabilities(page);
  if (pageKey === "work") setWork(page);
  if (pageKey === "about") setAbout(page);
  if (pageKey === "contact") setContact(page);
};

const setLanguage = (language) => {
  const safeLanguage = supportedLanguages.includes(language) ? language : "zh";
  storeLanguage(safeLanguage);
  applyTranslations(safeLanguage);
  if (navLinks?.classList.contains("open")) {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
};

document.querySelectorAll(".lang-switch select").forEach((select) => {
  select.addEventListener("change", () => setLanguage(select.value));
});

applyTranslations(getStoredLanguage() || "zh");
