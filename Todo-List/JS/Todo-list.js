import { todoDefaultData } from "./Todo-data.js";


let todoCounter;
let todoList;
if(localStorage.getItem('todoData')) {
  let data = JSON.parse(localStorage.getItem('todoData'));
  todoCounter = data.idCounter
  todoList = data.list;
} else {
  todoCounter = todoDefaultData.idCounter;
  todoList = todoDefaultData.list;
}

function renderTodo() {
  let gridHtml = `
  <div class="grid-header">Task Id</div>
  <div class="grid-header">Task name</div>
  <div class="grid-header">Task due by</div>
  <div class="grid-header">status</div>
  `;

  todoList.forEach((item) => {
    let element = `
      <div class="grid-item">${item.id}</div>
      <div class="grid-item">${item.name}</div>
      <div class="grid-item">${item.date}</div>
      <div class="grid-item grid-item-status">
        <button class="${item.completed ? 'status-button-completed' : 'status-button'}" data-id=${item.id}>
          ${item.completed ? 'Completed' : 'Mark as complete'}
        </button>
      </div>
    `;
    gridHtml += element;
  });

  document.querySelector('.todo-tasks-grid').innerHTML = gridHtml;
  addListenersForbuttons();
}

function addListenersForbuttons() {
  document.querySelectorAll('.status-button').forEach((button) => {
    button.addEventListener('click', () => {
      completeTask(button.dataset.id);
    });
  });
}
renderTodo();

function addTask() {
  todoList.add({

  })
}

function completeTask(taskId) {
  todoList.forEach((item) => {
    if(item.id === taskId) {
      item.completed = true;
    }
  });

  localStorage.setItem('todoData', JSON.stringify(todoList));
  renderTodo();
}



document.querySelectorAll('.menu-option').forEach((option) => {
  option.addEventListener('click', () => {
    renderTodo(option.innerHTML);
  });
});