var clearTheCart = document.getElementById('clearCart');
var view = document.getElementById('viewCart');
var buyApple = document.getElementById('buyApple');
var itemsInCart = document.getElementById('numberItems');
var total = document.getElementById('totalCart');
var itemsDisplay = document.getElementById('itemsDisplay');
var totalPriceDisplay = document.getElementById('priceDisplay');
var cartDisplay = document.getElementById("cartDisplay");



total.addEventListener('click', function(){
    console.log(totalCart());
    totalPriceDisplay.innerHTML = totalCart();

});

view.addEventListener('click', function(){
    console.log(listCart  ());
    cartDisplay.innerHTML = JSON.stringify(listCart());
});


buyApple.addEventListener('click', function(){
    addItemToCart('apple', 1.22, 1);
    console.log(cart);
});

clearTheCart.addEventListener('click', function(){
    clearCart();
    console.log(cart);
});

itemsInCart.addEventListener('click', function(){
    // countCart();
    console.log(countCart());
    itemsDisplay.innerHTML = countCart();

});


var cart = [];

// name price and quantity 

var Item = function(name, price, count){
    this.name = name
    this.price = price
    this.count = count
}


// we need a function to addItem to cart. needs to have name, price, and count

function addItemToCart(name, price, count){
    for( var i in cart){
        if(cart[i].name == name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

// addItemToCart('apple', 1.22, 2);
// addItemToCart('pear', 1.99, 2);
// addItemToCart('apple', 1.22, 4);

console.log(cart);
console.log(cart.length);
console.log(cart[0]);
// console.log(cart[0].name);




// remove item from cart , probably only needs the name so you can identify it. removes only one item

function removeItem(name){
    for(var i in cart){
        if (cart[i].name === name){
            cart[i].count--;
            if(cart[i.count === 0]){
                cart.splice(i, 1); 
            }
            break;
        }
    }
    saveCart();
}

removeItem('apple');
// console.log(cart[0].count);

removeItem('apple');
// console.log(cart[0].count);

//remove item from cart all. removes all items by name 

function removeItemsByName(name){
    for(var i in cart){
        if(cart[i].name === name){
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

// addItemToCart("toy", 5.55, 2);
// addItemToCart("tresaure", 5.35, 1);
// addItemToCart("Max", 2.55, 5);
// addItemToCart("toy", 5.55, 2);
// addItemToCart("toy", 5.55, 2);
// addItemToCart("toy", 5.55, 2);

console.log(cart);

removeItemsByName('toy');

console.log(cart);


//clear everything from cart 

function clearCart(){
    cart = [];
    saveCart();
}



//count the cart so we don't add separate items - returns total count 

function countCart(){
    var totalCount  = 0;

    for(var i in cart){
        totalCount += cart[i].count;
    }
    return totalCount;

}

//get total price of cart - returns cost of cart 

function totalCart(){
    var totalPrice = 0;
    for(var i in cart){
        totalPrice += (cart[i].price * cart[i].count);
    }
    return totalPrice;
}

//list cart - returns an array of items - generate HTML to Display items 

function listCart(){
    var cartCopy = [];
    for(var i in cart){
        var item = cart[i];
        var itemCopy = {};
        for(var p in item){
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    printObject(cartCopy);
    return cartCopy;
    /*
    for(var i in cart){
        console.log(cart[i]);
    }
    */
}

function printObject(o){
    var out = '';
    for(var p in o){
        out += p + ": " + o[p] + '\n';
    }
    // alert(out);
}

//save the cart to a local storage 

function saveCart(){
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// localStorage.setItem('age', 26);

//load the cart from local storage

function loadCart(){
    cart =  JSON.parse(localStorage.getItem('shoppingCart'));
}

loadCart();

var array2 = listCart();
console.log(array2);










/*
var array = ['apple', 'brush', 'carrot'];

array.push("Dice");

for(var i = 0; i < array.length; i++){
    console.log(i);
    console.log(array[i]);
}

var obj = {
    name: 'Apple',
    cost: 1.99,
    count: 2
};

console.log(obj);
console.log(obj.name);
console.log(obj.cost);

for(var i in obj){
    console.log(i + " = " + obj[i]);
}

var array = ['apple', 'brush', 'carrot'];

for(var i in array){
    console.log(i + " is the index value of " + array[i]);
}

var cart = [];

var item = {
    name: 'Apple',
    cost: 1.99,
    count: 2
}

cart.push(item);

console.log(cart);
console.log(cart[0]);
console.log(cart[0].name);
console.log(cart[0].price);

function helloWorld(){
    console.log("Hello, World")
}

function message(message, count){
    for(var i = 0; i < count; i++){
        console.log(message);
    }
}

function square(num){
    return num **2; 
}

//better understanding of Scope

function myFunction(){

} 

var buyButton = document.getElementById("buy");


buyButton.addEventListener('click', function(){
    cart.push(new Item("apple", 2.13, 1));
    console.log(cart);
})

var a = new Item("brush", 1.99, 2);
var b = new Item("Apple", 2.50, 3);


cart.push(a,b);
console.log(cart);

*/