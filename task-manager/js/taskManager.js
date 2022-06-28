// Create the HTML for a task
// it is a function that creates a new task with this parameters
const createTaskHtml = (name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`;
class TaskManager {
    //created a class of objects
    //set up the task and current ID properties in the constructor
    constructor(currentId = 0) {
        //constructor is creating and initializing an object of the class
        this.tasks = [];
        //we give this object a task with empty array
        this.currentId = currentId;
        // we give this object an ID that is the same as current id
    }
    // create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        //we add a method to he object we just created, that takes these arguments
        const task = {
            //inside the method we created a variable const
            // increment current id property
            id: this.currentId++,
            // the id of this variable grows incrementally with every round
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        //push task to the task property
        this.tasks.push(task);
        console.log(this.tasks);
        // an array method pushes new task to the end of the array variable (empty array) we created at the top
    }
        // Create the render method
        render() {
            // Create an array or set or bucket to store the tasks
            const taskHtmlList = [];
            // I want to creat a loop to iterate over our tasks and create the html and also store them in the array.
            for (let i = 0; i < this.tasks.length; i++) {
                // I want to get the current task in the loop
                const task = this.tasks[i];
                //I want to format the date
                const date = new Date(task.dueDate);
                const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                // I want to create the task HTML
                const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
                // Now, I want to push this info to the taskHtmlList array
                taskHtmlList.push(taskHtml);
            }
            // Now, I want to create the taskHtml by joining each item in the tasksHtmlList with a new line in between each item
            const taskHtml = taskHtmlList.join('\n');
            // Now, just set the inner html of the tasklist on the page
            const tasklist = document.querySelector('#taskList');
            tasklist.innerHTML = taskHtml;
        }
         }