const app = document.querySelector('#app');
/* nullチェック */
console.log('app:', app);
if (!app) throw new Error('#app が見つかりませんでした。');

// 今日の日付（YYYY-MM-DD 形式）
const today = new Date().toISOString().split('T')[0];

// localStorage に保存されている全日付を取得
const allDates = Object.keys(localStorage)
  .filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key))
  .sort()
  .reverse();

// 今日の質問数（最初は1問）
let questionCount = 1;

// 保存済みデータを取得
const savedEntry = localStorage.getItem(today);

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

// ランダムで n 問取る関数
function pickRandomQuestions(count) {
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 質問文と回答を配列で管理
let currentQuestions = pickRandomQuestions(questionCount);


/* カテゴリ１から質問をランダムに選ぶ */
let questionText = '';
let savedAnswer = '';

if (savedEntry) {
  // すでに保存されている場合
  const parsed = JSON.parse(savedEntry);
  questionText = parsed.question;
  savedAnswer = parsed.answer;
} else {
  // まだ保存されていない場合
  const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
  questionText = QUESTIONS[randomIndex];
}


// 画面描画
function render() {
  app.innerHTML = `
    <main class="container">
      <h1>今日の質問</h1>

      ${currentQuestions.map((q, i) => `
        <section class="card">
          <p class="question">Q${i + 1}. ${q}</p>
          <textarea data-index="${i}" placeholder="ここに入力"></textarea>
        </section>
      `).join('')}

      <div class="actions">
        <button id="add">質問を増やす</button>
        <button id="save">保存</button>
      </div>
    </main>
  `;

  bindEvents();
}


// 日付クリックでその日の日記を表示
const historyButtons = document.querySelectorAll('.history-item');

historyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const date = button.dataset.date;
    if (!date) return;

    const data = localStorage.getItem(date);
    if (!data) return;

    const parsed = JSON.parse(data);

    alert(
      `${date}\n\n` +
      `質問：${parsed.question}\n\n` +
      `回答：\n${parsed.answer}`
    );
  });
});


// 要素取得
const textarea = document.querySelector('textarea');
const saveButton = document.querySelector('button');



function bindEvents() {
  const addButton = document.querySelector('#add');
  const saveButton = document.querySelector('#save');

  // 質問を増やす
  addButton.addEventListener('click', () => {
    if (questionCount >= 3) return;

    questionCount++;
    currentQuestions = pickRandomQuestions(questionCount);
    render();
  });

// 保存ボタンのイベント
saveButton.addEventListener('click', () => {
  const answers = [...document.querySelectorAll('textarea')].map((ta, i) => ({
    question: currentQuestions[i],
    answer: ta.value
  }));

  const entry = {
    date: today,
    questions: answers
  };

  localStorage.setItem(today, JSON.stringify(entry));
  alert('保存しました！');
});
}

render();



