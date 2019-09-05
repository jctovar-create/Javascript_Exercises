/*
GAME FUNCTION:
- Player guess between min and max
- Player get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again 
*/


// Game values
let min = 1, 
    max = 10, 
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
    console.log(winningNum);

//UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");


//Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener("mousedown", function(e){
   
    if(e.target.className === "play-again"){
        window.location.reload();
    }
    
}); 

//Event Listener for guess button

guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    //Validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
        return;
    } 
    //if its winning number
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct!`);
    } else {
        //Wrong Number
        guessesLeft -=1;
        if(guessesLeft === 0){
            //Game over - lost
            gameOver(false, `Game over, you lost, the correct number was ${winningNum}`);
        } else {
            //Tell user its the wrong number
            guessInput.style.borderColor = "red";

            //Game continues - answer wrong 
            setMessage(`${guess} is not correct, ${guessesLeft}: guesses left`, "red");
            guessInput.value = "";
        }
    }
});

function gameOver(won, msg){
    let color; 
    won === true ? color = "green" : color = "red";
    //Disable Input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color 
    message.style.color = color;
    //set message
    setMessage(msg);
    //Play Again
    guessBtn.value="Play Again";
    guessBtn.className += "play-again";
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max){
   return Math.floor(Math.random()*(max - min + 1) + min);
}

