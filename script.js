
const orderList = document.getElementById("lista-tarefas");
const taskInput = document.getElementById("texto-tarefa");

function addItem(itemName) {
    let task = document.createElement("li");
    task.innerHTML = itemName;
    orderList.appendChild(task);
    taskInput.value = "";
    task.addEventListener("click", function () { mudarCor(task) });
    task.addEventListener("dblclick", function () { toggleCompleted(task) });
}
let buttonAdd = document.getElementById("criar-tarefa");
buttonAdd.addEventListener("click", function () { addItem(taskInput.value) })

function mudarCor(element) {
    clearAll();
    element.style.backgroundColor = "rgb(224, 224, 224)";
    element.style.backgroundRadius = "2em";
}
function clearAll() {
    let items = document.getElementsByTagName("li");
    console.log(items)

    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "transparent";
    }
}
function toggleCompleted(element) {
    if (element.classList.contains("completed")) {
        element.classList.remove("completed");
    } else {
        element.classList.add("completed");
    }
}
function eraser() {
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}
function eraserDone() {
    let done = document.querySelectorAll("li");

    for (let i = 0; i < done.length; i++) {
        if (done[i].classList.contains("completed")) {
            done[i].remove("completed");
        }
    }
}


// ment.getElementById("myLI");
// item.parentNode.removeChild(item)