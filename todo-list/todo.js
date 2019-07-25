//Break up the code so it's read easier

//selecting by elements
const refresh = document.querySelector("#refresh");
const list = document.getElementById("list");
const input = document.getElementById("input");
const content = document.querySelector("#content")
const addButton = document.getElementById("addBtn")
const trash = document.getElementById('trash');
const date = document.getElementById('date');

//selecting by classes
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const lineOnText = "lineThrough";

//list variables
let LIST = [];
let id = 0;

//get item from local storage
let data = localStorage.getItem("TODO");
if(data){
    LIST = JSON.parse(data);
    id - LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

//clear local storage
refresh.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));

//todays date
const dateOptions = {weekday: 'long', month:'short', day:'numeric'}
var d = new Date();
date.innerHTML = d.toLocaleDateString('en-US', dateOptions);


function addToDo(todo, id, done, trash){
    if(trash){return;}
    const DONE = done ? check : uncheck;
    const LINE = done ? lineOnText : "";
    const text = `  <br>
                    <li class="item">
                    <i class="co fa ${DONE}" job="complete" id="${id}"></i>
                    <p class="task lineThrough ${LINE}">${todo}</p>
                    <i class="de fa fa-trash-o trashcan" job="delete" id="${id}"></i>
                    </li>`
    const position = "beforeend"
    list.insertAdjacentHTML(position, text);

}

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
            addToDo(todo, id, false, false);
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});


function completedTask(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(lineOnText);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove task
function removeTask(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//target the items created dynamically

list.addEventListener('click', function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if(elementJob == "complete"){
        completeTask(element);
    }else if(elementJob == "delete"){
        removeTask(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));

});










/*
FAILED CODE BELOW - BE WEARY ALL WHO ENTER 


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
 
function addToDo(todo){
    const text =    <li class="item">
                    <p class="text">${todo}</p>
                </li>
    const position = "beforeend";
}
addToDo("Drink Coffee")

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const todo = input.value;
    }
});

list.insertAdjacentHTML("afterbegin", text);

//This try resulted in nonsense

function trashFunction(){
    trash.addEventListener('click', function(){
        alert("trash was hit");
    });
}


// addToDo("coffee", 1, true, false);


//completed task function 

*/