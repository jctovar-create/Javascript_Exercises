colors = generateColorArr(6);

var squares = document.getElementsByClassName("square");

var rgbValue = document.querySelector("#rgbValue");

var color = randomColor();

var update = document.querySelector("#message");

rgbValue.textContent = color;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clicked = this.style.backgroundColor;
        if (clicked === color){
            update.textContent = "Correct!";
            makeAllColor();
            // alert("You Win!");
        } else {
            update.textContent = "Try Again";
            this.style.backgroundColor = "cyan";
            // alert("You Suck!");
        }
    });
};

//generate one rgb value

function generateOneColor(){
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};



//make that value times how ever many values we need make them show up

function generateColorArr(num){
    arr = [];
    for(var i = 0; i < num; i++){
        arr.push(generateOneColor());
    };
    return arr;
};

//make the color a random color every time

function randomColor(){
    var randomlyPicked =  Math.floor(Math.random() * colors.length + 1);
    return colors[randomlyPicked];
};

// turn all the colors that color 

function makeAllColor(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
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