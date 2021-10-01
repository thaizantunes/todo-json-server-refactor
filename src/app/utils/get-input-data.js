const inputName = document.querySelector('#todoValue');

const getInputData = () => {
    const date = new Date().toLocaleDateString();
    if(inputName.value == null) return;
    const todo = {
        name: inputName.value,
        date: date,
        completed: false
    }
    return todo;
}

export default getInputData;