function addTask() {
    
    var task = prompt("Nova tarefa:");
    if(task == "") {
        alert("Nenhuma tarefa encontrada");
    } else {
        var newTask = document.createElement("div");
        var newCont = document.createTextNode(task);
        newTask.className="item";
        newTask.appendChild(newCont);
        newTask.addEventListener("click", removeTask);
        
        var firstTask = document.querySelector(".item");
        var TaskList = document.getElementById("ft_list");
        TaskList.insertBefore(newTask, firstTask);
        saveToCookie();
    }

}

function removeTask(event) {
    
    var confirma = confirm("Deseja remover esta tarefa?");
    var TaskList = document.getElementById("ft_list");
    if (confirma) {
        TaskList.removeChild(event.target)
        saveToCookie();
    }

}

// Cookies //
function saveToCookie() {
    var tasks = [];
    var taskElements = document.querySelectorAll(".item");
    taskElements.forEach(function(taskElement) {
        tasks.push(taskElement.textContent);
        });
    document.cookie = "tasks=" + tasks.join(',');
}

function loadTasksFromCookie() {
    var tasks = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (tasks) {
        tasks = tasks.split(',');
        tasks.forEach(function(task) {
            if(task != "") {
                var newTask = document.createElement("div");
                newTask.textContent = task;
                newTask.className = "item";
                newTask.addEventListener("click", removeTask);
                var taskList = document.getElementById("ft_list");
                taskList.appendChild(newTask);
            }
        });
    }
}

window.onload = function() {
    loadTasksFromCookie();
};