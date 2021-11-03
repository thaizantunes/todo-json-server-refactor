const deleteTodos = (todoId) => {
    try{
        return fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    } catch(err) {
        console.log(err);
    }
}

export default deleteTodos;