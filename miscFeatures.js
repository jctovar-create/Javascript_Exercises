/* 

//New features of Javascript

//Default function paramaters

function multiply(a, b){
    return a * b;
}

const greet = (x = 'You didn\'t say Hi :/') => {
    console.log(x);
}

const formalGreet = (person, greeting = 'Hi') => {
    console.log(`${greeting} ${person}`);
}

//Spread syntax

let myNums = [1,[19], 44,38,14, [99]]
let newNumber = [12];

myNums = [...myNums, newNumber]

function printArray(array){
    console.log(array);
}

let exNums = [...myNums, '4', 'five', 6];

let theseNumbers = [5,6,9]

function giveMeFour(a,b,c,d){
    console.log('a : ', a);
    console.log('b : ', b);
    console.log('c : ', c);
    console.log('d : ', d);
}

const nums1 = [1,2,3]
const nums2 = [4,5,6]

const combinedNums = [...nums1, ...nums2];
console.log(combinedNums);

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug']
const cnidaria = ['fire coral', 'moon jelly']

const mollusca = ['garden slug',...cephalopods, ... gastropods]
console.log(mollusca);

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
console.log(inverts);

let favoriteWord = 'Octopus';

//Spread in Object Literals

const feline = { legs : 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true, legs: 4};

const dog = {...canine, isPet: true};
const lion = {...feline, genus: 'Panthera'};

const catDog = {...canine, ...feline};

const threeLeggedDog = {legs: 3, ...canine};

//const catDogClone = {...catDog, family: 'Meee'};

const random = [...'hello', {...canine}];


//Rest Operator
//It collects items down to a single array
//When we want functions that have a variable number of arguments
//Example woule be Math.max(Indefinite number of arguments);

//Examples of before

function sum(x, y){
    return x + y;
}

function sumAll(){
    const argsArr = [...arguments]
    return argsArr.reduce((total, curVal) => {
        return total + curVal;
    })
}

function multiply(){
    console.log(arguments);
}


const numbers1 = [9,2,5,11,2]

function sumAll(...nums){
    let total = 0;
    for(let n of nums) total += n;
    return total;
}

let total = sumAll(...numbers1);

console.log(total);

function sum(...nums){
    console.log(nums);
}

function fullName(first, last, ...titles){
    console.log('first :', first);
    console.log('last :', last);
    console.log('titles :', titles);
}

const multiply = (...nums) => {
    let total = 1;
    for(let n of nums) total *= n;
    return total;
}

//The arguments object in javascript

const words = ['nope', 'have', 'starry','super', 'thlsiels']

function longestWord(){
    let longWord = '';
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i].length > longWord.length){
            longWord = arguments[i];
        }
    }
    return longWord;
}

//Destructuring Arrays in Javascript
//Unpack values from array

let a, b, rest;
console.log(a);

[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const list = ['apples', 'pears', 'ham', 'grapes', 'lettuce'];
const [x, y, z] = list;
console.log(x);
console.log(y);
console.log(z);

let twoNums = (x) => {
    return [1,2];
}

let [c,d] = twoNums();
console.log(c);
console.log(d);

let threeNums = (x) => {
    return [1,2,3];
}

let [e,,g] = threeNums();
console.log(e);
console.log(g);

const myArray = [1,2,3,4];

const [h,...i] = myArray;
console.log(h);
console.log(i);

const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

let winner, silver, bronze, didNotPlace;

[winner, silver, bronze, ...didNotPlace] = raceResults;

let [,,,fourth] = raceResults;

let [first, ...theRest] = raceResults;


//Destructuring Objects in Javascript
//Unpacking properties using destructuring

const user = {
    id: 42,
    isVeteran: true
}

const {id, isVeteran} = user;
console.log(id);
console.log(isVeteran);

let a, b;

({a, b} = {a: 1, b: 2});
console.log(a);

const {id: foo, isVeteran: bar} = user;
console.log(foo);

const {c, d = 12} = {c: 15};

const {e: ee = 10, f: ff = 5} = {e: 3};
console.log(ee);

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

//const {first, title, last, time} = runner;

//const {first: firstNameOfRunner, last: lastNameOfRunner} = runner;

const {first, last, ...nationInfo} = runner;

*/

//Destructing Nested Objects and Arrays

const applicant = 
{
    first: 'JC',
    last: 'Tovar',
    education: {
        degree: 'Masters',
        yearGraduated: 2013
        },
    location: 'Houston, TX',
    
}

// const {first: applicantName} = applicant[0];
// const [{first: nameOfFirst},{first}] = applicant; 

// const [,secondPerson] = applicant;
// const {education: {degree}} = secondPerson;
// const imeldasDegree = {education: {degree}};
// const imelda = [,secondPerson.education.yearGraduated]

const fullName = ({first, last}) => {
    return `${first} ${last} is the applicant\'s full name`;
}

const personsName = fullName(applicant);


// {
//     first: 'Imelda',
//     last: 'Mejia',
//     education: {
//         degree: 'Bachelors',
//         yearGraduated: 2015
//         },
//     location: 'Houston, TX',
// }

const graduatedYear = ({first, education: {yearGraduated}})=>{
    console.log(`${first} graduated in ${yearGraduated}`);
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

console.log(response[1]);

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`);
}