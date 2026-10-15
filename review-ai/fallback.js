// 無料AIをすべて使い切ったとき用：ページの中だけで文案を組み立てる（費用ゼロ・回数無制限）
// 書き出し・項目の言い方・つなぎ・締め・タイトルを毎回ランダムに組み合わせ、触れる項目の数と順番も変える。
// 対応言語は ja / en / zh / tw / ko。それ以外の言語は en で作る。
(function () {
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function lc(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function f(tpl, v) { return tpl.replace(/\{(\w+)\}/g, function (_, k) { return v[k] == null ? '' : v[k]; }); }

  var P = {
    ja: {
      who: { solo: 'ひとりで', friends: '友達と', family: '家族と', couple: 'パートナーと', work: '仕事仲間と' },
      openBowls: ['今日は{n}杯でした。', '結果は{n}杯！', '{n}杯まで行けました。', '気づけば{n}杯。', '記録は{n}杯。自分でもびっくり。'],
      openWho: ['{who}回転わんこそばに行ってきました。', '{who}わんこそばに挑戦。', '{who}行きました。'],
      openPlain: ['回転わんこそばを体験してきました。', '新宿でわんこそばに挑戦。', 'わんこそば、想像以上でした。', '前から気になっていたお店です。'],
      like: ['「{x}」と感じました。', '{x}、これが良かったです。', '個人的には「{x}」が印象に残りました。', '{x}。', '何より{x}！'],
      join: ['', 'それに、', 'あと、', 'もうひとつ、', ''],
      dislike: ['ただ、{x}のは少し残念。', '{x}点は気になりました。', '強いて言えば、{x}かな。'],
      close: { 5: ['また来たいです。', '次はもっと食べたい！', '楽しかったです。', '大満足でした。'], 4: ['満足です。', 'また機会があれば。', '楽しめました。'], 3: ['体験としては面白かったです。', 'まあまあでした。'], 2: ['今後に期待します。'], 1: ['改善に期待します。'] },
      title: ['{n}杯いきました', 'わんこそば体験', '楽しいランチでした', '{who}わんこそば', '回転わんこそば、良かった'],
      sep: ''
    },
    en: {
      who: { solo: 'solo', friends: 'with friends', family: 'with family', couple: 'with my partner', work: 'with colleagues' },
      openBowls: ['Final count: {n} bowls.', 'Made it to {n} bowls!', '{n} bowls for me today.', 'I stopped at {n} bowls.'],
      openWho: ['Went {who} to try the conveyor-belt wanko soba.', 'Came here {who}.', 'Tried wanko soba {who} today.'],
      openPlain: ['Tried wanko soba for the first time here.', 'Fun stop in Shinjuku.', 'Wasn\'t sure what to expect from wanko soba.'],
      like: ['{X}.', 'Also, {x}.', 'Honestly, {x}.', 'Best part: {x}.', '{X}, which I enjoyed.'],
      join: ['', '', ''],
      dislike: ['One downside: {x}.', 'Only thing — {x}.', '{X}, though.'],
      close: { 5: ['Would come back.', 'Great time.', 'Loved it.'], 4: ['Pretty good overall.', 'Enjoyed it.'], 3: ['An interesting experience.', 'It was okay.'], 2: ['Hope it improves.'], 1: ['Hope they improve.'] },
      title: ['{n} bowls down', 'Wanko soba fun', 'Fun meal in Shinjuku', 'Conveyor-belt soba!', 'Glad we tried it'],
      sep: ' '
    },
    zh: {
      who: { solo: '一个人', friends: '和朋友', family: '和家人', couple: '和另一半', work: '和同事' },
      openBowls: ['今天吃了{n}碗！', '最后吃到{n}碗。', '我的纪录：{n}碗。'],
      openWho: ['{who}来体验回转碗子荞麦面。', '{who}一起来挑战。'],
      openPlain: ['第一次体验回转碗子荞麦面。', '在新宿挑战了碗子荞麦面。'],
      like: ['{x}。', '另外，{x}。', '最喜欢的是：{x}。', '还有，{x}。'],
      join: [''],
      dislike: ['不过{x}。', '唯一的缺点是{x}。'],
      close: { 5: ['还想再来！', '非常开心。'], 4: ['整体很满意。'], 3: ['体验还算有趣。'], 2: ['希望能改进。'], 1: ['希望能改进。'] },
      title: ['吃了{n}碗', '碗子荞麦面体验', '新宿的有趣午餐'],
      sep: ''
    },
    tw: {
      who: { solo: '一個人', friends: '和朋友', family: '和家人', couple: '和另一半', work: '和同事' },
      openBowls: ['今天吃了{n}碗！', '最後吃到{n}碗。', '我的紀錄：{n}碗。'],
      openWho: ['{who}來體驗迴轉碗子蕎麥麵。', '{who}一起來挑戰。'],
      openPlain: ['第一次體驗迴轉碗子蕎麥麵。', '在新宿挑戰了碗子蕎麥麵。'],
      like: ['{x}。', '另外，{x}。', '最喜歡的是：{x}。', '還有，{x}。'],
      join: [''],
      dislike: ['不過{x}。', '唯一的缺點是{x}。'],
      close: { 5: ['還想再來！', '非常開心。'], 4: ['整體很滿意。'], 3: ['體驗還算有趣。'], 2: ['希望能改進。'], 1: ['希望能改進。'] },
      title: ['吃了{n}碗', '碗子蕎麥麵體驗', '新宿的有趣午餐'],
      sep: ''
    },
    ko: {
      who: { solo: '혼자', friends: '친구들과', family: '가족과', couple: '연인과', work: '동료들과' },
      openBowls: ['오늘은 {n}그릇!', '결과는 {n}그릇이었어요.', '{n}그릇까지 먹었어요.'],
      openWho: ['{who} 회전 완코소바에 다녀왔어요.', '{who} 완코소바에 도전했어요.'],
      openPlain: ['회전 완코소바를 체험했어요.', '신주쿠에서 완코소바에 도전!'],
      like: ['{x}.', '그리고 {x}.', "특히 '{x}' 이게 좋았어요.", '{x} — 기억에 남아요.'],
      join: [''],
      dislike: ['다만 {x}.', "아쉬운 점은 '{x}'."],
      close: { 5: ['또 오고 싶어요.', '정말 즐거웠어요.'], 4: ['전체적으로 만족해요.'], 3: ['체험으로는 재미있었어요.'], 2: ['개선을 기대해요.'], 1: ['개선을 기대해요.'] },
      title: ['{n}그릇 성공', '완코소바 체험', '신주쿠에서 즐거운 식사'],
      sep: ' '
    }
  };

  // ctx: { lang, rating, bowls, who, likes:[{label}], dislikes:[{label}], comment }
  window.buildLocalDraft = function (ctx, store) {
    var lang = P[ctx.lang] ? ctx.lang : 'en', p = P[lang];
    var v = { n: ctx.bowls || '', who: ctx.who ? p.who[ctx.who] : '' };
    var parts = [];
    var openers = [];
    if (ctx.bowls) openers.push(pick(p.openBowls));
    if (ctx.who) openers.push(pick(p.openWho));
    openers.push(pick(p.openPlain));
    parts.push(f(pick(openers), v));

    var likes = shuffle(ctx.likes);
    if (likes.length > 2) likes = likes.slice(0, 2 + Math.floor(Math.random() * (likes.length - 1)));
    // 同じ言い回しを1つの文案の中で繰り返さない（シャッフルした順に使い回す）
    var lf = shuffle(p.like), jf = shuffle(p.join), df = shuffle(p.dislike);
    likes.forEach(function (it, i) {
      var x = it.label[lang] || it.label.en;
      parts.push((i ? jf[i % jf.length] : '') + f(lf[i % lf.length], { x: lang === 'en' ? lc(x) : x, X: x }));
    });
    ctx.dislikes.forEach(function (it, i) {
      var x = it.label[lang] || it.label.en;
      parts.push(f(df[i % df.length], { x: lang === 'en' ? lc(x) : x, X: x }));
    });
    if (ctx.comment) parts.push(ctx.comment);
    parts.push(pick(p.close[ctx.rating] || p.close[5]));

    // 段落の切れ目もランダム（1〜2か所で改行）
    var body = '', breaks = {};
    for (var b = 0; b < 1 + Math.floor(Math.random() * 2); b++) breaks[1 + Math.floor(Math.random() * Math.max(1, parts.length - 1))] = 1;
    parts.forEach(function (s, i) { body += (i === 0 ? '' : (breaks[i] ? '\n' : p.sep)) + s; });

    var titles = p.title.filter(function (t) { return (t.indexOf('{n}') < 0 || ctx.bowls) && (t.indexOf('{who}') < 0 || ctx.who); });
    return { title: f(pick(titles), v), body: body };
  };
})();
