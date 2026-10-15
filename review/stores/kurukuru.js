// 店舗設定：回転わんこそば くるくるわんこ
// 項目を足す・消す・文言を変えるときはこのファイルだけ編集すればよい。
// ラベルは ja / en / zh(簡体) / tw(繁体) / ko の5言語。AIには en のラベルが渡る。
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

  links: {
    google: 'https://search.google.com/local/writereview?placeid=ChIJSG421fKNGGARsmjFynkRsJE',
    tripadvisor: 'https://www.tripadvisor.jp/UserReviewEdit-g14133667-d25244851-Kaiten_Wankosoba_Kurukuruwanko-Kabukicho_Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html'
  },

  // 杯数カウンター（使わない店舗は enabled:false）
  counter: {
    enabled: true, max: 999, quick: [30, 50, 80, 100, 150],
    title: { ja: '今日食べた杯数', en: 'How many bowls did you eat?', zh: '今天吃了几碗？', tw: '今天吃了幾碗？', ko: '오늘 몇 그릇 드셨나요?' },
    unit: { ja: '杯', en: 'bowls', zh: '碗', tw: '碗', ko: '그릇' }
  },

  highlights: [
    { id: 'tasty',   emoji: '🍜', label: { ja: 'そばが美味しい', en: 'The soba was delicious', zh: '荞麦面很好吃', tw: '蕎麥麵很好吃', ko: '소바가 맛있었다' } },
    { id: 'fun',     emoji: '🎉', label: { ja: 'とにかく楽しい', en: 'So much fun', zh: '非常好玩', tw: '超級好玩', ko: '정말 재미있었다' } },
    { id: 'staff',   emoji: '😊', label: { ja: 'スタッフが明るく親切', en: 'Friendly, cheerful staff', zh: '店员热情亲切', tw: '店員熱情親切', ko: '직원이 밝고 친절했다' } },
    { id: 'cheer',   emoji: '📣', label: { ja: '掛け声・応援で盛り上がった', en: 'The staff cheering got us hyped', zh: '店员的加油声让气氛很嗨', tw: '店員的加油聲讓氣氛很嗨', ko: '직원들의 응원으로 분위기가 최고였다' } },
    { id: 'unique',  emoji: '🇯🇵', label: { ja: '日本ならではの体験', en: 'A uniquely Japanese experience', zh: '独特的日本体验', tw: '獨特的日本體驗', ko: '일본에서만 할 수 있는 체험' } },
    { id: 'toppings',emoji: '🧂', label: { ja: '薬味で味変できて飽きない', en: 'Lots of toppings to change the flavor', zh: '佐料丰富，可以换口味', tw: '佐料豐富，可以換口味', ko: '토핑으로 맛을 바꿀 수 있어 질리지 않았다' } }
  ],

  categories: [
    { title: { ja: '味・料理', en: 'Food', zh: '味道・料理', tw: '味道・料理', ko: '맛・요리' }, items: [
      { id: 'dashi',   emoji: '🍲', label: { ja: 'つゆの出汁が効いている', en: 'Rich dashi broth', zh: '汤汁的高汤很鲜', tw: '湯汁的高湯很鮮', ko: '육수 맛이 깊었다' } },
      { id: 'noodle',  emoji: '🥢', label: { ja: '蕎麦ののど越しが良い', en: 'Smooth, springy noodles', zh: '面条爽滑有嚼劲', tw: '麵條滑順有嚼勁', ko: '면이 부드럽고 목 넘김이 좋았다' } },
      { id: 'full',    emoji: '😋', label: { ja: 'お腹いっぱい大満足', en: 'Left completely full', zh: '吃得非常饱', tw: '吃得超飽', ko: '배부르게 먹고 대만족' } }
    ]},
    { title: { ja: '回転わんこそば体験', en: 'The wanko soba challenge', zh: '回转碗子荞麦面体验', tw: '迴轉碗子蕎麥麵體驗', ko: '회전 완코소바 체험' }, items: [
      { id: 'lane',    emoji: '🔄', label: { ja: '回ってくるお椀を取るのが楽しい', en: 'Grabbing bowls off the conveyor was fun', zh: '从回转台上拿碗很好玩', tw: '從迴轉台上拿碗很好玩', ko: '회전 레일에서 그릇을 집는 게 재미있었다' } },
      { id: 'stack',   emoji: '🗼', label: { ja: 'お椀が積み上がる達成感', en: 'Watching my bowl tower grow', zh: '碗越叠越高很有成就感', tw: '碗越疊越高很有成就感', ko: '그릇이 쌓여 가는 성취감' } },
      { id: 'time',    emoji: '⏱️', label: { ja: '時間内のチャレンジに熱中した', en: 'Got hooked on the timed challenge', zh: '限时挑战让人上瘾', tw: '限時挑戰讓人上癮', ko: '제한 시간 도전에 푹 빠졌다' } },
      { id: 'friends', emoji: '🤜', label: { ja: '仲間と杯数を競って盛り上がった', en: 'Competing with friends was a blast', zh: '和朋友比赛碗数超嗨', tw: '和朋友比碗數超嗨', ko: '친구들과 그릇 수 대결이 즐거웠다' } },
      { id: 'record',  emoji: '🏆', label: { ja: '記録カードに挑戦の記録が残った', en: 'Got my record on a record card', zh: '在记录卡上留下了成绩', tw: '在紀錄卡上留下了成績', ko: '기록 카드에 내 기록을 남겼다' } }
    ]},
    { title: { ja: '接客・サービス', en: 'Service', zh: '服务', tw: '服務', ko: '서비스' }, items: [
      { id: 'rules',   emoji: '📖', label: { ja: 'ルール説明が分かりやすい', en: 'Rules were explained clearly', zh: '规则说明很清楚', tw: '規則說明很清楚', ko: '규칙 설명이 알기 쉬웠다' } },
      { id: 'lang',    emoji: '🌐', label: { ja: '外国語での対応が親切', en: 'Helpful English / foreign-language support', zh: '外语接待很周到', tw: '外語接待很周到', ko: '외국어 응대가 친절했다' } },
      { id: 'photo',   emoji: '📷', label: { ja: '写真撮影を手伝ってくれた', en: 'Staff helped take our photos', zh: '店员帮忙拍照', tw: '店員幫忙拍照', ko: '사진 촬영을 도와줬다' } }
    ]},
    { title: { ja: 'お店の雰囲気', en: 'Atmosphere', zh: '店内氛围', tw: '店內氛圍', ko: '가게 분위기' }, items: [
      { id: 'lively',  emoji: '✨', label: { ja: '活気があってワクワクする', en: 'Lively, exciting vibe', zh: '气氛热闹令人兴奋', tw: '氣氛熱鬧令人興奮', ko: '활기차고 설레는 분위기' } },
      { id: 'clean',   emoji: '🧼', label: { ja: '店内が清潔', en: 'Clean restaurant', zh: '店内很干净', tw: '店內很乾淨', ko: '가게가 깨끗했다' } },
      { id: 'insta',   emoji: '📸', label: { ja: '写真・動画映えする', en: 'Great for photos and videos', zh: '很适合拍照拍视频', tw: '很適合拍照拍影片', ko: '사진・영상 찍기 좋다' } }
    ]},
    { title: { ja: '総合', en: 'Overall', zh: '总体', tw: '整體', ko: '종합' }, items: [
      { id: 'mustgo',  emoji: '🌟', label: { ja: '東京観光でおすすめ', en: 'A must-do in Tokyo', zh: '东京旅游必去', tw: '東京旅遊必去', ko: '도쿄 여행에서 꼭 가볼 곳' } },
      { id: 'value',   emoji: '💯', label: { ja: '値段以上の満足感', en: 'Worth the price', zh: '物超所值', tw: '物超所值', ko: '가격 이상의 만족감' } },
      { id: 'again',   emoji: '🤝', label: { ja: 'また来たい・人に勧めたい', en: 'Want to come back / recommend it', zh: '还想再来，会推荐给别人', tw: '還想再來，會推薦給別人', ko: '또 오고 싶고 추천하고 싶다' } }
    ]}
  ],

  // 気になった点（正直な感想用。低評価の人だけに出すのではなく、全員に同じように表示する）
  honest: {
    title: { ja: '気になった点（あれば）', en: 'Anything that could be better? (optional)', zh: '有待改进的地方（如有）', tw: '可以改進的地方（如有）', ko: '아쉬웠던 점 (있다면)' },
    items: [
      { id: 'wait',    emoji: '⌛', label: { ja: '待ち時間が長かった', en: 'Long wait to get in', zh: '等位时间较长', tw: '等候時間較長', ko: '대기 시간이 길었다' } },
      { id: 'crowded', emoji: '👥', label: { ja: '店内が混んでいた', en: 'It was crowded', zh: '店里人很多', tw: '店裡人很多', ko: '가게가 붐볐다' } },
      { id: 'price',   emoji: '💴', label: { ja: '値段が少し高く感じた', en: 'Felt a bit pricey', zh: '觉得价格偏高', tw: '覺得價格偏高', ko: '가격이 조금 비싸게 느껴졌다' } },
      { id: 'find',    emoji: '🗺️', label: { ja: '場所が分かりにくかった', en: 'Hard to find the place', zh: '店铺位置不好找', tw: '店家位置不好找', ko: '가게 위치를 찾기 어려웠다' } },
      { id: 'pace',    emoji: '🌀', label: { ja: 'ペースが速くて大変だった', en: 'The pace was hard to keep up with', zh: '节奏太快有点吃力', tw: '節奏太快有點吃力', ko: '속도가 빨라서 힘들었다' } }
    ]
  }
};
