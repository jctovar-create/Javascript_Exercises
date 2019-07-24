const refresh = document.querySelector("refresh");
var d = new Date();
const date = document.querySelector("#date").innerHTML = d.toDateString();
const list = document.getElementById("list");
const input = document.getElementById("input");
const content = document.querySelector("#content")
const addButton = document.getElementById("addBtn")
const trash = document.getElementById('trash');


function addToDo(todo){
    const text = `  <br>
                    <li class="item">
                    <i class="co fa fa-circle-thin emptycircle" job="complete"></i>
                    <p class="task">${todo}</p>
                    <div onclick="trashFunction()"><i class="de fa fa-trash-o trashcan" job="delete"></i></div>
                    </li>`
    const position = "beforeend"
    list.insertAdjacentHTML(position, text);

}



/*
function addToDo(todo){
    var text = ` <br>
                <li class="item">
                <i class="co fa fa-circle-thin emptycircle" job="complete"></i>
                <p class="task"$>${todo}</p>
                <i class="de fa fa-trash-o trashcan" job="delete"></i>
                </li> `
    var position = "beforeend"
    list.insertAdjacentHTML(position, text);
}
*/


/*
addButton.addEventListener('click', function(){
    const todo = input.value;
    if(todo){
        addToDo(todo);
    }
    input.value = "";
});
*/

addButton.addEventListener("click", function(){
    var todo = input.value;
    if(todo){
        addToDo(todo);

        input.value = '';
    }
});

document.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        const todo = input.value;
        if(todo){
            addToDo(todo);
            input.value = "";
        }
    }
});

function trashFunction(){
    trash.addEventListener('click', function(){
        alert("trash was hit");
    });
}





 
// function addToDo(todo){
//     const text =    <li class="item">
//                     <p class="text">${todo}</p>
//                 </li>
//     const position = "beforeend";
// }
// addToDo("Drink Coffee")

// document.addEventListener("keyup", function(event){
//     if(event.keyCode == 13){
//         const todo = input.value;
//     }
// });

// list.insertAdjacentHTML("afterbegin", text);
