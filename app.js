"use strict"; // here we go again

// gauti nuoroda i id list
const ulListEl = document.getElementById("list");
const mainInputEl = document.getElementById("input");
const addTodoBtnEl = document.getElementById("add-todo-btn");
// Todo.addTodoToList(td1);

// paimti teksta is input el

// kai paspaustas + mygtukas skurti nauja todo el ir ideti ji i html

// 1. nuorodos i input el

// input el .value grazina ivesta verte

// 2. reikia mygtuko kuris yra greta ivesties lauko
// 3. aprasyti funkcija kuri konsoleje parodo ivesties lauko teksta
function addTodoTextToList() {
  //   console.log("Paspaudei add todo");
  // 4. panaudoti ivesties lauko gauta teksta sukurti naujam todo
  const naujoTodoTitle = mainInputEl.value;

  new Todo(naujoTodoTitle);
  mainInputEl.value = "";
  // 5. prideti nauja todo i sarasa
}
// mygtukui uztedi eventListener kad jis ivygdytu funkcija
addTodoBtnEl.addEventListener("click", addTodoTextToList);

ulListEl.addEventListener("click", function (event) {
  // event.target grazina el ant kurio paspaudem
  console.log(event.target);
});
