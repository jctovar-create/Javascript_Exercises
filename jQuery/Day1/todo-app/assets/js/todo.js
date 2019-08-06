//check off specific to dos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass('completed');
});

//click on X to delete Task
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//adding new tasks to list
$("input[type='text']").keypress(function(event){
    if(event.which=== 13){
        var todoText = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todoText+ "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").slideToggle();
});






/*
Inefficient Code 

if($(this).css('color')=== 'rgb(128, 128, 128)'){
        $(this).css({
            'color': 'black',
            'text-decoration': 'none'
        });
    } else {
        $(this).css({
            'color': 'grey',
            'text-decoration': 'line-through'
        });
    }
*/