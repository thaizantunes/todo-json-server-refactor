const editTodos = (todoId, isCompleted) => {
    try{
        return fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: isCompleted})
        })
    }catch(err) {
        console.log(err);
    }
}

export default editTodos;