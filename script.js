    document.addEventListener("DOMContentLoaded", function() {
      // Query for the submit button and input task field
      const submit = document.getElementById("submitButton");
      const newTask = document.getElementById("newTaskInput");

      // Disable the submit button by default
      submit.disabled = true;

      // Listen for input to be typed into the input field
      newTask.addEventListener("input", function() {
        // Enable the submit button if there is text in the input field
        submit.disabled = newTask.value.trim() === "";
      });

      // Listen for submission of form
      document.getElementById("taskForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Find the task the user just submitted
        const taskText = newTask.value.trim();
        if (taskText !== "") {
          // Create a list item for the new task
          const newTaskItem = document.createElement("li");
          newTaskItem.textContent = taskText;

          // Add the task to the unordered list
          const taskList = document.getElementById("taskList");
          taskList.appendChild(newTaskItem);

          // Clear the input field and disable the submit button again
          newTask.value = "";
          submit.disabled = true;
        }
      });

      // Prevent default form submission
      return false;
    });
