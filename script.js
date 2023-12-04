const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTask);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function editTask(event) {
  const taskItem = event.target.parentNode;
  const taskSpan = taskItem.querySelector("span");
  const taskText = taskSpan.textContent;
  const newTaskText = prompt("Edit task:", taskText);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText.trim();
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}