const app = document.querySelector('#app');

app.innerHTML = `
  <main class="container">
    <h1>今日の質問</h1>
    <p class="date">2026-01-28</p>

    <section class="card">
      <p class="question">
        今日いちばん印象に残ったことは？
      </p>

      <textarea
        class="answer"
        placeholder="ここに入力してください"
      ></textarea>
    </section>

    <button class="save">保存</button>
  </main>
`;
