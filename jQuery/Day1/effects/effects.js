// $("button").on("click", function(){
//     $("div").fadeToggle(500, function(){
//         // $(this).remove();
//         console.log("Fade Completed");

//     });
// });

$("#slide").on("click", function(){
    $("div").slideToggle(500, function(){
        // $(this).remove();
        console.log("Slide is Done");

    });
});


$("#change").click(function(){
    $("#change").animate({
        width: '50px',
        height: '50px'
    }, "slow");
});


// $("h1").on("click", function(){
//     $("div").slideToggle(500, function(){
//         // $(this).remove();
//         console.log("Slide is Done");

//     });
// });