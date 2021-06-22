class User {
    username = '';
    credits = 0;

    constructor(username = 'Please add a username') {
        this.username = username;
    }
}

class Todo{
    task = '';
    isCompleted = false;
    constructor(task = 'Please Enter a task name') {
        this.task = task;
    }

}



class DataHelper {
    users = [];
    todos = [];
    loggedInUser = {unsername: 'Not logged In'};

    getRandomDecimal(range) {
       return Math.random() * range;
    }

    getRandomInt( range = 10, startingPoint = 0) {
        return  Math.floor( this.getRandomDecimal(range)) + startingPoint;
    }


    createUser(username){

        console.log(this.getUser(username).message)
        if (this.getUser(username).message.includes('no user found by the name of')) {
            const user = new User(username);
            this.users.push(user);
        }

        this.loggedInUser = this.getUser(username);
        
    }

    getUser(username){
        return this.users.find( user => user.username === username) || {message: 'no user found by the name of ' + username}
    }

    createTodo(task){
        const todo = new Todo(task);
        this.todos.push(todo);
    }

}


export const dataHelper = new DataHelper();