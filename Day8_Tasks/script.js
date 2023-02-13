var list = document.querySelector("ul");
let newList = [];
list.addEventListener("click", e => {

    if (e.target.classList.contains("text-success")) {
        var check = e.target.parentElement.parentElement.querySelector("span");
        check.style.textDecoration = "line-through";
    } else if (e.target.classList.contains("text-danger")) {
        var uncheck = e.target.parentElement.parentElement;
        uncheck.remove();
        // console.log(uncheck.querySelector("span").innerHTML)
        removeItem(uncheck.querySelector("span").innerHTML);


    }
});


var add = document.getElementById("submit");
var form = document.querySelector("form");

let textInput = document.querySelector("#TaskInput");


form.addEventListener("submit", e => {
    e.preventDefault();
    var htmlToAdd = `
    <li class="list-group-item" style="display: flex; justify-content: space-between;"><span>${textInput.value}</span>
    <div class="check" style="display: inline;">
    <i class="bi bi-check-square-fill text-success"></i>
    <i class="bi bi-x-square-fill text-danger"></i>
    </div>
    </li>`;
    list.insertAdjacentHTML("beforeend", htmlToAdd);
    newList.push(textInput.value);
    localStorage.setItem("tasks", JSON.stringify(newList));

});


function removeItem(taskToRemove) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    for (let task of tasks) {
        if (taskToRemove == task) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    newList = JSON.parse(localStorage.getItem("tasks"));
    for (let task of newList) {
        var htmlToAdd = `
        <li class="list-group-item" style="display: flex; justify-content: space-between;"><span>${task}</span>
        <div class="check" style="display: inline;">
        <i class="bi bi-check-square-fill text-success"></i>
        <i class="bi bi-x-square-fill text-danger"></i>
        </div>
        </li>`;
        list.insertAdjacentHTML("beforeend", htmlToAdd);
    }
    //localStorage.setItem("tasks", JSON.stringify(tasks));
}
loadTasks();
