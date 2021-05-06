// 追加ボタンの宣言
const addBtn = document.querySelector(".add-btn");
// テキスト(入力エリア)の宣言
const text = document.getElementById('add-area');
// リストの宣言
const todo = document.getElementById('todo');



// 追加ボタンの処理
addBtn.addEventListener('click',() => {
    // console.log(text.value);
    // console.log(addBtn.textContent);
    
    //<li>を作成
    const liElement = document.createElement('li');
    // <li>要素の本文をテキストに入力された本文にする。
    liElement.textContent = text.value;
    // 確認ボタン作成
    const checkBtn = document.createElement('input');
    checkBtn.type = 'button';
    checkBtn.value = '確認';
    // <ul>要素のお尻に<li>要素を足す
    todo.appendChild(liElement);
    liElement.appendChild(checkBtn);
    // 確認ボタンの処理
    checkBtn.addEventListener('click', () => {
        // <li>要素毎消す
        liElement.remove();
    });
});

