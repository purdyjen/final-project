// Select the New Task Form
const taskManager = new TaskManager();
const newTaskForm = document.querySelector("#newTaskForm");
// Add an 'onsubmit' event listener
newTaskForm.addEventListener("submit", (e) => {
  // Prevent default action
  e.preventDefault();
  // Select the inputs
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDueDate = document.querySelector("#newTaskDueDate");
  const errorMessage = document.querySelector("#alertMessage");

  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  if (!name || !description || !assignedTo || !dueDate) {
    errorMessage.innerHTML = "Invalid input";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    taskManager.addTask(name, description, assignedTo, dueDate);
    newTaskForm.reset();
  }
});

