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

  // 質問の候補（この並び順で本文の段落になる）。画面には毎回ランダムに一部だけ出し、
  // 「質問を増やす」「ほかの質問に替える」で入れ替えられる。答えなかった質問は本文に入らない。
  questions: [
    { id: 'moment', emoji: '🎉', q: { ja: '一番楽しかった・印象に残った瞬間は？', en: 'What was the most fun or memorable moment?', zh: '最开心或印象最深的瞬间是什么？', tw: '最開心或印象最深的瞬間是什麼？', ko: '가장 즐거웠거나 기억에 남는 순간은?' } },
    { id: 'bowls', emoji: '🍜', q: { ja: '何杯食べましたか？誰と来ましたか？', en: 'How many bowls did you eat? Who did you come with?', zh: '吃了几碗？和谁一起来的？', tw: '吃了幾碗？和誰一起來的？', ko: '몇 그릇 드셨나요? 누구와 오셨나요?' } },
    { id: 'why', emoji: '🗺️', q: { ja: 'このお店を知ったきっかけ・選んだ理由は？', en: 'How did you find this place, and why did you choose it?', zh: '是怎么知道这家店的？为什么选择这里？', tw: '是怎麼知道這家店的？為什麼選擇這裡？', ko: '이 가게를 어떻게 알게 됐고, 왜 선택했나요?' } },
    { id: 'first', emoji: '🔰', q: { ja: 'わんこそばは初めてでしたか？', en: 'Was this your first time trying wanko soba?', zh: '这是第一次吃碗子荞麦面吗？', tw: '這是第一次吃碗子蕎麥麵嗎？', ko: '완코소바는 처음이었나요?' } },
    { id: 'wait', emoji: '⌛', q: { ja: '入店までの待ち時間はどうでしたか？', en: 'How was the wait to get in?', zh: '进店前等了多久？感觉如何？', tw: '進店前等了多久？感覺如何？', ko: '입장까지 대기 시간은 어땠나요?' } },
    { id: 'access', emoji: '📍', q: { ja: 'お店の場所は分かりやすかったですか？', en: 'Was the restaurant easy to find?', zh: '店铺位置好找吗？', tw: '店家位置好找嗎？', ko: '가게 위치는 찾기 쉬웠나요?' } },
    { id: 'expect', emoji: '🤔', q: { ja: '来る前のイメージと比べてどうでしたか？', en: 'How did it compare to what you expected?', zh: '和来之前的想象相比如何？', tw: '和來之前的想像相比如何？', ko: '오기 전에 상상했던 것과 비교하면 어땠나요?' } },
    { id: 'lane', emoji: '🔄', q: { ja: '回ってくるお椀を取ってみた感想は？', en: 'What was it like grabbing bowls off the conveyor?', zh: '从回转台上拿碗的感觉如何？', tw: '從迴轉台上拿碗的感覺如何？', ko: '회전 레일에서 그릇을 집어 보니 어땠나요?' } },
    { id: 'pace', emoji: '⏱️', q: { ja: '食べるペースはどうでしたか？ついていけましたか？', en: 'How was the pace — could you keep up?', zh: '吃的节奏如何？跟得上吗？', tw: '吃的節奏如何？跟得上嗎？', ko: '먹는 속도는 어땠나요? 따라갈 수 있었나요?' } },
    { id: 'rival', emoji: '🤜', q: { ja: '一緒に来た人と勝負しましたか？結果は？', en: 'Did you compete with anyone? Who won?', zh: '有和同行的人比赛吗？结果如何？', tw: '有和同行的人比賽嗎？結果如何？', ko: '같이 온 사람과 대결했나요? 결과는?' } },
    { id: 'taste', emoji: '🥢', q: { ja: 'そばやつゆの味はどうでしたか？', en: 'How did the soba and broth taste?', zh: '荞麦面和汤汁的味道如何？', tw: '蕎麥麵和湯汁的味道如何？', ko: '소바와 국물 맛은 어땠나요?' } },
    { id: 'toppings', emoji: '🧂', q: { ja: '気に入った薬味・味変は？', en: 'Which toppings or flavor changes did you like?', zh: '喜欢哪种佐料或换口味的吃法？', tw: '喜歡哪種佐料或換口味的吃法？', ko: '마음에 든 토핑이나 맛 변화는?' } },
    { id: 'staff', emoji: '😊', q: { ja: 'スタッフはどうでしたか？', en: 'How were the staff?', zh: '店员怎么样？', tw: '店員怎麼樣？', ko: '직원들은 어땠나요?' } },
    { id: 'rules', emoji: '📖', q: { ja: 'ルールの説明は分かりやすかったですか？', en: 'Were the rules explained clearly?', zh: '规则说明清楚吗？', tw: '規則說明清楚嗎？', ko: '규칙 설명은 알기 쉬웠나요?' } },
    { id: 'language', emoji: '🌐', q: { ja: '言葉で困ったことはありましたか？', en: 'Was language ever a problem?', zh: '有遇到语言上的困难吗？', tw: '有遇到語言上的困難嗎？', ko: '언어 때문에 곤란한 적이 있었나요?' } },
    { id: 'vibe', emoji: '✨', q: { ja: 'お店の雰囲気はどうでしたか？', en: 'How was the atmosphere?', zh: '店内氛围怎么样？', tw: '店內氛圍怎麼樣？', ko: '가게 분위기는 어땠나요?' } },
    { id: 'sound', emoji: '📣', q: { ja: '印象に残った音や掛け声は？', en: 'Any sounds or cheers from the staff that stuck with you?', zh: '有印象深刻的声音或吆喝声吗？', tw: '有印象深刻的聲音或吆喝聲嗎？', ko: '기억에 남는 소리나 구호가 있나요?' } },
    { id: 'clean', emoji: '🧼', q: { ja: '店内の清潔さはどうでしたか？', en: 'How clean was the restaurant?', zh: '店内干净吗？', tw: '店內乾淨嗎？', ko: '가게는 깨끗했나요?' } },
    { id: 'end', emoji: '🔔', q: { ja: '最後はどうやって終わりましたか？（ベル？時間切れ？）', en: 'How did your challenge end — the bell, or time up?', zh: '最后是怎么结束的？（按铃？时间到？）', tw: '最後是怎麼結束的？（按鈴？時間到？）', ko: '마지막은 어떻게 끝났나요? (벨? 시간 종료?)' } },
    { id: 'full', emoji: '😋', q: { ja: '食べ終わった後のお腹の具合は？', en: 'How full were you afterwards?', zh: '吃完后肚子撑吗？', tw: '吃完後肚子撐嗎？', ko: '다 먹고 난 뒤 배는 어땠나요?' } },
    { id: 'surprise', emoji: '😮', q: { ja: '意外だったこと・驚いたことは？', en: 'Anything that surprised you?', zh: '有什么意外或惊讶的事吗？', tw: '有什麼意外或驚訝的事嗎？', ko: '의외였거나 놀랐던 점은?' } },
    { id: 'together', emoji: '👫', q: { ja: '一緒に来た人の反応はどうでしたか？', en: 'How did the people you came with react?', zh: '同行的人反应如何？', tw: '同行的人反應如何？', ko: '같이 온 사람들의 반응은 어땠나요?' } },
    { id: 'photo', emoji: '📸', q: { ja: '写真や動画を撮りたくなった場面は？', en: 'Any moments you just had to photograph or film?', zh: '有让你想拍照或录视频的瞬间吗？', tw: '有讓你想拍照或錄影的瞬間嗎？', ko: '사진이나 영상을 찍고 싶었던 순간은?' } },
    { id: 'trip', emoji: '🇯🇵', q: { ja: '今回の旅行の中で、どんな思い出になりましたか？', en: 'What kind of memory will this be from your trip?', zh: '这会成为这次旅行中怎样的回忆？', tw: '這會成為這次旅行中怎樣的回憶？', ko: '이번 여행에서 어떤 추억이 됐나요?' } },
    { id: 'compare', emoji: '🍱', q: { ja: '日本で食べた他の料理と比べてどうでしたか？', en: 'How did it compare to other food you\'ve had in Japan?', zh: '和在日本吃过的其他料理相比如何？', tw: '和在日本吃過的其他料理相比如何？', ko: '일본에서 먹은 다른 음식과 비교하면 어땠나요?' } },
    { id: 'value', emoji: '💴', q: { ja: '値段に見合っていたと思いますか？', en: 'Was it worth the price?', zh: '觉得物有所值吗？', tw: '覺得物有所值嗎？', ko: '가격만큼의 가치가 있었나요?' } },
    { id: 'again', emoji: '🔁', q: { ja: 'また来たいと思いますか？それはなぜ？', en: 'Would you come back? Why or why not?', zh: '还想再来吗？为什么？', tw: '還想再來嗎？為什麼？', ko: '다시 오고 싶나요? 그 이유는?' } },
    { id: 'who_for', emoji: '🙌', q: { ja: 'どんな人におすすめしたいですか？', en: 'Who would you recommend it to?', zh: '想推荐给什么样的人？', tw: '想推薦給什麼樣的人？', ko: '어떤 사람에게 추천하고 싶나요?' } },
    { id: 'better', emoji: '💭', q: { ja: '気になったこと・こうだったらいいのに、と思ったことは？', en: 'Anything that could be better?', zh: '有没有觉得可以改进的地方？', tw: '有沒有覺得可以改進的地方？', ko: '아쉬웠거나 개선됐으면 하는 점은?' } },
    { id: 'tip', emoji: '💡', q: { ja: 'これから行く人へのアドバイスは？', en: 'Any tips for people planning to go?', zh: '给想去的人一些建议？', tw: '給想去的人一些建議？', ko: '앞으로 갈 사람들에게 조언이 있다면?' } }
  ],
  showFirst: 6,   // 最初に出す質問の数
  addMore: 2,     // 「質問を増やす」で増える数


  // タイトル用の質問（Tripadvisorはタイトル必須）
  titleQ: {
    ja: 'ひと言でいうと？（タイトルになります）', en: 'Sum it up in a few words (this becomes your title)',
    zh: '用一句话总结？（会成为标题）', tw: '用一句話總結？（會成為標題）', ko: '한마디로 말하면? (제목이 됩니다)'
  }
};
