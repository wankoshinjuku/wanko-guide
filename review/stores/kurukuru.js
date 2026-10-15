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

  // 質問はGoogleスプレッドシート「口コミ記入ヘルパー 質問一覧」（タブ kurukuru）から読み込む。
  // 読めなかった時だけ、下の questions / titleQ を使う（予備）。
  questionsApi: 'https://script.google.com/macros/s/AKfycbzrteFNnzkwQRgz3ajcSfZqnFawyM-j3qCVhGy51h_xIALQU97BWM9DJV-JFyYHFS4d/exec',

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
    { id: 'first', emoji: '🔰', q: { ja: '初めて（または何度目か）のわんこそば、どんな体験でしたか？', en: 'First time or not — what was your wanko soba experience like?', zh: '第一次（或第几次）吃碗子荞麦面，体验如何？', tw: '第一次（或第幾次）吃碗子蕎麥麵，體驗如何？', ko: '처음(또는 몇 번째) 먹어 본 완코소바, 어떤 체험이었나요?' } },
    { id: 'wait', emoji: '⌛', q: { ja: '入店までの待ち時間はどうでしたか？', en: 'How was the wait to get in?', zh: '进店前等了多久？感觉如何？', tw: '進店前等了多久？感覺如何？', ko: '입장까지 대기 시간은 어땠나요?' } },
    { id: 'access', emoji: '📍', q: { ja: 'お店までの行き方で、これから行く人に伝えたいことは？', en: 'Anything people should know about getting to the restaurant?', zh: '关于怎么到店里，有什么想告诉之后要去的人的？', tw: '關於怎麼到店裡，有什麼想告訴之後要去的人的？', ko: '가게까지 가는 길에 대해, 앞으로 갈 사람에게 알려 주고 싶은 것은?' } },
    { id: 'arrive', emoji: '🚪', q: { ja: 'お店に入ったときの第一印象は？', en: 'What was your first impression when you walked in?', zh: '走进店里时的第一印象是？', tw: '走進店裡時的第一印象是？', ko: '가게에 들어섰을 때 첫인상은?' } },
    { id: 'time', emoji: '🕒', q: { ja: '行った時間帯と、そのときの混み具合を教えてください', en: 'What time did you go, and what was the crowd like then?', zh: '大概几点去的？当时人多不多？', tw: '大概幾點去的？當時人多不多？', ko: '몇 시쯤 갔고, 그때 붐비는 정도는 어땠나요?' } },
    { id: 'expect', emoji: '🤔', q: { ja: '来る前のイメージと比べてどうでしたか？', en: 'How did it compare to what you expected?', zh: '和来之前的想象相比如何？', tw: '和來之前的想像相比如何？', ko: '오기 전에 상상했던 것과 비교하면 어땠나요?' } },
    { id: 'lane', emoji: '🔄', q: { ja: '回ってくるお椀を取ってみた感想は？', en: 'What was it like grabbing bowls off the conveyor?', zh: '从回转台上拿碗的感觉如何？', tw: '從迴轉台上拿碗的感覺如何？', ko: '회전 레일에서 그릇을 집어 보니 어땠나요?' } },
    { id: 'look', emoji: '👀', q: { ja: 'そばの見た目はどうでしたか？', en: 'How did the soba look?', zh: '荞麦面的外观如何？', tw: '蕎麥麵的外觀如何？', ko: '소바의 모양은 어땠나요?' } },
    { id: 'texture', emoji: '🌾', q: { ja: 'そばの食感やのど越しは？', en: 'How was the texture of the noodles?', zh: '面条的口感和顺滑度如何？', tw: '麵條的口感和滑順度如何？', ko: '면의 식감이나 목 넘김은 어땠나요?' } },
    { id: 'pace', emoji: '⏱️', q: { ja: '食べるペースについて、どう感じましたか？', en: 'How did you find the pace of the bowls coming?', zh: '对吃的节奏有什么感受？', tw: '對吃的節奏有什麼感受？', ko: '먹는 속도에 대해 어떻게 느꼈나요?' } },
    { id: 'goal', emoji: '🎯', q: { ja: '目標にしていた杯数と、実際の結果は？', en: 'What was your target number of bowls, and how did you do?', zh: '目标是几碗？实际结果如何？', tw: '目標是幾碗？實際結果如何？', ko: '목표했던 그릇 수와 실제 결과는?' } },
    { id: 'best_bowl', emoji: '🥇', q: { ja: '一番おいしく感じたのは何杯目くらい？そのときの様子は？', en: 'Around which bowl did it taste best, and what was happening then?', zh: '大概第几碗时觉得最好吃？当时是什么情况？', tw: '大概第幾碗時覺得最好吃？當時是什麼情況？', ko: '몇 번째 그릇쯤이 가장 맛있었나요? 그때 어땠나요?' } },
    { id: 'hard', emoji: '😵', q: { ja: '苦しくなってきたのは何杯目くらい？そこからどうしましたか？', en: 'When did it start getting tough, and what did you do then?', zh: '大概第几碗开始吃力？之后怎么办的？', tw: '大概第幾碗開始吃力？之後怎麼辦的？', ko: '몇 번째 그릇쯤부터 힘들어졌고, 그 뒤엔 어떻게 했나요?' } },
    { id: 'strategy', emoji: '🧠', q: { ja: '杯数を伸ばすために工夫したことは？', en: 'What did you do to try to eat more bowls?', zh: '为了多吃几碗，你做了哪些尝试？', tw: '為了多吃幾碗，你做了哪些嘗試？', ko: '그릇 수를 늘리려고 어떤 방법을 써 봤나요?' } },
    { id: 'rival', emoji: '🤜', q: { ja: '一緒に来た人との勝負や、みんなの食べっぷりはどうでしたか？', en: 'How did the competition with your group go — who ate the most?', zh: '和同行的人比赛的情况如何？大家吃得怎么样？', tw: '和同行的人比賽的情況如何？大家吃得怎麼樣？', ko: '같이 온 사람들과의 대결이나 다들 먹는 모습은 어땠나요?' } },
    { id: 'taste', emoji: '🥢', q: { ja: 'そばやつゆの味はどうでしたか？', en: 'How did the soba and broth taste?', zh: '荞麦面和汤汁的味道如何？', tw: '蕎麥麵和湯汁的味道如何？', ko: '소바와 국물 맛은 어땠나요?' } },
    { id: 'toppings', emoji: '🧂', q: { ja: '気に入った薬味・味変は？', en: 'Which toppings or flavor changes did you like?', zh: '喜欢哪种佐料或换口味的吃法？', tw: '喜歡哪種佐料或換口味的吃法？', ko: '마음에 든 토핑이나 맛 변화는?' } },
    { id: 'staff', emoji: '😊', q: { ja: 'スタッフはどうでしたか？', en: 'How were the staff?', zh: '店员怎么样？', tw: '店員怎麼樣？', ko: '직원들은 어땠나요?' } },
    { id: 'staff_moment', emoji: '💬', q: { ja: 'スタッフとのやりとりで印象に残ったことは？', en: 'Any moment with the staff that stuck with you?', zh: '和店员的互动中有印象深刻的事吗？', tw: '和店員的互動中有印象深刻的事嗎？', ko: '직원과 주고받은 것 중 기억에 남는 것은?' } },
    { id: 'rules', emoji: '📖', q: { ja: 'ルールの説明を聞いて、どう感じましたか？', en: 'What did you think of how the rules were explained?', zh: '听了规则说明后，有什么感受？', tw: '聽了規則說明後，有什麼感受？', ko: '규칙 설명을 듣고 어떻게 느꼈나요?' } },
    { id: 'language', emoji: '🌐', q: { ja: '言葉（英語など）でのやりとりはどうでしたか？', en: 'How was communicating with the staff (in English or other languages)?', zh: '和店员用语言（英语等）沟通得如何？', tw: '和店員用語言（英語等）溝通得如何？', ko: '언어(영어 등)로 소통하는 건 어땠나요?' } },
    { id: 'vibe', emoji: '✨', q: { ja: 'お店の雰囲気はどうでしたか？', en: 'How was the atmosphere?', zh: '店内氛围怎么样？', tw: '店內氛圍怎麼樣？', ko: '가게 분위기는 어땠나요?' } },
    { id: 'sound', emoji: '📣', q: { ja: '印象に残った音や掛け声は？', en: 'Any sounds or cheers from the staff that stuck with you?', zh: '有印象深刻的声音或吆喝声吗？', tw: '有印象深刻的聲音或吆喝聲嗎？', ko: '기억에 남는 소리나 구호가 있나요?' } },
    { id: 'clean', emoji: '🧼', q: { ja: '店内の清潔さはどうでしたか？', en: 'How clean was the restaurant?', zh: '店内干净吗？', tw: '店內乾淨嗎？', ko: '가게는 깨끗했나요?' } },
    { id: 'end', emoji: '🔔', q: { ja: '最後はどうやって終わりましたか？（ベル？時間切れ？）', en: 'How did your challenge end — the bell, or time up?', zh: '最后是怎么结束的？（按铃？时间到？）', tw: '最後是怎麼結束的？（按鈴？時間到？）', ko: '마지막은 어떻게 끝났나요? (벨? 시간 종료?)' } },
    { id: 'full', emoji: '😋', q: { ja: '食べ終わった後のお腹の具合は？', en: 'How full were you afterwards?', zh: '吃完后肚子撑吗？', tw: '吃完後肚子撐嗎？', ko: '다 먹고 난 뒤 배는 어땠나요?' } },
    { id: 'mood', emoji: '🥳', q: { ja: '食べ終わった直後の気分は？', en: 'How did you feel right after finishing?', zh: '刚吃完时的心情如何？', tw: '剛吃完時的心情如何？', ko: '다 먹은 직후 기분은 어땠나요?' } },
    { id: 'duration', emoji: '⏳', q: { ja: '体験の長さ（時間）について、どう感じましたか？', en: 'How did you feel about the length of the experience?', zh: '对体验的时长有什么感受？', tw: '對體驗的時長有什麼感受？', ko: '체험 시간의 길이에 대해 어떻게 느꼈나요?' } },
    { id: 'surprise', emoji: '😮', q: { ja: '意外だったこと・驚いたことは？', en: 'Anything that surprised you?', zh: '有什么意外或惊讶的事吗？', tw: '有什麼意外或驚訝的事嗎？', ko: '의외였거나 놀랐던 점은?' } },
    { id: 'together', emoji: '👫', q: { ja: '一緒に来た人の反応はどうでしたか？', en: 'How did the people you came with react?', zh: '同行的人反应如何？', tw: '同行的人反應如何？', ko: '같이 온 사람들의 반응은 어땠나요?' } },
    { id: 'photo', emoji: '📸', q: { ja: '写真や動画を撮りたくなった場面は？', en: 'Any moments you just had to photograph or film?', zh: '有让你想拍照或录视频的瞬间吗？', tw: '有讓你想拍照或錄影的瞬間嗎？', ko: '사진이나 영상을 찍고 싶었던 순간은?' } },
    { id: 'trip', emoji: '🇯🇵', q: { ja: '今回の旅行の中で、どんな思い出になりましたか？', en: 'What kind of memory will this be from your trip?', zh: '这会成为这次旅行中怎样的回忆？', tw: '這會成為這次旅行中怎樣的回憶？', ko: '이번 여행에서 어떤 추억이 됐나요?' } },
    { id: 'compare', emoji: '🍱', q: { ja: '日本で食べた他の料理と比べてどうでしたか？', en: 'How did it compare to other food you\'ve had in Japan?', zh: '和在日本吃过的其他料理相比如何？', tw: '和在日本吃過的其他料理相比如何？', ko: '일본에서 먹은 다른 음식과 비교하면 어땠나요?' } },
    { id: 'culture', emoji: '🏮', q: { ja: 'わんこそばという日本の食文化についてどう感じましたか？', en: 'What did you think of wanko soba as a piece of Japanese food culture?', zh: '对碗子荞麦面这种日本饮食文化有什么感受？', tw: '對碗子蕎麥麵這種日本飲食文化有什麼感受？', ko: '완코소바라는 일본 음식 문화에 대해 어떻게 느꼈나요?' } },
    { id: 'shinjuku', emoji: '🏙️', q: { ja: '新宿での一日の中で、どんな時間になりましたか？', en: 'How did it fit into your day in Shinjuku?', zh: '在新宿的一天中，这是一段怎样的时光？', tw: '在新宿的一天中，這是一段怎樣的時光？', ko: '신주쿠에서의 하루 중 어떤 시간이 됐나요?' } },
    { id: 'value', emoji: '💴', q: { ja: '値段と内容のバランスについて、どう思いましたか？', en: 'What did you think of the price for what you got?', zh: '对价格和内容是否相符，你怎么看？', tw: '對價格和內容是否相符，你怎麼看？', ko: '가격과 내용의 균형에 대해 어떻게 생각했나요?' } },
    { id: 'again', emoji: '🔁', q: { ja: 'また来たいと思った（または思わなかった）理由は？', en: 'What makes you want to come back — or not?', zh: '想（或不想）再来的理由是什么？', tw: '想（或不想）再來的理由是什麼？', ko: '다시 오고 싶은(또는 아닌) 이유는?' } },
    { id: 'who_for', emoji: '🙌', q: { ja: 'どんな人におすすめしたいですか？', en: 'Who would you recommend it to?', zh: '想推荐给什么样的人？', tw: '想推薦給什麼樣的人？', ko: '어떤 사람에게 추천하고 싶나요?' } },
    { id: 'kids', emoji: '👨‍👩‍👧', q: { ja: '子ども連れや家族で来るなら、どんなところが楽しめそう？気をつけることは？', en: 'For families with kids, what would they enjoy, and what should they keep in mind?', zh: '如果带孩子或全家来，哪些地方会好玩？需要注意什么？', tw: '如果帶孩子或全家來，哪些地方會好玩？需要注意什麼？', ko: '아이나 가족과 함께 온다면 어떤 점이 즐거울까요? 주의할 점은?' } },
    { id: 'solo', emoji: '🙋', q: { ja: '一人で来る人に伝えたいことは？', en: 'What would you tell someone coming on their own?', zh: '想对一个人来的人说什么？', tw: '想對一個人來的人說什麼？', ko: '혼자 오는 사람에게 전하고 싶은 것은?' } },
    { id: 'group', emoji: '🎊', q: { ja: 'グループで行くなら、どんな楽しみ方がおすすめ？', en: 'How would you recommend enjoying it as a group?', zh: '如果是一群人去，推荐怎么玩？', tw: '如果是一群人去，推薦怎麼玩？', ko: '그룹으로 간다면 어떻게 즐기는 걸 추천하나요?' } },
    { id: 'explain', emoji: '🗣️', q: { ja: '友達にこのお店を説明するなら、なんて言いますか？', en: 'How would you describe this place to a friend?', zh: '如果向朋友介绍这家店，你会怎么说？', tw: '如果向朋友介紹這家店，你會怎麼說？', ko: '친구에게 이 가게를 설명한다면 뭐라고 할까요?' } },
    { id: 'share', emoji: '📱', q: { ja: '帰ってから誰かに話したくなったエピソードは？', en: 'What\'s the story you\'ll tell people about this when you get home?', zh: '回去后最想跟别人讲的小故事是什么？', tw: '回去後最想跟別人講的小故事是什麼？', ko: '돌아가서 누군가에게 이야기하고 싶은 에피소드는?' } },
    { id: 'diet', emoji: '🥗', q: { ja: '食事の制限（アレルギー・宗教など）がある人に伝えたいことは？', en: 'Anything to share for people with dietary restrictions (allergies, religion, etc.)?', zh: '对于有饮食限制（过敏、宗教等）的人，有什么想说的吗？', tw: '對於有飲食限制（過敏、宗教等）的人，有什麼想說的嗎？', ko: '식이 제한(알레르기·종교 등)이 있는 사람에게 전하고 싶은 것은?' } },
    { id: 'better', emoji: '💭', q: { ja: '気になったこと・こうだったらいいのに、と思ったことは？', en: 'Anything that could be better?', zh: '有没有觉得可以改进的地方？', tw: '有沒有覺得可以改進的地方？', ko: '아쉬웠거나 개선됐으면 하는 점은?' } },
    { id: 'tip', emoji: '💡', q: { ja: 'これから行く人へのアドバイスは？', en: 'Any tips for people planning to go?', zh: '给想去的人一些建议？', tw: '給想去的人一些建議？', ko: '앞으로 갈 사람들에게 조언이 있다면?' } },
    { id: 'last', emoji: '✍️', q: { ja: '最後にひと言、自由にどうぞ！', en: 'Anything else you\'d like to say?', zh: '最后还有什么想说的，请自由发挥！', tw: '最後還有什麼想說的，請自由發揮！', ko: '마지막으로 자유롭게 한마디!' } }
  ],
  showFirst: 6,   // 最初に出す質問の数
  addMore: 2,     // 「質問を増やす」で増える数


  // タイトル用の質問（Tripadvisorはタイトル必須）
  titleQ: {
    ja: 'ひと言でいうと？（タイトルになります）', en: 'Sum it up in a few words (this becomes your title)',
    zh: '用一句话总结？（会成为标题）', tw: '用一句話總結？（會成為標題）', ko: '한마디로 말하면? (제목이 됩니다)'
  }
};
