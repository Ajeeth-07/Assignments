document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
    
    const taskText = taskInput.value.trim();

    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";

      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = taskText;
      taskItem.appendChild(taskTextSpan);

      // remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";

      // Adding event listener to remove button
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(removeButton);

      // Adding the task item to the list
      taskList.appendChild(taskItem);

      // Clearing the input field
      taskInput.value = "";

      taskInput.focus();
    }
  }

  //  task when Add button is clicked
  addButton.addEventListener("click", addTask);

  //  task when Enter key is pressed
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
