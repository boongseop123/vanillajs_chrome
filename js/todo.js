const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input");

const TODOS_KEY="todos";
const toDos=[];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
   parsedToDos.forEach(paintTodo);
}