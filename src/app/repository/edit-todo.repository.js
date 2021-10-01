const editTodos = (todoId, teste) => {
    try{
        return fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: teste})
        })
    }catch(err) {
        console.log(err);
    }
}

export default editTodos;