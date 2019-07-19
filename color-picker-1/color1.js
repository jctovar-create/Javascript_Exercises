colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(160, 0, 75)",
    "rgb(45, 100, 5)"
]

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

function randomColor(){
    var assignedColor = Math.floor(Math.random() * colors.length)
    return colors[assignedColor];
}

function makeAllColor(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};