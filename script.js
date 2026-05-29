function getTaskInput(){

    const taskInput = document.getElementById("task-input");
    return taskInput.value;
}

function addTask(){

    const task = getTaskInput();
    if(task){

        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        
        listItem.textContent = task;
        addTickBox(listItem);
        taskList.appendChild(listItem);
        
    }
}
function addTickBox(listItem){
    const tickBox = document.createElement("input");
    tickBox.type = "checkbox";
    listItem.prepend(tickBox);
    tickBox.style.marginRight = "10px";
    tickBox.style.transform = "scale(1.5)";
    tickBox.style.backgroundColor = "#4CAF50";    

    tickBox.addEventListener("change", function(){
        if(this.checked){
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "#888";
        } else {
            listItem.style.textDecoration = "none";
            listItem.style.color = "#000";
        }   
    });
}
function addTaskOnEnter(event){
    if(event.key === "Enter"){
        addTask();
    }
}

function clearTasks(){

    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
}