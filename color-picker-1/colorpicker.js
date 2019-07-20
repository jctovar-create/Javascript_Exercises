var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");

var pickedColor= randomColor();

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent= pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i]

    //addEventListener to squares
    squares[i].addEventListener("click", function(){
    //grab the color of the picked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color which we defined up top.
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        // alert("Correct");
    }   else {
        this.style.backgroundColor = "beige";
        messageDisplay.textContent = "Try Again";
        
        // alert("Wrong!!");
    }
    });
};

function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
        //change colors to match given color
        squares[i].style.backgroundColor = color;
    };
};

function randomColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    //access the color and return it
    return colors[random];
};