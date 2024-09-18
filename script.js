let newTaskName = document.getElementById("new-task-name");
let newTaskDesc = document.getElementById("new-task-desc");
let newTaskButton = document.getElementById('new-task-submit-button');
let tasksContainer = document.getElementById("tasks-container");
let taskArray = [];
newTaskButton.addEventListener("click", createNewTask)





function render() {
 
    tasksContainer.innerHTML = '';
    for (i = 0; i < taskArray.length; i++) {
    taskArray[i].id = i;
    tasksContainer.insertAdjacentHTML("beforeend", `<div id="task-${taskArray[i].id}" class="task"><div class="task-body"><button data-index="${taskArray[i].id}" class="task-checkbox"></button><p class="task-name">${taskArray[i].name}</p><p class="task-desc">${taskArray[i].desc}</p></div><button data-index="${taskArray[i].id}" class="task-edit-button"></button><button data-index="${taskArray[i].id}" class="task-delete-button"></button></div>`);
    let task = document.getElementById(`task-${taskArray[i].id}`);
    if (taskArray[i].completed == true) {
        task.classList.add("task__completed");
    } else if (taskArray[i].completed == false) {
        task.classList.remove("task__completed");
    }

    }

}
    
function clearInputs() {
    newTaskName.value = "";
    newTaskDesc.value = "";
}
function createNewTask() {
    if (newTaskName.value === "") {
        alert("Enter task name!");
    } else if (newTaskDesc.value === "") {
        alert("Enter Description!");} else {
    let task = {
        id: taskArray.length,
        name: newTaskName.value,
        desc: newTaskDesc.value,
        completed: false,
    };
    taskArray.push(task);  
    clearInputs();
    render();}}

tasksContainer.onclick =  function(event) {
    let target = event.target;
    let attr = target.getAttribute("class");
    switch(attr) {
        case "task-delete-button":
            taskArray.splice(target.dataset.index, 1);
            break;
        case "task-edit-button":
            alert('edit');
            break;
        case "task-checkbox":
            if (taskArray[target.dataset.index].completed == false) {
                taskArray[target.dataset.index].completed = true;
            } else if (taskArray[target.dataset.index].completed == true) {
                taskArray[target.dataset.index].completed = false;}
            break;
    }
    render();
}
