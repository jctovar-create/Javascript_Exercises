//alert("It's working");

let a = 1;

/* 

for(let i = 1; i <= 10; i+=3){
    console.log("Hello " + i);
}

for(a; a <= 20; a++){
    console.log('Multiple: ', a*a);
}

for(let num = 1, num <= 20, num++){
    console.log(num);
}

for(let i = 200; i >= 0; i-=2){
    console.log("This is number ", i);
}

const animals = [ 'lions', 'tigers', 'bears'];

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

*/


/*

for(let i = 0; i < examScores.length; i++){
    console.log("This is the exam score for this student: ", examScores[i]);
}

const myStudents = [
    {firstName: 'Zues', grade: 86}, 
    {firstName: 'Artemis', grade: 97}, 
    {firstName: 'Hera', grade: 72}, 
    {firstName: 'Apollo', grade: 90}, 
    {firstName: 'Zues', grade: 86}, 
];

for(let i = 0; i < myStudents.length; i++){
    //console.log(myStudents[i].firstName + ' got a ' + myStudents[i].grade + ' on their test');
    let student = myStudents[i];
    console.log(`${student.firstName} got a ${student.grade}`);
}

const examScores = [98, 77, 84, 91, 57, 66];
let totalPoints = 0;
let average = 0;

for(let i = 0; i < examScores.length; i++){
    totalPoints += examScores[i];
}

console.log(totalPoints);

average = totalPoints/examScores.length;
console.log(average);

____

let average = totalPoints/examScores.length;
console.log(average);



const word = 'stressed';
let backwardsWord = '';

for(let i = word.length -1; i >=0; i--){
    const letter = word[i];
    //console.log(letter);
    backwardsWord += letter;
}

console.log(backwardsWord);


let text = "";
for(let member in list) {
  text += list[member];
}

for(let i = 0; i <= 10; i+= 2){
    console.log("Outer Loop: ", i);
    for(let j = 0; j <= 5; j++){
        console.log("    Inner Loop: ", j);
        for(let k = 0; k <=3; k++){
            console.log("      Mega Inner Loop: ", k);
        }
    }
}

const gameBoard= [
    [4, 32, 8 , 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]; 

let gameTotal = 0;
//console.log(gameTotal);

for(let i = 0; i <= gameBoard.length; i++){
    for(let j = 0; j <= gameBoard[i].length; j++){
        gameTotal += gameBoard[i][j];
    }
}


for(let i = 0; i <= gameBoard.length-1; i++){
    for(let j = 0; j <= gameBoard[i].length-1; j++){
        //console.log(gameBoard[i][j]);
        gameTotal += gameBoard[i][j];
    }
}

____

for(let i =0; i < gameBoard.length; i++){
    console.log(gameBoard[i]);
}

console.log(gameTotal);

//WHILE LOOPS

let number = 0; 
while(number <= 10){
    console.log(number);
    number++;
}


//varName = 8;

// while(varName != 3){
//     console.log("Wrong answer!");
// }

const target = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

console.log(guess);

while(guess !== target){
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} equals the guess: ${guess}`);

//BREAK

for(let i = 0; i < 10; i++){
    if(i > 5){
        break;
    }
    console.log(i);
    
}

let randomNumber = Math.floor(Math.random() * 10);
let secondRandomNumber = Math.floor(Math.random() * 10);

const target = randomNumber;
let guess = secondRandomNumber;

console.log(target);
console.log(guess);

// while(target !== guess){
//     console.log(guess)
//     guess = Math.floor(Math.random() * 10);
// }
// console.log("You Win!!");

while(true){
    if(target === guess){
        break;
    }
    console.log(`Target was ${target}, and your guess was ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target was ${target}, and your guess was ${guess}`);

console.log("You Win 2!");


// FOR OF LOOP

const favWord = "Hopdidy";

for (const element of favWord) {
    console.log(element);
  }
  
const grades = [99, 84, 95, 77, 28, 90, 79];

for (const element of grades){
    console.log(element);
}

for(let letter of "this word"){
    console.log(letter);
}



const magicSquare = [
    [2, 7, 6, 7],
    [9, 5, 1],
    [4, 3]
]

for(let i = 0; i < magicSquare.length; i++){
    let rowTotal = 0;
    //console.log(i);
    for(let element in magicSquare[i]){
        let numberAtIndex = magicSquare[i][element];
        //console.log(numberAtIndex);
        rowTotal += magicSquare[i][element];
    }
    console.log(rowTotal);
}

for(let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i];
    let sum = 0
    for(let j = 0; j < row.length; j++){
        //console.log(row[j]);
        sum += row[j];
    }
    console.log(sum);
}

for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(sum);
}



const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];
//console.log(words1);
//console.log(words2);

let word1;
let word2;

for(let i = 0; i < words1.length; i++){
    word1 = words1[i];
    for(let j = 0; j < words2.length; j++){
        word2 = words2[j];
        if(i === j){
            console.log(`${word1} ${word2}`);
        }
    }
}

for(let i = 0; i < words1.length; i++){
    console.log(words1[i] + " " + words2[i]);
}

//ITERATING OVER OBJECTS

const movieReviews = {
    Arrival         : 9.5,
    Alien           : 9,
    Amelie          : 8, 
    'In Bruges'     : 9,
    Amadeus         : 10,
    'Kill Bill'     : 8,
    'Little Miss Sunshine'  : 8.5,
    Coraline        : 7.5
};

// for(let x of movieReviews){
//     console.log(x);
// }

const movieArray = Object.keys(movieReviews);
const ratingArray = Object.values(movieReviews);

for(movie in movieArray){
    console.log(`${movieArray[movie]} got a ${ratingArray[movie]}`);
}

// for(rating in ratingArray){
//     console.log(ratingArray[rating]);
// }

*/ 


//FOR IN LOOP

const movieReviews = {
    Arrival         : 9.5,
    Alien           : 9,
    Amelie          : 8, 
    'In Bruges'     : 9,
    Amadeus         : 10,
    'Kill Bill'     : 8,
    'Little Miss Sunshine'  : 8.5,
    Coraline        : 7.5
};


const jeopardyWinnings = {
    regularPlay     : 2522700,
    watsonChallenge : 300000,
    tournament      : 500000,
    battle          : 100000
}

for(const kindOfWin in jeopardyWinnings){
    console.log(`This guy on ${jeopardyWinnings[kindOfWin]} in the ${kindOfWin}`);
}

let total = 0;
for(const prop in jeopardyWinnings){
    total += jeopardyWinnings[prop];
}
console.log(`He made a total of ${total} dollars!`);



