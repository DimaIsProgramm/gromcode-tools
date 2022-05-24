import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTittleInputElem = document.querySelector('.task-input');

  const text = taskTittleInputElem.value;

  if (!text) {
    return;
  }
  taskTittleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to dataBase
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadate UI based on new data
