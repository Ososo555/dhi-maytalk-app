import './style.css';

const app = document.querySelector('#app');

console.log('app:', app);
if (!app) throw new Error('#app が見つかりませんでした。');

// 今日の日付（YYYY-MM-DD 形式）
const today = new Date().toISOString().split('T')[0];

/* 日付を日本語表記に */
function formatDateJP(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

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
const CATEGORY_1 = [
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

const CATEGORY_2 = [
  "今日これするつもりだったのに忘れてた！ってことある？",
  "明日の一番大事な予定を教えて！",
  "「明日これは必ずやらなきゃいけない」ってことは？",
  "今日少しでも落ち込んだことある？",
  "今日どれくらい運動した？",
  "今日の睡眠時間は？",
  "今の部屋の散らかり度を１～１０で表してみて",
  "明日食べたいごはんは？",
  "明日の自分にご褒美をあげるとしたら？",
  "明日の自分に一言応援の言葉をどうぞ",
  "明日頑張るためのご褒美を考えて！",
  "明日の日中の自分の気持ちを予想してみて",
  "明日に自分に向かって武士の口調でエールを送って",
  "明日を乗り切る合言葉をどうぞ",
  "明日起きて一番にすることは？",
  "明日これだけは頑張るぞってことを教えて！",
  "近い将来で楽しみなことは？",
  "今、一番力を入れて頑張っていることは？",
  "一週間後の自分は何をしていると思う？",
  "一週間前の自分と今の自分で変化したところは？",
  "一ヶ月前の自分と今の自分で変化したところは？",
  "来週楽しみワクワクなことは？",
  "来月楽しみワクワクなことは？",
  "明日会う・話すのが楽しみな人は？",
  "明日行きたい場所・お店は？",
  "3か月後の自分はどこで、何をしていると思う？",
  "明日は何のために何時に起きて何時に寝る？",
  "明日会う・話す予定の人は？",
  "最近襲いかかってくる修羅の出来事は何かある？",
  "今日の自分が本当は欲しかったものは？"
];

const CATEGORY_3 = [
  "ご飯派？パン派？麺派？",
  "今おすすめの漫画・本・アニメをどうぞ",
  "今夢中になっているものは？",
  "たけのこ派？きのこ派？",
  "今一番人におすすめしたいものは？（本、アニメ、漫画、趣味etc.）",
  "甘党？辛党？",
  "持ってる服で一番多い色は？",
  "気づいたら一番一緒に過ごしている時間が長い人は？",
  "気づいたらやっちゃう癖は？",
  "地球最後の日に食べたいものは？",
  "地球最後の日に会いたい人は？",
  "地球最後の日にやりたいことは？",
  "犬派？猫派？鳥派？カンガルー派？",
  "飼ってみたいペットは？",
  "好きな食べ物ベスト3を教えて！",
  "今住んでいる町の良いところを教えて！",
  "今もっている小さな悩みは？",
  "今一番会いたい人・話したい人は？",
  "今一番おすすめのユーチューバーは？",
  "今一番興味を持っていることは？",
  "自分のテンションが爆上がりする瞬間を教えて！",
  "今抱えている目標は？",
  "今「これを一番頑張っている」ことはある？",
  "尊敬している人・憧れている人は？",
  "「この人みたいになりたい！」っていう人は誰？",
  "小さい頃の自分から「変わってないな〜」と思うところは？",
  "小さい頃の思い出で一番心に残っていることは？",
  "自分の人生のターニングポイントは？",
  "人生で一番自分に影響を与えた人は？",
  "子どものころ好きだったこと・ものは？",
  "小さい頃食べられなかったのに今は食べられるものは？",
  "小さい頃嫌いだったこと・ものは？",
  "疲れたときのリラックス方法を教えて！",
  "あなたのモットー・格言は？",
  "最近「久々にこれやった・見たなぁ」ってことは？",
  "今もし五万円手に入れたら何する？"
];

// ランダムで n 問取る関数
function pickOne(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

/* 画面状態 */
let screen = 'home'; // 'home' or 'history'
let selectedDate = today; // 履歴で選んだ日付

let currentQuestions = [];    // 確定した質問
let draftAnswers = [];  // 入力の下書き
let isSavedToday = false;

/* 質問をランダムにセレクト */
if (savedEntry) {
  // すでに今日の分が保存されている場合
  const parsed = JSON.parse(savedEntry);

  isSavedToday = true;
  currentQuestions = parsed.answers.map(a => a.question);
  draftAnswers = parsed.answers.map(a => a.answer);
} else {
  // 今日初めて開いた場合
  currentQuestions = [pickOne(CATEGORY_1)];
}

// 下書きを保存
function captureDraft() {
  const textareas = [...document.querySelectorAll('textarea')];
  textareas.forEach((ta, i) => {
    draftAnswers[i] = ta.value;
  });
}

/* 画面切り替え用 */
function renderApp() {
  app.innerHTML = `
    <main class="container">
      <header class="topbar">
        <button id="tab-home" ${screen === 'home' ? 'disabled' : ''}>今日</button>
        <button id="tab-history" ${screen === 'history' ? 'disabled' : ''}>履歴</button>
      </header>

      <section id="content"></section>
    </main>
  `;

  document.querySelector('#tab-home').addEventListener('click', () => {
    screen = 'home';
    renderApp();
  });

  document.querySelector('#tab-history').addEventListener('click', () => {
    screen = 'history';
    renderApp();
  });

  if (screen === 'home') renderHome();
  if (screen === 'history') renderHistory();
}

/* 履歴画面 */
function renderHistory() {
  const content = document.querySelector('#content');

  const dates = Object.keys(localStorage)
    .filter(k => /^\d{4}-\d{2}-\d{2}$/.test(k))
    .sort()
    .reverse();

  const selected = localStorage.getItem(selectedDate);
  const entry = selected ? JSON.parse(selected) : null;

  content.innerHTML = `
    <h1>履歴</h1>

    <div class="history-layout">
      <ul class="history-list">
        ${dates.map(d => `
          <li>
            <button class="history-item ${d === selectedDate ? 'active' : ''}" data-date="${d}">
              ${formatDateJP(d)}
            </button>
          </li>
        `).join('')}
      </ul>

      <div class="history-detail">
        ${entry ? `
          <h2>${formatDateJP(selectedDate)}</h2>
          ${entry.answers.map((a, i) => `
            <section class="card">
              <p><strong>Q${i+1}.</strong> ${a.question}</p>
              <p>${(a.answer || '').replaceAll('\n','<br>')}</p>
            </section>
          `).join('')}
        ` : `
          <p>この日の記録はありません。</p>
        `}
      </div>
    </div>
  `;

  // 日付クリックで詳細を切り替え
  document.querySelectorAll('.history-item').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDate = btn.dataset.date;
      renderApp(); // 履歴画面を再描画
    });
  });
}


/* 画面描画 */
function renderHome() {
  const content = document.querySelector('#content');
  content.innerHTML = `
      <h1>今日の質問</h1>

      ${currentQuestions.map((q, i) => `
        <section class="card">
          <p class="question">Q${i + 1}. ${q}</p>
          <textarea data-index="${i}" placeholder="ここに入力">${draftAnswers[i] ?? ''}</textarea>

        </section>
      `).join('')}

      <div class="actions">
        <button id="add"
          ${currentQuestions.length >= 3 || isSavedToday ? 'disabled' : ''}>
          質問を増やす
        </button>
        <button id="save">保存</button>
      </div>
      <p id="status" class="status"></p>
  `;

  bindEvents();
}

function bindEvents() {
  const addButton = document.querySelector('#add');
  const saveButton = document.querySelector('#save');

  // 追加：既存を固定したまま、次のカテゴリだけ足す
  addButton.addEventListener('click', () => {
    captureDraft();

    if (currentQuestions.length === 1) {
      currentQuestions.push(pickOne(CATEGORY_2)); // Q2だけ追加
    } else if (currentQuestions.length === 2) {
      currentQuestions.push(pickOne(CATEGORY_3)); // Q3だけ追加
    } else {
      return; // 3問以上にはしない
    }
    renderApp(); // 再描画（Q1/Q2はそのまま）
  });

  // 保存：表示されている質問数ぶんだけ保存
  saveButton.addEventListener('click', () => {
    captureDraft();
    const textareas = [...document.querySelectorAll('textarea')];

    const answers = textareas.map((ta, i) => ({
      index: i + 1,
      category: i + 1,            // 1,2,3（あとで文字列にしてもOK）
      question: currentQuestions[i],
      answer: ta.value
    }));

    const entry = {
      date: today,
      questionCount: currentQuestions.length,
      answers
    };

    localStorage.setItem(today, JSON.stringify(entry));
    draftAnswers = answers.map(a => a.answer);  // 画面復元用の下書きも、保存内容で更新
    isSavedToday = true;
    
    const status = document.querySelector('#status');
    if (status) {
      status.textContent = '保存しました！';
      setTimeout(() => (status.textContent = ''), 1500);
    }

  });
}

renderApp();
