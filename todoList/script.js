document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
    // Get the task text
    const taskText = taskInput.value.trim();

    // Only add non-empty tasks
    if (taskText) {
      // Create new list item
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";

      // Add the task text
      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = taskText;
      taskItem.appendChild(taskTextSpan);

      // Create remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";

      // Add event listener to remove button
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(removeButton);

      // Add the task item to the list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";

      // Focus on the input field for next entry
      taskInput.focus();
    }
  }

  // Add task when Add button is clicked
  addButton.addEventListener("click", addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
