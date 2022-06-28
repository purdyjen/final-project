// Select the New Task Form
const taskManager = new TaskManager();
const newTaskForm = document.querySelector("#newTaskForm");
let alert = document.getElementById('alert');
alert.style.display = 'none';
// assign the first html element with ID newtaskform to constant variable
// Add an 'onsubmit' event listener
newTaskForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();
  // Select the inputs by assigning the first HTML elements to constant variables
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDueDate = document.querySelector("#newTaskDueDate");

  //assigning the values of the new elements to constant variables
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value; //mistake
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  //if the input is not valid in any section of a new task, the program outputs the message 'invalid input'
  if (!name || !description || !assignedTo || !dueDate) {
    let string = '';
    if (!name) {
      string += '"Name" field is empty.<br>'
    }
    if (!description) {
      string += '"Description" field is empty.<br>'
    }
    if (!assignedTo) {
      string += '"Assigned To" field is empty.<br>'
    }
    if (!dueDate) {
      string += '"Due Date" field is empty.<br>'
    }
    alert.innerHTML = string;
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
    taskManager.addTask(name, description, assignedTo, dueDate);
    document.getElementById("newTaskForm").reset();
  }

  // Render the tasks
  taskManager.render();

});

