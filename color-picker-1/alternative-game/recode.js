var rgbValue = document.getElementById("rgbValue");

var numSquares = 6;

var squares = document.querySelectorAll(".square");

var resetBtn = document.getElementById("reset");

var easyBtn = document.querySelector("#easyBtn");

var hardBtn = document.querySelector("#hardBtn");

var colors = generateValues(numSquares);

var chosenColor = pickColor();

var h1 = document.querySelector("h1" );

var message = document.getElementById("message");

rgbValue.textContent = chosenColor;

easyBtn.addEventListener('click', function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateValues(numSquares);
    chosenColor = pickColor();
    rgbValue.textContent = chosenColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateValues(numSquares);
    chosenColor = pickColor();
    rgbValue.textContent = chosenColor;
    for(var i = 0; squares.length; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
});


resetBtn.addEventListener('click', function(){
    colors = generateValues(numSquares);
    chosenColor = pickColor();
    rgbValue.textContent = chosenColor;
    h1.style.background = "beige";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedSquare = this.style.backgroundColor;
    if (clickedSquare === chosenColor){
        makeAllColor();
        h1.style.background = chosenColor;
        message.textContent = "Correct!"
        resetBtn.textContent = "Play Again";
        // alert("You got it right!");
    } else {
        this.style.backgroundColor = "beige";
        message.textContent = "Try Again"
        // alert("You need to study more, WRONG!")
    }
    });
};



function generateValues(num){
    //make an array
    var arr=[];
    //logic for array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
};

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random()* 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function makeAllColor(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = chosenColor;
    }
};

function pickColor(){
    var pickColor = Math.floor(Math.random() * colors.length + 1)
    return colors[pickColor];
};