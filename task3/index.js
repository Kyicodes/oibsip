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

addTaskButton.addEventListener("click", createToDoData);

function addItemsToList() {
  let newItem = document.createElement("li");
  newItem.innerText = todoInput.value;

  // Edit button
  let editButton = document.createElement("button");
  editButton.innerText = "✏";
  editButton.addEventListener("click", () => {
    let editInput = document.createElement("input");
    editInput.value = newItem.innerText;
    newItem.innerText = "";
    newItem.appendChild(editInput);
    editInput.focus();
    editInput.addEventListener("blur", () => {
      newItem.innerText = editInput.value;
    });
  });
  newItem.appendChild(editButton);

  listItems.appendChild(newItem);
  todoInput.value = "";
  todoInput.focus();
}
