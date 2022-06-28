// Create a TaskManager class
class TaskManager {
    //set up the tasks and currentId properties in the object constructor
    constructor(currentId = 0) {
        //we give this object a task with empty array
        this.tasks = [],
        // we give this object an ID that is the same as current id
        this.currentId = currentId
    }
    // create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        //we add a method to the object we just created, that takes these arguments
        const newTask = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        //push task to the end of the task property array
        this.tasks.push(newTask);
        this.currentId++;
        console.log(this.tasks);
    }
}







