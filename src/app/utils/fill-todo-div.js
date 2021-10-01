const todoList = document.querySelector('#todos');

const fillTodo = (todos) => {
    todos.forEach(todo => {            
        if(todo.completed){
            const newTodoHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-start" data-id=${todo.id}>
            <div class="ms-2 me-auto">
            <span class="fw-bold completed">${ todo.name }</span>
            <div>Added in ${ todo.date }</div> 
            </div>
            <span class="deleteTodo"><i class="fa fa-trash"></i></span>
            </li>
            `
            todoList.innerHTML = todoList.innerHTML + newTodoHTML 
        } else {
            const newTodoHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-start" data-id=${todo.id}>
            <div class="ms-2 me-auto">
            <span class="fw-bold">${ todo.name }</span>
            <div>Added in ${ todo.date }</div> 
            </div>
            <span class="deleteTodo"><i class="fa fa-trash"></i></span>
            </li>
            `
            todoList.innerHTML = todoList.innerHTML + newTodoHTML            
        }
    })
}

export default fillTodo;