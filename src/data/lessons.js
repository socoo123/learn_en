/**
 * 英语笔记本 · 课程数据
 * ------------------------------------------------------------------
 * kind: "shadow"  — 尚雯婕学习法片段（约 1 分钟，属某系列）
 * kind: "reading" — 每日英语阅读（约 400 词；偏 IT/职场）
 *
 * 字段速查：
 *   id / date / title / source / tags
 *   kind       "shadow" | "reading"
 *   seriesId   shadow 必填，对应 series.js
 *   part       shadow 片段号 "01","02"…
 *   durationMin  预计分钟
 *   stats      reading: { words, newWords, minutes }
 *   passage / core / vocab / grammar / sentences / quiz  — 同现有形态
 * ------------------------------------------------------------------ */
import { COOK_STANFORD_LESSONS } from './shadow/cook-stanford-2019.js'

export const LESSONS = [
  ...COOK_STANFORD_LESSONS,

  {
    id: "2026-08-06-reading",
    date: "2026-08-06",
    title: "how to learn Claude Code",
    source: "IT / 工具向短文",
    tags: ["IT", "AI", "工具"],
    kind: "reading",
    durationMin: 4,
    stats: { words: 520, newWords: 18, minutes: 4 },

    passage: [
      {
        en: "If you want to get good at Claude Code, treat it like a new coworker — not a magic box. Spend the first week watching how it edits files, runs tests, and asks for clarification. The goal is not to type less; it is to ship clearer diffs with fewer surprises.",
        zh: "如果你想把 Claude Code 用熟，把它当成新同事，而不是魔法盒子。第一周先观察它怎么改文件、跑测试、以及在哪里追问澄清。目标不是少打字，而是用更少的意外，提交更清晰的 diff。"
      },
      {
        en: "Start with a tiny, real task: fix a typo, rename a symbol, or add a one-line log. Write a short brief in plain English — what to change, what must not break, and how you will verify the result. Vague prompts create vague patches; a crisp brief creates a reviewable pull request.",
        zh: "从一件很小的真实任务开始：改错别字、重命名一个符号，或加一行日志。用白话写一段简短 brief——改什么、什么不能坏、你打算怎么验收。模糊的提示会产出模糊的补丁；干净的 brief 才能换来可审查的 PR。"
      },
      {
        en: "Keep the working tree honest. Commit or stash unrelated edits before you ask for a big change. When the agent touches many files, skim the diff like a code review: naming, edge cases, and whether tests actually cover the new path. If something feels off, say so in the next message — course correction is cheaper early.",
        zh: "让工作区保持诚实：大改之前先 commit 或 stash 无关改动。代理动了很多文件时，像 code review 一样扫 diff：命名、边界情况、测试是否真的覆盖新路径。有不对劲就下一句说出来——越早纠偏越便宜。"
      },
      {
        en: "Build a personal checklist: pin the repo conventions, preferred test commands, and files the agent should avoid. Over time, turn repeated feedback into rules or project notes so you stop re-explaining the same constraints. That is how the tool compounds — your taste becomes reusable context.",
        zh: "给自己建一份清单：钉住仓库约定、常用测试命令、以及代理不该碰的文件。随着时间推移，把反复说过的反馈写成规则或项目笔记，这样就不用每次重讲同一套约束。工具的复利来自这里——你的品味变成可复用的上下文。"
      },
      {
        en: "Finally, measure progress by outcomes you care about: time to a green CI, fewer follow-up fixes, and how often you accept the first patch. Claude Code rewards people who give sharp intent and then verify. Learn that loop, and the rest is practice.",
        zh: "最后，用你在意的结果衡量进步：多久能等到绿灯 CI、返工少了多少、以及你多久会接受第一版补丁。Claude Code 奖励那些意图清晰、然后再验收的人。学会这个闭环，剩下的就是练习。"
      }
    ],

    core: {
      words: [
        { w: "ship", phon: "/ʃɪp/", pos: "v.", def: "交付 / 上线（产品或改动）", ex_en: "Ship clearer diffs with fewer surprises.", ex_zh: "用更少意外交付更清晰的 diff。" },
        { w: "brief", phon: "/briːf/", pos: "n.", def: "简短任务说明 / 需求摘要", ex_en: "Write a short brief in plain English.", ex_zh: "用白话写一段简短 brief。" },
        { w: "working tree", phon: "/ˈwɜːkɪŋ triː/", pos: "n.", def: "（Git）工作区当前文件状态", ex_en: "Keep the working tree honest.", ex_zh: "让工作区保持诚实。" },
        { w: "course correction", phon: "/kɔːs kəˈrekʃn/", pos: "n.", def: "中途纠偏 / 调整方向", ex_en: "Course correction is cheaper early.", ex_zh: "越早纠偏越便宜。" },
        { w: "compounds", phon: "/kəmˈpaʊndz/", pos: "v.", def: "产生复利 / 累积放大", ex_en: "That is how the tool compounds.", ex_zh: "工具的复利来自这里。" },
        { w: "sharp intent", phon: "/ʃɑːp ɪnˈtent/", pos: "n.", def: "清晰明确的意图", ex_en: "People who give sharp intent and then verify.", ex_zh: "意图清晰、然后再验收的人。" }
      ],
      grammar: [
        { t: "treat A like B", d: "把 A 当成 B 来对待：treat it like a new coworker。" },
        { t: "not A; it is B", d: "先否定再强调正解：The goal is not to type less; it is to ship clearer diffs." }
      ]
    },

    vocab: [
      { w: "coworker", phon: "/ˈkəʊwɜːkə/", pos: "n.", def: "同事", ex_en: "Treat it like a new coworker.", ex_zh: "把它当成新同事。" },
      { w: "clarification", phon: "/ˌklærəfɪˈkeɪʃn/", pos: "n.", def: "澄清 / 说明", ex_en: "It asks for clarification.", ex_zh: "它会追问澄清。" },
      { w: "diff", phon: "/dɪf/", pos: "n.", def: "代码差异（diff）", ex_en: "Skim the diff like a code review.", ex_zh: "像 code review 一样扫 diff。" },
      { w: "typo", phon: "/ˈtaɪpəʊ/", pos: "n.", def: "打字错误", ex_en: "Fix a typo first.", ex_zh: "先改一个错别字。" },
      { w: "symbol", phon: "/ˈsɪmbl/", pos: "n.", def: "（代码里的）符号 / 标识符", ex_en: "Rename a symbol carefully.", ex_zh: "小心重命名一个符号。" },
      { w: "vague", phon: "/veɪɡ/", pos: "adj.", def: "模糊的 / 含糊的", ex_en: "Vague prompts create vague patches.", ex_zh: "模糊的提示会产出模糊的补丁。" },
      { w: "crisp", phon: "/krɪsp/", pos: "adj.", def: "干净利落的 / 明确的", ex_en: "A crisp brief creates a reviewable PR.", ex_zh: "干净的 brief 换来可审查的 PR。" },
      { w: "stash", phon: "/stæʃ/", pos: "v.", def: "（Git）暂存改动", ex_en: "Stash unrelated edits first.", ex_zh: "先 stash 无关改动。" },
      { w: "edge case", phon: "/edʒ keɪs/", pos: "n.", def: "边界情况", ex_en: "Check naming and edge cases.", ex_zh: "检查命名和边界情况。" },
      { w: "pin", phon: "/pɪn/", pos: "v.", def: "钉住 / 固定（约定或版本）", ex_en: "Pin the repo conventions.", ex_zh: "钉住仓库约定。" },
      { w: "convention", phon: "/kənˈvenʃn/", pos: "n.", def: "约定 / 惯例", ex_en: "Follow the repo conventions.", ex_zh: "遵守仓库约定。" },
      { w: "constraint", phon: "/kənˈstreɪnt/", pos: "n.", def: "约束条件", ex_en: "Stop re-explaining the same constraints.", ex_zh: "别反复重讲同一套约束。" },
      { w: "reusable", phon: "/riːˈjuːzəbl/", pos: "adj.", def: "可复用的", ex_en: "Your taste becomes reusable context.", ex_zh: "你的品味变成可复用的上下文。" },
      { w: "outcome", phon: "/ˈaʊtkʌm/", pos: "n.", def: "结果 / 成果", ex_en: "Measure progress by outcomes.", ex_zh: "用结果衡量进步。" },
      { w: "green CI", phon: "/ɡriːn ˌsiː ˈaɪ/", pos: "n.", def: "持续集成全部通过（绿灯）", ex_en: "Time to a green CI.", ex_zh: "等到绿灯 CI 的时间。" },
      { w: "follow-up", phon: "/ˈfɒləʊ ʌp/", pos: "n./adj.", def: "后续（返工/跟进）", ex_en: "Fewer follow-up fixes.", ex_zh: "更少的后续返工。" },
      { w: "patch", phon: "/pætʃ/", pos: "n.", def: "补丁 / 一小批改动", ex_en: "Accept the first patch.", ex_zh: "接受第一版补丁。" },
      { w: "loop", phon: "/luːp/", pos: "n.", def: "循环 / 闭环", ex_en: "Learn that loop, and the rest is practice.", ex_zh: "学会这个闭环，剩下的就是练习。" }
    ],

    grammar: [
      {
        t: "祈使句给步骤",
        pattern: "Start with … / Keep … / Build …",
        rule: "教程和工具文常用祈使句列步骤，语气直接、好执行。",
        examples: [
          { en: "Start with a tiny, real task.", zh: "从一件很小的真实任务开始。" },
          { en: "Keep the working tree honest.", zh: "让工作区保持诚实。" }
        ]
      },
      {
        t: "so 引导结果从句",
        pattern: "… so you stop re-explaining …",
        rule: "so + 句子表示结果：「这样你就……」。",
        examples: [
          { en: "Turn feedback into rules so you stop re-explaining.", zh: "把反馈写成规则，这样就不用反复重讲。" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者建议第一周主要做什么？",
        options: [
          "尽快让 AI 重写整个仓库",
          "观察它如何改文件、跑测试、追问澄清",
          "只练习写更短的 prompt",
          "关掉所有测试以提高速度"
        ],
        answer: 1,
        explain: "第一段：Spend the first week watching how it edits files, runs tests, and asks for clarification."
      },
      {
        type: "fill",
        tag: "语言点",
        q: "Vague prompts create vague ____.",
        answer: "patches",
        explain: "原文：Vague prompts create vague patches."
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "大改之前作者建议怎样处理无关改动？",
        options: [
          "直接混在同一个 diff 里",
          "先 commit 或 stash",
          "全部删除",
          "交给 CI 自动处理"
        ],
        answer: 1,
        explain: "Commit or stash unrelated edits before you ask for a big change."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "\"the tool compounds\" 在文中最接近的意思是？",
        options: [
          "工具坏了",
          "工具产生复利式累积效果",
          "工具只能做数学运算",
          "工具需要化学试剂"
        ],
        answer: 1,
        explain: "compounds 这里指品味/规则沉淀后，效果会累积放大。"
      }
    ]
  },

  {
    id: "2026-08-07-reading",
    date: "2026-08-07",
    title: "The Little Prince: what it means to tame",
    source: "名著短摘 · The Little Prince（改编讲解）",
    tags: ["名著", "关系", "责任"],
    kind: "reading",
    durationMin: 4,
    stats: { words: 480, newWords: 16, minutes: 4 },

    passage: [
      {
        en: "In Antoine de Saint-Exupéry's The Little Prince, a fox teaches the boy a quiet lesson about friendship. The fox says he wants to be tamed. At first the word sounds strange: tame often means to train an animal. Here it means something softer — to create ties, so that one person becomes unique to another.",
        zh: "在圣埃克苏佩里的《小王子》里，狐狸教给男孩一堂关于友谊的安静课。狐狸说他想被「驯养」。一开始这个词听着怪：tame 常指训练动物。这里意思更柔和——建立联系，让某个人对另一个人变得独一无二。"
      },
      {
        en: "The fox explains the process patiently. Come at the same hour each day, he says, so that waiting becomes meaningful. Rituals matter: a fixed time turns a random visit into an appointment you can feel in advance. Anticipation is part of the gift.",
        zh: "狐狸耐心地解释过程。他说：每天在同一时刻来，这样等待才有意义。仪式感很重要：固定时间把随便一趟拜访，变成你能提前感受到的约定。期待本身就是礼物的一部分。"
      },
      {
        en: "Once you are tamed, ordinary things change color. The wheat fields will remind the fox of the prince's golden hair. A footstep that once meant nothing will make his heart race — or leave him disappointed if it belongs to someone else. Love, in this story, is recognition: you see one face in a crowd and the rest of the world fades a little.",
        zh: "一旦被驯养，平常事物会变色。麦田会让狐狸想起王子的金发。曾经毫无意义的脚步声会让他心跳加速——若是别人的脚步，他则会失望。在这个故事里，爱是辨认：你在人群中看见一张脸，其余世界就淡了一点。"
      },
      {
        en: "The fox's most famous line is about responsibility: \"You become responsible, forever, for what you have tamed.\" Friendship is not free entertainment. If you invite trust, you owe care — even on busy days, even when leaving is easier.",
        zh: "狐狸最有名的那句关于责任：「你要对你驯养过的一切永远负责。」友谊不是免费娱乐。你若邀请了信任，就欠下照料——哪怕很忙，哪怕离开更容易。"
      },
      {
        en: "Another line travelers remember: \"What is essential is invisible to the eye.\" Titles, tools, and metrics are easy to measure. Loyalty, patience, and the courage to stay — those sit deeper. For a working adult, the fox's advice still travels well: build ties on purpose, keep small promises, and do not treat people as replaceable parts.",
        zh: "旅人还记得另一句：「本质的东西，眼睛是看不见的。」头衔、工具、指标都容易衡量。忠诚、耐心、以及留下的勇气——这些更深。对职场成年人，狐狸的劝告依然好用：有意地建立联系，守住小承诺，别把人当成可替换零件。"
      }
    ],

    core: {
      words: [
        { w: "tame", phon: "/teɪm/", pos: "v.", def: "驯养；文中引申为「建立独特联系」", ex_en: "The fox wants to be tamed.", ex_zh: "狐狸想被驯养。" },
        { w: "create ties", phon: "/kriːˈeɪt taɪz/", pos: "v. phr.", def: "建立联系 / 纽带", ex_en: "To create ties so that one person becomes unique.", ex_zh: "建立联系，让某人变得独一无二。" },
        { w: "ritual", phon: "/ˈrɪtʃuəl/", pos: "n.", def: "仪式 / 固定习惯", ex_en: "Rituals matter.", ex_zh: "仪式感很重要。" },
        { w: "anticipation", phon: "/ænˌtɪsɪˈpeɪʃn/", pos: "n.", def: "期待 / 预期", ex_en: "Anticipation is part of the gift.", ex_zh: "期待本身就是礼物的一部分。" },
        { w: "responsible for", phon: "/rɪˈspɒnsəbl fɔː/", pos: "adj. phr.", def: "对……负责", ex_en: "You become responsible for what you have tamed.", ex_zh: "你要对你驯养过的一切负责。" },
        { w: "essential", phon: "/ɪˈsenʃl/", pos: "adj.", def: "本质的 / 至关重要的", ex_en: "What is essential is invisible to the eye.", ex_zh: "本质的东西眼睛看不见。" }
      ],
      grammar: [
        { t: "so that + 结果", d: "表示目的/结果：Come at the same hour so that waiting becomes meaningful." },
        { t: "once + 从句", d: "「一旦……就……」：Once you are tamed, ordinary things change color." }
      ]
    },

    vocab: [
      { w: "quietly", phon: "/ˈkwaɪətli/", pos: "adv.", def: "安静地 / 不动声色地", ex_en: "A quiet lesson about friendship.", ex_zh: "一堂关于友谊的安静课。" },
      { w: "unique", phon: "/juˈniːk/", pos: "adj.", def: "独一无二的", ex_en: "One person becomes unique to another.", ex_zh: "某人对另一个人变得独一无二。" },
      { w: "patiently", phon: "/ˈpeɪʃntli/", pos: "adv.", def: "耐心地", ex_en: "The fox explains the process patiently.", ex_zh: "狐狸耐心地解释过程。" },
      { w: "meaningful", phon: "/ˈmiːnɪŋfl/", pos: "adj.", def: "有意义的", ex_en: "Waiting becomes meaningful.", ex_zh: "等待变得有意义。" },
      { w: "appointment", phon: "/əˈpɔɪntmənt/", pos: "n.", def: "约定 / 约会", ex_en: "An appointment you can feel in advance.", ex_zh: "你能提前感受到的约定。" },
      { w: "remind A of B", phon: "/rɪˈmaɪnd əv/", pos: "v. phr.", def: "使 A 想起 B", ex_en: "The fields remind the fox of the prince.", ex_zh: "田野让狐狸想起王子。" },
      { w: "make one's heart race", phon: "/meɪk hɑːt reɪs/", pos: "v. phr.", def: "让人心跳加速（兴奋/紧张）", ex_en: "A footstep will make his heart race.", ex_zh: "脚步声会让他心跳加速。" },
      { w: "recognition", phon: "/ˌrekəɡˈnɪʃn/", pos: "n.", def: "辨认 / 认出", ex_en: "Love is recognition.", ex_zh: "爱是辨认。" },
      { w: "fade", phon: "/feɪd/", pos: "v.", def: "变淡 / 消退", ex_en: "The rest of the world fades a little.", ex_zh: "其余世界淡了一点。" },
      { w: "owe", phon: "/əʊ/", pos: "v.", def: "欠（责任/人情）", ex_en: "You owe care.", ex_zh: "你欠下照料。" },
      { w: "invisible", phon: "/ɪnˈvɪzəbl/", pos: "adj.", def: "看不见的", ex_en: "Invisible to the eye.", ex_zh: "眼睛看不见的。" },
      { w: "metric", phon: "/ˈmetrɪk/", pos: "n.", def: "衡量指标", ex_en: "Titles, tools, and metrics are easy to measure.", ex_zh: "头衔、工具、指标都容易衡量。" },
      { w: "loyalty", phon: "/ˈlɔɪəlti/", pos: "n.", def: "忠诚", ex_en: "Loyalty and patience sit deeper.", ex_zh: "忠诚与耐心更深。" },
      { w: "on purpose", phon: "/ɒn ˈpɜːpəs/", pos: "adv. phr.", def: "故意地 / 有意地", ex_en: "Build ties on purpose.", ex_zh: "有意地建立联系。" },
      { w: "replaceable", phon: "/rɪˈpleɪsəbl/", pos: "adj.", def: "可替换的", ex_en: "Do not treat people as replaceable parts.", ex_zh: "别把人当成可替换零件。" },
      { w: "travels well", phon: "/ˈtrævlz wel/", pos: "v. phr.", def: "（说法/道理）经得起时间、换场景仍适用", ex_en: "The fox's advice still travels well.", ex_zh: "狐狸的劝告依然好用。" }
    ],

    grammar: [
      {
        t: "so that 表目的",
        pattern: "… so that + 句子",
        rule: "说明这样做是为了达到某个结果。",
        examples: [
          { en: "Come at the same hour so that waiting becomes meaningful.", zh: "每天同一时刻来，这样等待才有意义。" }
        ]
      },
      {
        t: "once 引导时间从句",
        pattern: "Once + 从句, 主句",
        rule: "「一旦……（就）……」，强调条件满足后的变化。",
        examples: [
          { en: "Once you are tamed, ordinary things change color.", zh: "一旦被驯养，平常事物会变色。" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "文中 fox 说的 tame 主要指什么？",
        options: [
          "只训练动物服从命令",
          "建立联系，让彼此变得独特",
          "尽快结束一段关系",
          "用指标衡量友谊"
        ],
        answer: 1,
        explain: "Here it means something softer — to create ties, so that one person becomes unique to another."
      },
      {
        type: "fill",
        tag: "语言点",
        q: "You become ____, forever, for what you have tamed.",
        answer: "responsible",
        explain: "原句：You become responsible, forever, for what you have tamed."
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "为什么狐狸要对方每天同一时刻来？",
        options: [
          "因为狐狸只在那时有空吃饭",
          "让等待变得有意义，期待也成为礼物的一部分",
          "为了避开麦田",
          "为了练习英语语法"
        ],
        answer: 1,
        explain: "Come at the same hour… so that waiting becomes meaningful. Anticipation is part of the gift."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "\"What is essential is invisible to the eye\" 最接近的意思是？",
        options: [
          "重要的东西眼睛看不见",
          "只有看得见的东西才重要",
          "指标比忠诚更可靠",
          "友谊应该免费"
        ],
        answer: 0,
        explain: "本质/关键的东西往往不在表面，眼睛看不见。"
      }
    ]
  },

  {
    id: "2026-08-08-reading",
    date: "2026-08-08",
    title: "Satya Nadella on culture and learning",
    source: "名人采访风 · 微软 CEO 访谈要点改写",
    tags: ["名人", "职场", "学习"],
    kind: "reading",
    durationMin: 3,
    stats: { words: 430, newWords: 14, minutes: 3 },

    passage: [
      {
        en: "In interviews, Microsoft CEO Satya Nadella often returns to one idea: culture eats strategy. He does not mean plans are useless. He means that if people are afraid to ask questions, even a smart plan will fail in daily work.",
        zh: "在采访里，微软 CEO 萨提亚·纳德拉常回到一个想法：文化胜过战略。他不是说计划没用，而是说——如果大家不敢提问，再聪明的计划也会在日常工作里失败。"
      },
      {
        en: "Nadella talks about a shift from \"know-it-all\" to \"learn-it-all\". A know-it-all protects old answers. A learn-it-all stays curious, listens longer, and updates a view when new facts appear. In a fast product cycle, curiosity is not soft; it is a survival skill.",
        zh: "纳德拉谈到从「无所不知」转向「乐于学习」。无所不知的人护着旧答案；乐于学习的人保持好奇、多听一会儿，有新事实就更新看法。在快速产品周期里，好奇心不是软技能，而是生存技能。"
      },
      {
        en: "He also links empathy to better products. Empathy here is practical: understand the customer's job, friction, and fear before you ship a feature. If your team only debates internal metrics, you may win the meeting and lose the user.",
        zh: "他也把共情和更好的产品连在一起。这里的共情很务实：上线功能前，先弄清客户的工作、摩擦和顾虑。如果团队只辩论内部指标，你可能赢了会议，却输了用户。"
      },
      {
        en: "For meeting English, a few of his habits travel well. Start with a clear question. Invite the quietest person to speak. End with owners and dates, not vague agreement. These moves sound simple, but they change how safe people feel.",
        zh: "放到会议英语里，他的几个习惯仍然好用：用清晰问题开场；请最安静的人发言；结束时落实负责人和日期，而不是含糊同意。动作听着简单，却会改变人们有多敢说话。"
      },
      {
        en: "You do not need to copy a CEO's title to copy the posture. In your next standup, try one learn-it-all line: \"I might be wrong — what are we missing?\" That single sentence often opens better discussion than a long status update.",
        zh: "你不必抄 CEO 的头衔，也可以抄这种姿态。下次站会试一句乐于学习的话：「我可能错了——我们漏了什么？」这一句，往往比一长段状态汇报更能打开讨论。"
      }
    ],

    core: {
      words: [
        { w: "culture eats strategy", phon: "/ˈkʌltʃə iːts ˈstrætədʒi/", pos: "idiom", def: "文化胜过战略（再好的计划也架不住糟糕协作氛围）", ex_en: "Culture eats strategy.", ex_zh: "文化胜过战略。" },
        { w: "know-it-all", phon: "/ˈnəʊ ɪt ɔːl/", pos: "n./adj.", def: "自以为无所不知的人 / 心态", ex_en: "A know-it-all protects old answers.", ex_zh: "无所不知的人护着旧答案。" },
        { w: "learn-it-all", phon: "/ˈlɜːn ɪt ɔːl/", pos: "n./adj.", def: "乐于持续学习的人 / 心态", ex_en: "Shift from know-it-all to learn-it-all.", ex_zh: "从无所不知转向乐于学习。" },
        { w: "empathy", phon: "/ˈempəθi/", pos: "n.", def: "共情（站在对方处境理解）", ex_en: "Empathy here is practical.", ex_zh: "这里的共情很务实。" },
        { w: "friction", phon: "/ˈfrɪkʃn/", pos: "n.", def: "摩擦 / 使用上的卡点", ex_en: "Understand the customer's friction.", ex_zh: "弄清客户的卡点。" },
        { w: "posture", phon: "/ˈpɒstʃə/", pos: "n.", def: "姿态 / 立场（做事态度）", ex_en: "Copy the posture, not the title.", ex_zh: "抄姿态，不必抄头衔。" }
      ],
      grammar: [
        { t: "not A; it is B", d: "先否定再给正解：Curiosity is not soft; it is a survival skill." },
        { t: "If …, you may …", d: "条件 + 可能结果：If your team only debates metrics, you may lose the user." }
      ]
    },

    vocab: [
      { w: "return to", phon: "/rɪˈtɜːn tuː/", pos: "v. phr.", def: "反复回到（某个话题）", ex_en: "He often returns to one idea.", ex_zh: "他常回到一个想法。" },
      { w: "shift", phon: "/ʃɪft/", pos: "n./v.", def: "转变 / 转向", ex_en: "A shift from know-it-all to learn-it-all.", ex_zh: "从无所不知到乐于学习的转变。" },
      { w: "curious", phon: "/ˈkjʊəriəs/", pos: "adj.", def: "好奇的", ex_en: "A learn-it-all stays curious.", ex_zh: "乐于学习的人保持好奇。" },
      { w: "update a view", phon: "/ʌpˈdeɪt ə vjuː/", pos: "v. phr.", def: "更新看法", ex_en: "Update a view when new facts appear.", ex_zh: "有新事实就更新看法。" },
      { w: "product cycle", phon: "/ˈprɒdʌkt ˈsaɪkl/", pos: "n.", def: "产品周期", ex_en: "In a fast product cycle.", ex_zh: "在快速产品周期里。" },
      { w: "survival skill", phon: "/səˈvaɪvl skɪl/", pos: "n.", def: "生存技能", ex_en: "Curiosity is a survival skill.", ex_zh: "好奇心是生存技能。" },
      { w: "ship a feature", phon: "/ʃɪp ə ˈfiːtʃə/", pos: "v. phr.", def: "上线一个功能", ex_en: "Before you ship a feature.", ex_zh: "上线功能之前。" },
      { w: "internal metrics", phon: "/ɪnˈtɜːnl ˈmetrɪks/", pos: "n.", def: "内部指标", ex_en: "Only debates internal metrics.", ex_zh: "只辩论内部指标。" },
      { w: "invite someone to speak", phon: "/ɪnˈvaɪt tə spiːk/", pos: "v. phr.", def: "邀请某人发言", ex_en: "Invite the quietest person to speak.", ex_zh: "请最安静的人发言。" },
      { w: "vague agreement", phon: "/veɪɡ əˈɡriːmənt/", pos: "n.", def: "含糊的同意（没有落实）", ex_en: "Not vague agreement.", ex_zh: "不是含糊同意。" },
      { w: "standup", phon: "/ˈstændʌp/", pos: "n.", def: "站会", ex_en: "In your next standup.", ex_zh: "在你的下次站会。" },
      { w: "status update", phon: "/ˈsteɪtəs ˌʌpdeɪt/", pos: "n.", def: "状态汇报", ex_en: "Better than a long status update.", ex_zh: "比一长段状态汇报更好。" },
      { w: "open discussion", phon: "/ˈəʊpən dɪˈskʌʃn/", pos: "v. phr.", def: "打开讨论（让人敢说）", ex_en: "That sentence opens better discussion.", ex_zh: "那句话能打开更好的讨论。" },
      { w: "owner", phon: "/ˈəʊnə/", pos: "n.", def: "负责人（对事项负责的人）", ex_en: "End with owners and dates.", ex_zh: "结束时落实负责人和日期。" }
    ],

    grammar: [
      {
        t: "He means that …",
        pattern: "He does not mean A. He means that B.",
        rule: "采访转述里常用：先澄清「不是这个意思」，再给出真正含义。",
        examples: [
          { en: "He does not mean plans are useless. He means that fear kills execution.", zh: "他不是说计划没用，而是说恐惧会毁执行。" }
        ]
      },
      {
        t: "try + 名词短语",
        pattern: "try one … line: \"…\"",
        rule: "建议别人试用一句固定话术时很自然。",
        examples: [
          { en: "Try one learn-it-all line: \"What are we missing?\"", zh: "试一句乐于学习的话：「我们漏了什么？」" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "文中 \"culture eats strategy\" 强调什么？",
        options: [
          "计划完全没有价值",
          "协作氛围不好时，再好的计划也难落地",
          "文化部门应取代战略部门",
          "只谈文化、不要指标"
        ],
        answer: 1,
        explain: "如果人们不敢提问，聪明计划也会在日常工作里失败。"
      },
      {
        type: "fill",
        tag: "语言点",
        q: "Nadella talks about a shift from \"know-it-all\" to \"____\".",
        answer: "learn-it-all",
        explain: "原文固定对照：know-it-all → learn-it-all。"
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者建议会议结束时做什么？",
        options: [
          "用含糊同意收尾",
          "落实负责人和日期",
          "只汇报内部指标",
          "让最健谈的人总结全部"
        ],
        answer: 1,
        explain: "End with owners and dates, not vague agreement."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "\"I might be wrong — what are we missing?\" 主要作用是？",
        options: [
          "显示自己一定正确",
          "用谦虚提问打开讨论",
          "结束会议并关闭话题",
          "要求立刻上线功能"
        ],
        answer: 1,
        explain: "这是 learn-it-all 姿态：承认可能错，并邀请补盲区。"
      }
    ]
  },

  {
    id: "2026-08-09-reading",
    date: "2026-08-09",
    title: "How to say no without sounding rude",
    source: "职场英语 · 会议与邮件婉拒",
    tags: ["职场", "邮件", "会议"],
    kind: "reading",
    durationMin: 4,
    stats: { words: 460, newWords: 15, minutes: 4 },

    passage: [
      {
        en: "In global teams, \"no\" is hard because people fear sounding rude. Soft yes answers create bigger problems later: missed deadlines, silent resentment, and unclear ownership. A clear no, said with respect, often builds more trust than a weak yes.",
        zh: "在跨国团队里，「不」很难出口，因为怕显得无礼。软弱的「好」之后往往麻烦更大：错过截止日期、暗暗积怨、责任不清。带着尊重说清楚的「不」，常常比勉强答应更建立信任。"
      },
      {
        en: "A useful pattern is reason + boundary + option. Example: \"I can't take this on this week because I'm closing the release. I can review a short draft on Thursday, or we can move it to next sprint.\" You refuse the overload, not the person.",
        zh: "好用的句式是：原因 + 边界 + 备选。例如：「这周我接不了，因为我在收尾发版。周四我可以看一版很短的草稿，或者我们挪到下个 sprint。」你拒绝的是过载，不是那个人。"
      },
      {
        en: "In email, keep the tone warm but firm. Avoid long apologies. One honest sentence beats five soft cushions. Try: \"Thanks for thinking of me. I'm at capacity until Friday, so I'll have to pass this time.\" Then stop. Extra excuses can sound fake.",
        zh: "写邮件时，语气要暖，但立场要稳。别长篇道歉。一句诚实的话，胜过五层软垫。可以试：「谢谢想到我。我周五前都满负荷，这次只能先婉拒。」然后停。借口太多反而假。"
      },
      {
        en: "In meetings, protect the scope with calm questions. \"What should we drop if we add this?\" forces a trade-off into the open. If leadership still wants everything, ask for a written priority order. Your job is not to absorb infinite work; it is to make constraints visible.",
        zh: "会上可用冷静提问守范围：「如果加上这个，我们该去掉什么？」逼出取舍。若领导仍想全都要，就请他们给出书面优先级。你的工作不是吞下无限任务，而是把约束摆到台面上。"
      },
      {
        en: "Practice three reusable lines this week. 1) \"I can do A, but not A and B.\" 2) \"Not this week — can we park it?\" 3) \"I need to decline so I don't block the release.\" Said calmly, these lines sound professional, not cold.",
        zh: "这周练三句可复用的话。1）「我能做 A，但不能 A 和 B 一起。」2）「这周不行——先放一放？」3）「我得婉拒，免得拖发版后腿。」语气冷静时，这些话专业，而不冷漠。"
      }
    ],

    core: {
      words: [
        { w: "soft yes", phon: "/sɒft jes/", pos: "n.", def: "勉强答应（心里其实想拒绝）", ex_en: "A soft yes creates bigger problems later.", ex_zh: "勉强答应之后麻烦更大。" },
        { w: "boundary", phon: "/ˈbaʊndri/", pos: "n.", def: "边界（能力/时间的界限）", ex_en: "Reason + boundary + option.", ex_zh: "原因 + 边界 + 备选。" },
        { w: "at capacity", phon: "/æt kəˈpæsəti/", pos: "adj. phr.", def: "已满负荷 / 排满了", ex_en: "I'm at capacity until Friday.", ex_zh: "我周五前都满负荷。" },
        { w: "pass this time", phon: "/pɑːs ðɪs taɪm/", pos: "v. phr.", def: "这次先算了 / 婉拒", ex_en: "I'll have to pass this time.", ex_zh: "这次只能先婉拒。" },
        { w: "trade-off", phon: "/ˈtreɪd ɒf/", pos: "n.", def: "取舍 / 权衡", ex_en: "Forces a trade-off into the open.", ex_zh: "把取舍逼到台面上。" },
        { w: "park it", phon: "/pɑːk ɪt/", pos: "v. phr.", def: "先搁置（稍后再议）", ex_en: "Can we park it?", ex_zh: "先放一放？" }
      ],
      grammar: [
        { t: "can't … because …", d: "拒绝时先给原因：I can't take this on because I'm closing the release." },
        { t: "so + 结果", d: "说明婉拒后果/决定：I'm at capacity, so I'll have to pass." }
      ]
    },

    vocab: [
      { w: "rude", phon: "/ruːd/", pos: "adj.", def: "无礼的 / 粗鲁的", ex_en: "Fear sounding rude.", ex_zh: "怕显得无礼。" },
      { w: "deadline", phon: "/ˈdedlaɪn/", pos: "n.", def: "截止日期", ex_en: "Missed deadlines.", ex_zh: "错过截止日期。" },
      { w: "resentment", phon: "/rɪˈzentmənt/", pos: "n.", def: "怨恨 / 不满", ex_en: "Silent resentment.", ex_zh: "暗暗积怨。" },
      { w: "ownership", phon: "/ˈəʊnəʃɪp/", pos: "n.", def: "归属责任 / 谁负责", ex_en: "Unclear ownership.", ex_zh: "责任不清。" },
      { w: "overload", phon: "/ˌəʊvəˈləʊd/", pos: "n.", def: "过载 / 过量工作", ex_en: "Refuse the overload, not the person.", ex_zh: "拒绝过载，不是拒绝那个人。" },
      { w: "firm", phon: "/fɜːm/", pos: "adj.", def: "坚定的 / 不含糊的", ex_en: "Warm but firm.", ex_zh: "暖但立场稳。" },
      { w: "apology", phon: "/əˈpɒlədʒi/", pos: "n.", def: "道歉", ex_en: "Avoid long apologies.", ex_zh: "别长篇道歉。" },
      { w: "cushion", phon: "/ˈkʊʃn/", pos: "n.", def: "缓冲垫；文中指软化语气的铺垫", ex_en: "Five soft cushions.", ex_zh: "五层软垫式铺垫。" },
      { w: "scope", phon: "/skəʊp/", pos: "n.", def: "范围（项目边界）", ex_en: "Protect the scope.", ex_zh: "守住范围。" },
      { w: "drop", phon: "/drɒp/", pos: "v.", def: "拿掉 / 砍掉（某项）", ex_en: "What should we drop?", ex_zh: "我们该去掉什么？" },
      { w: "priority order", phon: "/praɪˈɒrəti ˈɔːdə/", pos: "n.", def: "优先级排序", ex_en: "Ask for a written priority order.", ex_zh: "请给出书面优先级。" },
      { w: "constraint", phon: "/kənˈstreɪnt/", pos: "n.", def: "约束条件", ex_en: "Make constraints visible.", ex_zh: "把约束摆到台面上。" },
      { w: "decline", phon: "/dɪˈklaɪn/", pos: "v.", def: "婉拒 / 谢绝", ex_en: "I need to decline.", ex_zh: "我得婉拒。" },
      { w: "block", phon: "/blɒk/", pos: "v.", def: "阻塞 / 拖后腿", ex_en: "So I don't block the release.", ex_zh: "免得拖发版后腿。" },
      { w: "professional", phon: "/prəˈfeʃənl/", pos: "adj.", def: "专业的", ex_en: "These lines sound professional.", ex_zh: "这些话听着专业。" }
    ],

    grammar: [
      {
        t: "原因 + 边界 + 备选",
        pattern: "I can't … because …. I can …, or we can …",
        rule: "职场婉拒常用三步：说明原因、划清边界、给出替代方案。",
        examples: [
          { en: "I can't take this on this week because I'm closing the release.", zh: "这周接不了，因为我在收尾发版。" },
          { en: "I can review a short draft on Thursday, or we can move it.", zh: "周四可看短草稿，或我们挪一挪。" }
        ]
      },
      {
        t: "so 引导决定",
        pattern: "I'm at capacity …, so I'll have to pass.",
        rule: "先陈述现状，再用 so 引出礼貌但清楚的决定。",
        examples: [
          { en: "I'm at capacity until Friday, so I'll have to pass this time.", zh: "周五前满负荷，所以这次先婉拒。" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者为什么觉得 \"soft yes\" 有问题？",
        options: [
          "因为它总是最礼貌的选择",
          "它后来常带来延误、积怨和责任不清",
          "因为它能提高发版速度",
          "因为它只适合邮件、不适合会议"
        ],
        answer: 1,
        explain: "Soft yes answers create bigger problems later: missed deadlines, silent resentment, and unclear ownership."
      },
      {
        type: "fill",
        tag: "语言点",
        q: "A useful pattern is reason + ____ + option.",
        answer: "boundary",
        explain: "原文：reason + boundary + option。"
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "会上想守住范围，文中建议先问什么？",
        options: [
          "Who is the CEO?",
          "What should we drop if we add this?",
          "Can everyone work weekend?",
          "Why is English hard?"
        ],
        answer: 1,
        explain: "\"What should we drop if we add this?\" forces a trade-off into the open."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "\"Can we park it?\" 在文中意思最接近？",
        options: [
          "把车停好",
          "先搁置，稍后再议",
          "立刻删除需求",
          "把任务永久关闭"
        ],
        answer: 1,
        explain: "park it = 先搁置（稍后再议）。"
      }
    ]
  },

  {
    id: "2026-08-10-reading",
    date: "2026-08-10",
    title: "Write a pull request that reviewers actually read",
    source: "IT / 软件开发 · PR 写作短教程",
    tags: ["IT", "Git", "协作"],
    kind: "reading",
    durationMin: 4,
    stats: { words: 400, newWords: 16, minutes: 4 },

    passage: [
      {
        en: "A pull request is not only code. It is a short message to busy reviewers. If the description is empty, people open the diff with no map. They miss the why, ask the same questions in the comments, and the review takes longer than the change itself. In a global team, a clear PR also saves meetings.",
        zh: "Pull request 不只是代码，更是写给忙碌审阅者的短信。描述空着，别人打开 diff 就没有地图：看不出为什么改、在评论里反复问同一问题，评审比改动本身还久。在跨国团队里，清晰的 PR 还能少开几次会。"
      },
      {
        en: "Start with one clear sentence: what changed and why. Example: \"Add retry for the payment webhook so a short network blip does not mark the order as failed.\" Then list what you did not change. Boundaries reduce fear. Reviewers relax when they know the blast radius — which services, tables, or feature flags are touched.",
        zh: "先用一句说清：改了什么、为什么。例如：\"为支付 webhook 加了重试，避免短暂网络抖动把订单标成失败。\" 再列出你没动什么。边界能降低紧张感——审阅者知道爆炸半径后会更放松：动了哪些服务、表或 feature flag。"
      },
      {
        en: "Add a short test plan. Write the exact commands or clicks you used. \"Ran npm test\" is weak. \"Ran npm test payments && manually retried a 500 from the sandbox webhook\" is useful. Good test notes turn review into confirmation, not detective work. If CI is red, say why you still want a first look.",
        zh: "加一段简短测试计划：写你用过的具体命令或点击。\"Ran npm test\" 太弱；\"Ran npm test payments，并在 sandbox webhook 上手动重试了一次 500\" 才有用。好的测试说明让评审变成确认，而不是侦探工作。若 CI 还是红的，说明为何仍想先让人看一眼。"
      },
      {
        en: "Keep the diff small when you can. Large PRs hide risk and tire reviewers. If you must ship a big change, split the description into sections: API, UI, migrations, and follow-ups. Call out anything risky in a warning line at the top, such as a data backfill or a temporary feature flag.",
        zh: "能小就小。大 PR 容易藏风险，也让审阅者疲劳。若必须一次上大改，把描述拆成几块：API、UI、迁移、后续事项。有风险的内容用置顶警告行标出来，比如数据回填或临时 feature flag。"
      },
      {
        en: "End with how to give feedback. \"Please focus on the retry policy; naming can wait.\" This helps reviewers spend time where it matters. Reply to comments with the same clarity: agree, explain, or open a follow-up ticket. A clear PR is a kindness — and it usually gets merged faster.",
        zh: "最后说明希望对方怎么给反馈：\"请先看重试策略；命名可以后说。\" 这能让审阅者把时间花在刀刃上。回复评论时同样清楚：同意、解释，或开一个后续 ticket。清晰的 PR 是一种体贴——也通常合并得更快。"
      }
    ],

    core: {
      words: [
        { w: "pull request", phon: "/pʊl rɪˈkwest/", pos: "n.", def: "合并请求（PR）", ex_en: "A pull request is not only code.", ex_zh: "PR 不只是代码。" },
        { w: "reviewer", phon: "/rɪˈvjuːə/", pos: "n.", def: "代码审阅者", ex_en: "A short message to busy reviewers.", ex_zh: "写给忙碌审阅者的短信。" },
        { w: "blast radius", phon: "/blɑːst ˈreɪdiəs/", pos: "n.", def: "影响范围 / 爆炸半径", ex_en: "They know the blast radius.", ex_zh: "他们知道爆炸半径。" },
        { w: "test plan", phon: "/test plæn/", pos: "n.", def: "测试计划（如何验证）", ex_en: "Add a short test plan.", ex_zh: "加一段简短测试计划。" },
        { w: "follow-up", phon: "/ˈfɒləʊ ʌp/", pos: "n.", def: "后续事项", ex_en: "Migrations and follow-ups.", ex_zh: "迁移与后续事项。" },
        { w: "merge", phon: "/mɜːdʒ/", pos: "v.", def: "合并进主分支", ex_en: "It usually gets merged faster.", ex_zh: "通常合并得更快。" }
      ],
      grammar: [
        { t: "so + 结果", d: "说明目的/结果：Add retry … so a short network blip does not mark the order as failed." },
        { t: "If you must …,", d: "不得不时的建议：If you must ship a big change, split the description…" }
      ]
    },

    vocab: [
      { w: "diff", phon: "/dɪf/", pos: "n.", def: "代码差异", ex_en: "People open the diff with no map.", ex_zh: "别人打开 diff 没有地图。" },
      { w: "webhook", phon: "/ˈwebhʊk/", pos: "n.", def: "Webhook（事件回调接口）", ex_en: "Retry for the payment webhook.", ex_zh: "为支付 webhook 加重试。" },
      { w: "blip", phon: "/blɪp/", pos: "n.", def: "短暂故障 / 小抖动", ex_en: "A short network blip.", ex_zh: "短暂网络抖动。" },
      { w: "boundary", phon: "/ˈbaʊndri/", pos: "n.", def: "边界（改动范围）", ex_en: "Boundaries reduce fear.", ex_zh: "边界能降低紧张感。" },
      { w: "sandbox", phon: "/ˈsændbɒks/", pos: "n.", def: "沙箱 / 测试环境", ex_en: "Retried a 500 from the sandbox.", ex_zh: "在 sandbox 重试了一次 500。" },
      { w: "confirmation", phon: "/ˌkɒnfəˈmeɪʃn/", pos: "n.", def: "确认", ex_en: "Review becomes confirmation.", ex_zh: "评审变成确认。" },
      { w: "detective work", phon: "/dɪˈtektɪv wɜːk/", pos: "n.", def: "像侦探一样翻找线索", ex_en: "Not detective work.", ex_zh: "而不是侦探工作。" },
      { w: "migration", phon: "/maɪˈɡreɪʃn/", pos: "n.", def: "（数据库等）迁移", ex_en: "API, UI, migrations.", ex_zh: "API、UI、迁移。" },
      { w: "call out", phon: "/kɔːl aʊt/", pos: "v. phr.", def: "明确标出 / 点名提醒", ex_en: "Call out anything risky.", ex_zh: "把有风险的标出来。" },
      { w: "risky", phon: "/ˈrɪski/", pos: "adj.", def: "有风险的", ex_en: "Anything risky at the top.", ex_zh: "顶部标出有风险的内容。" },
      { w: "focus on", phon: "/ˈfəʊkəs ɒn/", pos: "v. phr.", def: "把注意力放在…", ex_en: "Please focus on the retry policy.", ex_zh: "请先看重试策略。" },
      { w: "policy", phon: "/ˈpɒləsi/", pos: "n.", def: "策略（规则）", ex_en: "The retry policy.", ex_zh: "重试策略。" },
      { w: "naming", phon: "/ˈneɪmɪŋ/", pos: "n.", def: "命名", ex_en: "Naming can wait.", ex_zh: "命名可以后说。" },
      { w: "kindness", phon: "/ˈkaɪndnəs/", pos: "n.", def: "体贴 / 善意", ex_en: "A clear PR is a kindness.", ex_zh: "清晰的 PR 是一种体贴。" },
      { w: "ship", phon: "/ʃɪp/", pos: "v.", def: "交付 / 上线", ex_en: "If you must ship a big change.", ex_zh: "若必须上线大改。" },
      { w: "empty", phon: "/ˈempti/", pos: "adj.", def: "空的", ex_en: "If the description is empty.", ex_zh: "如果描述是空的。" }
    ],

    grammar: [
      {
        t: "祈使句写 PR 步骤",
        pattern: "Start with … / Add … / Keep … / End with …",
        rule: "工程教程常用祈使句列清单，方便边读边做。",
        examples: [
          { en: "Start with one clear sentence.", zh: "先用一句说清。" },
          { en: "Keep the diff small when you can.", zh: "能小就让 diff 小。" }
        ]
      },
      {
        t: "so 引导结果",
        pattern: "… so … does not …",
        rule: "说明改动目的：这样做是为了避免某个坏结果。",
        examples: [
          { en: "Add retry so a short blip does not mark the order as failed.", zh: "加重试，避免短暂抖动把订单标失败。" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者认为 PR 描述为空时会发生什么？",
        options: [
          "评审一定会更快",
          "审阅者没有地图，容易反复问同样的问题",
          "代码会自动合并",
          "不需要测试计划"
        ],
        answer: 1,
        explain: "People open the diff with no map… ask the same questions…"
      },
      {
        type: "fill",
        tag: "语言点",
        q: "Reviewers relax when they know the ____ radius.",
        answer: "blast",
        explain: "原文：blast radius（影响范围）。"
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "什么样的测试说明更有用？",
        options: [
          "只写 Ran npm test",
          "写清具体命令和你做的手动验证",
          "完全不写测试",
          "只贴截图没有步骤"
        ],
        answer: 1,
        explain: "Exact commands or clicks… sandbox webhook 示例比笼统的 npm test 有用。"
      },
      {
        type: "choice",
        tag: "语言点",
        q: "\"Please focus on the retry policy; naming can wait.\" 的作用是？",
        options: [
          "让审阅者把时间花在最重要的点上",
          "禁止任何人提命名意见",
          "要求立刻重写全部 UI",
          "表示没有测试计划"
        ],
        answer: 0,
        explain: "Helps reviewers spend time where it matters."
      }
    ]
  }

]
