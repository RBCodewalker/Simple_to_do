const todoInput = document.querySelector(".inp");
const todoButton = document.querySelector(".clickbutt");
const todoList = document.querySelector(".data");
const filterOption = document.querySelector(".flr");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", add);
todoList.addEventListener("click", remove);
filterOption.addEventListener("click", filter);

function add(e)
{
  //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    //Save to local - do this last
    //Save to local
    savelocal(todoInput.value);
    //
    newTodo.classList.add("doit");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("done");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("dump");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
}

function remove(e)
{
  
}

function filter(e)
{
  
}

function savelocal(e)
{
  
}

function getTodos(e)
{
  
}
