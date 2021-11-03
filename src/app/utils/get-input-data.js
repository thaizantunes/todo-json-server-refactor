const inputName = document.querySelector('#todoValue');
import { v4 as uuidv4 } from 'uuid';

const getInputData = () => {
    const date = new Date().toLocaleDateString();
    if(inputName.value == null) return;
    const todo = {
        name: inputName.value,
        date: date,
        completed: false,
        id: uuidv4()
    }
    return todo;
}

export default getInputData;