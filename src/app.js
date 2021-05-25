// here we go again

import greet from './js/greet.js';
import Todo from './js/Todo.js';
import Actions from './js/Actions.js';
import './css/main.css';
import gold from './img/gold.jpg';

console.log(greet('auuuu!!!'));

function addImageTo(importedImage) {
  const srcEl = document.querySelector('.img-fluid');
  srcEl.src = importedImage;
}

addImageTo(gold);

export const ATLIKTAS_TODO = 'fa-check-circle';
export const NEATLIKTAS_TODO = 'fa-circle-thin';

// gauti nuoroda i id list
const ulListEl = document.getElementById('list');
const mainInputEl = document.getElementById('input');
const addTodoBtnEl = document.getElementById('add-todo-btn');
const dateEl = document.getElementById('date');
const resetBntEl = document.getElementById('reset');
// Todo.addTodoToList(td1);

// paimti teksta is input el
export default ulListEl;

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
  mainInputEl.value = '';
  // 5. prideti nauja todo i sarasa
}
// mygtukui uztedi eventListener kad jis ivygdytu funkcija
addTodoBtnEl.addEventListener('click', addTodoTextToList);

// Pagrindinis musu ivykiu pasiklausymas ant musu TODO saraso ==================================
ulListEl.addEventListener('click', (event) => {
  const current = event.target;
  // event.target grazina el ant kurio paspaudem
  // console.log(event.target);
  // delete trigger
  if (event.target.classList.contains('delete-icon')) {
    // console.log("delete");
    Actions.deleteTodoItem(event.target);
  }

  // Pazymeti kaip atlikta arba neatlikta todo el
  // check uncheck trigger
  if (current.classList.contains('make-done')) {
    // console.log("Make it done");
    Actions.toggleComplete(current);
  }

  // edit trigeris
  if (current.classList.contains('edit-icon')) {
    console.log('Edit in action');
    // console.log(current);
    Actions.editTodoItem(current);
  }
});

// sureaguoti i enter paspaudima ivestieslauke
mainInputEl.addEventListener('keyup', (event) => {
  // console.log("event", event);
  // kai event.key === enter mes norime sukurti nauja list el savo sarase
  if (event.key === 'Enter') {
    addTodoTextToList();
  }
});

// laikas IFFE
(function showTime() {
  let now = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const data = now.toLocaleDateString('LT', options);
  // set interval vygdo funkcija kas intervale nurodyta laika milisekundem
  dateEl.innerHTML = `${data} `;
  const spanEl = document.createElement('span');
  dateEl.appendChild(spanEl);
  let laikas;
  setInterval(() => {
    now = new Date();
    laikas = now.toLocaleTimeString();
    spanEl.textContent = laikas;
  }, 1000);
}());

// 1 gauti nuoroda i reset mygtuka

// 2 sureaguoti i mygtuko paspaudima iskvieciam Actions metoda
resetBntEl.addEventListener('click', Actions.resetTodos);

// 3 Acions metode isvalyti todo elementus
