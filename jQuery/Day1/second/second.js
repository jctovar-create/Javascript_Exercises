$("h1").on("click", function(){
    $(this).css("background-color", "yellow");
});

$("input").on("keypress", function(){
    console.log("key Pressed!");
});

$("#button1").on("click", function(){
    $(this).css("background-color", "black");
});


$("#button1").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("#button1").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});