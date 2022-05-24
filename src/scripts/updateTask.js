import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = event => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = event => {
  const isNeededBtn = event.target.classList.contains('list-item__delete-btn');
  const isCheckbox = document.querySelector('.list-item__checkbox');

  if (!isNeededBtn) {
    return;
  }
  event.target.parentNode.remove();
  deleteTask(isCheckbox.dataset.id);
};

// 1. Prepare data
// 2. Update data in dataBase
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Upadate UI based on new data
