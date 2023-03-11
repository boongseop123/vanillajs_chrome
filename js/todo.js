const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input");

function paintTodo(newTodo){

}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit",handleToDoSubmit);