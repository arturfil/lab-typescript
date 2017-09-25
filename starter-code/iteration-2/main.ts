// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements Todointerface {

  constructor(
    public Tasks: Array <string> = [],
  ) {}

  addTask (string: string) {
    this.Tasks.push(string);
    console.log('=========== NEW TASK ===========');
    console.log("added '" + string + "' to the list of Tasks");
    console.log("Number of Items: " + this.Tasks.length);
    console.log("List of Tasks: ")
    return this.listAllTasks();
  }

  listAllTasks() {
    this.Tasks.forEach((oneTask) => {
      console.log(oneTask);
    })
  }

  deleteTask(task: string) {
    console.log("=========== TASK REMOVED ===========");
    console.log("Tasks: " + task + " deleted");
    task.slice();
    console.log("Number of items: " + this.Tasks.length);
  }
}




// Execution
var myTodo = new Todo();
console.log("Number of items:", myTodo.addTask('This is our first task'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 3!! 🤓'));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 2!! 🤓'));
myTodo.listAllTasks();
