"use strict"; // here we go again

let td1 = Todo.makeHtmlEl("Go to CHina");
console.log(td1);

// gauti nuoroda i id list
const ulListEl = document.getElementById("list");

ulListEl.insertAdjacentHTML("beforeend", td1);

// paimti
