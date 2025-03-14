let tasks = [];
let taskId = 1;

function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log(`Task added:`, task);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Task List:", tasks);
    }
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated:`, task);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log(`Task deleted:`, removedTask[0]);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


addTask("Buy groceries", "Milk, Bread, Eggs");
addTask("Workout", "Go to the gym at 6 PM");
viewTasks();
updateTask(1, "Buy groceries and fruits", "Milk, Bread, Eggs, Bananas");
deleteTask(2);
viewTasks();
