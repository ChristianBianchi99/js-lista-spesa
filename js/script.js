// CREAZIONE ARRAY
let list = ["Purple Haze", "Lemon Haze", "White Widow", "Sour Diesel", "Kush", "Maria Salvador"];

// DICHIARAZIONE VARIANTI
let shoppingList = document.getElementById("shoppingList");
console.log(shoppingList)
let counter = 0;

// CREAZIONE CICLO WHILE
while( counter < list.length){
    console.log(list[counter])
    shoppingList.innerHTML+= `<li>${list[counter]}</li>`
    counter++
}

console.log(counter)