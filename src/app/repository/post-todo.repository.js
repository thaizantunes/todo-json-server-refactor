
async function postTodo(todo){
    try{
        const result = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
          .then(res => res.json())
          .then(() => location.reload());
    } catch(err) {
        console.log(err);
    }
}

export default postTodo;