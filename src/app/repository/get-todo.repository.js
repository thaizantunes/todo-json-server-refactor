import fillTodo from '../utils/fill-todo-div.js';

async function getTodos(){
    try{
        const result = await fetch('http://localhost:3000/todos')
        const todos = await result.json();
        return fillTodo(todos)
    } catch(err) {
        console.log(err);
    }
}

export default getTodos;