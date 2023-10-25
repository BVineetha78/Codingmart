const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Retrieve tasks from local storage or initialize as empty array
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks from local storage on page load
function loadTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button class="deleteBtn">Delete</button>
    `;
    listItem.querySelector(".deleteBtn").addEventListener("click", () => deleteTask(index));
    listItem.addEventListener("click", () => toggleCompleted(index));
    taskList.appendChild(listItem);
  });
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    saveTasks();
    taskInput.value = "";
    loadTasks();
  }
}

// Toggle task completion
function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  loadTasks();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  loadTasks();
}

// Add task button click event
addTaskBtn.addEventListener("click", addTask);

// Load tasks on page load
window.addEventListener("load", loadTasks);
