//Understanding Scope = variable visibility
//Write Higher Order Functions
//Pass functions as callbacks

/*

//Function Score

function helpMe(){
    let msg= "I'm on fire";
    console.log(msg);
}

function lol(){
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
}


function changeColor(){
    let color = 'purple';
    const age = 19;
    console.log(age);
}

helpMe();
lol();
changeColor();

let bird = 'mandirin duck';

console.log(bird);

function birdWatch(){
    bird = 'golden pheasant';
}

console.log(bird);

birdWatch();
console.log(bird);



//Block Scope

let radius = 8;

if(radius > 0){
    var PI = 3.14;
    var circ = 2 * PI * radius;
}

console.log(radius);
console.log(PI);
console.log(circ);

let myArr = [1,2,3,4];

function doubleArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let doubleNum = arr[i] * 2;
       // console.log(doubleNum);
        newArr.push(doubleNum);
    }
    return newArr;
}

console.log(doubleArr(myArr));

thisArray = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
//console.log(thisArray);

var plusOne = function(digits) {
    let numAsString = '';
    for(let i = 0; i < digits.length; i++){
        numAsString += digits[i];
    }
    console.log(numAsString);
    let newNumber = numAsString;
    console.log(newNumber);
    console.log(typeof(newNumber));
    let backToString = newNumber.toString();
    let myArray = [];
    for(let i = 0; i < backToString.length; i++){
        myArray.push(backToString[i]);  
    }
    return myArray;
};

plusOne(thisArray);


//Lexical Scope
//When we have nested functions

function outer(){
    let hero = 'Black Panther';

    function inner(){
        let cryForHelp = `${hero}, please save me!`
        
        function extraInner(){
            console.log(cryForHelp);
        }
        extraInner();
    }
    inner();
}

outer();


//Function Expression
//function are objects which means we can inspect them, store them in arrays


const square = function (num){
    return num * num;
}

let whatsTheSquare = square (7);

console.log(whatsTheSquare);

const addition = function(x,y){
    return x+ y;
}

//named function expression
const product = function multiply(x,y){
    return x * y;
}

//Higher Order Functions
//using functions within functions
//using functions as arguments
//returning functions

function add(x,y){return x + y;}

const subtract = function (x,y){
    return x - y;
}

function multiply (x,y){
    return x * y;
}

const divide = function (x,y){
    return x/y;
}

//four functions stored in an array
const operations = [
    add,
    subtract, 
    multiply,
    divide
]

//This is one way of storing a function into a variable
let randomVariable = operations[1](107,99);
console.log(randomVariable)

let secondVariable = operations[2](9,26);
console.log(secondVariable);

for(let functionArray = 0; functionArray < operations.length; functionArray++){
    console.log(operations[functionArray](10,5));
}

for(let func of operations){
    console.log(func(20,10));
}

//Adding a function to an object creates a method
const thing = {
    doSomething: multiply
}
 

//Higher Order Functions
//EITHER
//Functions that accept functions as arguments
//Functions that return a function

function callTwice(func){
    func();
    func();
}

function laugh(){
    console.log("HAHAHAHA");
}

function callThreeTimes (f){
    f();
    f();
    f();
}

function miserable(){
    console.log('I hate everything');
}

function callNumTimes (func, x){
    for(let i = 0; i < x; i++){
        func();
    }
}

function randomlyCall(func1, func2){
    let whichOne = Math.floor(Math.random() * 2) + 1;
    console.log(whichOne);
    if(whichOne === 1){
        func1();
    }
    else{
        func2();
    }
}


//Returning a function from a function

function makeBetweenFunc(min, max){
    return function (val) {
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18,100);

inAgeRange(17);
inAgeRange(68);

function multiplyBy(num){
    return function(x){
        return x * num;
    }
}

multiplyBy(3);

const triple = multiplyBy(3);
const double = multiplyBy(2);

triple(6);

 

function makeBetweenFunc(x, y){
    return function(num){
        return num >= x && num <= y
    }
}

const isChild = makeBetweenFunc(0,18);

const isNiceWeather = makeBetweenFunc(70,85);


// Callbacks are functions passed into another function as an arguement
//which is then invoked inside the outer function


function grumpus(){
    alert('Timer is done');
}

setTimeout(function(){
    alert('This is another function');
}, 3000);

function grumpus(){
    alert('Timer is done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', grumpus);

*/

//Hoisting
//How javascript hoists values, it is an odd behavior

// console.log(animal);
// var animal = 'Tapir';
// console.log(animal);

//Variable declarations made with let is not hoisted.
//console.log(myDog);
let myDog = 'Aldo';
console.log(myDog);

//Variable declarations made with const is not hoisted.
//console.log(imeldaDog);
const imeldaDog = 'Missy';
console.log(imeldaDog);

howl();

//Function statements are hoisted to the top of the file.
//Javascript is processing these lines first
function howl(){
    console.log("AWOOOO");
}

howl();

//Function expressions are not hoisted
bark();

let bark = function (){
    console.log('ROOF!');
}

bark();