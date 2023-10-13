const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // Add a click event to remove the task
    removeButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(removeButton);

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Add task when the "Add" button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when Enter key is pressed in the input field
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
