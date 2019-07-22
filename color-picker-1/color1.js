var numSquares = 6;
var colors = colorArray(numSquares);
var squares = document.getElementsByClassName("square");
var rgbValue = document.querySelector("#rgbValue");
var color = correctColor();
var reset = document.getElementById("reset");
var update = document.querySelector("#message");
var topPart = document.querySelector("#toppart");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

rgbValue.textContent = color;

easyButton.addEventListener("click", function(){
    topPart.style.backgroundColor = "cyan";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = colorArray(numSquares);
    color = correctColor();
    rgbValue.textContent = color;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    topPart.style.backgroundColor = "cyan";
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = colorArray(numSquares);
    color = correctColor();
    rgbValue.textContent = color;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener('click', function(){
    colors = colorArray(numSquares);
    color = correctColor();
    update.textContent = "";
    this.textContent = "New Colors";
    rgbValue.textContent = color;
    topPart.style.backgroundColor = "cyan";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clicked = this.style.backgroundColor;
        if (clicked === color){
            update.textContent = "Correct!";
            makeOneColor();
            topPart.style.backgroundColor = color;
            reset.textContent = "Play Again";
            // alert("You Win!");
        } else {
            update.textContent = "Try Again";
            this.style.backgroundColor = "black";
            // alert("You Suck!");
        }
    });
};

//generate one random color

function oneColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

//make one color how ever many is set

function colorArray(num){
    arr = [];
    for(var i = 0; i < num; i++){
        arr.push(oneColor());
    };
    return arr;
};

//get one random value from the arr

function correctColor(){
    var correctIndex = Math.floor(Math.random() * colors.length);
    return colors[correctIndex];
};


//make all squares the same color

function makeOneColor(){
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color;
    };
};




































/*

function randomColor(){
    var assignedColor = Math.floor(Math.random() * colors.length)
    return colors[assignedColor];
}

function makeAllColor(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function generateColorArray(num){
    arr =[];
    for(var i = 0; i < num; i++){
        arr.push(generateOneColor());
    };
    return arr;
};


function generateOneColor(){
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

*/