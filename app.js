"use strict"; // here we go again

// reikalingos nuorodo i elementus kuriuos valdysime
const inputEl = document.getElementById("todo-input");
const addTodoBtnEl = inputEl.nextElementSibling;
const mainListUlEl = document.querySelector(".list");

// 0 mygtukas turi laukti paspaudimo ir sureaguoti kai paspausim
addTodoBtnEl.addEventListener("click", function (event) {
  console.log(event.target);

  //   console.log("paspaudei");
  // 1 paimam ka ivede vartojoas i input
  const ivestaReiksme = inputEl.value;
  console.log(ivestaReiksme);
  // jei vartotojas nieko neivede tai iseinam lauk is funkcijos
  if (ivestaReiksme === "") return;

  // 2 dedam i sarasa kaip li el
  // sukuriam nauja li
  const naujasLiEl = document.createElement("li");
  // ideam vartotojo reiksme
  //   naujasLiEl.textContent = ivestaReiksme;
  naujasLiEl.insertAdjacentHTML("afterbegin", `<span class='li-text'>${ivestaReiksme}</span>`);

  // pridedam span su istrynimu
  naujasLiEl.insertAdjacentHTML("beforeend", ' <span class="del">&#x2612;</span>');

  // pridedam edit mygtuka
  naujasLiEl.insertAdjacentHTML("beforeend", " <button>edit</button>");

  // idedam i sarasa nauja li el su tekxtu
  mainListUlEl.appendChild(naujasLiEl);
  // isvalyti ivesties lauka po to kai pridejom todo
  inputEl.value = "";
});

// uzdedam even listeneri ant ul saraso
mainListUlEl.addEventListener("click", function (event) {
  //   console.log(event.target);
  // gauti klase
  console.log(event.target.className);

  // jei el ant kurio paspauziau turi klase 'del'
  if (event.target.className === "del") {
    //tai mes norim istrinti tevini jo el
    event.target.parentElement.remove();
  }

  //event.target.style.color = "coral";
  //   event.target.remove();
});
