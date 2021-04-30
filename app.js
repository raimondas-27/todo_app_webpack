"use strict"; // here we go again

// reikalingos nuorodo i elementus kuriuos valdysime
const inputEl = document.getElementById("todo-input");
const addTodoBtnEl = inputEl.nextElementSibling;
const mainListUlEl = document.querySelector(".list");

// 0 mygtukas turi laukti paspaudimo ir sureaguoti kai paspausim
addTodoBtnEl.addEventListener("click", function () {
  //   console.log("paspaudei");
  // 1 paimam ka ivede vartojoas i input
  const ivestaReiksme = inputEl.value;
  console.log(ivestaReiksme);

  // 2 dedam i sarasa kaip li el
  // sukuriam nauja li
  const naujasLiEl = document.createElement("li");
  // ideam vartotojo reiksme
  naujasLiEl.textContent = ivestaReiksme;
  // idedam i sarasa nauja li el su tekxtu
  mainListUlEl.appendChild(naujasLiEl);
  // isvalyti ivesties lauka po to kai pridejom todo
  inputEl.value = "";
});
