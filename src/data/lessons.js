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
 *   生词条：def（中文）+ def_en（英译英）+ syn（近义数组）
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
        { w: "ship", phon: "/ʃɪp/", pos: "v.", def: "交付 / 上线（产品或改动）", def_en: "to deliver or release a product change", syn: ["release", "launch", "roll out"], ex_en: "Ship clearer diffs with fewer surprises.", ex_zh: "用更少意外交付更清晰的 diff。" },
        { w: "brief", phon: "/briːf/", pos: "n.", def: "简短任务说明 / 需求摘要", def_en: "a short note that explains the task", syn: ["summary", "task note", "spec blurb"], ex_en: "Write a short brief in plain English.", ex_zh: "用白话写一段简短 brief。" },
        { w: "working tree", phon: "/ˈwɜːkɪŋ triː/", pos: "n.", def: "（Git）工作区当前文件状态", def_en: "the current files in your Git workspace", syn: ["workspace files", "local changes"], ex_en: "Keep the working tree honest.", ex_zh: "让工作区保持诚实。" },
        { w: "course correction", phon: "/kɔːs kəˈrekʃn/", pos: "n.", def: "中途纠偏 / 调整方向", def_en: "a mid-way change of direction", syn: ["adjustment", "pivot", "redirect"], ex_en: "Course correction is cheaper early.", ex_zh: "越早纠偏越便宜。" },
        { w: "compounds", phon: "/kəmˈpaʊndz/", pos: "v.", def: "产生复利 / 累积放大", def_en: "grows bigger over time by stacking gains", syn: ["builds up", "accumulates", "multiplies"], ex_en: "That is how the tool compounds.", ex_zh: "工具的复利来自这里。" },
        { w: "sharp intent", phon: "/ʃɑːp ɪnˈtent/", pos: "n.", def: "清晰明确的意图", def_en: "a clear and specific goal", syn: ["clear goal", "precise aim"], ex_en: "People who give sharp intent and then verify.", ex_zh: "意图清晰、然后再验收的人。" }
      ],
      grammar: [
        { t: "treat A like B", d: "把 A 当成 B 来对待：treat it like a new coworker。" },
        { t: "not A; it is B", d: "先否定再强调正解：The goal is not to type less; it is to ship clearer diffs." }
      ]
    },

    vocab: [
      { w: "coworker", phon: "/ˈkəʊwɜːkə/", pos: "n.", def: "同事", def_en: "someone you work with", syn: ["colleague", "teammate"], ex_en: "Treat it like a new coworker.", ex_zh: "把它当成新同事。" },
      { w: "clarification", phon: "/ˌklærəfɪˈkeɪʃn/", pos: "n.", def: "澄清 / 说明", def_en: "an explanation that makes something clearer", syn: ["explanation", "clearing-up"], ex_en: "It asks for clarification.", ex_zh: "它会追问澄清。" },
      { w: "diff", phon: "/dɪf/", pos: "n.", def: "代码差异（diff）", def_en: "the code changes between two versions", syn: ["code change", "patch view"], ex_en: "Skim the diff like a code review.", ex_zh: "像 code review 一样扫 diff。" },
      { w: "typo", phon: "/ˈtaɪpəʊ/", pos: "n.", def: "打字错误", def_en: "a small typing mistake", syn: ["misprint", "spelling slip"], ex_en: "Fix a typo first.", ex_zh: "先改一个错别字。" },
      { w: "symbol", phon: "/ˈsɪmbl/", pos: "n.", def: "（代码里的）符号 / 标识符", def_en: "a name used in code, like a function or variable", syn: ["identifier", "name in code"], ex_en: "Rename a symbol carefully.", ex_zh: "小心重命名一个符号。" },
      { w: "vague", phon: "/veɪɡ/", pos: "adj.", def: "模糊的 / 含糊的", def_en: "not clear or not specific", syn: ["unclear", "fuzzy", "ambiguous"], ex_en: "Vague prompts create vague patches.", ex_zh: "模糊的提示会产出模糊的补丁。" },
      { w: "crisp", phon: "/krɪsp/", pos: "adj.", def: "干净利落的 / 明确的", def_en: "clear, short, and easy to act on", syn: ["clear", "precise", "neat"], ex_en: "A crisp brief creates a reviewable PR.", ex_zh: "干净的 brief 换来可审查的 PR。" },
      { w: "stash", phon: "/stæʃ/", pos: "v.", def: "（Git）暂存改动", def_en: "to temporarily save unfinished Git changes", syn: ["set aside", "shelve changes"], ex_en: "Stash unrelated edits first.", ex_zh: "先 stash 无关改动。" },
      { w: "edge case", phon: "/edʒ keɪs/", pos: "n.", def: "边界情况", def_en: "a rare or extreme situation that can break code", syn: ["corner case", "odd case"], ex_en: "Check naming and edge cases.", ex_zh: "检查命名和边界情况。" },
      { w: "pin", phon: "/pɪn/", pos: "v.", def: "钉住 / 固定（约定或版本）", def_en: "to fix something so it does not drift", syn: ["lock", "fix", "freeze"], ex_en: "Pin the repo conventions.", ex_zh: "钉住仓库约定。" },
      { w: "convention", phon: "/kənˈvenʃn/", pos: "n.", def: "约定 / 惯例", def_en: "an agreed way of doing things in a team or repo", syn: ["rule of thumb", "team norm", "standard"], ex_en: "Follow the repo conventions.", ex_zh: "遵守仓库约定。" },
      { w: "constraint", phon: "/kənˈstreɪnt/", pos: "n.", def: "约束条件", def_en: "a limit you must respect", syn: ["limit", "restriction", "boundary"], ex_en: "Stop re-explaining the same constraints.", ex_zh: "别反复重讲同一套约束。" },
      { w: "reusable", phon: "/riːˈjuːzəbl/", pos: "adj.", def: "可复用的", def_en: "able to be used again in other places", syn: ["repeatable", "shareable"], ex_en: "Your taste becomes reusable context.", ex_zh: "你的品味变成可复用的上下文。" },
      { w: "outcome", phon: "/ˈaʊtkʌm/", pos: "n.", def: "结果 / 成果", def_en: "the final result you care about", syn: ["result", "end result"], ex_en: "Measure progress by outcomes.", ex_zh: "用结果衡量进步。" },
      { w: "green CI", phon: "/ɡriːn ˌsiː ˈaɪ/", pos: "n.", def: "持续集成全部通过（绿灯）", def_en: "continuous checks that all pass", syn: ["passing CI", "all tests green"], ex_en: "Time to a green CI.", ex_zh: "等到绿灯 CI 的时间。" },
      { w: "follow-up", phon: "/ˈfɒləʊ ʌp/", pos: "n./adj.", def: "后续（返工/跟进）", def_en: "later work that continues from this task", syn: ["next step", "later fix"], ex_en: "Fewer follow-up fixes.", ex_zh: "更少的后续返工。" },
      { w: "patch", phon: "/pætʃ/", pos: "n.", def: "补丁 / 一小批改动", def_en: "a small set of code changes", syn: ["fix", "small change set"], ex_en: "Accept the first patch.", ex_zh: "接受第一版补丁。" },
      { w: "loop", phon: "/luːp/", pos: "n.", def: "循环 / 闭环", def_en: "a cycle you repeat to improve", syn: ["cycle", "feedback loop"], ex_en: "Learn that loop, and the rest is practice.", ex_zh: "学会这个闭环，剩下的就是练习。" }
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
        { w: "tame", phon: "/teɪm/", pos: "v.", def: "驯养；文中引申为「建立独特联系」", def_en: "to form a special bond (here: make someone unique to you)", syn: ["bond with", "befriend"], ex_en: "The fox wants to be tamed.", ex_zh: "狐狸想被驯养。" },
        { w: "create ties", phon: "/kriːˈeɪt taɪz/", pos: "v. phr.", def: "建立联系 / 纽带", def_en: "to build a personal connection", syn: ["build bonds", "form links"], ex_en: "To create ties so that one person becomes unique.", ex_zh: "建立联系，让某人变得独一无二。" },
        { w: "ritual", phon: "/ˈrɪtʃuəl/", pos: "n.", def: "仪式 / 固定习惯", def_en: "a repeated habit that gives meaning", syn: ["routine", "ceremony", "habit"], ex_en: "Rituals matter.", ex_zh: "仪式感很重要。" },
        { w: "anticipation", phon: "/ænˌtɪsɪˈpeɪʃn/", pos: "n.", def: "期待 / 预期", def_en: "the feeling of looking forward to something", syn: ["expectation", "looking forward"], ex_en: "Anticipation is part of the gift.", ex_zh: "期待本身就是礼物的一部分。" },
        { w: "responsible for", phon: "/rɪˈspɒnsəbl fɔː/", pos: "adj. phr.", def: "对……负责", def_en: "having a duty to care for something", syn: ["accountable for", "in charge of"], ex_en: "You become responsible for what you have tamed.", ex_zh: "你要对你驯养过的一切负责。" },
        { w: "essential", phon: "/ɪˈsenʃl/", pos: "adj.", def: "本质的 / 至关重要的", def_en: "the most important or necessary part", syn: ["vital", "core", "crucial"], ex_en: "What is essential is invisible to the eye.", ex_zh: "本质的东西眼睛看不见。" }
      ],
      grammar: [
        { t: "so that + 结果", d: "表示目的/结果：Come at the same hour so that waiting becomes meaningful." },
        { t: "once + 从句", d: "「一旦……就……」：Once you are tamed, ordinary things change color." }
      ]
    },

    vocab: [
      { w: "quietly", phon: "/ˈkwaɪətli/", pos: "adv.", def: "安静地 / 不动声色地", def_en: "in a calm or low-key way", syn: ["softly", "without fuss"], ex_en: "A quiet lesson about friendship.", ex_zh: "一堂关于友谊的安静课。" },
      { w: "unique", phon: "/juˈniːk/", pos: "adj.", def: "独一无二的", def_en: "one of a kind; not like others", syn: ["one-of-a-kind", "special"], ex_en: "One person becomes unique to another.", ex_zh: "某人对另一个人变得独一无二。" },
      { w: "patiently", phon: "/ˈpeɪʃntli/", pos: "adv.", def: "耐心地", def_en: "in a calm way without rushing", syn: ["calmly", "without hurry"], ex_en: "The fox explains the process patiently.", ex_zh: "狐狸耐心地解释过程。" },
      { w: "meaningful", phon: "/ˈmiːnɪŋfl/", pos: "adj.", def: "有意义的", def_en: "full of purpose or value", syn: ["significant", "worthwhile"], ex_en: "Waiting becomes meaningful.", ex_zh: "等待变得有意义。" },
      { w: "appointment", phon: "/əˈpɔɪntmənt/", pos: "n.", def: "约定 / 约会", def_en: "a planned meeting time", syn: ["meeting", "scheduled time"], ex_en: "An appointment you can feel in advance.", ex_zh: "你能提前感受到的约定。" },
      { w: "remind A of B", phon: "/rɪˈmaɪnd əv/", pos: "v. phr.", def: "使 A 想起 B", def_en: "to make A think of B", syn: ["bring to mind", "make one think of"], ex_en: "The fields remind the fox of the prince.", ex_zh: "田野让狐狸想起王子。" },
      { w: "make one's heart race", phon: "/meɪk hɑːt reɪs/", pos: "v. phr.", def: "让人心跳加速（兴奋/紧张）", def_en: "to make someone feel excited or nervous", syn: ["excite", "make nervous"], ex_en: "A footstep will make his heart race.", ex_zh: "脚步声会让他心跳加速。" },
      { w: "recognition", phon: "/ˌrekəɡˈnɪʃn/", pos: "n.", def: "辨认 / 认出", def_en: "seeing and knowing someone or something", syn: ["knowing", "identifying"], ex_en: "Love is recognition.", ex_zh: "爱是辨认。" },
      { w: "fade", phon: "/feɪd/", pos: "v.", def: "变淡 / 消退", def_en: "to become weaker or less clear", syn: ["dim", "grow faint", "recede"], ex_en: "The rest of the world fades a little.", ex_zh: "其余世界淡了一点。" },
      { w: "owe", phon: "/əʊ/", pos: "v.", def: "欠（责任/人情）", def_en: "to have a duty to give care or thanks", syn: ["be in debt for", "must give"], ex_en: "You owe care.", ex_zh: "你欠下照料。" },
      { w: "invisible", phon: "/ɪnˈvɪzəbl/", pos: "adj.", def: "看不见的", def_en: "not able to be seen", syn: ["unseen", "hidden"], ex_en: "Invisible to the eye.", ex_zh: "眼睛看不见的。" },
      { w: "metric", phon: "/ˈmetrɪk/", pos: "n.", def: "衡量指标", def_en: "a number used to measure progress", syn: ["measure", "KPI", "indicator"], ex_en: "Titles, tools, and metrics are easy to measure.", ex_zh: "头衔、工具、指标都容易衡量。" },
      { w: "loyalty", phon: "/ˈlɔɪəlti/", pos: "n.", def: "忠诚", def_en: "steady support and faithfulness", syn: ["devotion", "allegiance"], ex_en: "Loyalty and patience sit deeper.", ex_zh: "忠诚与耐心更深。" },
      { w: "on purpose", phon: "/ɒn ˈpɜːpəs/", pos: "adv. phr.", def: "故意地 / 有意地", def_en: "done intentionally, not by accident", syn: ["intentionally", "deliberately"], ex_en: "Build ties on purpose.", ex_zh: "有意地建立联系。" },
      { w: "replaceable", phon: "/rɪˈpleɪsəbl/", pos: "adj.", def: "可替换的", def_en: "easy to swap with something else", syn: ["interchangeable", "disposable"], ex_en: "Do not treat people as replaceable parts.", ex_zh: "别把人当成可替换零件。" },
      { w: "travels well", phon: "/ˈtrævlz wel/", pos: "v. phr.", def: "（说法/道理）经得起时间、换场景仍适用", def_en: "still useful in other times or places", syn: ["holds up", "stays relevant"], ex_en: "The fox's advice still travels well.", ex_zh: "狐狸的劝告依然好用。" }
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
        { w: "culture eats strategy", phon: "/ˈkʌltʃə iːts ˈstrætədʒi/", pos: "idiom", def: "文化胜过战略（再好的计划也架不住糟糕协作氛围）", def_en: "team habits beat plans if people fear speaking up", syn: ["culture beats plans", "habits over strategy"], ex_en: "Culture eats strategy.", ex_zh: "文化胜过战略。" },
        { w: "know-it-all", phon: "/ˈnəʊ ɪt ɔːl/", pos: "n./adj.", def: "自以为无所不知的人 / 心态", def_en: "a person who acts as if they already know everything", syn: ["know-all", "closed-minded expert"], ex_en: "A know-it-all protects old answers.", ex_zh: "无所不知的人护着旧答案。" },
        { w: "learn-it-all", phon: "/ˈlɜːn ɪt ɔːl/", pos: "n./adj.", def: "乐于持续学习的人 / 心态", def_en: "a person who stays curious and keeps learning", syn: ["lifelong learner", "curious learner"], ex_en: "Shift from know-it-all to learn-it-all.", ex_zh: "从无所不知转向乐于学习。" },
        { w: "empathy", phon: "/ˈempəθi/", pos: "n.", def: "共情（站在对方处境理解）", def_en: "understanding how another person feels or works", syn: ["perspective-taking", "understanding others"], ex_en: "Empathy here is practical.", ex_zh: "这里的共情很务实。" },
        { w: "friction", phon: "/ˈfrɪkʃn/", pos: "n.", def: "摩擦 / 使用上的卡点", def_en: "small pain points that slow someone down", syn: ["pain point", "hassle", "resistance"], ex_en: "Understand the customer's friction.", ex_zh: "弄清客户的卡点。" },
        { w: "posture", phon: "/ˈpɒstʃə/", pos: "n.", def: "姿态 / 立场（做事态度）", def_en: "the attitude you take toward work or people", syn: ["stance", "mindset", "attitude"], ex_en: "Copy the posture, not the title.", ex_zh: "抄姿态，不必抄头衔。" }
      ],
      grammar: [
        { t: "not A; it is B", d: "先否定再给正解：Curiosity is not soft; it is a survival skill." },
        { t: "If …, you may …", d: "条件 + 可能结果：If your team only debates metrics, you may lose the user." }
      ]
    },

    vocab: [
      { w: "return to", phon: "/rɪˈtɜːn tuː/", pos: "v. phr.", def: "反复回到（某个话题）", def_en: "to come back to the same idea again", syn: ["come back to", "revisit"], ex_en: "He often returns to one idea.", ex_zh: "他常回到一个想法。" },
      { w: "shift", phon: "/ʃɪft/", pos: "n./v.", def: "转变 / 转向", def_en: "a change from one state to another", syn: ["change", "move", "transition"], ex_en: "A shift from know-it-all to learn-it-all.", ex_zh: "从无所不知到乐于学习的转变。" },
      { w: "curious", phon: "/ˈkjʊəriəs/", pos: "adj.", def: "好奇的", def_en: "eager to learn or ask questions", syn: ["inquisitive", "interested"], ex_en: "A learn-it-all stays curious.", ex_zh: "乐于学习的人保持好奇。" },
      { w: "update a view", phon: "/ʌpˈdeɪt ə vjuː/", pos: "v. phr.", def: "更新看法", def_en: "to change your opinion when new facts appear", syn: ["revise an opinion", "change your mind"], ex_en: "Update a view when new facts appear.", ex_zh: "有新事实就更新看法。" },
      { w: "product cycle", phon: "/ˈprɒdʌkt ˈsaɪkl/", pos: "n.", def: "产品周期", def_en: "the repeating process of building and shipping a product", syn: ["release cycle", "dev cycle"], ex_en: "In a fast product cycle.", ex_zh: "在快速产品周期里。" },
      { w: "survival skill", phon: "/səˈvaɪvl skɪl/", pos: "n.", def: "生存技能", def_en: "a skill you need in order to keep succeeding", syn: ["must-have skill", "key skill"], ex_en: "Curiosity is a survival skill.", ex_zh: "好奇心是生存技能。" },
      { w: "ship a feature", phon: "/ʃɪp ə ˈfiːtʃə/", pos: "v. phr.", def: "上线一个功能", def_en: "to release a new product capability to users", syn: ["release a feature", "launch a feature"], ex_en: "Before you ship a feature.", ex_zh: "上线功能之前。" },
      { w: "internal metrics", phon: "/ɪnˈtɜːnl ˈmetrɪks/", pos: "n.", def: "内部指标", def_en: "numbers the company tracks inside itself", syn: ["in-house KPIs", "team stats"], ex_en: "Only debates internal metrics.", ex_zh: "只辩论内部指标。" },
      { w: "invite someone to speak", phon: "/ɪnˈvaɪt tə spiːk/", pos: "v. phr.", def: "邀请某人发言", def_en: "to ask a quieter person to share their view", syn: ["ask to contribute", "draw someone in"], ex_en: "Invite the quietest person to speak.", ex_zh: "请最安静的人发言。" },
      { w: "vague agreement", phon: "/veɪɡ əˈɡriːmənt/", pos: "n.", def: "含糊的同意（没有落实）", def_en: "a soft yes with no clear owner or date", syn: ["fuzzy yes", "unclear buy-in"], ex_en: "Not vague agreement.", ex_zh: "不是含糊同意。" },
      { w: "standup", phon: "/ˈstændʌp/", pos: "n.", def: "站会", def_en: "a short daily team sync meeting", syn: ["daily sync", "scrum standup"], ex_en: "In your next standup.", ex_zh: "在你的下次站会。" },
      { w: "status update", phon: "/ˈsteɪtəs ˌʌpdeɪt/", pos: "n.", def: "状态汇报", def_en: "a short report of what is happening", syn: ["progress report", "status note"], ex_en: "Better than a long status update.", ex_zh: "比一长段状态汇报更好。" },
      { w: "open discussion", phon: "/ˈəʊpən dɪˈskʌʃn/", pos: "v. phr.", def: "打开讨论（让人敢说）", def_en: "to make it safer for people to speak honestly", syn: ["start dialogue", "unlock talk"], ex_en: "That sentence opens better discussion.", ex_zh: "那句话能打开更好的讨论。" },
      { w: "owner", phon: "/ˈəʊnə/", pos: "n.", def: "负责人（对事项负责的人）", def_en: "the person accountable for a task", syn: ["assignee", "DRI", "point person"], ex_en: "End with owners and dates.", ex_zh: "结束时落实负责人和日期。" }
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
        { w: "soft yes", phon: "/sɒft jes/", pos: "n.", def: "勉强答应（心里其实想拒绝）", def_en: "saying yes while you really want to refuse", syn: ["weak yes", "reluctant yes"], ex_en: "A soft yes creates bigger problems later.", ex_zh: "勉强答应之后麻烦更大。" },
        { w: "boundary", phon: "/ˈbaʊndri/", pos: "n.", def: "边界（能力/时间的界限）", def_en: "a clear limit on time, scope, or capacity", syn: ["limit", "line", "cutoff"], ex_en: "Reason + boundary + option.", ex_zh: "原因 + 边界 + 备选。" },
        { w: "at capacity", phon: "/æt kəˈpæsəti/", pos: "adj. phr.", def: "已满负荷 / 排满了", def_en: "already fully booked; no room for more work", syn: ["fully loaded", "maxed out"], ex_en: "I'm at capacity until Friday.", ex_zh: "我周五前都满负荷。" },
        { w: "pass this time", phon: "/pɑːs ðɪs taɪm/", pos: "v. phr.", def: "这次先算了 / 婉拒", def_en: "to politely refuse for now", syn: ["decline for now", "sit this out"], ex_en: "I'll have to pass this time.", ex_zh: "这次只能先婉拒。" },
        { w: "trade-off", phon: "/ˈtreɪd ɒf/", pos: "n.", def: "取舍 / 权衡", def_en: "giving up one thing to gain another", syn: ["compromise", "exchange", "balance"], ex_en: "Forces a trade-off into the open.", ex_zh: "把取舍逼到台面上。" },
        { w: "park it", phon: "/pɑːk ɪt/", pos: "v. phr.", def: "先搁置（稍后再议）", def_en: "to pause a topic and return later", syn: ["set aside", "defer", "table it"], ex_en: "Can we park it?", ex_zh: "先放一放？" }
      ],
      grammar: [
        { t: "can't … because …", d: "拒绝时先给原因：I can't take this on because I'm closing the release." },
        { t: "so + 结果", d: "说明婉拒后果/决定：I'm at capacity, so I'll have to pass." }
      ]
    },

    vocab: [
      { w: "rude", phon: "/ruːd/", pos: "adj.", def: "无礼的 / 粗鲁的", def_en: "impolite or disrespectful", syn: ["impolite", "harsh"], ex_en: "Fear sounding rude.", ex_zh: "怕显得无礼。" },
      { w: "deadline", phon: "/ˈdedlaɪn/", pos: "n.", def: "截止日期", def_en: "the date when work must be finished", syn: ["due date", "cutoff"], ex_en: "Missed deadlines.", ex_zh: "错过截止日期。" },
      { w: "resentment", phon: "/rɪˈzentmənt/", pos: "n.", def: "怨恨 / 不满", def_en: "quiet anger that builds over time", syn: ["bitterness", "grudge"], ex_en: "Silent resentment.", ex_zh: "暗暗积怨。" },
      { w: "ownership", phon: "/ˈəʊnəʃɪp/", pos: "n.", def: "归属责任 / 谁负责", def_en: "clear responsibility for a result", syn: ["accountability", "who owns it"], ex_en: "Unclear ownership.", ex_zh: "责任不清。" },
      { w: "overload", phon: "/ˌəʊvəˈləʊd/", pos: "n.", def: "过载 / 过量工作", def_en: "too much work for the time available", syn: ["too much load", "overwork"], ex_en: "Refuse the overload, not the person.", ex_zh: "拒绝过载，不是拒绝那个人。" },
      { w: "firm", phon: "/fɜːm/", pos: "adj.", def: "坚定的 / 不含糊的", def_en: "clear and steady, not soft or unsure", syn: ["decisive", "resolute", "clear"], ex_en: "Warm but firm.", ex_zh: "暖但立场稳。" },
      { w: "apology", phon: "/əˈpɒlədʒi/", pos: "n.", def: "道歉", def_en: "words that say you are sorry", syn: ["sorry note", "excuse me"], ex_en: "Avoid long apologies.", ex_zh: "别长篇道歉。" },
      { w: "cushion", phon: "/ˈkʊʃn/", pos: "n.", def: "缓冲垫；文中指软化语气的铺垫", def_en: "soft filler words used to soften a message", syn: ["softener", "padding"], ex_en: "Five soft cushions.", ex_zh: "五层软垫式铺垫。" },
      { w: "scope", phon: "/skəʊp/", pos: "n.", def: "范围（项目边界）", def_en: "what is included in the work — and what is not", syn: ["range", "boundaries", "coverage"], ex_en: "Protect the scope.", ex_zh: "守住范围。" },
      { w: "drop", phon: "/drɒp/", pos: "v.", def: "拿掉 / 砍掉（某项）", def_en: "to remove an item from the plan", syn: ["cut", "remove", "leave out"], ex_en: "What should we drop?", ex_zh: "我们该去掉什么？" },
      { w: "priority order", phon: "/praɪˈɒrəti ˈɔːdə/", pos: "n.", def: "优先级排序", def_en: "a ranked list of what matters most first", syn: ["ranked priorities", "order of importance"], ex_en: "Ask for a written priority order.", ex_zh: "请给出书面优先级。" },
      { w: "constraint", phon: "/kənˈstreɪnt/", pos: "n.", def: "约束条件", def_en: "a limit you must respect", syn: ["limit", "restriction", "boundary"], ex_en: "Make constraints visible.", ex_zh: "把约束摆到台面上。" },
      { w: "decline", phon: "/dɪˈklaɪn/", pos: "v.", def: "婉拒 / 谢绝", def_en: "to say no in a polite way", syn: ["refuse", "turn down", "pass"], ex_en: "I need to decline.", ex_zh: "我得婉拒。" },
      { w: "block", phon: "/blɒk/", pos: "v.", def: "阻塞 / 拖后腿", def_en: "to stop progress on a critical path", syn: ["hold up", "obstruct", "stall"], ex_en: "So I don't block the release.", ex_zh: "免得拖发版后腿。" },
      { w: "professional", phon: "/prəˈfeʃənl/", pos: "adj.", def: "专业的", def_en: "polite and appropriate at work", syn: ["work-appropriate", "businesslike"], ex_en: "These lines sound professional.", ex_zh: "这些话听着专业。" }
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
    stats: { words: 390, newWords: 18, minutes: 4 },

    passage: [
      {
        en: "A pull request is not only code. It is a short message to busy reviewers. If the description is empty, people open the diff with no map. They miss the why, ask the same questions in the comments, and the review takes longer than the change itself. In a global team, a clear PR also saves meetings, because context travels with the change instead of living only in your head.",
        zh: "Pull request 不只是代码，更是写给忙碌审阅者的短信。描述空着，别人打开 diff 就没有地图：看不出为什么改、在评论里反复问同一问题，评审比改动本身还久。在跨国团队里，清晰的 PR 还能少开会——上下文跟着改动走，而不是只留在你脑子里。"
      },
      {
        en: "Start with one clear sentence: what changed and why. Example: \"Add retry for the payment webhook so a short network blip does not mark the order as failed.\" Then list what you did not change. Boundaries reduce fear. Reviewers relax when they know the blast radius — which services, tables, or feature flags are touched. If there is a linked ticket, put the ID near the top.",
        zh: "先用一句说清：改了什么、为什么。例如：\"为支付 webhook 加了重试，避免短暂网络抖动把订单标成失败。\" 再列出你没动什么。边界能降低紧张感——审阅者知道爆炸半径后会更放松：动了哪些服务、表或 feature flag。若有关联工单，把编号放在靠前的位置。"
      },
      {
        en: "Add a short test plan. Write the exact commands or clicks you used. \"Ran npm test\" is weak. \"Ran npm test payments && manually retried a 500 from the sandbox webhook\" is useful. Good test notes turn review into confirmation, not detective work. If CI is red, say why you still want a first look, and what remains before merge.",
        zh: "加一段简短测试计划：写你用过的具体命令或点击。\"Ran npm test\" 太弱；\"Ran npm test payments，并在 sandbox webhook 上手动重试了一次 500\" 才有用。好的测试说明让评审变成确认，而不是侦探工作。若 CI 还是红的，说明为何仍想先让人看一眼，以及合并前还剩什么。"
      },
      {
        en: "Keep the diff small when you can. Large PRs hide risk and tire reviewers. If you must ship a big change, split the description into sections: API, UI, migrations, and follow-ups. Call out anything risky in a warning line at the top, such as a data backfill or a temporary feature flag. Screenshots help for UI; sequence notes help for async flows.",
        zh: "能小就小。大 PR 容易藏风险，也让审阅者疲劳。若必须一次上大改，把描述拆成几块：API、UI、迁移、后续事项。有风险的内容用置顶警告行标出来，比如数据回填或临时 feature flag。UI 可配截图；异步流程可写步骤说明。"
      },
      {
        en: "End with how to give feedback. \"Please focus on the retry policy; naming can wait.\" This helps reviewers spend time where it matters. Reply to comments with the same clarity: agree, explain, or open a follow-up ticket. Do not leave threads hanging.",
        zh: "最后说明希望对方怎么给反馈：\"请先看重试策略；命名可以后说。\" 这能让审阅者把时间花在刀刃上。回复评论时同样清楚：同意、解释，或开一个后续 ticket。别让讨论串悬着。"
      },
      {
        en: "Over time, build a personal PR template in your repo. Keep sections for summary, test plan, risk, and rollback. Templates feel boring until a busy Monday arrives. Then they save everyone ten minutes — and those minutes compound across the team. A clear PR is a kindness, and it usually gets merged faster because trust is easier when intent is visible.",
        zh: "慢慢在仓库里建一份个人 PR 模板：摘要、测试计划、风险、回滚。平时觉得无聊，直到某个忙碌的周一才会显出价值。那时能给每人省十分钟——这些分钟在团队里会复利。清晰的 PR 是一种体贴；意图可见时更易建立信任，也通常合并得更快。"
      }
    ],

    core: {
      words: [
        { w: "pull request", phon: "/pʊl rɪˈkwest/", pos: "n.", def: "合并请求（PR）", def_en: "a request to merge code into the main branch", syn: ["PR", "merge request"], ex_en: "A pull request is not only code.", ex_zh: "PR 不只是代码。" },
        { w: "reviewer", phon: "/rɪˈvjuːə/", pos: "n.", def: "代码审阅者", def_en: "a person who checks someone else's code", syn: ["code reviewer", "approver"], ex_en: "A short message to busy reviewers.", ex_zh: "写给忙碌审阅者的短信。" },
        { w: "blast radius", phon: "/blɑːst ˈreɪdiəs/", pos: "n.", def: "影响范围 / 爆炸半径", def_en: "how widely a change can break things", syn: ["impact area", "risk surface"], ex_en: "They know the blast radius.", ex_zh: "他们知道爆炸半径。" },
        { w: "test plan", phon: "/test plæn/", pos: "n.", def: "测试计划（如何验证）", def_en: "steps that show how you verified the change", syn: ["verification steps", "how to test"], ex_en: "Add a short test plan.", ex_zh: "加一段简短测试计划。" },
        { w: "follow-up", phon: "/ˈfɒləʊ ʌp/", pos: "n.", def: "后续事项", def_en: "later work that continues from this task", syn: ["next step", "later fix"], ex_en: "Migrations and follow-ups.", ex_zh: "迁移与后续事项。" },
        { w: "merge", phon: "/mɜːdʒ/", pos: "v.", def: "合并进主分支", def_en: "to combine a branch into the main line", syn: ["land", "integrate"], ex_en: "It usually gets merged faster.", ex_zh: "通常合并得更快。" }
      ],
      grammar: [
        { t: "so + 结果", d: "说明目的/结果：Add retry … so a short network blip does not mark the order as failed." },
        { t: "If you must …,", d: "不得不时的建议：If you must ship a big change, split the description…" }
      ]
    },

    vocab: [
      { w: "diff", phon: "/dɪf/", pos: "n.", def: "代码差异", def_en: "the code changes between two versions", syn: ["code change", "patch view"], ex_en: "People open the diff with no map.", ex_zh: "别人打开 diff 没有地图。" },
      { w: "webhook", phon: "/ˈwebhʊk/", pos: "n.", def: "Webhook（事件回调接口）", def_en: "an HTTP callback triggered by an event", syn: ["event callback", "hook endpoint"], ex_en: "Retry for the payment webhook.", ex_zh: "为支付 webhook 加重试。" },
      { w: "blip", phon: "/blɪp/", pos: "n.", def: "短暂故障 / 小抖动", def_en: "a short, small failure or glitch", syn: ["glitch", "brief outage"], ex_en: "A short network blip.", ex_zh: "短暂网络抖动。" },
      { w: "boundary", phon: "/ˈbaʊndri/", pos: "n.", def: "边界（改动范围）", def_en: "a clear limit on time, scope, or capacity", syn: ["limit", "line", "cutoff"], ex_en: "Boundaries reduce fear.", ex_zh: "边界能降低紧张感。" },
      { w: "sandbox", phon: "/ˈsændbɒks/", pos: "n.", def: "沙箱 / 测试环境", def_en: "a safe test environment, not production", syn: ["test env", "safe playground"], ex_en: "Retried a 500 from the sandbox.", ex_zh: "在 sandbox 重试了一次 500。" },
      { w: "confirmation", phon: "/ˌkɒnfəˈmeɪʃn/", pos: "n.", def: "确认", def_en: "a check that something is correct", syn: ["verification", "double-check"], ex_en: "Review becomes confirmation.", ex_zh: "评审变成确认。" },
      { w: "detective work", phon: "/dɪˈtektɪv wɜːk/", pos: "n.", def: "像侦探一样翻找线索", def_en: "slow searching for clues without a clear map", syn: ["investigation", "guesswork hunt"], ex_en: "Not detective work.", ex_zh: "而不是侦探工作。" },
      { w: "migration", phon: "/maɪˈɡreɪʃn/", pos: "n.", def: "（数据库等）迁移", def_en: "a structured change to data or schema", syn: ["schema change", "data move"], ex_en: "API, UI, migrations.", ex_zh: "API、UI、迁移。" },
      { w: "call out", phon: "/kɔːl aʊt/", pos: "v. phr.", def: "明确标出 / 点名提醒", def_en: "to clearly highlight something important", syn: ["flag", "point out", "highlight"], ex_en: "Call out anything risky.", ex_zh: "把有风险的标出来。" },
      { w: "risky", phon: "/ˈrɪski/", pos: "adj.", def: "有风险的", def_en: "likely to cause problems if wrong", syn: ["dangerous", "high-risk"], ex_en: "Anything risky at the top.", ex_zh: "顶部标出有风险的内容。" },
      { w: "focus on", phon: "/ˈfəʊkəs ɒn/", pos: "v. phr.", def: "把注意力放在…", def_en: "to put attention on one thing first", syn: ["concentrate on", "prioritize"], ex_en: "Please focus on the retry policy.", ex_zh: "请先看重试策略。" },
      { w: "policy", phon: "/ˈpɒləsi/", pos: "n.", def: "策略（规则）", def_en: "a rule that guides how the system behaves", syn: ["rule set", "strategy"], ex_en: "The retry policy.", ex_zh: "重试策略。" },
      { w: "naming", phon: "/ˈneɪmɪŋ/", pos: "n.", def: "命名", def_en: "choosing names for code or APIs", syn: ["name choice", "identifiers"], ex_en: "Naming can wait.", ex_zh: "命名可以后说。" },
      { w: "kindness", phon: "/ˈkaɪndnəs/", pos: "n.", def: "体贴 / 善意", def_en: "a helpful act that reduces others' friction", syn: ["consideration", "care"], ex_en: "A clear PR is a kindness.", ex_zh: "清晰的 PR 是一种体贴。" },
      { w: "ship", phon: "/ʃɪp/", pos: "v.", def: "交付 / 上线", def_en: "to deliver or release a product change", syn: ["release", "launch", "roll out"], ex_en: "If you must ship a big change.", ex_zh: "若必须上线大改。" },
      { w: "empty", phon: "/ˈempti/", pos: "adj.", def: "空的", def_en: "containing nothing useful", syn: ["blank", "vacant"], ex_en: "If the description is empty.", ex_zh: "如果描述是空的。" },
      { w: "rollback", phon: "/ˈrəʊlbæk/", pos: "n.", def: "回滚", def_en: "undoing a release to a previous safe version", syn: ["revert", "undo deploy"], ex_en: "Risk and rollback.", ex_zh: "风险与回滚。" },
      { w: "template", phon: "/ˈtemplət/", pos: "n.", def: "模板", def_en: "a reusable form you fill each time", syn: ["boilerplate", "starter form"], ex_en: "Build a personal PR template.", ex_zh: "建一份个人 PR 模板。" }
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
  },

  {
    id: "2026-08-11-reading",
    date: "2026-08-11",
    title: "Write a bug report that gets fixed fast",
    source: "IT / 软件开发 · Bug 报告短教程",
    tags: ["IT", "协作", "调试"],
    kind: "reading",
    durationMin: 4,
    stats: { words: 410, newWords: 16, minutes: 4 },

    passage: [
      {
        en: "A good bug report is a gift to the next engineer. A weak one creates a long chat thread and little progress. Busy teams do not need perfect writing. They need a clear path: what broke, how to see it again, and what \"fixed\" should look like. If that path is missing, people guess — and guessing wastes a sprint.",
        zh: "一份好的 bug 报告是给下一位工程师的礼物；差的则会拉出很长的聊天串，却几乎没有进展。忙碌的团队不需要完美文笔，需要的是清晰路径：坏了什么、如何复现、怎样才算修好。缺了这条路径，大家只能猜——而猜测会浪费一个 sprint。"
      },
      {
        en: "Start with a one-line summary that a stranger can search later. Prefer facts over feelings: \"Checkout fails with 500 when coupon code is empty\" beats \"Payment is broken again.\" Then state the environment: browser or app version, region, account type, and whether it happens in staging only or also in production. Small details often cut the search space in half.",
        zh: "先写一行摘要，让陌生人以后也能搜到。多用事实、少用情绪：\"优惠码为空时结账返回 500\" 好过 \"支付又坏了。\" 再写环境：浏览器或 App 版本、地区、账号类型，以及只在 staging 出现还是生产也有。小细节常常能把排查范围砍掉一半。"
      },
      {
        en: "Write steps to reproduce as a short checklist. Number them. Include the exact URL, sample input, and the last action before the failure. If it is flaky, say how often it fails — \"3 of 5 tries\" is more useful than \"sometimes.\" Attach a screenshot, a short video, or a request ID from the logs when you have one.",
        zh: "把复现步骤写成简短清单并编号。写上确切 URL、示例输入，以及失败前的最后一步。若不稳定，说明失败频率——\"5 次里 3 次\" 比 \"有时\" 有用得多。有的话附上截图、短视频，或日志里的 request ID。"
      },
      {
        en: "Separate expected result from actual result. Expected: \"Order is created and the user sees a confirmation page.\" Actual: \"API returns 500; UI shows a blank screen.\" This split stops debates about taste and focuses the fix. If you already checked recent deploys or feature flags, note that under \"What I tried.\" It prevents duplicate work.",
        zh: "把期望结果和实际结果分开写。期望：\"订单已创建，用户看到确认页。\" 实际：\"API 返回 500；界面白屏。\" 这样拆开能减少品味之争，把焦点放在修复上。若你已查过最近发版或 feature flag，写在 \"What I tried\" 下面，避免别人重复劳动。"
      },
      {
        en: "End with impact and urgency, but stay calm. \"Blocks checkout for EU users on mobile web\" helps triage. Offer to pair if the bug is hard to catch. In English, these lines travel well in tickets: \"Steps to reproduce,\" \"Expected / Actual,\" and \"Impact.\" Clear reports get fixed faster because trust starts before the first code change.",
        zh: "最后写影响和紧急程度，但语气保持冷静。\"阻塞欧盟用户在 mobile web 上的结账\" 有助于分诊。若 bug 难抓，可以提出结对排查。工单里这几行英文很好用：\"Steps to reproduce\"、\"Expected / Actual\"、\"Impact\"。清晰的报告修得更快——因为信任在第一次改代码之前就开始了。"
      }
    ],

    core: {
      words: [
        { w: "bug report", phon: "/bʌɡ rɪˈpɔːt/", pos: "n.", def: "缺陷报告 / Bug 单", def_en: "a written note that describes a software defect", syn: ["defect ticket", "issue report"], ex_en: "A good bug report is a gift.", ex_zh: "好的 bug 报告是一份礼物。" },
        { w: "reproduce", phon: "/ˌriːprəˈdjuːs/", pos: "v.", def: "复现（再次做出同样问题）", def_en: "to make the same bug happen again on purpose", syn: ["recreate", "trigger again"], ex_en: "Write steps to reproduce.", ex_zh: "写复现步骤。" },
        { w: "flaky", phon: "/ˈfleɪki/", pos: "adj.", def: "不稳定的（有时过有时挂）", def_en: "fails sometimes and passes other times", syn: ["unreliable", "intermittent"], ex_en: "If it is flaky, say how often.", ex_zh: "若不稳定，说明频率。" },
        { w: "expected result", phon: "/ɪkˈspektɪd rɪˈzʌlt/", pos: "n.", def: "期望结果", def_en: "what should happen if the system is correct", syn: ["desired outcome", "should-be result"], ex_en: "Separate expected from actual.", ex_zh: "把期望与实际分开。" },
        { w: "actual result", phon: "/ˈæktʃuəl rɪˈzʌlt/", pos: "n.", def: "实际结果", def_en: "what really happened instead", syn: ["observed result", "what you saw"], ex_en: "Actual: API returns 500.", ex_zh: "实际：API 返回 500。" },
        { w: "triage", phon: "/ˈtriːɑːʒ/", pos: "n./v.", def: "分诊 / 按优先级处理", def_en: "to sort issues by urgency and impact", syn: ["prioritize", "sort by severity"], ex_en: "Impact helps triage.", ex_zh: "影响说明有助于分诊。" }
      ],
      grammar: [
        { t: "Prefer A over B", d: "更推荐 A：Prefer facts over feelings." },
        { t: "If …, say …", d: "条件建议：If it is flaky, say how often it fails." }
      ]
    },

    vocab: [
      { w: "chat thread", phon: "/tʃæt θred/", pos: "n.", def: "聊天串 / 讨论串", def_en: "a long message chain in chat", syn: ["message chain", "discussion thread"], ex_en: "A long chat thread.", ex_zh: "很长的聊天串。" },
      { w: "search space", phon: "/sɜːtʃ speɪs/", pos: "n.", def: "排查范围", def_en: "the set of places you still need to check", syn: ["investigation scope", "places to look"], ex_en: "Cut the search space in half.", ex_zh: "把排查范围砍掉一半。" },
      { w: "staging", phon: "/ˈsteɪdʒɪŋ/", pos: "n.", def: "预发 / 测试环境", def_en: "a pre-production environment for testing", syn: ["pre-prod", "test stage"], ex_en: "Happens in staging only.", ex_zh: "只在 staging 出现。" },
      { w: "production", phon: "/prəˈdʌkʃn/", pos: "n.", def: "生产环境", def_en: "the live environment that real users hit", syn: ["prod", "live env"], ex_en: "Also in production.", ex_zh: "生产环境也有。" },
      { w: "checklist", phon: "/ˈtʃeklɪst/", pos: "n.", def: "核对清单", def_en: "a short numbered list of steps", syn: ["step list", "todo list"], ex_en: "A short checklist.", ex_zh: "简短清单。" },
      { w: "request ID", phon: "/rɪˈkwest aɪˈdiː/", pos: "n.", def: "请求编号（日志追踪用）", def_en: "an ID that helps find one request in logs", syn: ["trace id", "correlation id"], ex_en: "Attach a request ID.", ex_zh: "附上 request ID。" },
      { w: "blank screen", phon: "/blæŋk skriːn/", pos: "n.", def: "白屏", def_en: "a UI that shows nothing useful", syn: ["white screen", "empty UI"], ex_en: "UI shows a blank screen.", ex_zh: "界面白屏。" },
      { w: "deploy", phon: "/dɪˈplɔɪ/", pos: "n./v.", def: "发版 / 部署", def_en: "to put a new version into an environment", syn: ["release", "ship to env"], ex_en: "Checked recent deploys.", ex_zh: "查过最近发版。" },
      { w: "feature flag", phon: "/ˈfiːtʃə flæɡ/", pos: "n.", def: "功能开关", def_en: "a switch that turns a feature on or off", syn: ["feature toggle", "kill switch"], ex_en: "Checked feature flags.", ex_zh: "查过功能开关。" },
      { w: "duplicate work", phon: "/ˈdjuːplɪkeɪt wɜːk/", pos: "n.", def: "重复劳动", def_en: "doing the same investigation twice", syn: ["repeated effort", "rework"], ex_en: "Prevents duplicate work.", ex_zh: "避免重复劳动。" },
      { w: "impact", phon: "/ˈɪmpækt/", pos: "n.", def: "影响（范围/严重度）", def_en: "how many users or flows are hurt", syn: ["effect", "blast", "severity"], ex_en: "End with impact and urgency.", ex_zh: "最后写影响和紧急程度。" },
      { w: "urgency", phon: "/ˈɜːdʒənsi/", pos: "n.", def: "紧急程度", def_en: "how soon the issue needs action", syn: ["time pressure", "priority level"], ex_en: "Impact and urgency.", ex_zh: "影响与紧急程度。" },
      { w: "block", phon: "/blɒk/", pos: "v.", def: "阻塞（关键流程）", def_en: "to stop progress on a critical path", syn: ["hold up", "obstruct", "stall"], ex_en: "Blocks checkout for EU users.", ex_zh: "阻塞欧盟用户结账。" },
      { w: "pair", phon: "/peə/", pos: "v.", def: "结对（一起排查/写代码）", def_en: "to work together with someone in real time", syn: ["pair-program", "debug together"], ex_en: "Offer to pair.", ex_zh: "提出结对排查。" },
      { w: "ticket", phon: "/ˈtɪkɪt/", pos: "n.", def: "工单", def_en: "a tracked work item in a tool like Jira", syn: ["issue", "work item"], ex_en: "These lines travel well in tickets.", ex_zh: "这几行在工单里很好用。" },
      { w: "cut … in half", phon: "/kʌt ɪn hɑːf/", pos: "v. phr.", def: "减半", def_en: "to reduce something by about 50%", syn: ["halve", "reduce by half"], ex_en: "Cut the search space in half.", ex_zh: "把范围砍掉一半。" }
    ],

    grammar: [
      {
        t: "Prefer A over B",
        pattern: "Prefer facts over feelings.",
        rule: "工程写作里常用来对比「更好的写法」和「较差的写法」。",
        examples: [
          { en: "Prefer facts over feelings in the summary.", zh: "摘要里多用事实、少用情绪。" }
        ]
      },
      {
        t: "Expected / Actual 对照",
        pattern: "Expected: …. Actual: ….",
        rule: "Bug 单固定结构：先写应该怎样，再写实际怎样，减少误解。",
        examples: [
          { en: "Expected: Order is created. Actual: API returns 500.", zh: "期望：订单已创建。实际：API 返回 500。" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者认为好的 bug 报告最需要提供什么？",
        options: [
          "完美的文学修辞",
          "清晰路径：坏了什么、如何复现、怎样算修好",
          "一长串情绪抱怨",
          "只贴一张截图、不写步骤"
        ],
        answer: 1,
        explain: "They need a clear path: what broke, how to see it again, and what \"fixed\" should look like."
      },
      {
        type: "fill",
        tag: "语言点",
        q: "Write steps to ____ as a short checklist.",
        answer: "reproduce",
        explain: "原文：steps to reproduce（复现步骤）。"
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "为什么要把 Expected 和 Actual 分开写？",
        options: [
          "为了让工单看起来更长",
          "减少品味之争，把焦点放在修复上",
          "这样就不需要环境信息",
          "这样可以跳过复现步骤"
        ],
        answer: 1,
        explain: "This split stops debates about taste and focuses the fix."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "文中 \"triage\" 最接近的意思是？",
        options: [
          "写单元测试",
          "按优先级分诊处理",
          "合并 pull request",
          "删除旧工单"
        ],
        answer: 1,
        explain: "Impact helps triage = 影响说明有助于按优先级处理。"
      }
    ]
  },

  {
    id: "2026-08-12-reading",
    date: "2026-08-12",
    title: "Why your code review comments get ignored",
    source: "IT / 软件开发 · 评审沟通工程文",
    tags: ["IT", "协作", "代码评审"],
    kind: "reading",
    durationMin: 5,
    stats: { words: 350, newWords: 20, minutes: 5 },

    passage: [
      {
        en: "Most review comments fail not because they are wrong, but because they arrive without context. A reviewer writes \"this looks wrong\" and moves on; the author stares at the line, guesses the intent, and either pushes back defensively or applies a shallow fix that misses the real risk. The comment was technically correct — and practically useless.",
        zh: "多数评审意见失败，不是因为说错了，而是因为脱离上下文。审阅者丢下一句 \"this looks wrong\" 就走了；作者盯着那行代码猜意图，要么防御性地顶回去，要么做个浅层修补，恰好漏掉真正的风险。这条意见技术上正确——实际上没用。"
      },
      {
        en: "Effective reviewers separate three kinds of feedback that authors often conflate. A blocker says: this will break in production, and here is the failure mode. A suggestion says: there is a cleaner path, and here is the trade-off. A question says: I might be missing something — help me see the constraint you were solving. When you label the kind, you remove the guesswork about how seriously to take it.",
        zh: "高效的审阅者会区分三类反馈，而作者常常混为一谈。blocker 说：这会在生产上出问题，失效模式如下。suggestion 说：有条更干净的路，取舍如下。question 说：可能是我漏了什么——帮我看看你当时面对的约束。标清类别，就消除了「该多认真对待」的猜测。"
      },
      {
        en: "The strongest comments follow a simple shape: observation, then reasoning, then a concrete next step. \"This query runs inside a loop (observation). With 10k rows it will issue 10k round trips and time out under load (reasoning). Could we batch it into one WHERE IN clause? (next step)\" Notice what is absent: no judgment about the author's skill, no vague discomfort. The author can verify each claim independently instead of trusting your seniority.",
        zh: "最有力的意见遵循一个简单结构：观察、推理、具体的下一步。\"这个查询在循环里（观察）。一万行数据会产生一万次往返，负载下会超时（推理）。能不能合并成一条 WHERE IN？（下一步）\" 注意缺了什么：没有对作者水平的评判，没有含糊的不安。作者可以独立验证每一条论断，而不是靠你的资历买账。"
      },
      {
        en: "Tone matters more in writing than in speech, because the reader supplies the voice. \"Why would you do it this way?\" reads as an attack even when you meant honest curiosity. Rephrase with the constraint visible: \"I expected this to reuse the existing cache — was there a reason to bypass it?\" You are not being softer; you are being more precise about what you actually want to know.",
        zh: "书面语气比口头更重要，因为读者会自己脑补声音。\"你为什么要这么做？\" 即使你只是好奇，读起来也像攻击。把约束摆出来重写：\"我以为这里会复用现有缓存——绕开它是有原因的吗？\" 你不是在变软弱，而是在更精确地表达你到底想知道什么。"
      },
      {
        en: "Finally, close the loop. When an author addresses your comment, say so explicitly — \"resolved, thanks\" costs two seconds and ends the thread. When you disagree after their reply, restate the risk rather than repeating the request: repetition reads as stubbornness, while a sharpened risk statement gives the author new material to work with. Reviews are a negotiation about shared ownership, and the goal is not to win the thread but to ship code the whole team can maintain.",
        zh: "最后，闭环。作者处理完你的意见，就明确说一句——\"resolved, thanks\" 两秒钟，讨论串就此终结。若回复后你仍不同意，重申风险而不是重复要求：重复读起来像固执，而一条更锐利的风险陈述能给作者新的处理材料。评审是一场关于共同所有权的协商，目标不是赢讨论串，而是交付全团队都能维护的代码。"
      }
    ],

    core: {
      words: [
        { w: "blocker", phon: "/ˈblɒkə/", pos: "n.", def: "阻塞项（不改不能合并的问题）", def_en: "feedback that must be fixed before merging", syn: ["must-fix", "showstopper"], ex_en: "A blocker says: this will break in production.", ex_zh: "blocker 说：这会在生产上出问题。" },
        { w: "failure mode", phon: "/ˈfeɪljə məʊd/", pos: "n.", def: "失效模式（具体会怎么坏）", def_en: "the specific way a system will break", syn: ["break scenario", "way it fails"], ex_en: "Here is the failure mode.", ex_zh: "失效模式如下。" },
        { w: "trade-off", phon: "/ˈtreɪd ɒf/", pos: "n.", def: "取舍 / 权衡", def_en: "what you give up to gain something else", syn: ["compromise", "exchange"], ex_en: "Here is the trade-off.", ex_zh: "取舍如下。" },
        { w: "conflate", phon: "/kənˈfleɪt/", pos: "v.", def: "混为一谈（把不同东西当成一回事）", def_en: "to treat two different things as if they were the same", syn: ["mix up", "lump together"], ex_en: "Authors often conflate the three kinds.", ex_zh: "作者常把三类混为一谈。" },
        { w: "round trip", phon: "/raʊnd trɪp/", pos: "n.", def: "（网络）往返一次", def_en: "one full request and response across the network", syn: ["network hop", "request cycle"], ex_en: "It will issue 10k round trips.", ex_zh: "会产生一万次往返。" },
        { w: "close the loop", phon: "/kləʊz ðə luːp/", pos: "v. phr.", def: "闭环（把讨论收尾、确认完成）", def_en: "to confirm a thread is finished so nothing hangs", syn: ["wrap up", "confirm done"], ex_en: "Finally, close the loop.", ex_zh: "最后，闭环。" }
      ],
      grammar: [
        { t: "not because … but because …", d: "先否定表层原因再给出真因：They fail not because they are wrong, but because they arrive without context." },
        { t: "the + 比较级 … the + 比较级", d: "程度联动：The stronger the claim, the more evidence it needs." }
      ]
    },

    vocab: [
      { w: "push back", phon: "/pʊʃ bæk/", pos: "v. phr.", def: "顶回去 / 表示异议", def_en: "to argue against a suggestion", syn: ["object", "resist", "challenge"], ex_en: "The author pushes back defensively.", ex_zh: "作者防御性地顶回去。" },
      { w: "shallow fix", phon: "/ˈʃæləʊ fɪks/", pos: "n.", def: "浅层修补（只改表面）", def_en: "a quick patch that misses the root cause", syn: ["surface patch", "band-aid fix"], ex_en: "A shallow fix misses the real risk.", ex_zh: "浅层修补漏掉真正的风险。" },
      { w: "suggestion", phon: "/səˈdʒestʃən/", pos: "n.", def: "建议（可改可不改）", def_en: "optional feedback the author may take or leave", syn: ["optional idea", "nice-to-have"], ex_en: "A suggestion offers a cleaner path.", ex_zh: "suggestion 给出更干净的路。" },
      { w: "constraint", phon: "/kənˈstreɪnt/", pos: "n.", def: "约束条件（当时面对的限制）", def_en: "a limit the author was working within", syn: ["limit", "restriction"], ex_en: "Help me see the constraint you were solving.", ex_zh: "帮我看看你当时面对的约束。" },
      { w: "guesswork", phon: "/ˈɡeswɜːk/", pos: "n.", def: "猜测 / 瞎猜", def_en: "deciding by guessing instead of facts", syn: ["guessing", "speculation"], ex_en: "You remove the guesswork.", ex_zh: "消除了猜测。" },
      { w: "observation", phon: "/ˌɒbzəˈveɪʃn/", pos: "n.", def: "观察（客观看到的事实）", def_en: "a neutral fact you can point to", syn: ["finding", "what you see"], ex_en: "Start with observation, then reasoning.", ex_zh: "先观察，再推理。" },
      { w: "reasoning", phon: "/ˈriːzənɪŋ/", pos: "n.", def: "推理（为什么这是问题）", def_en: "the logic that connects a fact to a risk", syn: ["logic", "rationale"], ex_en: "Then add your reasoning.", ex_zh: "再加上你的推理。" },
      { w: "batch", phon: "/bætʃ/", pos: "v./n.", def: "批处理（合并成一批）", def_en: "to group many small operations into one", syn: ["group", "bundle"], ex_en: "Batch it into one WHERE IN clause.", ex_zh: "合并成一条 WHERE IN。" },
      { w: "time out", phon: "/taɪm aʊt/", pos: "v. phr.", def: "超时", def_en: "to fail because it took too long", syn: ["exceed the limit", "expire"], ex_en: "It will time out under load.", ex_zh: "负载下会超时。" },
      { w: "verify", phon: "/ˈverɪfaɪ/", pos: "v.", def: "验证（独立确认真假）", def_en: "to check something yourself to confirm it", syn: ["check", "confirm", "validate"], ex_en: "The author can verify each claim.", ex_zh: "作者可独立验证每条论断。" },
      { w: "seniority", phon: "/ˌsiːniˈɒrəti/", pos: "n.", def: "资历（职位年资带来的权威）", def_en: "authority that comes from years in a role", syn: ["rank", "experience level"], ex_en: "Instead of trusting your seniority.", ex_zh: "而不是靠你的资历买账。" },
      { w: "supply the voice", phon: "/səˈplaɪ ðə vɔɪs/", pos: "v. phr.", def: "（读者）脑补语气", def_en: "the reader imagines your tone when reading text", syn: ["imagine the tone", "hear it in their head"], ex_en: "The reader supplies the voice.", ex_zh: "读者会自己脑补声音。" },
      { w: "bypass", phon: "/ˈbaɪpɑːs/", pos: "v.", def: "绕过（不走某环节）", def_en: "to go around something instead of through it", syn: ["skip", "go around", "circumvent"], ex_en: "Was there a reason to bypass it?", ex_zh: "绕开它是有原因的吗？" },
      { w: "address a comment", phon: "/əˈdres ə ˈkɒment/", pos: "v. phr.", def: "处理某条评审意见", def_en: "to respond to and resolve a review comment", syn: ["resolve", "handle", "act on"], ex_en: "When an author addresses your comment.", ex_zh: "当作者处理完你的意见。" },
      { w: "restate", phon: "/ˌriːˈsteɪt/", pos: "v.", def: "重申（换种方式再说）", def_en: "to say again in clearer or sharper words", syn: ["rephrase", "say again"], ex_en: "Restate the risk rather than repeating.", ex_zh: "重申风险而不是重复要求。" },
      { w: "stubbornness", phon: "/ˈstʌbənəs/", pos: "n.", def: "固执 / 顽固", def_en: "refusing to move even when given reasons", syn: ["obstinacy", "digging in"], ex_en: "Repetition reads as stubbornness.", ex_zh: "重复读起来像固执。" },
      { w: "negotiation", phon: "/nɪˌɡəʊʃiˈeɪʃn/", pos: "n.", def: "协商 / 谈判", def_en: "a discussion where both sides adjust", syn: ["give-and-take", "discussion"], ex_en: "Reviews are a negotiation about shared ownership.", ex_zh: "评审是关于共同所有权的协商。" },
      { w: "shared ownership", phon: "/ʃeəd ˈəʊnəʃɪp/", pos: "n.", def: "共同所有权（代码归全团队）", def_en: "the idea that the whole team owns the code", syn: ["collective ownership", "team-owned code"], ex_en: "A negotiation about shared ownership.", ex_zh: "关于共同所有权的协商。" },
      { w: "maintain", phon: "/meɪnˈteɪn/", pos: "v.", def: "维护（长期改动与修复）", def_en: "to keep code working and changeable over time", syn: ["keep up", "support", "look after"], ex_en: "Code the whole team can maintain.", ex_zh: "全团队都能维护的代码。" },
      { w: "win the thread", phon: "/wɪn ðə θred/", pos: "v. phr.", def: "赢下讨论串（争赢而非解决问题）", def_en: "to treat the discussion as a contest to win", syn: ["win the argument", "come out on top"], ex_en: "The goal is not to win the thread.", ex_zh: "目标不是赢讨论串。" }
    ],

    grammar: [
      {
        t: "not because … but because …",
        pattern: "X happens not because A, but because B.",
        rule: "先否定人们以为的原因，再给出真正的原因，论证更有力。",
        examples: [
          { en: "Comments fail not because they are wrong, but because they lack context.", zh: "意见失败不是因为错，而是缺上下文。" },
          { en: "You are not being softer; you are being more precise.", zh: "你不是在变软弱，而是更精确。" }
        ]
      },
      {
        t: "祈使 + 引号示例",
        pattern: "Rephrase with …: \"…\"",
        rule: "给出改写示范时，先给方法再给可直接抄的原句。",
        examples: [
          { en: "Rephrase with the constraint visible: \"Was there a reason to bypass it?\"", zh: "把约束摆出来重写：「绕开它是有原因的吗？」" }
        ]
      }
    ],

    quiz: [
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者认为评审意见失败的真正原因是什么？",
        options: [
          "意见本身技术上就是错的",
          "意见脱离上下文，作者只能猜意图",
          "作者水平太低看不懂",
          "评审工具太难用"
        ],
        answer: 1,
        explain: "Most review comments fail not because they are wrong, but because they arrive without context."
      },
      {
        type: "fill",
        tag: "语言点",
        q: "The strongest comments follow a simple shape: observation, then ____, then a concrete next step.",
        answer: "reasoning",
        explain: "原文结构：observation → reasoning → next step。"
      },
      {
        type: "choice",
        tag: "阅读理解",
        q: "作者建议如何处理「不同意作者的回复」？",
        options: [
          "重复原来的要求直到对方照做",
          "直接用自己的资历压过去",
          "重申风险而不是重复要求",
          "放弃并假装同意"
        ],
        answer: 2,
        explain: "Restate the risk rather than repeating the request."
      },
      {
        type: "choice",
        tag: "语言点",
        q: "文中 \"close the loop\" 最接近的意思是？",
        options: [
          "关闭代码仓库",
          "确认讨论收尾、不留悬而未决",
          "绕开评审直接合并",
          "删除所有评论"
        ],
        answer: 1,
        explain: "Close the loop = 闭环，确认处理完毕、结束讨论串。"
      }
    ]
  }

]
