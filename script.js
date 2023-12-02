const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");

loadList();
function addTask() {
  if (inputBox.value === '')
    alert("Please enter a task");
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveList();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveList();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
}, false);

function saveList() {
  localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadList() {
    listContainer.innerHTML = localStorage.getItem("listContainer");
}