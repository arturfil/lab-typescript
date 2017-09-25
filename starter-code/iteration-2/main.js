var Todo = (function () {
    function Todo(Tasks) {
        if (Tasks === void 0) { Tasks = []; }
        this.Tasks = Tasks;
    }
    Todo.prototype.addTask = function (string) {
        this.Tasks.push(string);
        console.log('=========== NEW TASK ===========');
        console.log("added '" + string + "' to the list of Tasks");
        console.log("Number of Items: " + this.Tasks.length);
        console.log("List of Tasks: ");
        return this.listAllTasks();
    };
    Todo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        console.log("=========== TASK REMOVED ===========");
        console.log("Tasks: " + task + " deleted");
        task.slice();
        console.log("Number of items: " + this.Tasks.length);
    };
    return Todo;
}());
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
