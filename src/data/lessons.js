/**
 * 英语笔记本 · 课程数据
 * ------------------------------------------------------------------
 * 由 Claude 分析后追加到下面的数组里。完整字段说明见 README.md / CLAUDE.md。
 *
 * 字段速查：
 *   id        唯一标识，一般用日期（同一天多篇用 日期-2）
 *   date      YYYY-MM-DD（标题会自动以它开头显示）
 *   title     中文摘要标题
 *   source    来源（可选）：会议 / TED / 邮件 / 文章 …
 *   tags      标签数组（可选）
 *   passage   中英对照正文 [{ en, zh }]
 *   core      右侧标注栏 { words:[{w,phon,pos,def,ex_en,ex_zh}], grammar:[{t,d}] }
 *   vocab     底部生词表  [{ w, phon, pos, def, ex_en, ex_zh }]
 *   grammar   底部语法详解 [{ t, pattern, rule, examples:[{en,zh}] }]
 *   sentences 难句分析（可选）[{ en, zh, analysis }]
 *   quiz      练习题（可选）[{ type, tag, q, options?, answer, explain }]
 *             type: "choice" | "fill"   tag: "语言点" | "阅读理解"
 * ------------------------------------------------------------------ */
export const LESSONS = [

  {
    id: "2026-07-26",
    date: "2026-07-26",
    title: "为什么「找附近的车」这么难：空间索引与 B 树",
    source: "YouTube 技术讲解（字幕整理）",
    tags: ["技术", "数据库", "系统设计"],

    passage: [
      {
        en: "Your database can easily find every user between age 20 and 30 in milliseconds. But when you ask it to find every driver within two kilometers of a rider for an Uber-like app, it falls over.",
        zh: "你的数据库可以在几毫秒内找到所有年龄在 20 到 30 岁之间的用户。但当你让它为一个类似 Uber 的应用，找出某位乘客两公里内的所有司机时，它就崩了。"
      },
      {
        en: "Now, on the surface, these two queries look really similar, but they're actually very different. The age query is fast because a B-tree keeps sorted keys packed together on disk. 20 sits next to 21, sits next to 22. They're all on the same page. So everyone between 20 and 30 is one seek and a short read.",
        zh: "表面上看，这两个查询非常相似，但实际上截然不同。年龄查询之所以快，是因为 B 树把排好序的键紧密地存在磁盘上：20 紧挨着 21，21 紧挨着 22，它们都在同一页（page）里。所以 20 到 30 岁之间的所有人，只需一次寻道加一小段读取。"
      },
      {
        en: "Location doesn't work that way. You have two numbers, latitude and longitude, and what you care about is the straight-line distance between two points. Two B-trees don't save you here either. One on latitude gives you a horizontal strip of the earth; one on longitude gives you a vertical strip of the earth, and their intersection is still millions of rows that you have to check the distance between — by hand.",
        zh: "位置数据不是这样工作的。你有两个数——纬度和经度，而你真正在意的是两点之间的直线距离。建两棵 B 树也救不了你：一棵按纬度建，给你的是地球上的一条水平条带；一棵按经度建，给的是一条垂直条带；它们的交集仍然有数百万行，你得逐个手动算它们和你关注点之间的距离。"
      },
      {
        en: "Now, the real problem is that 1D sort order doesn't preserve 2D closeness. Take two cabs parked five blocks apart in Midtown Manhattan — they're neighbors. But if your 1D index sorts on longitude alone, every other cab in the city at a longitude between them, from the Bronx down to Staten Island, gets crammed into the index between these two neighbors. They're a block apart on the street and millions of rows apart in your database. Any naive flattening of 2D into 1D rips apart the relationship we actually care about.",
        zh: "真正的问题在于：一维的排序顺序，无法保持二维上的「相邻」。以停在曼哈顿中城、相隔五个街区的两辆出租车为例——它们是邻居。但如果你的一维索引只按经度排序，那么城市里所有经度介于两者之间的出租车，从布朗克斯一直到斯塔滕岛，都会被硬塞进索引里这两位邻居之间。它们在街上只隔一个街区，在数据库里却相隔数百万行。任何把二维粗暴压扁成一维的做法，都会撕裂我们真正在意的那种关系。"
      },
      {
        en: "Now, every modern production system — PostGIS, Elasticsearch, Redis, Google Maps, Uber — has converged on one of two approaches to solving this proximity search problem: either build a custom tree like a B-tree, but specially tuned for location, or turn latitude and longitude into a single key that a plain B-tree can already sort. Why is the B-tree the prize? Because it's the one data structure databases have spent 50 years tuning. It stays balanced as data changes. It packs sorted keys into disk pages, so a range query is one seek and a sweep — and every database you'd ever reach for ships one. If you can squeeze your spatial problem into a B-tree shape, you inherit all of that for free.",
        zh: "如今，每一个现代生产系统——PostGIS、Elasticsearch、Redis、Google Maps、Uber——都殊途同归，用以下两种方法之一来解决这个邻近搜索问题：要么建一棵像 B 树那样、但专门为位置数据调优的定制树；要么把纬度和经度转换成一个普通 B 树就能排序的单一键。为什么 B 树是「终极奖品」？因为它是数据库界花了 50 年去打磨的那一种数据结构。数据变动时它能保持平衡；它把排好序的键塞进磁盘页里，所以一次范围查询只需一次寻道加一段扫描——而你会用到的每一个数据库，都内置了这么一棵。如果你能把空间问题塞进 B 树的形状里，这些好处你就白捡了。"
      },
      {
        en: "Now, this sounds more complicated than it is. Both approaches end up at the same prize: a B-tree of pages on disk that you can range-scan. Let's walk through how we get there.",
        zh: "这听起来比实际更复杂。两种方法最终都指向同一个目标：一棵由磁盘页组成的、可做范围扫描的 B 树。下面我们就一步步来看看，是怎么走到这一步的。"
      }
    ],

    core: {
      words: [
        { w: "fall over", phon: "/fɔːl ˈəʊvə/", pos: "phr. v.", def: "（系统）崩溃 / 挂掉 / 罢工", ex_en: "The database falls over under heavy load.", ex_zh: "数据库在高负载下崩了。" },
        { w: "on the surface", phon: "/ɒn ðə ˈsɜːfɪs/", pos: "phr.", def: "乍看之下 / 表面上", ex_en: "On the surface, the two queries look similar.", ex_zh: "乍一看，这两个查询很像。" },
        { w: "converge on", phon: "/kənˈvɜːdʒ ɒn/", pos: "phr. v.", def: "趋同于 / 殊途同归地采用", ex_en: "They converged on the same solution.", ex_zh: "他们殊途同归，采用了同一个方案。" },
        { w: "reach for", phon: "/riːtʃ fɔː(r)/", pos: "phr. v.", def: "（需要时）动用 / 求助于 / 伸手去取", ex_en: "every database you'd ever reach for", ex_zh: "你会用到的每一个数据库" },
        { w: "inherit", phon: "/ɪnˈherɪt/", pos: "v.", def: "继承（好处/特性）——常搭配 for free", ex_en: "You inherit all of that for free.", ex_zh: "这些好处你白捡。" },
        { w: "walk through", phon: "/wɔːk θruː/", pos: "phr. v.", def: "一步步讲解 / 带着过一遍", ex_en: "Let me walk you through it.", ex_zh: "我来带你一步步过一遍。" }
      ],
      grammar: [
        { t: "what 引导的强调句（cleft）", d: "What you care about is … 把真正在意的内容提到句首强调，讲解/口语里极常见。" },
        { t: "either … or …", d: "二选一连接结构：「要么……要么……」。" }
      ]
    },

    vocab: [
      { w: "B-tree", phon: "/ˈbiː triː/", pos: "n.", def: "B 树（数据库索引最常用的平衡多路查找树）", ex_en: "A B-tree keeps sorted keys packed together.", ex_zh: "B 树把排好序的键紧密存放。" },
      { w: "range query", phon: "/reɪndʒ ˈkwɪəri/", pos: "n.", def: "范围查询（如 between 20 and 30）", ex_en: "A range query is one seek and a sweep.", ex_zh: "一次范围查询只需一次寻道加一段扫描。" },
      { w: "seek", phon: "/siːk/", pos: "n.", def: "（磁盘）寻道", ex_en: "It takes one seek to find the start.", ex_zh: "找到起点只需一次寻道。" },
      { w: "page", phon: "/peɪdʒ/", pos: "n.", def: "（磁盘）数据页", ex_en: "They're all on the same page.", ex_zh: "它们都在同一页里。" },
      { w: "index", phon: "/ˈɪndeks/", pos: "n.", def: "索引", ex_en: "Build an index on latitude.", ex_zh: "在纬度上建索引。" },
      { w: "latitude", phon: "/ˈlætɪtjuːd/", pos: "n.", def: "纬度", ex_en: "Latitude and longitude locate a point.", ex_zh: "经纬度定位一个点。" },
      { w: "longitude", phon: "/ˈlɒndʒɪtjuːd/", pos: "n.", def: "经度", ex_en: "Sort on longitude alone.", ex_zh: "只按经度排序。" },
      { w: "straight-line distance", phon: "/ˌstreɪtˈlaɪn ˈdɪstəns/", pos: "n.", def: "直线距离", ex_en: "What you care about is the straight-line distance.", ex_zh: "你在意的是直线距离。" },
      { w: "intersection", phon: "/ˌɪntəˈsekʃn/", pos: "n.", def: "交集 / 交叉处", ex_en: "Their intersection is still millions of rows.", ex_zh: "它们的交集仍有数百万行。" },
      { w: "sort order", phon: "/sɔːt ˈɔːdə/", pos: "n.", def: "排序顺序", ex_en: "1D sort order doesn't preserve 2D closeness.", ex_zh: "一维排序无法保持二维相邻。" },
      { w: "preserve", phon: "/prɪˈzɜːv/", pos: "v.", def: "保持 / 保留", ex_en: "It doesn't preserve the relationship.", ex_zh: "它无法保持这种关系。" },
      { w: "fall over", phon: "/fɔːl ˈəʊvə/", pos: "phr. v.", def: "（系统）崩溃 / 失败", ex_en: "The app falls over on launch day.", ex_zh: "上线当天应用就崩了。" },
      { w: "on the surface", phon: "/ɒn ðə ˈsɜːfɪs/", pos: "phr.", def: "乍看之下 / 表面上", ex_en: "On the surface it looks easy.", ex_zh: "乍看之下它很简单。" },
      { w: "pack together", phon: "/pæk təˈɡeðə/", pos: "phr. v.", def: "紧密排列 / 打包在一起", ex_en: "Keys are packed together on disk.", ex_zh: "键被紧密地存在磁盘上。" },
      { w: "by hand", phon: "/baɪ hænd/", pos: "phr.", def: "手动地 / 人工地", ex_en: "You check the distance by hand.", ex_zh: "你手动逐个核对距离。" },
      { w: "cram into", phon: "/kræm ˈɪntə/", pos: "phr. v.", def: "硬塞进 / 挤进", ex_en: "Other cabs get crammed into the index.", ex_zh: "别的出租车被硬塞进索引里。" },
      { w: "rip apart", phon: "/rɪp əˈpɑːt/", pos: "phr. v.", def: "撕裂 / 拆散", ex_en: "It rips apart the relationship we care about.", ex_zh: "它撕裂了我们关心的关系。" },
      { w: "converge on", phon: "/kənˈvɜːdʒ ɒn/", pos: "phr. v.", def: "趋同于 / 汇聚到（同一方案）", ex_en: "All systems converge on one approach.", ex_zh: "所有系统都殊途同归。" },
      { w: "tune", phon: "/tjuːn/", pos: "v.", def: "调优 / 微调", ex_en: "A tree specially tuned for location.", ex_zh: "一棵专门为位置数据调优的树。" },
      { w: "reach for", phon: "/riːtʃ fɔː(r)/", pos: "phr. v.", def: "（需要时）动用 / 求助于", ex_en: "Every database you'd reach for ships one.", ex_zh: "你会用到的每个数据库都自带一棵。" },
      { w: "inherit", phon: "/ɪnˈherɪt/", pos: "v.", def: "继承（搭配 for free 表白捡）", ex_en: "You inherit all of that for free.", ex_zh: "这些好处你白捡。" },
      { w: "squeeze into", phon: "/skwiːz ˈɪntə/", pos: "phr. v.", def: "塞进 / 挤进（某种形状/空间）", ex_en: "Squeeze your problem into a B-tree shape.", ex_zh: "把你的问题塞进 B 树的形状里。" },
      { w: "walk through", phon: "/wɔːk θruː/", pos: "phr. v.", def: "一步步讲解 / 带着过一遍", ex_en: "Let's walk through how we get there.", ex_zh: "我们来一步步看看怎么做到。" },
      { w: "proximity", phon: "/prɒkˈsɪməti/", pos: "n.", def: "邻近 / 接近", ex_en: "a proximity search problem", ex_zh: "一个邻近搜索问题" },
      { w: "range-scan", phon: "/ˈreɪndʒ skæn/", pos: "n./v.", def: "范围扫描", ex_en: "a B-tree of pages that you can range-scan", ex_zh: "一棵可做范围扫描的、由页组成的 B 树" }
    ],

    grammar: [
      {
        t: "what 引导的强调句（cleft sentence）",
        pattern: "What + 主语 + 谓语 + is + 被强调的部分",
        rule: "用 what 把想强调的名词性成分引到句首，等于「……的，正是 X」。常用来点明「真正重要的是什么」，讲解和口语里非常高频。",
        examples: [
          { en: "What you care about is the straight-line distance.", zh: "你真正在意的，是直线距离。" },
          { en: "What I need is more time.", zh: "我需要的是更多时间。" },
          { en: "What surprised me was his honesty.", zh: "让我意外的是他的坦诚。" }
        ]
      },
      {
        t: "either … or …（要么……要么……）",
        pattern: "either + 选项A + or + 选项B",
        rule: "二选一的并列结构，连接两个对等的成分（词、短语或句子）。否定句常用 neither … nor …。",
        examples: [
          { en: "Either build a custom tree, or turn lat/long into a single key.", zh: "要么建一棵定制树，要么把经纬度转成一个键。" },
          { en: "You can either call or email.", zh: "你可以打电话，也可以发邮件。" }
        ]
      },
      {
        t: "真实条件句（if + 现在时，现在时表普遍结果）",
        pattern: "If + 主语 + 现在时, 主语 + 现在时",
        rule: "描述普遍成立、可重复的因果关系（不是某个具体未来事件），主从句都用一般现在时。技术讲解里常用来陈述「这样做，就会得到这个好处」。",
        examples: [
          { en: "If you can squeeze your spatial problem into a B-tree shape, you inherit all of that for free.", zh: "如果你能把空间问题塞进 B 树的形状里，这些好处就白捡。" },
          { en: "If you index it well, queries stay fast.", zh: "索引建得好，查询就一直快。" }
        ]
      }
    ],

    sentences: [
      {
        en: "But if your 1D index sorts on longitude alone, every other cab in the city at a longitude between them, from the Bronx down to Staten Island, gets crammed into the index between these two neighbors.",
        zh: "但如果你的一维索引只按经度排序，那么城市里所有经度介于两者之间的出租车，从布朗克斯一直到斯塔滕岛，都会被硬塞进索引里这两位邻居之间。",
        analysis: "主干是 every other cab ... gets crammed into the index（主语 + 被动谓语）。中间两个修饰成分都说明是「哪些车」：介词短语 at a longitude between them 和插入语 from the Bronx down to Staten Island。句首 if 引导条件从句，sorts on X 表示「按 X 排序」。"
      },
      {
        en: "Why is the B-tree the prize? Because it's the one data structure databases have spent 50 years tuning.",
        zh: "为什么 B 树是「终极奖品」？因为它是数据库界花了 50 年去打磨的那一种数据结构。",
        analysis: "自问自答结构。the one data structure 后面跟一个省略了关系代词 that 的定语从句 (that) databases have spent 50 years tuning，修饰 data structure。spend time doing sth 中 tuning 是动名词；the one 表「恰恰那一个」，起强调作用。"
      }
    ],

    quiz: [
      {
        type: "choice", tag: "语言点",
        q: "___ you care about is the straight-line distance between two points.",
        options: ["What", "That", "Which", "It"],
        answer: 0,
        explain: "what 引导强调句，把「你真正在意的」提到句首，等于「你在意的，正是直线距离」。"
      },
      {
        type: "fill", tag: "语言点",
        q: "After a long discussion, the two teams ____ on the same solution.（趋同/达成一致）",
        answer: ["converged", "converge on"],
        explain: "converge on = 殊途同归/趋同于；这里用过去时 converged on。"
      },
      {
        type: "choice", tag: "语言点",
        q: "If you can squeeze your problem into a B-tree shape, you ____ all of that for free.",
        options: ["inherit", "inherits", "inheriting", "to inherit"],
        answer: 0,
        explain: "主语 you 后接动词原形 inherit；inherit ... for free = 白捡地继承（这些好处）。"
      },
      {
        type: "choice", tag: "阅读理解",
        q: "为什么年龄查询（between 20 and 30）这么快？",
        options: ["B 树把排好序的键紧密存在同一页里", "因为年龄都是整数", "数据库有专门的位置索引", "因为只查询了一次"],
        answer: 0,
        explain: "原文：a B-tree keeps sorted keys packed together on disk … They're all on the same page. 所以一次 seek 加一小段读取就够了。"
      },
      {
        type: "choice", tag: "阅读理解",
        q: "讲者认为位置搜索真正难在哪里？",
        options: ["经纬度数字太大算不动", "一维排序无法保持二维的相邻关系", "B 树本身太慢", "几乎没有数据库支持位置查询"],
        answer: 1,
        explain: "原文：the real problem is that 1D sort order doesn't preserve 2D closeness —— 一维排序会把二维里相邻的点打散。"
      }
    ]
  },

  {
    id: "2026-07-30",
    date: "2026-07-30",
    title: "站在巨人肩膀上：用 AI 笔记本快速学任何东西",
    source: "YouTube（Tina / Learnly Octopus）",
    tags: ["学习方法", "AI", "Notebook LM"],

    passage: [
      {
        en: "In the world that we live in, the ability to learn things fast is the ultimate skill. So today in this video, I want to show you this workflow that I use — because learning things is literally my job and also a hobby.",
        zh: "在我们生活的这个世界里，快速学习的能力是终极技能。所以今天这期视频，我想把我用的这套工作流展示给你——因为学习这件事，字面意义上就是我的工作，同时也是我的爱好。"
      },
      {
        en: "For those of you who don't know me, hello, my name is Tina. I am an ex-Meta data scientist turned content creator about AI and tech. I also run an AI education business called Learnly Octopus. Now without further ado, let's go.",
        zh: "还不认识我的朋友们，你好，我叫 Tina。我是前 Meta 数据科学家，后来转做 AI 和科技方向的内容创作者。另外我也运营一家叫 Learnly Octopus 的 AI 教育公司。闲话少说，我们开始吧。"
      },
      {
        en: "So step number one is called standing on the shoulders of giants. Over here you see is the study plan that is the best way to learn AI coding, agentic engineering, vibe coding — whatever you want to call it — based on the experiences, the successes and failures of many other people.",
        zh: "第一步叫做「站在巨人的肩膀上」。你在这里看到的，是一份学习计划：基于很多人的经验、成功与失败，总结出学习 AI 编程、智能体工程、vibe coding——随便你怎么叫它——的最佳路径。"
      },
      {
        en: "You see, whatever you're trying to learn, chances are somebody has already learned it — be that a language, a driver's license, AI, AI coding, whatever. So what you want to do is actually take the experiences of these other people and stand on the shoulders of these giants to learn the way that is the best proven way to learn.",
        zh: "你看，无论你想学什么，多半已经有人学过了——语言、驾照、AI、AI 编程，什么都行。所以你真正该做的，是把这些人的经验拿过来，站在这些巨人的肩膀上，用已被验证过的最佳方式去学。"
      },
      {
        en: "And the way to do that is to use Notebook LM. Well, recently they rebranded themselves to Gemini Notebook. Anyways, regardless of what they're called, their tagline is \"Understand anything — your AI-powered research partner.\"",
        zh: "具体做法是用 Notebook LM。嗯，最近他们改名叫 Gemini Notebook 了。反正不管叫什么，他们的标语是：「理解任何事物——你的 AI 研究搭档」。"
      },
      {
        en: "So I actually have a full video covering Notebook LM / Gemini Notebook that goes into a lot of detail about it, which you can check out over here if you're interested. But today we're going to be focused on how to use it to learn things quickly.",
        zh: "我其实有一整期专门讲 Notebook LM / Gemini Notebook 的视频，讲得很细，感兴趣可以点那边去看。但今天我们聚焦在：怎么用它来快速学习。"
      },
      {
        en: "So let's click \"Try Gemini Notebook,\" create a new notebook, and let's say I want to learn AI coding. I can type: I want to learn AI coding — that is vibe coding, agentic engineering, whatever you want to call it. So I want to eventually build a desktop app that can help me track my productivity habits, for example, and gain insights for improvement. So help me gather the sources on how to learn this the best way possible, and gather some projects because I want to learn by doing. Say, tools I've heard of are Claude Code, Codex, Cursor, for example.",
        zh: "那我们点「Try Gemini Notebook」，新建一个笔记本。假设我想学 AI 编程，我可以打：我想学 AI 编程——也就是 vibe coding、智能体工程，随便你怎么叫。我最终想做一个桌面应用，帮我追踪自己的效率习惯，并给出改进洞察。所以请帮我搜集「怎样用最佳方式学这个」的资料，再搜集一些项目——因为我想在做中学。比如说，我听说过的工具有 Claude Code、Codex、Cursor。"
      },
      {
        en: "Click enter. So it tells me these sources. I'm going to import these sources that it has found for me — thank you very much — and then I'm going to say: help me design a study plan so I can learn to build my productivity app. Wonderful. Okay, so it tells me that this is a four-week study plan — week one, week two, week three, week four. Excellent.",
        zh: "回车。它给了我这些资料。我把找到的资料导入进来——非常感谢——然后我说：帮我设计一份学习计划，好让我学会做出自己的效率应用。太棒了。好，它告诉我这是一份四周学习计划——第一周、第二周、第三周、第四周。完美。"
      },
      {
        en: "This is standing on the shoulders of giants. I've done this for so many other things I want to learn and projects. For example, here's the one that I'm learning electronics with — still learning electronics with, by the way. Without this method, this would have taken me such a long time — just browsing through Reddit and looking at other people's study plans, reading books, things like that. Such a timesaver.",
        zh: "这就是「站在巨人的肩膀上」。我想学的很多东西、很多项目，我都这么干过。比如这里是我学电子学用的那份——对了，现在还在用。没有这套方法，我会花超长时间：在 Reddit 上刷来刷去、看别人的学习计划、读书，诸如此类。真的太省时间了。"
      },
      {
        en: "But this is not good enough yet. We're not just going to follow this study plan right now, because first, I want to really customize it just for me. So, moving on to part two: custom just for you.",
        zh: "但这还不够。我们不会现在就原样照着这份计划学，因为首先，我真正想把它定制得完全适合我。所以进入第二部分：专为你定制。"
      }
    ],

    core: {
      words: [
        { w: "ultimate", phon: "/ˈʌltɪmət/", pos: "adj.", def: "终极的 / 最重要的", ex_en: "Learning fast is the ultimate skill.", ex_zh: "快速学习是终极技能。" },
        { w: "without further ado", phon: "/wɪˈðaʊt ˈfɜːðər əˈduː/", pos: "phr.", def: "闲话少说 / 马上开始", ex_en: "Without further ado, let's go.", ex_zh: "闲话少说，我们开始吧。" },
        { w: "stand on the shoulders of giants", phon: "/stænd ɒn ðə ˈʃəʊldəz əv ˈdʒaɪənts/", pos: "idiom", def: "站在巨人肩膀上（借前人成果）", ex_en: "Stand on the shoulders of giants to learn faster.", ex_zh: "站在巨人肩膀上，学得更快。" },
        { w: "chances are", phon: "/ˈtʃɑːnsɪz ɑː/", pos: "phr.", def: "很有可能 / 多半是", ex_en: "Chances are somebody has already learned it.", ex_zh: "多半已经有人学过了。" },
        { w: "rebrand", phon: "/ˌriːˈbrænd/", pos: "v.", def: "品牌改名 / 重新定位品牌", ex_en: "They rebranded to Gemini Notebook.", ex_zh: "他们改名为 Gemini Notebook。" },
        { w: "learn by doing", phon: "/lɜːn baɪ ˈduːɪŋ/", pos: "phr.", def: "在做中学 / 边做边学", ex_en: "I want to learn by doing.", ex_zh: "我想在做中学。" },
        { w: "timesaver", phon: "/ˈtaɪmseɪvə/", pos: "n.", def: "省时的方法/工具", ex_en: "This method is such a timesaver.", ex_zh: "这方法太省时间了。" },
        { w: "customize", phon: "/ˈkʌstəmaɪz/", pos: "v.", def: "定制 / 按个人需求调整", ex_en: "I want to customize it just for me.", ex_zh: "我想把它定制得完全适合我。" }
      ],
      grammar: [
        { t: "ex-… turned …", d: "「前某身份，转做另一身份」：an ex-Meta data scientist turned content creator。" },
        { t: "be that A, B, whatever", d: "举例时列举可能性：「不管是 A、B，还是别的什么」。" },
        { t: "not just going to … because first …", d: "先否定「马上照做」，再用 because first 引出真正优先的下一步。" }
      ]
    },

    vocab: [
      { w: "ultimate", phon: "/ˈʌltɪmət/", pos: "adj.", def: "终极的 / 最关键的", ex_en: "The ultimate skill is learning fast.", ex_zh: "终极技能是快速学习。" },
      { w: "workflow", phon: "/ˈwɜːkfləʊ/", pos: "n.", def: "工作流 / 一套固定流程", ex_en: "I want to show you this workflow that I use.", ex_zh: "我想展示我用的这套工作流。" },
      { w: "literally", phon: "/ˈlɪtərəli/", pos: "adv.", def: "字面意义上 / 确实（口语强调）", ex_en: "Learning is literally my job.", ex_zh: "学习字面意义上就是我的工作。" },
      { w: "without further ado", phon: "/wɪˈðaʊt ˈfɜːðər əˈduː/", pos: "phr.", def: "闲话少说 / 不再啰嗦", ex_en: "Without further ado, let's start.", ex_zh: "闲话少说，我们开始。" },
      { w: "stand on the shoulders of giants", phon: "/stænd ɒn ðə ˈʃəʊldəz əv ˈdʒaɪənts/", pos: "idiom", def: "站在巨人肩膀上", ex_en: "We stand on the shoulders of giants.", ex_zh: "我们站在巨人的肩膀上。" },
      { w: "agentic", phon: "/əˈdʒentɪk/", pos: "adj.", def: "（AI）具有自主代理能力的", ex_en: "agentic engineering", ex_zh: "智能体工程" },
      { w: "vibe coding", phon: "/vaɪb ˈkəʊdɪŋ/", pos: "n.", def: "靠感觉/提示词驱动的 AI 辅助编程", ex_en: "vibe coding, agentic engineering — whatever you call it", ex_zh: "vibe coding、智能体工程——随便你怎么叫" },
      { w: "chances are", phon: "/ˈtʃɑːnsɪz ɑː/", pos: "phr.", def: "很有可能", ex_en: "Chances are they've already done it.", ex_zh: "多半他们已经做过了。" },
      { w: "proven", phon: "/ˈpruːvn/", pos: "adj.", def: "经过验证的 / 被证明有效的", ex_en: "the best proven way to learn", ex_zh: "已被验证的最佳学习方式" },
      { w: "rebrand", phon: "/ˌriːˈbrænd/", pos: "v.", def: "品牌改名 / 重新品牌化", ex_en: "They rebranded themselves to Gemini Notebook.", ex_zh: "他们改名为 Gemini Notebook。" },
      { w: "tagline", phon: "/ˈtæɡlaɪn/", pos: "n.", def: "广告标语 / 口号", ex_en: "Their tagline is \"Understand anything.\"", ex_zh: "他们的标语是「理解任何事物」。" },
      { w: "go into detail", phon: "/ɡəʊ ˈɪntə ˈdiːteɪl/", pos: "phr. v.", def: "详细展开 / 深入讲", ex_en: "The video goes into a lot of detail.", ex_zh: "那期视频讲得很细。" },
      { w: "check out", phon: "/tʃek aʊt/", pos: "phr. v.", def: "去看看 / 查阅", ex_en: "Check it out if you're interested.", ex_zh: "感兴趣的话去看一下。" },
      { w: "focus on", phon: "/ˈfəʊkəs ɒn/", pos: "phr. v.", def: "聚焦于 / 专注于", ex_en: "Today we're focused on learning fast.", ex_zh: "今天我们聚焦快速学习。" },
      { w: "eventually", phon: "/ɪˈventʃuəli/", pos: "adv.", def: "最终 / 到头来", ex_en: "I want to eventually build a desktop app.", ex_zh: "我最终想做一个桌面应用。" },
      { w: "track", phon: "/træk/", pos: "v.", def: "追踪 / 记录（习惯、数据）", ex_en: "track my productivity habits", ex_zh: "追踪我的效率习惯" },
      { w: "gain insights", phon: "/ɡeɪn ˈɪnsaɪts/", pos: "phr.", def: "获得洞察 / 看出门道", ex_en: "gain insights for improvement", ex_zh: "获得用于改进的洞察" },
      { w: "gather", phon: "/ˈɡæðə/", pos: "v.", def: "搜集 / 汇集", ex_en: "Help me gather the sources.", ex_zh: "帮我搜集这些资料。" },
      { w: "learn by doing", phon: "/lɜːn baɪ ˈduːɪŋ/", pos: "phr.", def: "在做中学", ex_en: "I want to learn by doing.", ex_zh: "我想在做中学。" },
      { w: "import", phon: "/ɪmˈpɔːt/", pos: "v.", def: "导入（文件/资料）", ex_en: "I'm going to import these sources.", ex_zh: "我要把这些资料导入进来。" },
      { w: "study plan", phon: "/ˈstʌdi plæn/", pos: "n.", def: "学习计划", ex_en: "Help me design a study plan.", ex_zh: "帮我设计一份学习计划。" },
      { w: "browse through", phon: "/braʊz θruː/", pos: "phr. v.", def: "翻阅 / 浏览（大量内容）", ex_en: "browsing through Reddit", ex_zh: "在 Reddit 上刷来刷去" },
      { w: "timesaver", phon: "/ˈtaɪmseɪvə/", pos: "n.", def: "省时利器", ex_en: "Such a timesaver.", ex_zh: "太省时间了。" },
      { w: "customize", phon: "/ˈkʌstəmaɪz/", pos: "v.", def: "定制 / 个性化调整", ex_en: "I want to customize it just for me.", ex_zh: "我想把它定制得完全适合我。" },
      { w: "move on to", phon: "/muːv ɒn tuː/", pos: "phr. v.", def: "进入（下一部分）", ex_en: "Moving on to part two…", ex_zh: "进入第二部分……" },
      { w: "regardless of", phon: "/rɪˈɡɑːdləs əv/", pos: "phr.", def: "不管 / 无论", ex_en: "regardless of what they're called", ex_zh: "不管他们叫什么" }
    ],

    grammar: [
      {
        t: "ex-… turned …（身份转变）",
        pattern: "an ex-X turned Y",
        rule: "介绍自己或他人时很常用：曾经是 X，后来转成 Y。ex- 表「前·」，turned 后直接跟新身份名词，中间不加 as。",
        examples: [
          { en: "an ex-Meta data scientist turned content creator", zh: "前 Meta 数据科学家，转做内容创作者" },
          { en: "a lawyer turned entrepreneur", zh: "律师转创业者" },
          { en: "He's a teacher turned product manager.", zh: "他是老师转产品经理。" }
        ]
      },
      {
        t: "be that A, B, whatever（举例列举）",
        pattern: "be that + 选项A, 选项B, whatever",
        rule: "口语里用来举例说明「不管是哪一类都行」。be that 可理解为「不论那是……」。whatever 收尾，语气轻松。",
        examples: [
          { en: "Be that a language, a driver's license, AI, whatever.", zh: "不管是语言、驾照、AI，还是别的什么。" },
          { en: "Be that email, Slack, or a quick call — just sync.", zh: "不管是邮件、Slack 还是短电话——先同步一下。" }
        ]
      },
      {
        t: "chances are + 从句",
        pattern: "Chances are (that) + 句子",
        rule: "口语高频：「很有可能……」。后面常接现在完成时，表示「这件事多半已经发生过了」。",
        examples: [
          { en: "Chances are somebody has already learned it.", zh: "多半已经有人学过了。" },
          { en: "Chances are the meeting will run over.", zh: "会议多半会拖堂。" }
        ]
      }
    ],

    sentences: [
      {
        en: "I am an ex-Meta data scientist turned content creator about AI and tech.",
        zh: "我是前 Meta 数据科学家，后来转做 AI 和科技方向的内容创作者。",
        analysis: "主干 I am …。ex-Meta data scientist 是旧身份；turned content creator 是身份转变结构；about AI and tech 修饰 content creator 的内容方向。"
      },
      {
        en: "So what you want to do is actually take the experiences of these other people and stand on the shoulders of these giants to learn the way that is the best proven way to learn.",
        zh: "所以你真正该做的，是把这些人的经验拿过来，站在这些巨人的肩膀上，用已被验证过的最佳方式去学。",
        analysis: "What you want to do is … 强调句。is 后接两个并列动词：take … and stand …。to learn … 是目的状语；the way that is the best proven way 里 that 引导定语从句修饰 way，proven 作定语「经验证的」。"
      },
      {
        en: "Without this method, this would have taken me such a long time — just browsing through Reddit and looking at other people's study plans, reading books, things like that.",
        zh: "没有这套方法，我会花超长时间：在 Reddit 上刷来刷去、看别人的学习计划、读书，诸如此类。",
        analysis: "Without this method 隐含虚拟条件。would have taken 是对过去的虚拟结果。破折号后用动名词并列（browsing / looking / reading）具体说明「花时间在干什么」；things like that = 诸如此类。"
      }
    ],

    quiz: [
      {
        type: "choice", tag: "语言点",
        q: "___ further ado, let's start the meeting.",
        options: ["Without", "With", "Unless", "Until"],
        answer: 0,
        explain: "without further ado = 闲话少说，马上开始。开会开场很常用。"
      },
      {
        type: "fill", tag: "语言点",
        q: "____ ____ somebody on the team has already solved this.（很有可能）",
        answer: ["Chances are", "chances are"],
        explain: "Chances are + 句子 = 很有可能……。后面常接现在完成时。"
      },
      {
        type: "choice", tag: "语言点",
        q: "She's an engineer ____ product manager.",
        options: ["turned", "turning", "turns", "to turn"],
        answer: 0,
        explain: "ex-X turned Y / an X turned Y = 从 X 转做 Y。turned 后直接跟新身份。"
      },
      {
        type: "choice", tag: "阅读理解",
        q: "讲者第一步「站在巨人肩膀上」具体指什么？",
        options: ["自己从零发明学习方法", "借用前人经验与已被验证的学习路径", "只看官方文档", "先买一堆课再开始"],
        answer: 1,
        explain: "原文：take the experiences of these other people and stand on the shoulders of these giants to learn the best proven way。"
      },
      {
        type: "choice", tag: "阅读理解",
        q: "为什么讲者说这份 study plan「还不够」？",
        options: ["因为四周太短", "因为工具选错了", "因为还要先按自己的情况定制", "因为 Notebook LM 已经过时"],
        answer: 2,
        explain: "原文：first, I want to really customize it just for me. → 进入 part two: custom just for you。"
      }
    ]
  }

];
