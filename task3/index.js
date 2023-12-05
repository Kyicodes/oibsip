let todoInput = document.getElementById("todo-input");
let listItems = document.getElementById("list-items");
let addTaskButton = document.getElementById("addButton");

// Data creation
function createToDoData() {
  if (todoInput.value === "") {
    todoInput.focus();
  } else {
    addItemsToList();
  }
}

addTaskButton.addEventListener("click", createToDoData);

// Add items
function addItemsToList() {
  let listItem = document.createElement("li");

  let todoText = document.createElement("span");
  todoText.innerText = todoInput.value;
  listItem.appendChild(todoText);

  // Edit button
  let editButton = document.createElement("button");
  editButton.innerText = "✏";
  listItem.appendChild(editButton);

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "✖";
  listItem.appendChild(deleteButton);

  let editInput = document.createElement("input");
  editInput.style.display = "none";
  listItem.appendChild(editInput);

  // Submit button
  let submitButton = document.createElement("button");
  submitButton.innerText = "✔";
  submitButton.style.display = "none";
  listItem.appendChild(submitButton);

  function showEditInput() {
    editInput.value = todoText.innerText;
    todoText.style.display = "none";
    editInput.style.display = "inline-block";
    submitButton.style.display = "inline-block";
    editInput.focus();
  }

  function hideEditInput() {
    todoText.style.display = "inline-block";
    editInput.style.display = "none";
    submitButton.style.display = "none";
  }

  editButton.addEventListener("click", (event) => {
    if (listItem.classList.contains("editing")) {
      return;
    }

    listItem.classList.add("editing");

    showEditInput();
  });

  submitButton.addEventListener("click", () => {
    let editedText = editInput.value.trim();
    todoText.innerText = editedText;
    listItem.classList.remove("editing");
    editButton.innerText = "✏";

    hideEditInput();
  });

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItems.appendChild(listItem);
  todoInput.value = "";
  todoInput.focus();
}
