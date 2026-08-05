/**
 * 英语笔记本 · 课程数据
 * ------------------------------------------------------------------
 * kind: "shadow"  — 尚雯婕学习法片段（约 1 分钟，属某系列）
 * kind: "reading" — 每日英语阅读（约 2–5 分钟）
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
  }

]
