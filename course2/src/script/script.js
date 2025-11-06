let fruits = ["apple", "banana", "mango"];
let list = document.getElementById("fruitList");

let show = document.getElementById("btn");
let add = document.getElementById("btnAdd");
let pop = document.getElementById("btnPop");

add.onclick = function() {
  fruits.push("Giwe")
  list.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    let item = document.createElement("li");
    item.textContent = fruits[i];
    list.appendChild(item);
  }
}

pop.onclick = function() {
  fruits.pop()
  list.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    let item = document.createElement("li");
    item.textContent = fruits[i];
    list.appendChild(item);
  }
  onsole.log("Remove last item completed")
}

show.onclick = function() {
  console.log("Showing fruits....")
  list.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    let item = document.createElement("li");
    item.textContent = fruits[i];
    list.appendChild(item);
  }
}

