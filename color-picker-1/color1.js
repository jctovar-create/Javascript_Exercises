colors = colorArray(6);

var squares = document.getElementsByClassName("square");

var rgbValue = document.querySelector("#rgbValue");

var color = correctColor();

var reset = document.getElementById("reset");

var update = document.querySelector("#message");

var topPart = document.querySelector("#toppart");

rgbValue.textContent = color;

reset.addEventListener('click', function(){
    colors = colorArray(6);
    color = correctColor();
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
            this.style.backgroundColor = "cyan";
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
    var correctIndex = Math.floor(Math.random() * colors.length + 1);
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