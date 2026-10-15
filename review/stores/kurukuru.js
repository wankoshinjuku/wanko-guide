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
    { id: 'first', emoji: '🔰', q: { ja: 'わんこそばは初めてでしたか？', en: 'Was this your first time trying wanko soba?', zh: '这是第一次吃碗子荞麦面吗？', tw: '這是第一次吃碗子蕎麥麵嗎？', ko: '완코소바는 처음이었나요?' } },
    { id: 'wait', emoji: '⌛', q: { ja: '入店までの待ち時間はどうでしたか？', en: 'How was the wait to get in?', zh: '进店前等了多久？感觉如何？', tw: '進店前等了多久？感覺如何？', ko: '입장까지 대기 시간은 어땠나요?' } },
    { id: 'access', emoji: '📍', q: { ja: 'お店の場所は分かりやすかったですか？', en: 'Was the restaurant easy to find?', zh: '店铺位置好找吗？', tw: '店家位置好找嗎？', ko: '가게 위치는 찾기 쉬웠나요?' } },
    { id: 'arrive', emoji: '🚪', q: { ja: 'お店に入ったときの第一印象は？', en: 'What was your first impression when you walked in?', zh: '走进店里时的第一印象是？', tw: '走進店裡時的第一印象是？', ko: '가게에 들어섰을 때 첫인상은?' } },
    { id: 'time', emoji: '🕒', q: { ja: '何時ごろ行きましたか？混み具合は？', en: 'What time did you go, and how busy was it?', zh: '大概几点去的？人多吗？', tw: '大概幾點去的？人多嗎？', ko: '몇 시쯤 갔나요? 붐볐나요?' } },
    { id: 'expect', emoji: '🤔', q: { ja: '来る前のイメージと比べてどうでしたか？', en: 'How did it compare to what you expected?', zh: '和来之前的想象相比如何？', tw: '和來之前的想像相比如何？', ko: '오기 전에 상상했던 것과 비교하면 어땠나요?' } },
    { id: 'lane', emoji: '🔄', q: { ja: '回ってくるお椀を取ってみた感想は？', en: 'What was it like grabbing bowls off the conveyor?', zh: '从回转台上拿碗的感觉如何？', tw: '從迴轉台上拿碗的感覺如何？', ko: '회전 레일에서 그릇을 집어 보니 어땠나요?' } },
    { id: 'look', emoji: '👀', q: { ja: 'そばの見た目はどうでしたか？', en: 'How did the soba look?', zh: '荞麦面的外观如何？', tw: '蕎麥麵的外觀如何？', ko: '소바의 모양은 어땠나요?' } },
    { id: 'texture', emoji: '🌾', q: { ja: 'そばの食感やのど越しは？', en: 'How was the texture of the noodles?', zh: '面条的口感和顺滑度如何？', tw: '麵條的口感和滑順度如何？', ko: '면의 식감이나 목 넘김은 어땠나요?' } },
    { id: 'pace', emoji: '⏱️', q: { ja: '食べるペースはどうでしたか？ついていけましたか？', en: 'How was the pace — could you keep up?', zh: '吃的节奏如何？跟得上吗？', tw: '吃的節奏如何？跟得上嗎？', ko: '먹는 속도는 어땠나요? 따라갈 수 있었나요?' } },
    { id: 'goal', emoji: '🎯', q: { ja: '目標の杯数はありましたか？達成できましたか？', en: 'Did you have a target number of bowls? Did you hit it?', zh: '有目标碗数吗？达成了吗？', tw: '有目標碗數嗎？達成了嗎？', ko: '목표한 그릇 수가 있었나요? 달성했나요?' } },
    { id: 'best_bowl', emoji: '🥇', q: { ja: '何杯目あたりが一番おいしく感じましたか？', en: 'Around which bowl did it taste best?', zh: '大概第几碗时觉得最好吃？', tw: '大概第幾碗時覺得最好吃？', ko: '몇 번째 그릇쯤이 가장 맛있었나요?' } },
    { id: 'hard', emoji: '😵', q: { ja: '何杯目あたりから苦しくなりましたか？', en: 'At what point did it start getting tough?', zh: '大概第几碗开始觉得吃力？', tw: '大概第幾碗開始覺得吃力？', ko: '몇 번째 그릇쯤부터 힘들어졌나요?' } },
    { id: 'strategy', emoji: '🧠', q: { ja: '杯数を伸ばすコツは見つかりましたか？', en: 'Did you find any tricks for eating more bowls?', zh: '有找到多吃几碗的诀窍吗？', tw: '有找到多吃幾碗的訣竅嗎？', ko: '그릇 수를 늘리는 요령을 찾았나요?' } },
    { id: 'rival', emoji: '🤜', q: { ja: '一緒に来た人と勝負しましたか？結果は？', en: 'Did you compete with anyone? Who won?', zh: '有和同行的人比赛吗？结果如何？', tw: '有和同行的人比賽嗎？結果如何？', ko: '같이 온 사람과 대결했나요? 결과는?' } },
    { id: 'taste', emoji: '🥢', q: { ja: 'そばやつゆの味はどうでしたか？', en: 'How did the soba and broth taste?', zh: '荞麦面和汤汁的味道如何？', tw: '蕎麥麵和湯汁的味道如何？', ko: '소바와 국물 맛은 어땠나요?' } },
    { id: 'toppings', emoji: '🧂', q: { ja: '気に入った薬味・味変は？', en: 'Which toppings or flavor changes did you like?', zh: '喜欢哪种佐料或换口味的吃法？', tw: '喜歡哪種佐料或換口味的吃法？', ko: '마음에 든 토핑이나 맛 변화는?' } },
    { id: 'staff', emoji: '😊', q: { ja: 'スタッフはどうでしたか？', en: 'How were the staff?', zh: '店员怎么样？', tw: '店員怎麼樣？', ko: '직원들은 어땠나요?' } },
    { id: 'staff_moment', emoji: '💬', q: { ja: 'スタッフとのやりとりで印象に残ったことは？', en: 'Any moment with the staff that stuck with you?', zh: '和店员的互动中有印象深刻的事吗？', tw: '和店員的互動中有印象深刻的事嗎？', ko: '직원과 주고받은 것 중 기억에 남는 것은?' } },
    { id: 'rules', emoji: '📖', q: { ja: 'ルールの説明は分かりやすかったですか？', en: 'Were the rules explained clearly?', zh: '规则说明清楚吗？', tw: '規則說明清楚嗎？', ko: '규칙 설명은 알기 쉬웠나요?' } },
    { id: 'language', emoji: '🌐', q: { ja: '言葉で困ったことはありましたか？', en: 'Was language ever a problem?', zh: '有遇到语言上的困难吗？', tw: '有遇到語言上的困難嗎？', ko: '언어 때문에 곤란한 적이 있었나요?' } },
    { id: 'vibe', emoji: '✨', q: { ja: 'お店の雰囲気はどうでしたか？', en: 'How was the atmosphere?', zh: '店内氛围怎么样？', tw: '店內氛圍怎麼樣？', ko: '가게 분위기는 어땠나요?' } },
    { id: 'sound', emoji: '📣', q: { ja: '印象に残った音や掛け声は？', en: 'Any sounds or cheers from the staff that stuck with you?', zh: '有印象深刻的声音或吆喝声吗？', tw: '有印象深刻的聲音或吆喝聲嗎？', ko: '기억에 남는 소리나 구호가 있나요?' } },
    { id: 'clean', emoji: '🧼', q: { ja: '店内の清潔さはどうでしたか？', en: 'How clean was the restaurant?', zh: '店内干净吗？', tw: '店內乾淨嗎？', ko: '가게는 깨끗했나요?' } },
    { id: 'end', emoji: '🔔', q: { ja: '最後はどうやって終わりましたか？（ベル？時間切れ？）', en: 'How did your challenge end — the bell, or time up?', zh: '最后是怎么结束的？（按铃？时间到？）', tw: '最後是怎麼結束的？（按鈴？時間到？）', ko: '마지막은 어떻게 끝났나요? (벨? 시간 종료?)' } },
    { id: 'full', emoji: '😋', q: { ja: '食べ終わった後のお腹の具合は？', en: 'How full were you afterwards?', zh: '吃完后肚子撑吗？', tw: '吃完後肚子撐嗎？', ko: '다 먹고 난 뒤 배는 어땠나요?' } },
    { id: 'mood', emoji: '🥳', q: { ja: '食べ終わった直後の気分は？', en: 'How did you feel right after finishing?', zh: '刚吃完时的心情如何？', tw: '剛吃完時的心情如何？', ko: '다 먹은 직후 기분은 어땠나요?' } },
    { id: 'duration', emoji: '⏳', q: { ja: '体験の長さはちょうどよかったですか？', en: 'Was the length of the experience about right?', zh: '体验的时长刚好吗？', tw: '體驗的時長剛好嗎？', ko: '체험 시간은 적당했나요?' } },
    { id: 'surprise', emoji: '😮', q: { ja: '意外だったこと・驚いたことは？', en: 'Anything that surprised you?', zh: '有什么意外或惊讶的事吗？', tw: '有什麼意外或驚訝的事嗎？', ko: '의외였거나 놀랐던 점은?' } },
    { id: 'together', emoji: '👫', q: { ja: '一緒に来た人の反応はどうでしたか？', en: 'How did the people you came with react?', zh: '同行的人反应如何？', tw: '同行的人反應如何？', ko: '같이 온 사람들의 반응은 어땠나요?' } },
    { id: 'photo', emoji: '📸', q: { ja: '写真や動画を撮りたくなった場面は？', en: 'Any moments you just had to photograph or film?', zh: '有让你想拍照或录视频的瞬间吗？', tw: '有讓你想拍照或錄影的瞬間嗎？', ko: '사진이나 영상을 찍고 싶었던 순간은?' } },
    { id: 'trip', emoji: '🇯🇵', q: { ja: '今回の旅行の中で、どんな思い出になりましたか？', en: 'What kind of memory will this be from your trip?', zh: '这会成为这次旅行中怎样的回忆？', tw: '這會成為這次旅行中怎樣的回憶？', ko: '이번 여행에서 어떤 추억이 됐나요?' } },
    { id: 'compare', emoji: '🍱', q: { ja: '日本で食べた他の料理と比べてどうでしたか？', en: 'How did it compare to other food you\'ve had in Japan?', zh: '和在日本吃过的其他料理相比如何？', tw: '和在日本吃過的其他料理相比如何？', ko: '일본에서 먹은 다른 음식과 비교하면 어땠나요?' } },
    { id: 'culture', emoji: '🏮', q: { ja: 'わんこそばという日本の食文化についてどう感じましたか？', en: 'What did you think of wanko soba as a piece of Japanese food culture?', zh: '对碗子荞麦面这种日本饮食文化有什么感受？', tw: '對碗子蕎麥麵這種日本飲食文化有什麼感受？', ko: '완코소바라는 일본 음식 문화에 대해 어떻게 느꼈나요?' } },
    { id: 'shinjuku', emoji: '🏙️', q: { ja: '新宿での一日の中で、どんな時間になりましたか？', en: 'How did it fit into your day in Shinjuku?', zh: '在新宿的一天中，这是一段怎样的时光？', tw: '在新宿的一天中，這是一段怎樣的時光？', ko: '신주쿠에서의 하루 중 어떤 시간이 됐나요?' } },
    { id: 'value', emoji: '💴', q: { ja: '値段に見合っていたと思いますか？', en: 'Was it worth the price?', zh: '觉得物有所值吗？', tw: '覺得物有所值嗎？', ko: '가격만큼의 가치가 있었나요?' } },
    { id: 'again', emoji: '🔁', q: { ja: 'また来たいと思いますか？それはなぜ？', en: 'Would you come back? Why or why not?', zh: '还想再来吗？为什么？', tw: '還想再來嗎？為什麼？', ko: '다시 오고 싶나요? 그 이유는?' } },
    { id: 'who_for', emoji: '🙌', q: { ja: 'どんな人におすすめしたいですか？', en: 'Who would you recommend it to?', zh: '想推荐给什么样的人？', tw: '想推薦給什麼樣的人？', ko: '어떤 사람에게 추천하고 싶나요?' } },
    { id: 'kids', emoji: '👨‍👩‍👧', q: { ja: '子ども連れ・家族でも楽しめると思いますか？', en: 'Is it a good fit for families with kids?', zh: '觉得适合带孩子或全家一起来吗？', tw: '覺得適合帶孩子或全家一起來嗎？', ko: '아이 동반이나 가족끼리도 즐길 수 있을까요?' } },
    { id: 'solo', emoji: '🙋', q: { ja: '一人でも楽しめると思いますか？', en: 'Would it be fun on your own?', zh: '觉得一个人来也能玩得开心吗？', tw: '覺得一個人來也能玩得開心嗎？', ko: '혼자서도 즐길 수 있을까요?' } },
    { id: 'group', emoji: '🎊', q: { ja: 'グループで行くなら、どんな楽しみ方がおすすめ？', en: 'How would you recommend enjoying it as a group?', zh: '如果是一群人去，推荐怎么玩？', tw: '如果是一群人去，推薦怎麼玩？', ko: '그룹으로 간다면 어떻게 즐기는 걸 추천하나요?' } },
    { id: 'explain', emoji: '🗣️', q: { ja: '友達にこのお店を説明するなら、なんて言いますか？', en: 'How would you describe this place to a friend?', zh: '如果向朋友介绍这家店，你会怎么说？', tw: '如果向朋友介紹這家店，你會怎麼說？', ko: '친구에게 이 가게를 설명한다면 뭐라고 할까요?' } },
    { id: 'share', emoji: '📱', q: { ja: 'この体験を誰かに話したり見せたりしましたか？反応は？', en: 'Did you tell or show anyone about it? How did they react?', zh: '有跟别人分享这次体验吗？对方反应如何？', tw: '有跟別人分享這次體驗嗎？對方反應如何？', ko: '이 체험을 누군가에게 이야기하거나 보여줬나요? 반응은?' } },
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
