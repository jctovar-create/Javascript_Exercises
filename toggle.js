var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
    // if white make it purple, if not make it white

    if(isPurple){
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
    isPurple = !isPurple;
});