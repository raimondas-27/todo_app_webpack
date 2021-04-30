"use strict"; // here we go again

let td1 = Todo.makeHtmlEl("Go to CHina");
console.log(td1);

// gauti nuoroda i id list
const ulListEl = document.getElementById("list");

Todo.addTodoToList(td1);

// paimti teksta is input el

// kai paspaustas + mygtukas skurti nauja todo el ir ideti ji i html

// 1. nuorodos i input el

// input el .value grazina ivesta verte

// 2. reikia mygtuko kuris yra greta ivesties lauko

// mygtukui uztedi eventListener kad jis ivygdytu funkcija

// 3. aprasyti funkcija kuri konsoleje parodo ivesties lauko teksta

// 4. panaudoti ivesties lauko gauta teksta sukurti naujam todo

// 5. prideti nauja todo i sarasa
