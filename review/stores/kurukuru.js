// 店舗設定：回転わんこそば くるくるわんこ
// 質問を足す・消す・言い回しを変えるときはこのファイルだけ編集すればよい。
// 文言は ja / en / zh(簡体) / tw(繁体) / ko の5言語。
// お客さんの答えは、この順番で段落としてつながるだけ（ツール側で文章を足したり言い換えたりしない）。
window.STORE = {
  id: 'kurukuru',
  name: {
    ja: '回転わんこそば くるくるわんこ',
    en: 'Kaiten Wanko Soba KURUKURU WANKO',
    zh: '回转碗子荞麦面 KURUKURU WANKO',
    tw: '迴轉碗子蕎麥麵 KURUKURU WANKO',
    ko: '회전 완코소바 쿠루쿠루 완코'
  },
  logo: 'stores/kurukuru-logo.png',
  theme: { primary: '#C8201A', primaryDark: '#9E1612', accent: '#F3B61F' },

  defaultPlatform: 'tripadvisor',   // 既定の投稿先（自動でこちらを開く）
  links: {
    google: 'https://search.google.com/local/writereview?placeid=ChIJSG421fKNGGARsmjFynkRsJE',
    tripadvisor: 'https://www.tripadvisor.jp/UserReviewEdit-g14133667-d25244851-Kaiten_Wankosoba_Kurukuruwanko-Kabukicho_Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html'
  },

  questions: [
    { id: 'moment', emoji: '🎉', q: {
      ja: '一番楽しかった・印象に残った瞬間は？', en: 'What was the most fun or memorable moment?',
      zh: '最开心或印象最深的瞬间是什么？', tw: '最開心或印象最深的瞬間是什麼？', ko: '가장 즐거웠거나 기억에 남는 순간은?' } },
    { id: 'bowls', emoji: '🍜', q: {
      ja: '何杯食べましたか？誰と来ましたか？', en: 'How many bowls did you eat? Who did you come with?',
      zh: '吃了几碗？和谁一起来的？', tw: '吃了幾碗？和誰一起來的？', ko: '몇 그릇 드셨나요? 누구와 오셨나요?' } },
    { id: 'taste', emoji: '🥢', q: {
      ja: 'そばやつゆの味はどうでしたか？', en: 'How did the soba and broth taste?',
      zh: '荞麦面和汤汁的味道如何？', tw: '蕎麥麵和湯汁的味道如何？', ko: '소바와 국물 맛은 어땠나요?' } },
    { id: 'staff', emoji: '😊', q: {
      ja: 'スタッフやお店の雰囲気はどうでしたか？', en: 'How were the staff and the atmosphere?',
      zh: '店员和店内氛围怎么样？', tw: '店員和店內氛圍怎麼樣？', ko: '직원과 가게 분위기는 어땠나요?' } },
    { id: 'better', emoji: '💭', q: {
      ja: '気になったこと・こうだったらいいのに、と思ったことは？', en: 'Anything that could be better?',
      zh: '有没有觉得可以改进的地方？', tw: '有沒有覺得可以改進的地方？', ko: '아쉬웠거나 개선됐으면 하는 점은?' } },
    { id: 'tip', emoji: '💡', q: {
      ja: 'これから行く人へのアドバイスは？', en: 'Any tips for people planning to go?',
      zh: '给想去的人一些建议？', tw: '給想去的人一些建議？', ko: '앞으로 갈 사람들에게 조언이 있다면?' } }
  ],

  // タイトル用の質問（Tripadvisorはタイトル必須）
  titleQ: {
    ja: 'ひと言でいうと？（タイトルになります）', en: 'Sum it up in a few words (this becomes your title)',
    zh: '用一句话总结？（会成为标题）', tw: '用一句話總結？（會成為標題）', ko: '한마디로 말하면? (제목이 됩니다)'
  }
};
