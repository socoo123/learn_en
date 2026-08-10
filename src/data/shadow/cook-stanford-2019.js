/**
 * 库克 2019 斯坦福毕业典礼演讲 · 尚雯婕精听拆分
 * 视频时间戳见每课 timeRange（与 YouTube/本地视频进度条对齐）
 * 文稿按自动字幕切分，并对照公开讲稿修正明显 ASR 错误。
 */
export const COOK_STANFORD_LESSONS = [
  {
    id: '2026-08-06-cook-01',
    date: '2026-08-06',
    title: '库克斯坦福演讲 01',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '01',
    durationMin: 1,
    timeRange: '00:04–01:11',
    passage: [
      { en: 'Stanford University — please join me in welcoming Tim Cook. Thank you. Good morning, Class of 2019. Thank you, President Tessier-Lavigne, for that very generous introduction. I\'ll do my best to earn it.', zh: '斯坦福大学——请和我一起欢迎蒂姆·库克。谢谢。早上好，2019 届的同学们。谢谢泰西耶-拉维涅校长如此慷慨的介绍。我会尽力配得上这份介绍。' },
      { en: 'Before I begin, I want to recognize everyone whose hard work made this celebration possible — including the groundskeepers, ushers, volunteers, and crew. Thank you.', zh: '开始之前，我想感谢所有用辛勤工作让这场庆典成为可能的人——包括场地管理员、引导员、志愿者和工作人员。谢谢你们。' },
      { en: 'I am deeply honored — and frankly a little astonished — to be invited to join you for this most meaningful of occasions. Graduates, this is your day. But you didn\'t get here alone.', zh: '受邀参加这个极有意义的场合，我深感荣幸——坦白说，也有点惊讶。毕业生们，今天是你们的日子。但你们并非独自走到这里。' },
    ],
    core: {
      words: [
        { w: 'generous', phon: '/ˈdʒenərəs/', pos: 'adj.', def: '慷慨的；宽厚的', def_en: 'kind and giving more than needed', syn: ['kind', 'gracious', 'lavish'], ex_en: 'a very generous introduction', ex_zh: '非常慷慨的介绍' },
        { w: 'earn it', phon: '/ɜːn ɪt/', pos: 'phr.', def: '配得上；挣得这份（认可）', def_en: 'to deserve praise through your actions', syn: ['deserve it', 'live up to it'], ex_en: 'I\'ll do my best to earn it.', ex_zh: '我会尽力配得上。' },
        { w: 'recognize', phon: '/ˈrekəɡnaɪz/', pos: 'v.', def: '致谢；表彰', def_en: 'to thank or publicly credit people', syn: ['acknowledge', 'credit', 'honor'], ex_en: 'recognize everyone whose hard work…', ex_zh: '感谢每一位辛勤付出的人' },
        { w: 'astonished', phon: '/əˈstɒnɪʃt/', pos: 'adj.', def: '震惊的；惊讶的', def_en: 'very surprised', syn: ['amazed', 'shocked', 'stunned'], ex_en: 'a little astonished to be invited', ex_zh: '受邀感到有点惊讶' },
        { w: 'occasion', phon: '/əˈkeɪʒn/', pos: 'n.', def: '场合；重大时刻', def_en: 'a special event or moment', syn: ['event', 'ceremony', 'moment'], ex_en: 'this most meaningful of occasions', ex_zh: '这个极有意义的场合' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'generous', phon: '/ˈdʒenərəs/', pos: 'adj.', def: '慷慨的；宽厚的', def_en: 'kind and giving more than needed', syn: ['kind', 'gracious', 'lavish'], ex_en: 'a very generous introduction', ex_zh: '非常慷慨的介绍' },
      { w: 'earn it', phon: '/ɜːn ɪt/', pos: 'phr.', def: '配得上；挣得这份（认可）', def_en: 'to deserve praise through your actions', syn: ['deserve it', 'live up to it'], ex_en: 'I\'ll do my best to earn it.', ex_zh: '我会尽力配得上。' },
      { w: 'recognize', phon: '/ˈrekəɡnaɪz/', pos: 'v.', def: '致谢；表彰', def_en: 'to thank or publicly credit people', syn: ['acknowledge', 'credit', 'honor'], ex_en: 'recognize everyone whose hard work…', ex_zh: '感谢每一位辛勤付出的人' },
      { w: 'astonished', phon: '/əˈstɒnɪʃt/', pos: 'adj.', def: '震惊的；惊讶的', def_en: 'very surprised', syn: ['amazed', 'shocked', 'stunned'], ex_en: 'a little astonished to be invited', ex_zh: '受邀感到有点惊讶' },
      { w: 'occasion', phon: '/əˈkeɪʒn/', pos: 'n.', def: '场合；重大时刻', def_en: 'a special event or moment', syn: ['event', 'ceremony', 'moment'], ex_en: 'this most meaningful of occasions', ex_zh: '这个极有意义的场合' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「generous」最接近的意思是？",
                "options": [
                      "慷慨的；宽厚的",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "慷慨的；宽厚的",
                "explain": "a very generous introduction — 非常慷慨的介绍"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：配得上；挣得这份（认可））",
                "answer": "earn it",
                "explain": "本段重点词：earn it"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Stanford University — please join me in welcoming Tim Cook. …",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Stanford University — please join me in welcoming Tim Cook. …",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-02',
    date: '2026-08-06',
    title: '库克斯坦福演讲 02',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '02',
    durationMin: 1,
    timeRange: '01:11–02:15',
    passage: [
      { en: 'Family and friends, teachers, mentors, loved ones, and of course your parents — all worked together to make you possible, and they share your joy today.', zh: '家人、朋友、老师、导师、所爱之人，当然还有父母——大家一起成就了今天的你，也共享你的喜悦。' },
      { en: 'Here on Father\'s Day, let\'s give the dads in particular a round of applause. Stanford is near to my heart — not least because I live just a mile and a half from here.', zh: '今天恰逢父亲节，让我们特别给父亲们鼓一轮掌。斯坦福对我意义很深——尤其因为我就住在离这里大约一英里半的地方。' },
      { en: 'Of course, if my accent hasn\'t given it away: for the first part of my life I had to admire this place from a distance. I went to school on the other side of the country — at Auburn University, in the heart of landlocked eastern Alabama.', zh: '当然，如果我的口音还没暴露的话：人生前半段，我只能远远地仰望这里。我在美国另一端上大学——奥本大学，位于内陆的东阿拉巴马腹地。' },
      { en: 'You may not know this, but I was on the sailing team all four years. It wasn\'t easy. Back then, the closest marina was a three-hour drive.', zh: '你们可能不知道，我四年都在帆船队。并不容易。那时最近的码头要开三小时车。' },
    ],
    core: {
      words: [
        { w: 'mentor', phon: '/ˈmentɔː/', pos: 'n.', def: '导师；人生指导者', def_en: 'an experienced guide who helps you grow', syn: ['coach', 'advisor', 'guide'], ex_en: 'teachers, mentors, loved ones', ex_zh: '老师、导师、所爱之人' },
        { w: 'not least because', phon: '/nɒt liːst bɪˈkɒz/', pos: 'phr.', def: '尤其因为；相当重要的原因是', def_en: 'especially because; one big reason is', syn: ['especially since', 'mainly because'], ex_en: 'not least because I live nearby', ex_zh: '尤其因为我就住在附近' },
        { w: 'accent', phon: '/ˈæksent/', pos: 'n.', def: '口音', def_en: 'the way someone sounds when speaking a language', syn: ['speech sound', 'pronunciation style'], ex_en: 'if my accent hasn\'t given it away', ex_zh: '如果我的口音还没暴露的话' },
        { w: 'give away', phon: '/ɡɪv əˈweɪ/', pos: 'phr. v.', def: '暴露；泄露（身份/秘密）', def_en: 'to reveal a secret without meaning to', syn: ['reveal', 'betray', 'expose'], ex_en: 'hasn\'t given it away', ex_zh: '还没暴露' },
        { w: 'landlocked', phon: '/ˈlændlɒkt/', pos: 'adj.', def: '内陆的（无海岸线）', def_en: 'having no coast or sea access', syn: ['inland', 'no coastline'], ex_en: 'landlocked eastern Alabama', ex_zh: '内陆的东阿拉巴马' },
        { w: 'marina', phon: '/məˈriːnə/', pos: 'n.', def: '游艇码头', def_en: 'a harbor area for small boats', syn: ['boat harbor', 'yacht dock'], ex_en: 'the closest marina', ex_zh: '最近的码头' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'mentor', phon: '/ˈmentɔː/', pos: 'n.', def: '导师；人生指导者', def_en: 'an experienced guide who helps you grow', syn: ['coach', 'advisor', 'guide'], ex_en: 'teachers, mentors, loved ones', ex_zh: '老师、导师、所爱之人' },
      { w: 'not least because', phon: '/nɒt liːst bɪˈkɒz/', pos: 'phr.', def: '尤其因为；相当重要的原因是', def_en: 'especially because; one big reason is', syn: ['especially since', 'mainly because'], ex_en: 'not least because I live nearby', ex_zh: '尤其因为我就住在附近' },
      { w: 'accent', phon: '/ˈæksent/', pos: 'n.', def: '口音', def_en: 'the way someone sounds when speaking a language', syn: ['speech sound', 'pronunciation style'], ex_en: 'if my accent hasn\'t given it away', ex_zh: '如果我的口音还没暴露的话' },
      { w: 'give away', phon: '/ɡɪv əˈweɪ/', pos: 'phr. v.', def: '暴露；泄露（身份/秘密）', def_en: 'to reveal a secret without meaning to', syn: ['reveal', 'betray', 'expose'], ex_en: 'hasn\'t given it away', ex_zh: '还没暴露' },
      { w: 'landlocked', phon: '/ˈlændlɒkt/', pos: 'adj.', def: '内陆的（无海岸线）', def_en: 'having no coast or sea access', syn: ['inland', 'no coastline'], ex_en: 'landlocked eastern Alabama', ex_zh: '内陆的东阿拉巴马' },
      { w: 'marina', phon: '/məˈriːnə/', pos: 'n.', def: '游艇码头', def_en: 'a harbor area for small boats', syn: ['boat harbor', 'yacht dock'], ex_en: 'the closest marina', ex_zh: '最近的码头' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「mentor」最接近的意思是？",
                "options": [
                      "导师；人生指导者",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "导师；人生指导者",
                "explain": "teachers, mentors, loved ones — 老师、导师、所爱之人"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：尤其因为；相当重要的原因是）",
                "answer": "not least because",
                "explain": "本段重点词：not least because"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Family and friends, teachers, mentors, loved ones, and of co…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Family and friends, teachers, mentors, loved ones, and of co…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-03',
    date: '2026-08-06',
    title: '库克斯坦福演讲 03',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '03',
    durationMin: 1,
    timeRange: '02:15–03:19',
    passage: [
      { en: 'For practice, most of the time we had to wait for a heavy rainstorm to flood the football field. And tying knots is hard — who knew?', zh: '练船时，多数时候得等大暴雨把橄榄球场淹了才行。而且打绳结很难——谁能想到？' },
      { en: 'Yet somehow, against all odds, we managed to beat Stanford every time we raced. We must have gotten lucky with the wind. … Kidding aside, I know the real reason I\'m here, and I don\'t take it lightly.', zh: '可不知怎的，我们几乎总是逆势打败斯坦福。大概是风向运气好吧。……玩笑归玩笑，我清楚自己真正为何站在这里，也不会掉以轻心。' },
      { en: 'Stanford and Silicon Valley\'s roots are woven together. We\'re part of the same ecosystem. It was true when Steve stood on this stage 14 years ago; it\'s true today; and presumably it\'ll be true for a while longer still.', zh: '斯坦福与硅谷的根脉交织在一起。我们同属一个生态系统。十四年前史蒂夫站在这个讲台时如此，今天如此，想必未来一段时日也仍会如此。' },
      { en: 'The past few decades have lifted us together. But today we gather at a moment that demands some reflection.', zh: '过去几十年我们一起被抬升。但今天我们聚在一个需要反思的时刻。' },
    ],
    core: {
      words: [
        { w: 'against all odds', phon: '/əˈɡenst ɔːl ɒdz/', pos: 'phr.', def: '尽管困难重重；逆势', def_en: 'even though success seemed unlikely', syn: ['despite the odds', 'against the chances'], ex_en: 'against all odds we managed to beat Stanford', ex_zh: '逆势打败斯坦福' },
        { w: 'kidding aside', phon: '/ˈkɪdɪŋ əˈsaɪd/', pos: 'phr.', def: '玩笑归玩笑；说正经的', def_en: 'jokes aside; now speaking seriously', syn: ['seriously though', 'all kidding aside'], ex_en: 'Kidding aside, I know the real reason…', ex_zh: '玩笑归玩笑，我清楚真正的原因…' },
        { w: 'take lightly', phon: '/teɪk ˈlaɪtli/', pos: 'phr.', def: '掉以轻心；不当回事', def_en: 'to treat as unimportant', syn: ['shrug off', 'underestimate'], ex_en: 'I don\'t take it lightly', ex_zh: '我不会掉以轻心' },
        { w: 'woven together', phon: '/ˈwəʊvn təˈɡeðə/', pos: 'phr.', def: '交织在一起', def_en: 'closely connected into one whole', syn: ['intertwined', 'linked together'], ex_en: 'roots are woven together', ex_zh: '根脉交织' },
        { w: 'ecosystem', phon: '/ˈiːkəʊsɪstəm/', pos: 'n.', def: '生态系统（此处指产业生态）', def_en: 'a network of related products, people, and firms', syn: ['network', 'industry web'], ex_en: 'the same ecosystem', ex_zh: '同一个生态系统' },
        { w: 'presumably', phon: '/prɪˈzjuːməbli/', pos: 'adv.', def: '想必；大概', def_en: 'based on what seems likely', syn: ['probably', 'most likely'], ex_en: 'presumably it\'ll be true', ex_zh: '想必仍会如此' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'against all odds', phon: '/əˈɡenst ɔːl ɒdz/', pos: 'phr.', def: '尽管困难重重；逆势', def_en: 'even though success seemed unlikely', syn: ['despite the odds', 'against the chances'], ex_en: 'against all odds we managed to beat Stanford', ex_zh: '逆势打败斯坦福' },
      { w: 'kidding aside', phon: '/ˈkɪdɪŋ əˈsaɪd/', pos: 'phr.', def: '玩笑归玩笑；说正经的', def_en: 'jokes aside; now speaking seriously', syn: ['seriously though', 'all kidding aside'], ex_en: 'Kidding aside, I know the real reason…', ex_zh: '玩笑归玩笑，我清楚真正的原因…' },
      { w: 'take lightly', phon: '/teɪk ˈlaɪtli/', pos: 'phr.', def: '掉以轻心；不当回事', def_en: 'to treat as unimportant', syn: ['shrug off', 'underestimate'], ex_en: 'I don\'t take it lightly', ex_zh: '我不会掉以轻心' },
      { w: 'woven together', phon: '/ˈwəʊvn təˈɡeðə/', pos: 'phr.', def: '交织在一起', def_en: 'closely connected into one whole', syn: ['intertwined', 'linked together'], ex_en: 'roots are woven together', ex_zh: '根脉交织' },
      { w: 'ecosystem', phon: '/ˈiːkəʊsɪstəm/', pos: 'n.', def: '生态系统（此处指产业生态）', def_en: 'a network of related products, people, and firms', syn: ['network', 'industry web'], ex_en: 'the same ecosystem', ex_zh: '同一个生态系统' },
      { w: 'presumably', phon: '/prɪˈzjuːməbli/', pos: 'adv.', def: '想必；大概', def_en: 'based on what seems likely', syn: ['probably', 'most likely'], ex_en: 'presumably it\'ll be true', ex_zh: '想必仍会如此' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「against all odds」最接近的意思是？",
                "options": [
                      "尽管困难重重；逆势",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "尽管困难重重；逆势",
                "explain": "against all odds we managed to beat Stanford — 逆势打败斯坦福"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：玩笑归玩笑；说正经的）",
                "answer": "kidding aside",
                "explain": "本段重点词：kidding aside"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "For practice, most of the time we had to wait for a heavy ra…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "For practice, most of the time we had to wait for a heavy ra…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-04',
    date: '2026-08-06',
    title: '库克斯坦福演讲 04',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '04',
    durationMin: 1,
    timeRange: '03:19–04:28',
    passage: [
      { en: 'Fueled by caffeine and code, optimism and idealism, conviction and creativity — generations of Stanford graduates (and dropouts) have used technology to remake our society.', zh: '靠着咖啡因与代码、乐观与理想、信念与创造力——一代代斯坦福毕业生（以及辍学生）用技术重塑社会。' },
      { en: 'But I think you would agree that lately the results haven\'t been neat or straightforward. In just the four years you\'ve been here at the Farm, things feel like they\'ve taken a sharp turn.', zh: '但我想你们会同意：近来结果并不干净利落、直来直去。就在你们待在「农场」（斯坦福）的短短四年里，形势像急转弯了一样。' },
      { en: 'Crisis has tempered optimism. Consequences have challenged idealism. And reality has shaken blind faith.', zh: '危机冲淡了乐观。后果挑战了理想。现实动摇了盲目的信仰。' },
      { en: 'And yet we are still drawn here — for good reason. Big dreams live here, as do the genius and passion to make them real. In an age of cynicism, this place still believes that the human capacity to solve problems is boundless. But so, it seems, is our potential to create them.', zh: '可我们仍被吸引来这里——有充分理由。大梦想住在这里，实现梦想的才华与热情也是。在愤世嫉俗的时代，这里仍相信人类解决问题的能力无穷。但似乎，我们制造问题的潜力同样无穷。' },
    ],
    core: {
      words: [
        { w: 'fueled by', phon: '/ˈfjuːəld baɪ/', pos: 'phr.', def: '由……驱动 / 助推', def_en: 'powered or driven by something', syn: ['driven by', 'powered by'], ex_en: 'fueled by caffeine and code', ex_zh: '由咖啡因与代码驱动' },
        { w: 'conviction', phon: '/kənˈvɪkʃn/', pos: 'n.', def: '坚定信念', def_en: 'a strong belief you hold firmly', syn: ['belief', 'principle', 'certainty'], ex_en: 'conviction and creativity', ex_zh: '信念与创造力' },
        { w: 'temper', phon: '/ˈtempə/', pos: 'v.', def: '冲淡；缓和（热情等）', def_en: 'to soften or balance a strong feeling', syn: ['moderate', 'tone down', 'balance'], ex_en: 'Crisis has tempered optimism.', ex_zh: '危机冲淡了乐观。' },
        { w: 'blind faith', phon: '/blaɪnd feɪθ/', pos: 'n.', def: '盲目信仰', def_en: 'belief without checking the facts', syn: ['unquestioning belief', 'naive trust'], ex_en: 'reality has shaken blind faith', ex_zh: '现实动摇了盲目信仰' },
        { w: 'cynicism', phon: '/ˈsɪnɪsɪzəm/', pos: 'n.', def: '愤世嫉俗', def_en: 'the habit of expecting the worst in people', syn: ['distrust', 'bitterness'], ex_en: 'in an age of cynicism', ex_zh: '在愤世嫉俗的时代' },
        { w: 'boundless', phon: '/ˈbaʊndləs/', pos: 'adj.', def: '无限的', def_en: 'without limits', syn: ['limitless', 'endless', 'unlimited'], ex_en: 'capacity to solve problems is boundless', ex_zh: '解决问题的能力无穷' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'fueled by', phon: '/ˈfjuːəld baɪ/', pos: 'phr.', def: '由……驱动 / 助推', def_en: 'powered or driven by something', syn: ['driven by', 'powered by'], ex_en: 'fueled by caffeine and code', ex_zh: '由咖啡因与代码驱动' },
      { w: 'conviction', phon: '/kənˈvɪkʃn/', pos: 'n.', def: '坚定信念', def_en: 'a strong belief you hold firmly', syn: ['belief', 'principle', 'certainty'], ex_en: 'conviction and creativity', ex_zh: '信念与创造力' },
      { w: 'temper', phon: '/ˈtempə/', pos: 'v.', def: '冲淡；缓和（热情等）', def_en: 'to soften or balance a strong feeling', syn: ['moderate', 'tone down', 'balance'], ex_en: 'Crisis has tempered optimism.', ex_zh: '危机冲淡了乐观。' },
      { w: 'blind faith', phon: '/blaɪnd feɪθ/', pos: 'n.', def: '盲目信仰', def_en: 'belief without checking the facts', syn: ['unquestioning belief', 'naive trust'], ex_en: 'reality has shaken blind faith', ex_zh: '现实动摇了盲目信仰' },
      { w: 'cynicism', phon: '/ˈsɪnɪsɪzəm/', pos: 'n.', def: '愤世嫉俗', def_en: 'the habit of expecting the worst in people', syn: ['distrust', 'bitterness'], ex_en: 'in an age of cynicism', ex_zh: '在愤世嫉俗的时代' },
      { w: 'boundless', phon: '/ˈbaʊndləs/', pos: 'adj.', def: '无限的', def_en: 'without limits', syn: ['limitless', 'endless', 'unlimited'], ex_en: 'capacity to solve problems is boundless', ex_zh: '解决问题的能力无穷' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「fueled by」最接近的意思是？",
                "options": [
                      "由……驱动 / 助推",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "由……驱动 / 助推",
                "explain": "fueled by caffeine and code — 由咖啡因与代码驱动"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：坚定信念）",
                "answer": "conviction",
                "explain": "本段重点词：conviction"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Fueled by caffeine and code, optimism and idealism, convicti…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Fueled by caffeine and code, optimism and idealism, convicti…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-05',
    date: '2026-08-06',
    title: '库克斯坦福演讲 05',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '05',
    durationMin: 1,
    timeRange: '04:28–05:37',
    passage: [
      { en: 'That\'s what I\'m interested in talking about today. Because if I\'ve learned one thing, it\'s that technology doesn\'t change who we are — it magnifies who we are: the good and the bad.', zh: '这就是我今天想谈的。因为如果我只学会一件事，那就是：技术不会改变我们是谁——它放大我们是谁：好的与坏的。' },
      { en: 'Our problems — in technology, in politics, wherever — are human problems. From the Garden of Eden to today, it\'s our humanity that got us into this mess, and it\'s our humanity that\'s going to have to get us out.', zh: '我们的问题——在技术、政治，无论哪里——都是人的问题。从伊甸园到今天，是人性让我们陷入混乱，也必须靠人性把我们带出去。' },
      { en: 'First things first: here\'s a plain fact. Silicon Valley is responsible for some of the most revolutionary inventions in modern history — from the first oscillator built in a Hewlett-Packard garage to the iPhones I know you\'re holding in your hands.', zh: '先说一件朴素事实：硅谷贡献了现代史上一些最具革命性的发明——从惠普车库里的第一台振荡器，到你们手里的 iPhone。' },
      { en: 'Social media, shareable video, snaps and stories that connect half the people on Earth — they all trace their roots to Stanford\'s backyard.', zh: '社交媒体、可分享视频、连接地球一半人口的快拍与动态——它们的根都可追溯到斯坦福后院。' },
    ],
    core: {
      words: [
        { w: 'magnify', phon: '/ˈmæɡnɪfaɪ/', pos: 'v.', def: '放大；夸大', def_en: 'to make something look bigger or stronger', syn: ['amplify', 'enlarge', 'intensify'], ex_en: 'it magnifies who we are', ex_zh: '它放大我们是谁' },
        { w: 'humanity', phon: '/hjuːˈmænəti/', pos: 'n.', def: '人性；人类', def_en: 'human kindness, or people as a whole', syn: ['human nature', 'compassion', 'people'], ex_en: 'it\'s our humanity that got us into this mess', ex_zh: '是人性让我们陷入混乱' },
        { w: 'first things first', phon: '/fɜːst θɪŋz fɜːst/', pos: 'phr.', def: '先说重要的；按轻重缓急', def_en: 'do the most important part before the rest', syn: ['priorities first', 'start with basics'], ex_en: 'First things first: here\'s a plain fact.', ex_zh: '先说一件朴素事实。' },
        { w: 'revolutionary', phon: '/ˌrevəˈluːʃənəri/', pos: 'adj.', def: '革命性的', def_en: 'so new that it changes the old way', syn: ['groundbreaking', 'radical', 'game-changing'], ex_en: 'revolutionary inventions', ex_zh: '革命性发明' },
        { w: 'trace … to', phon: '/treɪs tuː/', pos: 'phr. v.', def: '追溯到', def_en: 'to find where something started', syn: ['track back to', 'find the source in'], ex_en: 'trace their roots to Stanford\'s backyard', ex_zh: '把根追溯到斯坦福后院' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'magnify', phon: '/ˈmæɡnɪfaɪ/', pos: 'v.', def: '放大；夸大', def_en: 'to make something look bigger or stronger', syn: ['amplify', 'enlarge', 'intensify'], ex_en: 'it magnifies who we are', ex_zh: '它放大我们是谁' },
      { w: 'humanity', phon: '/hjuːˈmænəti/', pos: 'n.', def: '人性；人类', def_en: 'human kindness, or people as a whole', syn: ['human nature', 'compassion', 'people'], ex_en: 'it\'s our humanity that got us into this mess', ex_zh: '是人性让我们陷入混乱' },
      { w: 'first things first', phon: '/fɜːst θɪŋz fɜːst/', pos: 'phr.', def: '先说重要的；按轻重缓急', def_en: 'do the most important part before the rest', syn: ['priorities first', 'start with basics'], ex_en: 'First things first: here\'s a plain fact.', ex_zh: '先说一件朴素事实。' },
      { w: 'revolutionary', phon: '/ˌrevəˈluːʃənəri/', pos: 'adj.', def: '革命性的', def_en: 'so new that it changes the old way', syn: ['groundbreaking', 'radical', 'game-changing'], ex_en: 'revolutionary inventions', ex_zh: '革命性发明' },
      { w: 'trace … to', phon: '/treɪs tuː/', pos: 'phr. v.', def: '追溯到', def_en: 'to find where something started', syn: ['track back to', 'find the source in'], ex_en: 'trace their roots to Stanford\'s backyard', ex_zh: '把根追溯到斯坦福后院' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「magnify」最接近的意思是？",
                "options": [
                      "放大；夸大",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "放大；夸大",
                "explain": "it magnifies who we are — 它放大我们是谁"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：人性；人类）",
                "answer": "humanity",
                "explain": "本段重点词：humanity"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "That's what I'm interested in talking about today. Because i…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "That's what I'm interested in talking about today. Because i…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-06',
    date: '2026-08-06',
    title: '库克斯坦福演讲 06',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '06',
    durationMin: 1,
    timeRange: '05:37–06:46',
    passage: [
      { en: 'But lately it seems this industry is becoming better known for a less noble innovation: the belief that you can claim credit without accepting responsibility.', zh: '但近来，这个行业似乎更因一种不那么高尚的「创新」出名：以为你可以居功，却不必承担责任。' },
      { en: 'We see it every day now — with every data breach, every privacy violation, every blind eye turned to hate speech. Fake news poisoning our national conversation. The false promise of miracles in exchange for a single drop of your blood.', zh: '我们如今天天见到——每一次数据泄露、每一次隐私侵犯、每一次对仇恨言论睁一只眼闭一只眼。假新闻毒化国家公共讨论。用一滴血换「奇迹」的虚假承诺。' },
      { en: 'Too many seem to think that good intentions excuse away harmful outcomes. But whether you like it or not, what you build and what you create define who you are.', zh: '太多人似乎觉得：好心就能开脱有害的结果。但不喜欢也罢——你造出什么、创造出什么，就定义了你是谁。' },
      { en: 'It feels a bit crazy that anyone should have to say this. But if you\'ve built a chaos factory, you can\'t dodge responsibility for the chaos.', zh: '居然还得把话说得这么白，感觉有点荒唐。但如果你造了一座混乱工厂，就不能躲开对混乱的责任。' },
    ],
    core: {
      words: [
        { w: 'claim credit', phon: '/kleɪm ˈkredɪt/', pos: 'phr.', def: '居功；把功劳归到自己', def_en: 'to say you deserve the praise', syn: ['take credit', 'claim the glory'], ex_en: 'claim credit without accepting responsibility', ex_zh: '居功却不担责' },
        { w: 'data breach', phon: '/ˈdeɪtə briːtʃ/', pos: 'n.', def: '数据泄露', def_en: 'an event where private data is exposed', syn: ['data leak', 'security incident'], ex_en: 'every data breach', ex_zh: '每一次数据泄露' },
        { w: 'turn a blind eye to', phon: '/tɜːn ə blaɪnd aɪ tuː/', pos: 'phr.', def: '对……视而不见', def_en: 'to ignore a problem on purpose', syn: ['ignore', 'look away from'], ex_en: 'every blind eye turned to hate speech', ex_zh: '对仇恨言论睁一只眼闭一只眼' },
        { w: 'excuse away', phon: '/ɪkˈskjuːz əˈweɪ/', pos: 'phr. v.', def: '找借口开脱', def_en: 'to explain a wrong as if it is okay', syn: ['rationalize', 'brush aside'], ex_en: 'good intentions excuse away harmful outcomes', ex_zh: '好心开脱有害结果' },
        { w: 'dodge', phon: '/dɒdʒ/', pos: 'v.', def: '躲避；推脱', def_en: 'to avoid answering or facing something', syn: ['evade', 'sidestep', 'avoid'], ex_en: 'can\'t dodge responsibility', ex_zh: '躲不开责任' },
        { w: 'chaos factory', phon: '/ˈkeɪɒs ˈfæktəri/', pos: 'n.', def: '混乱工厂（比喻制造乱局的系统）', def_en: 'a system that keeps creating disorder', syn: ['mess machine', 'disorder engine'], ex_en: 'if you\'ve built a chaos factory', ex_zh: '如果你造了一座混乱工厂' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
        { t: '条件句 If you\'ve…', d: 'If you\'ve built a chaos factory, you can\'t… 完成时条件 + 情态结论。' },
      ],
    },
    vocab: [
      { w: 'claim credit', phon: '/kleɪm ˈkredɪt/', pos: 'phr.', def: '居功；把功劳归到自己', def_en: 'to say you deserve the praise', syn: ['take credit', 'claim the glory'], ex_en: 'claim credit without accepting responsibility', ex_zh: '居功却不担责' },
      { w: 'data breach', phon: '/ˈdeɪtə briːtʃ/', pos: 'n.', def: '数据泄露', def_en: 'an event where private data is exposed', syn: ['data leak', 'security incident'], ex_en: 'every data breach', ex_zh: '每一次数据泄露' },
      { w: 'turn a blind eye to', phon: '/tɜːn ə blaɪnd aɪ tuː/', pos: 'phr.', def: '对……视而不见', def_en: 'to ignore a problem on purpose', syn: ['ignore', 'look away from'], ex_en: 'every blind eye turned to hate speech', ex_zh: '对仇恨言论睁一只眼闭一只眼' },
      { w: 'excuse away', phon: '/ɪkˈskjuːz əˈweɪ/', pos: 'phr. v.', def: '找借口开脱', def_en: 'to explain a wrong as if it is okay', syn: ['rationalize', 'brush aside'], ex_en: 'good intentions excuse away harmful outcomes', ex_zh: '好心开脱有害结果' },
      { w: 'dodge', phon: '/dɒdʒ/', pos: 'v.', def: '躲避；推脱', def_en: 'to avoid answering or facing something', syn: ['evade', 'sidestep', 'avoid'], ex_en: 'can\'t dodge responsibility', ex_zh: '躲不开责任' },
      { w: 'chaos factory', phon: '/ˈkeɪɒs ˈfæktəri/', pos: 'n.', def: '混乱工厂（比喻制造乱局的系统）', def_en: 'a system that keeps creating disorder', syn: ['mess machine', 'disorder engine'], ex_en: 'if you\'ve built a chaos factory', ex_zh: '如果你造了一座混乱工厂' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
      { t: '条件句 If you\'ve…', pattern: '', rule: 'If you\'ve built a chaos factory, you can\'t… 完成时条件 + 情态结论。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「claim credit」最接近的意思是？",
                "options": [
                      "居功；把功劳归到自己",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "居功；把功劳归到自己",
                "explain": "claim credit without accepting responsibility — 居功却不担责"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：数据泄露）",
                "answer": "data breach",
                "explain": "本段重点词：data breach"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "But lately it seems this industry is becoming better known f…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "But lately it seems this industry is becoming better known f…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-07',
    date: '2026-08-06',
    title: '库克斯坦福演讲 07',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '07',
    durationMin: 1,
    timeRange: '06:46–07:54',
    passage: [
      { en: 'Taking responsibility means having the courage to think things through. And there are few areas where this is more important than privacy.', zh: '承担责任意味着有勇气把事情想透。而很少有领域比隐私更重要。' },
      { en: 'If we accept as normal and unavoidable that everything in our lives can be aggregated, sold, or even leaked in the event of a hack — then we lose so much more than data. We lose the freedom to be human.', zh: '若我们把「生活中的一切都可以被汇总、出售，甚至在黑客事件中泄露」当成正常且不可避免——那我们失去的远不止数据。我们失去作为人的自由。' },
      { en: 'Think about what\'s at stake: everything you write, everything you say, every topic of curiosity, every stray thought, every impulsive purchase, every moment of frustration or weakness, every gripe or complaint, every secret shared in confidence.', zh: '想想利害攸关的是什么：你写的一切、说的一切、每一次好奇的话题、每一个走神念头、每一次冲动购物、每一刻沮丧或软弱、每一句牢骚抱怨、每一段私密分享的秘密。' },
      { en: 'In a world without digital privacy, even if you have done nothing wrong other than think differently, you begin to censor yourself.', zh: '在一个没有数字隐私的世界里，即便你除了想法不同什么都没做错，你也会开始自我审查。' },
    ],
    core: {
      words: [
        { w: 'think through', phon: '/θɪŋk θruː/', pos: 'phr. v.', def: '想透；周全考虑', def_en: 'to consider carefully before acting', syn: ['reason out', 'work through'], ex_en: 'the courage to think things through', ex_zh: '把事情想透的勇气' },
        { w: 'aggregate', phon: '/ˈæɡrɪɡeɪt/', pos: 'v.', def: '汇总；聚合', def_en: 'to gather many pieces into one total', syn: ['combine', 'collect', 'sum up'], ex_en: 'everything can be aggregated, sold…', ex_zh: '一切可被汇总、出售…' },
        { w: 'at stake', phon: '/æt steɪk/', pos: 'phr.', def: '利害攸关；存亡所系', def_en: 'at risk; what you may lose', syn: ['on the line', 'in danger'], ex_en: 'what\'s at stake', ex_zh: '利害攸关的是什么' },
        { w: 'stray thought', phon: '/streɪ θɔːt/', pos: 'n.', def: '走神的念头；零星想法', def_en: 'a random thought that wanders off', syn: ['passing thought', 'side thought'], ex_en: 'every stray thought', ex_zh: '每一个走神念头' },
        { w: 'gripe', phon: '/ɡraɪp/', pos: 'n.', def: '牢骚；抱怨', def_en: 'a small complaint', syn: ['complaint', 'grumble'], ex_en: 'every gripe or complaint', ex_zh: '每一句牢骚抱怨' },
        { w: 'censor yourself', phon: '/ˈsensə jɔːˈself/', pos: 'phr.', def: '自我审查', def_en: 'to stop yourself from saying what you think', syn: ['self-censor', 'hold back'], ex_en: 'you begin to censor yourself', ex_zh: '你开始自我审查' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'think through', phon: '/θɪŋk θruː/', pos: 'phr. v.', def: '想透；周全考虑', def_en: 'to consider carefully before acting', syn: ['reason out', 'work through'], ex_en: 'the courage to think things through', ex_zh: '把事情想透的勇气' },
      { w: 'aggregate', phon: '/ˈæɡrɪɡeɪt/', pos: 'v.', def: '汇总；聚合', def_en: 'to gather many pieces into one total', syn: ['combine', 'collect', 'sum up'], ex_en: 'everything can be aggregated, sold…', ex_zh: '一切可被汇总、出售…' },
      { w: 'at stake', phon: '/æt steɪk/', pos: 'phr.', def: '利害攸关；存亡所系', def_en: 'at risk; what you may lose', syn: ['on the line', 'in danger'], ex_en: 'what\'s at stake', ex_zh: '利害攸关的是什么' },
      { w: 'stray thought', phon: '/streɪ θɔːt/', pos: 'n.', def: '走神的念头；零星想法', def_en: 'a random thought that wanders off', syn: ['passing thought', 'side thought'], ex_en: 'every stray thought', ex_zh: '每一个走神念头' },
      { w: 'gripe', phon: '/ɡraɪp/', pos: 'n.', def: '牢骚；抱怨', def_en: 'a small complaint', syn: ['complaint', 'grumble'], ex_en: 'every gripe or complaint', ex_zh: '每一句牢骚抱怨' },
      { w: 'censor yourself', phon: '/ˈsensə jɔːˈself/', pos: 'phr.', def: '自我审查', def_en: 'to stop yourself from saying what you think', syn: ['self-censor', 'hold back'], ex_en: 'you begin to censor yourself', ex_zh: '你开始自我审查' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「think through」最接近的意思是？",
                "options": [
                      "想透；周全考虑",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "想透；周全考虑",
                "explain": "the courage to think things through — 把事情想透的勇气"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：汇总；聚合）",
                "answer": "aggregate",
                "explain": "本段重点词：aggregate"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Taking responsibility means having the courage to think thin…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Taking responsibility means having the courage to think thin…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-08',
    date: '2026-08-06',
    title: '库克斯坦福演讲 08',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '08',
    durationMin: 1,
    timeRange: '07:54–09:01',
    passage: [
      { en: 'Not entirely at first. Just a little, bit by bit. To risk less. To hope less. To imagine less. To dare less. To create less. To try less. To talk less. To think less.', zh: '一开始并不彻底。只是一点点、一步步：少冒险、少希望、少想象、少敢于、少创造、少尝试、少说话、少思考。' },
      { en: 'The chilling effect of digital surveillance is profound, and it touches everything. What a small, unimaginative world we would end up with — not entirely at first, just a little, bit by bit.', zh: '数字监控的寒蝉效应影响深远，触及一切。我们最终会落入一个多么狭小、缺乏想象力的世界——一开始并不彻底，只是一点点、一步步。' },
      { en: 'Ironically, it\'s the kind of environment that would have stopped Silicon Valley before it had ever gotten started. We deserve better. You deserve better.', zh: '讽刺的是，正是这种环境，会在硅谷起步之前就把它扼杀。我们值得更好的。你们也值得更好的。' },
      { en: 'If we believe that freedom means an environment where great ideas can take root — where they can grow and be nurtured without fear of irrational restrictions or burdens — then it\'s our duty to change course.', zh: '若我们相信自由意味着伟大想法能扎根的环境——能生长、被培育，而不必恐惧非理性的限制或负担——那我们就有责任改弦更张。' },
    ],
    core: {
      words: [
        { w: 'bit by bit', phon: '/bɪt baɪ bɪt/', pos: 'phr.', def: '一点一点地', def_en: 'slowly, in small steps', syn: ['little by little', 'gradually'], ex_en: 'Just a little, bit by bit.', ex_zh: '一点点、一步步' },
        { w: 'chilling effect', phon: '/ˈtʃɪlɪŋ ɪˈfekt/', pos: 'n.', def: '寒蝉效应（因恐惧而自我克制）', def_en: 'fear that makes people stay silent', syn: ['silencing effect', 'fear freeze'], ex_en: 'the chilling effect of digital surveillance', ex_zh: '数字监控的寒蝉效应' },
        { w: 'surveillance', phon: '/səˈveɪləns/', pos: 'n.', def: '监控；监视', def_en: 'close watching of people or activity', syn: ['monitoring', 'watching'], ex_en: 'digital surveillance', ex_zh: '数字监控' },
        { w: 'take root', phon: '/teɪk ruːt/', pos: 'phr. v.', def: '扎根；站稳', def_en: 'to become established and hard to remove', syn: ['become established', 'settle in'], ex_en: 'great ideas can take root', ex_zh: '伟大想法能扎根' },
        { w: 'nurture', phon: '/ˈnɜːtʃə/', pos: 'v.', def: '培育；滋养', def_en: 'to care for something so it can grow', syn: ['cultivate', 'foster', 'support'], ex_en: 'grow and be nurtured', ex_zh: '生长并被培育' },
        { w: 'change course', phon: '/tʃeɪndʒ kɔːs/', pos: 'phr.', def: '改弦更张；改变方向', def_en: 'to choose a new direction', syn: ['turn around', 'redirect', 'pivot'], ex_en: 'it\'s our duty to change course', ex_zh: '我们有责任改弦更张' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
        { t: '排比（平行结构）', d: 'To risk less. To hope less… 一连串不定式排比，适合跟读练气口。' },
      ],
    },
    vocab: [
      { w: 'bit by bit', phon: '/bɪt baɪ bɪt/', pos: 'phr.', def: '一点一点地', def_en: 'slowly, in small steps', syn: ['little by little', 'gradually'], ex_en: 'Just a little, bit by bit.', ex_zh: '一点点、一步步' },
      { w: 'chilling effect', phon: '/ˈtʃɪlɪŋ ɪˈfekt/', pos: 'n.', def: '寒蝉效应（因恐惧而自我克制）', def_en: 'fear that makes people stay silent', syn: ['silencing effect', 'fear freeze'], ex_en: 'the chilling effect of digital surveillance', ex_zh: '数字监控的寒蝉效应' },
      { w: 'surveillance', phon: '/səˈveɪləns/', pos: 'n.', def: '监控；监视', def_en: 'close watching of people or activity', syn: ['monitoring', 'watching'], ex_en: 'digital surveillance', ex_zh: '数字监控' },
      { w: 'take root', phon: '/teɪk ruːt/', pos: 'phr. v.', def: '扎根；站稳', def_en: 'to become established and hard to remove', syn: ['become established', 'settle in'], ex_en: 'great ideas can take root', ex_zh: '伟大想法能扎根' },
      { w: 'nurture', phon: '/ˈnɜːtʃə/', pos: 'v.', def: '培育；滋养', def_en: 'to care for something so it can grow', syn: ['cultivate', 'foster', 'support'], ex_en: 'grow and be nurtured', ex_zh: '生长并被培育' },
      { w: 'change course', phon: '/tʃeɪndʒ kɔːs/', pos: 'phr.', def: '改弦更张；改变方向', def_en: 'to choose a new direction', syn: ['turn around', 'redirect', 'pivot'], ex_en: 'it\'s our duty to change course', ex_zh: '我们有责任改弦更张' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
      { t: '排比（平行结构）', pattern: '', rule: 'To risk less. To hope less… 一连串不定式排比，适合跟读练气口。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「bit by bit」最接近的意思是？",
                "options": [
                      "一点一点地",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "一点一点地",
                "explain": "Just a little, bit by bit. — 一点点、一步步"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：寒蝉效应（因恐惧而自我克制））",
                "answer": "chilling effect",
                "explain": "本段重点词：chilling effect"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Not entirely at first. Just a little, bit by bit. To risk le…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Not entirely at first. Just a little, bit by bit. To risk le…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-09',
    date: '2026-08-06',
    title: '库克斯坦福演讲 09',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '09',
    durationMin: 1,
    timeRange: '09:01–09:57',
    passage: [
      { en: 'Because your generation ought to have the same freedom to shape the future as the generation that came before. Graduates, at the very least, learn from these mistakes. If you want to take credit, first learn to take responsibility.', zh: '因为你们这一代理应拥有与上一代同样塑造未来的自由。毕业生们，至少，从这些错误中学习。如果你想居功，先学会担责。' },
      { en: 'Now, a lot of you — the vast majority — won\'t find yourselves in tech at all. That\'s as it should be. We need your minds at work far and wide, because our challenges are great, and they can\'t be solved by any single industry.', zh: '如今，你们很多人——绝大多数——根本不会进入科技行业。本该如此。我们需要你们的头脑在各行各业运转，因为挑战巨大，任何单一行业都解决不了。' },
    ],
    core: {
      words: [
        { w: 'ought to', phon: '/ɔːt tuː/', pos: 'modal', def: '应当', def_en: 'should; it is the right thing to do', syn: ['should', 'need to'], ex_en: 'your generation ought to have the same freedom', ex_zh: '你们这一代理应拥有同样的自由' },
        { w: 'shape the future', phon: '/ʃeɪp ðə ˈfjuːtʃə/', pos: 'phr.', def: '塑造未来', def_en: 'to influence what comes next', syn: ['steer the future', 'form what comes'], ex_en: 'freedom to shape the future', ex_zh: '塑造未来的自由' },
        { w: 'at the very least', phon: '/æt ðə ˈveri liːst/', pos: 'phr.', def: '至少；退一步说', def_en: 'as the minimum; even if nothing more', syn: ['at minimum', 'if nothing else'], ex_en: 'at the very least, learn from these mistakes', ex_zh: '至少从这些错误中学习' },
        { w: 'vast majority', phon: '/vɑːst məˈdʒɒrəti/', pos: 'n.', def: '绝大多数', def_en: 'almost everyone; a very large share', syn: ['most people', 'nearly all'], ex_en: 'the vast majority', ex_zh: '绝大多数' },
        { w: 'far and wide', phon: '/fɑːr ənd waɪd/', pos: 'phr.', def: '广泛地；四面八方', def_en: 'across many places', syn: ['everywhere', 'widely'], ex_en: 'minds at work far and wide', ex_zh: '头脑在各处运转' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'ought to', phon: '/ɔːt tuː/', pos: 'modal', def: '应当', def_en: 'should; it is the right thing to do', syn: ['should', 'need to'], ex_en: 'your generation ought to have the same freedom', ex_zh: '你们这一代理应拥有同样的自由' },
      { w: 'shape the future', phon: '/ʃeɪp ðə ˈfjuːtʃə/', pos: 'phr.', def: '塑造未来', def_en: 'to influence what comes next', syn: ['steer the future', 'form what comes'], ex_en: 'freedom to shape the future', ex_zh: '塑造未来的自由' },
      { w: 'at the very least', phon: '/æt ðə ˈveri liːst/', pos: 'phr.', def: '至少；退一步说', def_en: 'as the minimum; even if nothing more', syn: ['at minimum', 'if nothing else'], ex_en: 'at the very least, learn from these mistakes', ex_zh: '至少从这些错误中学习' },
      { w: 'vast majority', phon: '/vɑːst məˈdʒɒrəti/', pos: 'n.', def: '绝大多数', def_en: 'almost everyone; a very large share', syn: ['most people', 'nearly all'], ex_en: 'the vast majority', ex_zh: '绝大多数' },
      { w: 'far and wide', phon: '/fɑːr ənd waɪd/', pos: 'phr.', def: '广泛地；四面八方', def_en: 'across many places', syn: ['everywhere', 'widely'], ex_en: 'minds at work far and wide', ex_zh: '头脑在各处运转' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「ought to」最接近的意思是？",
                "options": [
                      "应当",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "应当",
                "explain": "your generation ought to have the same freedom — 你们这一代理应拥有同样的自由"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：塑造未来）",
                "answer": "shape the future",
                "explain": "本段重点词：shape the future"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Because your generation ought to have the same freedom to sh…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Because your generation ought to have the same freedom to sh…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-10',
    date: '2026-08-06',
    title: '库克斯坦福演讲 10',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '10',
    durationMin: 1,
    timeRange: '09:57–11:03',
    passage: [
      { en: 'No matter where you go, no matter what you do, I know you will be ambitious — you wouldn\'t be here today if you weren\'t. Match that ambition with humility: a humility of purpose.', zh: '无论你去哪里、做什么，我知道你们会有野心——否则你们今天不会在这里。把野心配上谦逊：一种目标上的谦逊。' },
      { en: 'That doesn\'t mean being tamer, being smaller, being less in what you do. It\'s the opposite. It\'s about serving something greater.', zh: '这不意味着更温顺、更渺小、做得更少。恰恰相反。它关乎服务于更宏大的事物。' },
      { en: 'The author Madeleine L\'Engle wrote: "Humility is throwing oneself away in complete concentration on something or someone else." In other words: whatever you do with your life — be a builder.', zh: '作家玛德琳·L·恩格尔写道：「谦逊，是把自己抛开，把全部专注投向某事或某人。」换言之：无论你这一生做什么——做一个建设者。' },
      { en: 'You don\'t have to start from scratch to build something monumental. And conversely, the best founders — the ones whose creations last and whose reputations grow rather than shrink with passing time — they spend most of their time building, piece by piece.', zh: '你不必从零开始才能建成丰碑。反过来，最好的创始人——作品经久、声誉随时间增长而非萎缩的那些人——把大部分时间花在一点一点地建造上。' },
    ],
    core: {
      words: [
        { w: 'match … with', phon: '/mætʃ wɪð/', pos: 'phr.', def: '把……与……相配', def_en: 'to pair one thing with another that fits', syn: ['pair with', 'align with'], ex_en: 'Match that ambition with humility', ex_zh: '把野心配上谦逊' },
        { w: 'humility of purpose', phon: '/hjuːˈmɪləti əv ˈpɜːpəs/', pos: 'n.', def: '目标上的谦逊', def_en: 'a modest, service-focused aim', syn: ['humble aim', 'modest purpose'], ex_en: 'a humility of purpose', ex_zh: '一种目标上的谦逊' },
        { w: 'tamer', phon: '/ˈteɪmə/', pos: 'adj.', def: '更温顺的；更驯服的', def_en: 'more gentle or less wild', syn: ['milder', 'gentler', 'safer'], ex_en: 'doesn\'t mean being tamer', ex_zh: '不意味着更温顺' },
        { w: 'start from scratch', phon: '/stɑːt frəm skrætʃ/', pos: 'phr.', def: '从零开始', def_en: 'to begin with nothing already built', syn: ['begin anew', 'start over'], ex_en: 'don\'t have to start from scratch', ex_zh: '不必从零开始' },
        { w: 'monumental', phon: '/ˌmɒnjuˈmentl/', pos: 'adj.', def: '丰碑式的；巨大的', def_en: 'very large or historically important', syn: ['huge', 'historic', 'massive'], ex_en: 'build something monumental', ex_zh: '建成丰碑' },
        { w: 'conversely', phon: '/ˈkɒnvɜːsli/', pos: 'adv.', def: '反过来；相反地', def_en: 'in the opposite way', syn: ['on the flip side', 'in contrast'], ex_en: 'And conversely, the best founders…', ex_zh: '反过来，最好的创始人…' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'match … with', phon: '/mætʃ wɪð/', pos: 'phr.', def: '把……与……相配', def_en: 'to pair one thing with another that fits', syn: ['pair with', 'align with'], ex_en: 'Match that ambition with humility', ex_zh: '把野心配上谦逊' },
      { w: 'humility of purpose', phon: '/hjuːˈmɪləti əv ˈpɜːpəs/', pos: 'n.', def: '目标上的谦逊', def_en: 'a modest, service-focused aim', syn: ['humble aim', 'modest purpose'], ex_en: 'a humility of purpose', ex_zh: '一种目标上的谦逊' },
      { w: 'tamer', phon: '/ˈteɪmə/', pos: 'adj.', def: '更温顺的；更驯服的', def_en: 'more gentle or less wild', syn: ['milder', 'gentler', 'safer'], ex_en: 'doesn\'t mean being tamer', ex_zh: '不意味着更温顺' },
      { w: 'start from scratch', phon: '/stɑːt frəm skrætʃ/', pos: 'phr.', def: '从零开始', def_en: 'to begin with nothing already built', syn: ['begin anew', 'start over'], ex_en: 'don\'t have to start from scratch', ex_zh: '不必从零开始' },
      { w: 'monumental', phon: '/ˌmɒnjuˈmentl/', pos: 'adj.', def: '丰碑式的；巨大的', def_en: 'very large or historically important', syn: ['huge', 'historic', 'massive'], ex_en: 'build something monumental', ex_zh: '建成丰碑' },
      { w: 'conversely', phon: '/ˈkɒnvɜːsli/', pos: 'adv.', def: '反过来；相反地', def_en: 'in the opposite way', syn: ['on the flip side', 'in contrast'], ex_en: 'And conversely, the best founders…', ex_zh: '反过来，最好的创始人…' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「match … with」最接近的意思是？",
                "options": [
                      "把……与……相配",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "把……与……相配",
                "explain": "Match that ambition with humility — 把野心配上谦逊"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：目标上的谦逊）",
                "answer": "humility of purpose",
                "explain": "本段重点词：humility of purpose"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "No matter where you go, no matter what you do, I know you wi…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "No matter where you go, no matter what you do, I know you wi…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-11',
    date: '2026-08-06',
    title: '库克斯坦福演讲 11',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '11',
    durationMin: 1,
    timeRange: '11:03–12:01',
    passage: [
      { en: 'Builders are comfortable in the belief that their life\'s work will one day be bigger than them — bigger than any one person. They\'re mindful that its effects will span generations. That\'s not an accident. In a way, it\'s the whole point.', zh: '建设者安心于这样的信念：他们一生的作品有朝一日会比他们本人更大——大于任何一个人。他们清楚其影响会跨越世代。这并非偶然。在某种意义上，这正是全部意义所在。' },
      { en: 'In a few days we will mark the 50th anniversary of the riots at Stonewall. When the patrons of the Stonewall Inn showed up that night — people of all races, gay and transgender, young and old — they had no idea what history had in store for them.', zh: '再过几天，我们将纪念石墙骚乱五十周年。那天晚上石墙旅店的顾客出现时——各种族、同性恋与跨性别、老与少——他们不知道历史为他们准备了什么。' },
      { en: 'It would have seemed foolish to dream it. When the door was busted open by police, it was not the knock of opportunity or the call of destiny.', zh: '当时若去梦想这些，会显得愚蠢。当警察砸开门时，那不是机遇之敲门，也不是命运的召唤。' },
    ],
    core: {
      words: [
        { w: 'mindful', phon: '/ˈmaɪndfl/', pos: 'adj.', def: '留意到的；意识到的', def_en: 'aware and careful about something', syn: ['aware', 'attentive', 'conscious'], ex_en: 'They\'re mindful that its effects will span generations.', ex_zh: '他们清楚影响会跨越世代。' },
        { w: 'span', phon: '/spæn/', pos: 'v.', def: '跨越（时间/空间）', def_en: 'to cover a range of time or space', syn: ['cover', 'stretch across'], ex_en: 'span generations', ex_zh: '跨越世代' },
        { w: 'the whole point', phon: '/ðə həʊl pɔɪnt/', pos: 'phr.', def: '全部意义；关键所在', def_en: 'the main reason something matters', syn: ['the key idea', 'the real purpose'], ex_en: 'it\'s the whole point', ex_zh: '这正是全部意义' },
        { w: 'have in store', phon: '/hæv ɪn stɔː/', pos: 'phr.', def: '（未来）准备着；即将发生', def_en: 'to have waiting in the future', syn: ['await', 'lie ahead'], ex_en: 'what history had in store for them', ex_zh: '历史为他们准备了什么' },
        { w: 'bust open', phon: '/bʌst ˈəʊpən/', pos: 'phr. v.', def: '砸开；强行打开', def_en: 'to break open with force', syn: ['break open', 'smash open'], ex_en: 'the door was busted open by police', ex_zh: '门被警察砸开' },
        { w: 'destiny', phon: '/ˈdestəni/', pos: 'n.', def: '命运', def_en: 'what seems meant to happen in your life', syn: ['fate', 'future path'], ex_en: 'the call of destiny', ex_zh: '命运的召唤' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'mindful', phon: '/ˈmaɪndfl/', pos: 'adj.', def: '留意到的；意识到的', def_en: 'aware and careful about something', syn: ['aware', 'attentive', 'conscious'], ex_en: 'They\'re mindful that its effects will span generations.', ex_zh: '他们清楚影响会跨越世代。' },
      { w: 'span', phon: '/spæn/', pos: 'v.', def: '跨越（时间/空间）', def_en: 'to cover a range of time or space', syn: ['cover', 'stretch across'], ex_en: 'span generations', ex_zh: '跨越世代' },
      { w: 'the whole point', phon: '/ðə həʊl pɔɪnt/', pos: 'phr.', def: '全部意义；关键所在', def_en: 'the main reason something matters', syn: ['the key idea', 'the real purpose'], ex_en: 'it\'s the whole point', ex_zh: '这正是全部意义' },
      { w: 'have in store', phon: '/hæv ɪn stɔː/', pos: 'phr.', def: '（未来）准备着；即将发生', def_en: 'to have waiting in the future', syn: ['await', 'lie ahead'], ex_en: 'what history had in store for them', ex_zh: '历史为他们准备了什么' },
      { w: 'bust open', phon: '/bʌst ˈəʊpən/', pos: 'phr. v.', def: '砸开；强行打开', def_en: 'to break open with force', syn: ['break open', 'smash open'], ex_en: 'the door was busted open by police', ex_zh: '门被警察砸开' },
      { w: 'destiny', phon: '/ˈdestəni/', pos: 'n.', def: '命运', def_en: 'what seems meant to happen in your life', syn: ['fate', 'future path'], ex_en: 'the call of destiny', ex_zh: '命运的召唤' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「mindful」最接近的意思是？",
                "options": [
                      "留意到的；意识到的",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "留意到的；意识到的",
                "explain": "They're mindful that its effects will span generations. — 他们清楚影响会跨越世代。"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：跨越（时间/空间））",
                "answer": "span",
                "explain": "本段重点词：span"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Builders are comfortable in the belief that their life's wor…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Builders are comfortable in the belief that their life's wor…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-12',
    date: '2026-08-06',
    title: '库克斯坦福演讲 12',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '12',
    durationMin: 1,
    timeRange: '12:01–13:10',
    passage: [
      { en: 'It was just another instance of the world telling them that they ought to feel worthless for being different. But the group gathered there felt something strengthen in them: a conviction that they deserved something better than the shadows — and better than oblivion.', zh: '那只是世界又一次告诉他们：因为不同，就该觉得自己一文不值。但聚集在那里的人感到内心有什么在变强：一种信念——他们值得比阴影更好的东西，也比被遗忘更好。' },
      { en: 'And if it wasn\'t going to be given, then they were going to have to build it themselves.', zh: '而如果没人给，他们就得自己去建。' },
      { en: 'I was eight years old and a thousand miles away when Stonewall happened. There were no news alerts, no way for photos to go viral, no mechanism for a kid on the Gulf Coast to hear these unlikely heroes tell their stories. Greenwich Village may as well have been a different planet.', zh: '石墙事件发生时，我八岁，远在千里之外。没有新闻推送，没有照片病毒式传播的渠道，也没有机制让墨西哥湾沿岸的孩子听到这些不太可能的英雄讲述故事。格林威治村简直像另一个星球。' },
      { en: 'Though I can tell you that the slurs and hatreds were the same.', zh: '不过我可以告诉你们：那些污名与仇恨是一样的。' },
    ],
    core: {
      words: [
        { w: 'worthless', phon: '/ˈwɜːθləs/', pos: 'adj.', def: '一文不值的', def_en: 'having no value', syn: ['useless', 'of no value'], ex_en: 'feel worthless for being different', ex_zh: '因不同而觉得一文不值' },
        { w: 'oblivion', phon: '/əˈblɪviən/', pos: 'n.', def: '被遗忘；湮没', def_en: 'the state of being completely forgotten', syn: ['forgottenness', 'nothingness'], ex_en: 'better than oblivion', ex_zh: '比被遗忘更好' },
        { w: 'go viral', phon: '/ɡəʊ ˈvaɪrəl/', pos: 'phr.', def: '病毒式传播；爆红', def_en: 'to spread very fast online', syn: ['spread wildly', 'blow up online'], ex_en: 'no way for photos to go viral', ex_zh: '照片无法病毒式传播' },
        { w: 'may as well have been', phon: '/meɪ əz wel/', pos: 'phr.', def: '简直就像；无异于', def_en: 'it was almost the same as if…', syn: ['practically was', 'might as well be'], ex_en: 'may as well have been a different planet', ex_zh: '简直像另一个星球' },
        { w: 'slur', phon: '/slɜː/', pos: 'n.', def: '污蔑之词；辱骂', def_en: 'an insulting word used to attack a group', syn: ['insult', 'smear'], ex_en: 'the slurs and hatreds', ex_zh: '污名与仇恨' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'worthless', phon: '/ˈwɜːθləs/', pos: 'adj.', def: '一文不值的', def_en: 'having no value', syn: ['useless', 'of no value'], ex_en: 'feel worthless for being different', ex_zh: '因不同而觉得一文不值' },
      { w: 'oblivion', phon: '/əˈblɪviən/', pos: 'n.', def: '被遗忘；湮没', def_en: 'the state of being completely forgotten', syn: ['forgottenness', 'nothingness'], ex_en: 'better than oblivion', ex_zh: '比被遗忘更好' },
      { w: 'go viral', phon: '/ɡəʊ ˈvaɪrəl/', pos: 'phr.', def: '病毒式传播；爆红', def_en: 'to spread very fast online', syn: ['spread wildly', 'blow up online'], ex_en: 'no way for photos to go viral', ex_zh: '照片无法病毒式传播' },
      { w: 'may as well have been', phon: '/meɪ əz wel/', pos: 'phr.', def: '简直就像；无异于', def_en: 'it was almost the same as if…', syn: ['practically was', 'might as well be'], ex_en: 'may as well have been a different planet', ex_zh: '简直像另一个星球' },
      { w: 'slur', phon: '/slɜː/', pos: 'n.', def: '污蔑之词；辱骂', def_en: 'an insulting word used to attack a group', syn: ['insult', 'smear'], ex_en: 'the slurs and hatreds', ex_zh: '污名与仇恨' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「worthless」最接近的意思是？",
                "options": [
                      "一文不值的",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "一文不值的",
                "explain": "feel worthless for being different — 因不同而觉得一文不值"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：被遗忘；湮没）",
                "answer": "oblivion",
                "explain": "本段重点词：oblivion"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "It was just another instance of the world telling them that …",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "It was just another instance of the world telling them that …",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-13',
    date: '2026-08-06',
    title: '库克斯坦福演讲 13',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '13',
    durationMin: 1,
    timeRange: '13:10–14:09',
    passage: [
      { en: 'What I would not know for a long time was what I owed to a group of people I never knew, in a place I\'d never been. Yet I will never stop being grateful for what they had the courage to build.', zh: '我很久之后才明白：我欠一群素未谋面的人——在一个我从未去过的地方。但我会永远感激他们有勇气去建造的东西。' },
      { en: 'Graduates, being a builder is about believing that you cannot possibly be the greatest cause on this Earth — because you aren\'t built to last. It\'s about making peace with the fact that you won\'t be here for the end of the story.', zh: '毕业生们，做一个建设者，意味着相信你不可能是这世上最伟大的事业本身——因为你并非为永恒而造。它意味着与一个事实和解：故事的结局，你不会在场。' },
      { en: 'That brings me to my last bit of advice. Fourteen years ago, Steve stood on this stage…', zh: '这就说到我最后一点建议。十四年前，史蒂夫站在这个讲台……' },
    ],
    core: {
      words: [
        { w: 'owe to', phon: '/əʊ tuː/', pos: 'phr. v.', def: '归功于；亏欠', def_en: 'to have someone to thank for a result', syn: ['thanks to', 'be indebted to'], ex_en: 'what I owed to a group of people', ex_zh: '我欠一群人的' },
        { w: 'grateful', phon: '/ˈɡreɪtfl/', pos: 'adj.', def: '感激的', def_en: 'feeling thankful', syn: ['thankful', 'appreciative'], ex_en: 'never stop being grateful', ex_zh: '永远感激' },
        { w: 'built to last', phon: '/bɪlt tuː lɑːst/', pos: 'phr.', def: '为持久而造；经久耐用', def_en: 'designed to stay strong for a long time', syn: ['durable', 'made to endure'], ex_en: 'you aren\'t built to last', ex_zh: '你并非为永恒而造' },
        { w: 'make peace with', phon: '/meɪk piːs wɪð/', pos: 'phr.', def: '与……和解；接受', def_en: 'to accept something and stop fighting it', syn: ['accept', 'come to terms with'], ex_en: 'making peace with the fact', ex_zh: '与事实和解' },
        { w: 'last bit of advice', phon: '/lɑːst bɪt/', pos: 'phr.', def: '最后一点建议', def_en: 'one final suggestion before ending', syn: ['final tip', 'closing advice'], ex_en: 'my last bit of advice', ex_zh: '我最后一点建议' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'owe to', phon: '/əʊ tuː/', pos: 'phr. v.', def: '归功于；亏欠', def_en: 'to have someone to thank for a result', syn: ['thanks to', 'be indebted to'], ex_en: 'what I owed to a group of people', ex_zh: '我欠一群人的' },
      { w: 'grateful', phon: '/ˈɡreɪtfl/', pos: 'adj.', def: '感激的', def_en: 'feeling thankful', syn: ['thankful', 'appreciative'], ex_en: 'never stop being grateful', ex_zh: '永远感激' },
      { w: 'built to last', phon: '/bɪlt tuː lɑːst/', pos: 'phr.', def: '为持久而造；经久耐用', def_en: 'designed to stay strong for a long time', syn: ['durable', 'made to endure'], ex_en: 'you aren\'t built to last', ex_zh: '你并非为永恒而造' },
      { w: 'make peace with', phon: '/meɪk piːs wɪð/', pos: 'phr.', def: '与……和解；接受', def_en: 'to accept something and stop fighting it', syn: ['accept', 'come to terms with'], ex_en: 'making peace with the fact', ex_zh: '与事实和解' },
      { w: 'last bit of advice', phon: '/lɑːst bɪt/', pos: 'phr.', def: '最后一点建议', def_en: 'one final suggestion before ending', syn: ['final tip', 'closing advice'], ex_en: 'my last bit of advice', ex_zh: '我最后一点建议' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「owe to」最接近的意思是？",
                "options": [
                      "归功于；亏欠",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "归功于；亏欠",
                "explain": "what I owed to a group of people — 我欠一群人的"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：感激的）",
                "answer": "grateful",
                "explain": "本段重点词：grateful"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "What I would not know for a long time was what I owed to a g…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "What I would not know for a long time was what I owed to a g…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-14',
    date: '2026-08-06',
    title: '库克斯坦福演讲 14',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '14',
    durationMin: 1,
    timeRange: '14:09–15:07',
    passage: [
      { en: '…and told your predecessors: "Your time is limited, so don\'t waste it living someone else\'s life." Here\'s my corollary: your mentors may leave you prepared, but they can\'t leave you ready.', zh: '……并告诉你们的学长：「时间有限，别浪费在过别人的生活上。」我的推论是：导师可以让你有准备，但不能让你真正就绪。' },
      { en: 'When Steve got sick, I had hardwired my thinking to the belief that he would get better. I not only thought he would hold on — I was convinced, down to my core, that he\'d still be guiding Apple long after I myself was gone.', zh: '史蒂夫生病时，我把思维硬接线成：他会好起来。我不但觉得他会撑住——我从骨子里确信，哪怕我自己走了很久，他仍会指引苹果。' },
      { en: 'Then one day he called me over to his house and told me that it wasn\'t going to be that way. Even then I was convinced he would stay on as chairman — that he\'d step back from the day-to-day but always be there as a sounding board.', zh: '直到有一天他把我叫到家里，告诉我不会是那样。即便如此，我仍确信他会继续担任董事长——从日常抽身，但永远当参谋。' },
    ],
    core: {
      words: [
        { w: 'predecessor', phon: '/ˈpriːdɪsesə/', pos: 'n.', def: '前任；前辈（此处指往届毕业生）', def_en: 'the person who came before you in a role', syn: ['forerunner', 'previous person'], ex_en: 'told your predecessors', ex_zh: '告诉你们的学长' },
        { w: 'corollary', phon: '/kəˈrɒləri/', pos: 'n.', def: '推论；必然结果', def_en: 'a result that naturally follows from an idea', syn: ['side result', 'natural consequence'], ex_en: 'Here\'s my corollary', ex_zh: '我的推论是' },
        { w: 'hardwire', phon: '/ˌhɑːdˈwaɪə/', pos: 'v.', def: '硬接线；使固定成习惯/信念', def_en: 'to make a habit or belief feel automatic', syn: ['ingrain', 'bake in', 'fix deep'], ex_en: 'hardwired my thinking to the belief', ex_zh: '把思维硬接线成那个信念' },
        { w: 'down to my core', phon: '/daʊn tuː maɪ kɔː/', pos: 'phr.', def: '从骨子里；彻底地', def_en: 'in the deepest part of who I am', syn: ['deeply', 'to my bones'], ex_en: 'convinced, down to my core', ex_zh: '从骨子里确信' },
        { w: 'sounding board', phon: '/ˈsaʊndɪŋ bɔːd/', pos: 'n.', def: '参谋；商量对象', def_en: 'a trusted person you test ideas with', syn: ['advisor', 'thought partner'], ex_en: 'be there as a sounding board', ex_zh: '当参谋' },
        { w: 'day-to-day', phon: '/ˌdeɪ tə ˈdeɪ/', pos: 'n./adj.', def: '日常事务', def_en: 'the ordinary work of each day', syn: ['everyday work', 'daily affairs'], ex_en: 'step back from the day-to-day', ex_zh: '从日常抽身' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'predecessor', phon: '/ˈpriːdɪsesə/', pos: 'n.', def: '前任；前辈（此处指往届毕业生）', def_en: 'the person who came before you in a role', syn: ['forerunner', 'previous person'], ex_en: 'told your predecessors', ex_zh: '告诉你们的学长' },
      { w: 'corollary', phon: '/kəˈrɒləri/', pos: 'n.', def: '推论；必然结果', def_en: 'a result that naturally follows from an idea', syn: ['side result', 'natural consequence'], ex_en: 'Here\'s my corollary', ex_zh: '我的推论是' },
      { w: 'hardwire', phon: '/ˌhɑːdˈwaɪə/', pos: 'v.', def: '硬接线；使固定成习惯/信念', def_en: 'to make a habit or belief feel automatic', syn: ['ingrain', 'bake in', 'fix deep'], ex_en: 'hardwired my thinking to the belief', ex_zh: '把思维硬接线成那个信念' },
      { w: 'down to my core', phon: '/daʊn tuː maɪ kɔː/', pos: 'phr.', def: '从骨子里；彻底地', def_en: 'in the deepest part of who I am', syn: ['deeply', 'to my bones'], ex_en: 'convinced, down to my core', ex_zh: '从骨子里确信' },
      { w: 'sounding board', phon: '/ˈsaʊndɪŋ bɔːd/', pos: 'n.', def: '参谋；商量对象', def_en: 'a trusted person you test ideas with', syn: ['advisor', 'thought partner'], ex_en: 'be there as a sounding board', ex_zh: '当参谋' },
      { w: 'day-to-day', phon: '/ˌdeɪ tə ˈdeɪ/', pos: 'n./adj.', def: '日常事务', def_en: 'the ordinary work of each day', syn: ['everyday work', 'daily affairs'], ex_en: 'step back from the day-to-day', ex_zh: '从日常抽身' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「predecessor」最接近的意思是？",
                "options": [
                      "前任；前辈（此处指往届毕业生）",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "前任；前辈（此处指往届毕业生）",
                "explain": "told your predecessors — 告诉你们的学长"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：推论；必然结果）",
                "answer": "corollary",
                "explain": "本段重点词：corollary"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "…and told your predecessors: \"Your time is limited, so don't…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "…and told your predecessors: \"Your time is limited, so don't…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-15',
    date: '2026-08-06',
    title: '库克斯坦福演讲 15',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '15',
    durationMin: 1,
    timeRange: '15:07–16:04',
    passage: [
      { en: 'But there was no reason to believe that. I never should have thought it. The facts were all there. And when he was gone — truly gone — I learned the real, visceral difference between preparation and readiness.', zh: '但其实没有理由那样相信。我不该那么想。事实都摆在那里。当他走了——真正走了——我才体会到「有准备」与「已就绪」之间那种真实、发自肺腑的差别。' },
      { en: 'It was the loneliest I\'ve ever felt in my life — by an order of magnitude. It was one of those moments where you can be surrounded by people, yet you don\'t really see, hear, or feel them. But I could sense their expectations.', zh: '那是我一生中最孤独的时刻——高出一个数量级。那种时刻：你被人群围着，却真正看不见、听不见、感觉不到他们。但我能感觉到他们的期待。' },
      { en: 'When the dust settled, all I knew was that I was going to have to be the best version of myself that I could be.', zh: '尘埃落定后，我只知道一件事：我必须成为自己所能成为的最好版本。' },
    ],
    core: {
      words: [
        { w: 'visceral', phon: '/ˈvɪsərəl/', pos: 'adj.', def: '发自肺腑的；刻骨的', def_en: 'felt deeply in the body, not just thought', syn: ['gut-level', 'deep-felt'], ex_en: 'the real, visceral difference', ex_zh: '真实、发自肺腑的差别' },
        { w: 'readiness', phon: '/ˈredinəs/', pos: 'n.', def: '就绪；真正准备好', def_en: 'the state of being truly prepared', syn: ['preparedness', 'being ready'], ex_en: 'difference between preparation and readiness', ex_zh: '准备与就绪之别' },
        { w: 'by an order of magnitude', phon: '/ˈɔːdə əv ˈmæɡnɪtjuːd/', pos: 'phr.', def: '高出一个数量级；远远更…', def_en: 'by about ten times; far more', syn: ['far greater', 'many times more'], ex_en: 'loneliest… by an order of magnitude', ex_zh: '孤独高出一个数量级' },
        { w: 'when the dust settled', phon: '/dʌst ˈsetld/', pos: 'phr.', def: '尘埃落定之后', def_en: 'after the chaos calmed down', syn: ['after things calmed', 'once it quieted'], ex_en: 'When the dust settled…', ex_zh: '尘埃落定后…' },
        { w: 'best version of myself', phon: '/best ˈvɜːʃn/', pos: 'phr.', def: '最好的自己', def_en: 'the strongest, kindest self I can be', syn: ['my best self', 'my highest self'], ex_en: 'the best version of myself', ex_zh: '最好的自己' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'visceral', phon: '/ˈvɪsərəl/', pos: 'adj.', def: '发自肺腑的；刻骨的', def_en: 'felt deeply in the body, not just thought', syn: ['gut-level', 'deep-felt'], ex_en: 'the real, visceral difference', ex_zh: '真实、发自肺腑的差别' },
      { w: 'readiness', phon: '/ˈredinəs/', pos: 'n.', def: '就绪；真正准备好', def_en: 'the state of being truly prepared', syn: ['preparedness', 'being ready'], ex_en: 'difference between preparation and readiness', ex_zh: '准备与就绪之别' },
      { w: 'by an order of magnitude', phon: '/ˈɔːdə əv ˈmæɡnɪtjuːd/', pos: 'phr.', def: '高出一个数量级；远远更…', def_en: 'by about ten times; far more', syn: ['far greater', 'many times more'], ex_en: 'loneliest… by an order of magnitude', ex_zh: '孤独高出一个数量级' },
      { w: 'when the dust settled', phon: '/dʌst ˈsetld/', pos: 'phr.', def: '尘埃落定之后', def_en: 'after the chaos calmed down', syn: ['after things calmed', 'once it quieted'], ex_en: 'When the dust settled…', ex_zh: '尘埃落定后…' },
      { w: 'best version of myself', phon: '/best ˈvɜːʃn/', pos: 'phr.', def: '最好的自己', def_en: 'the strongest, kindest self I can be', syn: ['my best self', 'my highest self'], ex_en: 'the best version of myself', ex_zh: '最好的自己' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「visceral」最接近的意思是？",
                "options": [
                      "发自肺腑的；刻骨的",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "发自肺腑的；刻骨的",
                "explain": "the real, visceral difference — 真实、发自肺腑的差别"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：就绪；真正准备好）",
                "answer": "readiness",
                "explain": "本段重点词：readiness"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "But there was no reason to believe that. I never should have…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "But there was no reason to believe that. I never should have…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-16',
    date: '2026-08-06',
    title: '库克斯坦福演讲 16',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '16',
    durationMin: 1,
    timeRange: '16:04–17:07',
    passage: [
      { en: 'I knew that if you got out of bed every morning and set your watch by what other people expect or demand, it\'d drive you crazy. So what was true then is true now: don\'t waste your time living someone else\'s life.', zh: '我知道：如果你每天起床都按别人的期待或要求来校准手表，你会疯掉。所以当时正确的，现在也正确：别浪费时间过别人的生活。' },
      { en: 'Don\'t try to emulate the people who came before you to the exclusion of everything else — contorting into a shape that doesn\'t fit. It takes too much mental effort — effort that should be dedicated to creating and building.', zh: '别试图把前人模仿到排除一切的地步——扭曲成不合身的形状。那太耗心力——这些心力本该用于创造与建造。' },
      { en: 'You\'ll waste precious time trying to rewire your every thought, and in the meantime you won\'t be fooling anybody. Graduates, the fact is: when your time comes — and it will — you\'ll never be ready. But you\'re not supposed to be.', zh: '你会浪费宝贵时间去重接线每一个念头，同时谁也骗不了。毕业生们，事实是：轮到你的时候——一定会来——你永远不会真正就绪。但你本也不必就绪。' },
      { en: 'Find the hope in the unexpected. Find the courage in the challenge. Find your vision on the solitary road.', zh: '在意外中找到希望。在挑战中找到勇气。在独处的路上找到你的愿景。' },
    ],
    core: {
      words: [
        { w: 'set your watch by', phon: '/set jɔː wɒtʃ baɪ/', pos: 'phr.', def: '完全按……校准（比喻盲从）', def_en: 'to follow something as if it were always right', syn: ['follow blindly', 'treat as gospel'], ex_en: 'set your watch by what other people expect', ex_zh: '按别人的期待校准手表' },
        { w: 'emulate', phon: '/ˈemjuleɪt/', pos: 'v.', def: '仿效；努力赶上', def_en: 'to copy someone because you admire them', syn: ['imitate', 'model after', 'follow'], ex_en: 'emulate the people who came before you', ex_zh: '仿效前人' },
        { w: 'to the exclusion of', phon: '/ɪkˈskluːʒn/', pos: 'phr.', def: '排斥其他一切地', def_en: 'so much that everything else is shut out', syn: ['leaving out', 'at the cost of'], ex_en: 'to the exclusion of everything else', ex_zh: '排除一切其他' },
        { w: 'contort', phon: '/kənˈtɔːt/', pos: 'v.', def: '扭曲', def_en: 'to twist into an unnatural shape', syn: ['twist', 'distort'], ex_en: 'contorting into a shape that doesn\'t fit', ex_zh: '扭曲成不合身的形状' },
        { w: 'rewire', phon: '/ˌriːˈwaɪə/', pos: 'v.', def: '重新接线；重塑思维', def_en: 'to change how you think or react', syn: ['retrain', 'reshape thinking'], ex_en: 'rewire your every thought', ex_zh: '重接线每一个念头' },
        { w: 'solitary', phon: '/ˈsɒlətri/', pos: 'adj.', def: '独处的；孤独的', def_en: 'done alone; without company', syn: ['alone', 'lonely', 'solo'], ex_en: 'on the solitary road', ex_zh: '在独处的路上' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'set your watch by', phon: '/set jɔː wɒtʃ baɪ/', pos: 'phr.', def: '完全按……校准（比喻盲从）', def_en: 'to follow something as if it were always right', syn: ['follow blindly', 'treat as gospel'], ex_en: 'set your watch by what other people expect', ex_zh: '按别人的期待校准手表' },
      { w: 'emulate', phon: '/ˈemjuleɪt/', pos: 'v.', def: '仿效；努力赶上', def_en: 'to copy someone because you admire them', syn: ['imitate', 'model after', 'follow'], ex_en: 'emulate the people who came before you', ex_zh: '仿效前人' },
      { w: 'to the exclusion of', phon: '/ɪkˈskluːʒn/', pos: 'phr.', def: '排斥其他一切地', def_en: 'so much that everything else is shut out', syn: ['leaving out', 'at the cost of'], ex_en: 'to the exclusion of everything else', ex_zh: '排除一切其他' },
      { w: 'contort', phon: '/kənˈtɔːt/', pos: 'v.', def: '扭曲', def_en: 'to twist into an unnatural shape', syn: ['twist', 'distort'], ex_en: 'contorting into a shape that doesn\'t fit', ex_zh: '扭曲成不合身的形状' },
      { w: 'rewire', phon: '/ˌriːˈwaɪə/', pos: 'v.', def: '重新接线；重塑思维', def_en: 'to change how you think or react', syn: ['retrain', 'reshape thinking'], ex_en: 'rewire your every thought', ex_zh: '重接线每一个念头' },
      { w: 'solitary', phon: '/ˈsɒlətri/', pos: 'adj.', def: '独处的；孤独的', def_en: 'done alone; without company', syn: ['alone', 'lonely', 'solo'], ex_en: 'on the solitary road', ex_zh: '在独处的路上' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「set your watch by」最接近的意思是？",
                "options": [
                      "完全按……校准（比喻盲从）",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "完全按……校准（比喻盲从）",
                "explain": "set your watch by what other people expect — 按别人的期待校准手表"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：仿效；努力赶上）",
                "answer": "emulate",
                "explain": "本段重点词：emulate"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "I knew that if you got out of bed every morning and set your…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "I knew that if you got out of bed every morning and set your…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
  {
    id: '2026-08-06-cook-17',
    date: '2026-08-06',
    title: '库克斯坦福演讲 17',
    source: 'Tim Cook · Stanford Commencement 2019',
    tags: ['精听', '演讲', '商务'],
    kind: 'shadow',
    seriesId: 'cook-stanford-2019',
    part: '17',
    durationMin: 1,
    timeRange: '17:07–17:38',
    passage: [
      { en: 'Don\'t get distracted. There are too many people who want credit without responsibility — too many who show up for the ribbon-cutting without building anything worth a damn.', zh: '别分心。想居功却不担责的人太多了——只来剪彩、却没建出任何像样东西的人太多了。' },
      { en: 'Be different. Leave something worthy. And always remember that you can\'t take it with you — you\'re going to have to pass it on.', zh: '做点不一样的。留下值得留下的东西。并永远记住：你带不走它——你终将把它传递下去。' },
      { en: 'Thank you very much — and congratulations to the Class of 2019.', zh: '非常感谢——祝贺 2019 届毕业生。' },
    ],
    core: {
      words: [
        { w: 'get distracted', phon: '/ɡet dɪˈstræktɪd/', pos: 'phr.', def: '分心', def_en: 'to lose focus because something else pulls you', syn: ['lose focus', 'be sidetracked'], ex_en: 'Don\'t get distracted.', ex_zh: '别分心。' },
        { w: 'ribbon-cutting', phon: '/ˈrɪbən ˌkʌtɪŋ/', pos: 'n.', def: '剪彩仪式', def_en: 'a ceremonial opening of something new', syn: ['opening ceremony', 'launch event'], ex_en: 'show up for the ribbon-cutting', ex_zh: '来剪彩' },
        { w: 'worth a damn', phon: '/wɜːθ ə dæm/', pos: 'phr.', def: '像样的；有点价值的（口语）', def_en: 'good enough to matter (informal)', syn: ['worthwhile', 'of real value'], ex_en: 'building anything worth a damn', ex_zh: '建出任何像样的东西' },
        { w: 'leave something worthy', phon: '/liːv ˈwɜːði/', pos: 'phr.', def: '留下值得留下的东西', def_en: 'to leave behind work that still matters', syn: ['leave a legacy', 'leave something lasting'], ex_en: 'Leave something worthy.', ex_zh: '留下值得留下的东西。' },
        { w: 'pass it on', phon: '/pɑːs ɪt ɒn/', pos: 'phr. v.', def: '传递下去', def_en: 'to give what you learned to the next person', syn: ['hand it down', 'pay it forward'], ex_en: 'you\'re going to have to pass it on', ex_zh: '你终将把它传递下去' },
      ],
      grammar: [
        { t: '演讲节奏', d: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。' },
      ],
    },
    vocab: [
      { w: 'get distracted', phon: '/ɡet dɪˈstræktɪd/', pos: 'phr.', def: '分心', def_en: 'to lose focus because something else pulls you', syn: ['lose focus', 'be sidetracked'], ex_en: 'Don\'t get distracted.', ex_zh: '别分心。' },
      { w: 'ribbon-cutting', phon: '/ˈrɪbən ˌkʌtɪŋ/', pos: 'n.', def: '剪彩仪式', def_en: 'a ceremonial opening of something new', syn: ['opening ceremony', 'launch event'], ex_en: 'show up for the ribbon-cutting', ex_zh: '来剪彩' },
      { w: 'worth a damn', phon: '/wɜːθ ə dæm/', pos: 'phr.', def: '像样的；有点价值的（口语）', def_en: 'good enough to matter (informal)', syn: ['worthwhile', 'of real value'], ex_en: 'building anything worth a damn', ex_zh: '建出任何像样的东西' },
      { w: 'leave something worthy', phon: '/liːv ˈwɜːði/', pos: 'phr.', def: '留下值得留下的东西', def_en: 'to leave behind work that still matters', syn: ['leave a legacy', 'leave something lasting'], ex_en: 'Leave something worthy.', ex_zh: '留下值得留下的东西。' },
      { w: 'pass it on', phon: '/pɑːs ɪt ɒn/', pos: 'phr. v.', def: '传递下去', def_en: 'to give what you learned to the next person', syn: ['hand it down', 'pay it forward'], ex_en: 'you\'re going to have to pass it on', ex_zh: '你终将把它传递下去' },
    ],
    grammar: [
      { t: '演讲节奏', pattern: '', rule: '注意停顿与强调：把关键名词/动词说清楚，再接解释句。', examples: [] },
    ],
    quiz: [
          {
                "type": "choice",
                "tag": "语言点",
                "q": "本段核心表达「get distracted」最接近的意思是？",
                "options": [
                      "分心",
                      "完全相反的意思",
                      "专有名词地名",
                      "无实际含义的语气词"
                ],
                "answer": "分心",
                "explain": "Don't get distracted. — 别分心。"
          },
          {
                "type": "fill",
                "tag": "精听",
                "q": "跟读关键词：____（提示：剪彩仪式）",
                "answer": "ribbon-cutting",
                "explain": "本段重点词：ribbon-cutting"
          },
          {
                "type": "choice",
                "tag": "阅读理解",
                "q": "本段开场大意最接近？",
                "options": [
                      "Don't get distracted. There are too many people who want cre…",
                      "与本段无关的科技产品广告",
                      "天气预报与交通提示",
                      "体育比赛比分播报"
                ],
                "answer": "Don't get distracted. There are too many people who want cre…",
                "explain": "回到原文第一句核对大意即可。"
          }
    ],
  },
];
