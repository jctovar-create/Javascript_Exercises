var mountainBuy = document.querySelector("#mountainBuy");
var streetBeginnerBuy = document.querySelector("#streetBeginnerBuy");
var streetAthleticBuy = document.querySelector("#streetAthleticBuy");
var casualBuy = document.querySelector("#casualBuy");
var beginnerQuantity = document.getElementById("beginnerQuantity");
var mongooseQuantity = document.getElementById("mongooseQuantity");
var athleticQuantity = document.getElementById("athleticQuantity");
var cruisingQuantity = document.getElementById("cruisingQuantity");
var cartQuantity = document.getElementById("cartQuantity");

var currentTotal = 0;
var itemsInCart = 0;

// document.addEventListener('DOMContentLoaded', function(){
//     casualBuy.disabled = true;
// });


mountainBuy.addEventListener('click', function(){
    console.log(mongooseQuantity.value);
    itemsInCart += Number(mongooseQuantity.value);
    currentTotal += (mongooseQuantity.value * 199);
    cartQuantity.innerHTML = itemsInCart;
    console.log(itemsInCart, currentTotal)
    mongooseQuantity.value = "";
});

streetBeginnerBuy.addEventListener('click', function(){
    console.log(beginnerQuantity.value);
    itemsInCart += Number(beginnerQuantity.value);
    currentTotal += (beginnerQuantity.value * 320);
    cartQuantity.innerHTML = itemsInCart;
    console.log(itemsInCart, currentTotal)
    beginnerQuantity.value = "";

});

streetAthleticBuy.addEventListener('click', function(){
    console.log(athleticQuantity.value);
    itemsInCart += Number(athleticQuantity.value);
    currentTotal += (athleticQuantity.value * 450);
    cartQuantity.innerHTML = itemsInCart;
    console.log(itemsInCart, currentTotal)
    athleticQuantity.value = "";

});


casualBuy.addEventListener('click', function(){
    console.log(cruisingQuantity.value);
    itemsInCart += Number(cruisingQuantity.value);
    currentTotal += (cruisingQuantity.value * 150);
    cartQuantity.innerHTML = itemsInCart;
    console.log(itemsInCart, currentTotal)
    cruisingQuantity.value = "";

});

function cartTotal(){

}


/* This function did not work, refactor later

function addingItemsToCart(quantity, price){
    itemsInCart += Number(quantity.value);
    currentTotal += (quantity.value * price);
    cartQuantity.innerHTML = itemsInCart;
    console.log(quantity.value);
    console.log(itemsInCart, currentTotal)
    cruisingQuantity.value = "";
}  
*/  
