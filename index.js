let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [{
    text : "Learn HTML",
    uniqueNo : 1
}, 
{
    text : "Learn CSS",
    uniqueNo : 2
}, 
{
    text : "Learn JavaScript",
    uniqueNo : 3
}
];

let todoCount = todoList.length;

function onTodoStatus(checkboxId, labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked")
}

function deleteTodo(todoId){
    let deleteElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(deleteElement);
};



function createAndAppendTodo(todo) {

    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function(){
        onTodoStatus(checkboxId,labelId);
    };
    
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("delete-icon", "far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function(){
        deleteTodo(todoId)
    };
    deleteIconContainer.appendChild(deleteIcon);
};


for (let i = 0; i < todoList.length; i++){
    createAndAppendTodo(todoList[i]);
};

function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    userInputValue = userInputElement.value;
    todoCount = todoCount + 1;
    
    let newTodo = {
        text : userInputValue,
        uniqueNo : todoCount
    }
    
    if (userInputValue === ""){
        alert("Enter a valid input");
    }
    else{
        createAndAppendTodo(newTodo);
    }
    userInputElement.value = "";
};

let buttonElement = document.getElementById("buttonId");
buttonElement.onclick = function(){
    onAddTodo();
}
/* for (let todo of todoList){
    createAndAppendTodo(todo);   
}*/