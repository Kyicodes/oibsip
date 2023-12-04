let todoInput = document.getElementById("todo-input");
let listItems = document.getElementById("list-items");
let addTaskButton = document.getElementById("addButton");

function createToDoData() {
  if (todoInput.value === "") {
    todoInput.focus();
  } else {
    addItemsToList();
  }
}

function addItemsToList() {
  let newItem = document.createElement("li");
  newItem.innerText = todoInput.value;
  listItems.appendChild(newItem);
  todoInput.value = "";
  todoInput.focus();
}

addButton.addEventListener("click", createToDoData);
