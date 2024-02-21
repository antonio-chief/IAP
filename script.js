// Query the submit button and input task field
var submit = document.querySelector('input[type="submit"]');
var newTask = document.querySelector('input[name="task"]');

// Check if the submit button and input task field exist
if (submit && newTask) {
  // Listen for input to be typed into the input field
  newTask.addEventListener('input', function() {
    // Store the current value of the input field
    var currentTask = newTask.value;
    // Log the current task value to the console
    console.log('Current task:', currentTask);
  });

  // Listen for submission of the form
  submit.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Store the current value of the input field
    var submittedTask = newTask.value;
    // Log the submitted task value to the console
    console.log('Submitted task:', submittedTask);

    // Find the task the user just submitted
    var taskList = document.querySelector('ul');
    // Create a list item for the new task
    var newListItem = document.createElement('li');
    newListItem.textContent = submittedTask;
    // Add the new task to the unordered list
    taskList.appendChild(newListItem);

    // Clear the input field after submission
    newTask.value = '';
  });
} else {
  console.log('Submit button or input task field not found.');
}
