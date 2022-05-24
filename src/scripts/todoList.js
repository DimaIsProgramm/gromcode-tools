import { onCreateTask } from './createTask.js';
import { onToggleTask, onDeleteTask } from './updateTask.js';

export const initTodoHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoLisElem = document.querySelector('.list');
  todoLisElem.addEventListener('click', onToggleTask);
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onDeleteTask);
};
