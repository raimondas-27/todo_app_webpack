"use strict"; // here we go again

const ATLIKTAS_TODO = "fa-check-circle";
const NEATLIKTAS_TODO = "fa-circle-thin";

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
  let current = event.target;
  // event.target grazina el ant kurio paspaudem
  // console.log(event.target);
  // delete trigger
  if (event.target.classList.contains("delete-icon")) {
    // console.log("delete");
    Actions.deleteTodoItem(event.target);
  }

  // Pazymeti kaip atlikta arba neatlikta todo el
  // check uncheck trigger
  if (current.classList.contains("make-done")) {
    console.log("Make it done");
    Actions.toggleComplete(current);
  }
});

// sureaguoti i enter paspaudima ivestieslauke
mainInputEl.addEventListener("keyup", function (event) {
  // console.log("event", event);
  // kai event.key === enter mes norime sukurti nauja list el savo sarase
  if (event.key === "Enter") {
    addTodoTextToList();
  }
});

// laikas
function showTime() {
  let now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  console.log(now.toLocaleDateString("LT", options));
}
showTime();
