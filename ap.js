
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = taskValue;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(removeBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});
