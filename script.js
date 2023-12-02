const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '')
  {
    alert("Please enter a task");
  }
  else
  {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}