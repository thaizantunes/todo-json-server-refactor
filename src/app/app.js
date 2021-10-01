import getTodos from "./repository/get-todo.repository";
import editTodos from "./repository/edit-todo.repository";
import postTodo from "./repository/post-todo.repository";
import deleteTodos from "./repository/delete-todo.repository";
import delegate from "./utils/delegate";
import getInputData from "./utils/get-input-data";

const form = document.querySelector('#addTodo');
const ulTodo = document.querySelectorAll('ul');
const inputName = document.querySelector('#todoValue');

const run = () => {
    getTodos();

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(inputName.value === '') return;
        const todoData = getInputData();
        postTodo(todoData);
        form.reset();
    });
    
    
    ulTodo.forEach(t => 
        delegate(document, "click", ".fw-bold", function(e) {
            this.classList.toggle('completed');
            let todoId = this.parentElement.parentElement.dataset.id;
            if(this.className === 'fw-bold completed'){
                editTodos(todoId, true);
            } else {
                editTodos(todoId, false);
            } 
        })
    );
    
    ulTodo.forEach(t => 
        delegate(document, "click", ".deleteTodo", function(e) {
            let todoId = this.parentElement.dataset.id;
            deleteTodos(todoId);
        })
    );
}

export default run; 
