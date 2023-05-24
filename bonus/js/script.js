// CREAZIONE ARRAY
let list = ["Purple Haze", "Lemon Haze", "White Widow", "Sour Diesel", "Kush", "Maria Salvador"];

// DICHIARAZIONE VARIANTI
let shoppingList = document.getElementById("shoppingList");
console.log(shoppingList)
let userItem = " ";
let button = document.querySelector(".btn");
console.log(button)
let counter = 0;

// CREAZIONE CICLO WHILE
while( counter < list.length){
    console.log(list[counter])
    shoppingList.innerHTML+= `<li class="fa-li"><i class="fa-solid fa-cannabis"></i>${list[counter]}</li>`
    counter++
}

// CREAZIONE CLICK
button.addEventListener("click", function(){
    userItem = document.getElementById("newItem").value;
    console.log(userItem)
    list.push(userItem)
    shoppingList.innerHTML+= `<li class="fa-li"><i class="fa-solid fa-cannabis"></i>${userItem}</li>`
    document.getElementById("newItem").value= "";
})