const app = document.querySelector('#app');
/* nullチェック */
console.log('app:', app);
if (!app) throw new Error('#app が見つからないよ！');

// 今日の日付（YYYY-MM-DD 形式）
const today = new Date().toISOString().split('T')[0];

/* 質問一覧（カテゴリ１：今日を振り返る系質問）*/
const QUESTIONS = [
  "今日いちばん印象に残ったことは？",
  "今日ちょっとだけ頑張ったことは？",
  "今日の自分に一言かけるなら？",
  "明日の自分に伝えたいことは？",
  "今日の昼ご飯とそれを選んだ理由は？",
  "今日一番美味しかったものは？",
  "今日歩いた景色のベストスポットは？",
  "今日あった人の中で一番好きな人は？",
  "今日の夜ご飯のベストおかずは？",
  "今日のコーディネートのポイントは？",
  "今日の朝はどんな気分だった？",
  "今日の夕方はどんな気分だった？",
  "今日の休憩時間は何した？",
  "今日の「ぷち贅沢」教えて",
  "今日マジでこれ頑張って偉いわーってこと教えて",
  "今日の自分をべた褒めして！",
  "今日もっとも目にしたものは何？",
  "今日を振り返って一番感謝したい人は？",
  "今日「すげえな」って思った人・ものは？",
  "今日一番長く過ごした場所とその良い所は？",
  "今日一番長く一緒にいた人とその良い所を教えて！（自分でもOK）",
  "今日一日を色に例えると何色？",
  "昨日よりマシだった・よかったことは？",
  "今日「いつもと違うな」と感じた行動・出来事は？",
  "自分が昨日よりレベルアップしたなと思うポイントを教えて！",
  "今の気持ちを四字熟語（創作OK）で表してください！",
  "今日マジでむかついたことをお嬢様口調で教えて",
  "今日マジでしんどかったことについて語尾に「にゃん！」をつけて愚痴を一言どうぞ",
  "今日嬉しかったことをギャル口調で教えて",
  "今日聞いた曲で一番心に残ってるものは？",
  "今日の自分を全力で褒めてください（熱血キャラで）",
  "今ぜひ人に教えてあげたい豆知識を一つどうぞ",
  "今日やった普段はしてない比較的レアな行動は？",
  "今日の漢字一文字とその理由をどうぞ！"
];

/* カテゴリ１から質問をランダムに選ぶ */
const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
const questionText = QUESTIONS[randomIndex];

// 画面描画
app.innerHTML = `
  <main class="container">
    <h1>今日の質問</h1>
    <section class="card">
      <p class="question">${questionText}</p>
      <textarea placeholder="ここに入力"></textarea>
    </section>
    <button>保存</button>
  </main>
`;

// テキストエリアとボタンを取得
const textarea = document.querySelector('textarea');
const saveButton = document.querySelector('button');

// 保存ボタンのイベント
saveButton.addEventListener('click', () => {
  const answer = textarea.value;

  const entry = {
    date: today,
    question: questionText,
    answer: answer
  };

  localStorage.setItem(today, JSON.stringify(entry));

  alert('保存しました！');
});




