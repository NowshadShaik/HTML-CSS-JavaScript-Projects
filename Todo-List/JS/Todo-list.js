import { todoTestData } from "./Todo-test-data.js";

let todoData = JSON.parse(localStorage.getItem('todoData'));
let currentOption = 1;


// function addTestData() {
//   if('todoData' in localStorage){
//     let testDataElement = document.querySelector('.test-data-section');
//     testDataElement.innerHTML = `<button>Generate test data</button>`;
//   }
// }
// addTestData();

function renderTodoList() {
  let gridHtml = `
  <div class="grid-header">Task Id</div>
  <div class="grid-header">Task description</div>
  <div class="grid-header">Task due by</div>
  <div class="grid-header">Status</div>
  `;

  let filteredList = filterOnCurrentOption();

  if(filteredList.length == 0 ) {

    let element = `<div class="no-data-message">No tasks to display</div>`;
    gridHtml += element;

  } else {
    filteredList.forEach((item) => {
      let element = `
        <div class="grid-item">${item.id}</div>
        <div class="grid-item">${item.name}</div>
        <div class="grid-item">${item.dueDate}</div>
        <div class="grid-item grid-item-status">
          <button class="${item.completed ? 'status-button-completed' : 'status-button'}" data-id=${item.id}>
            ${item.completed ? 'Completed' : 'Mark as complete'}
          </button>
        </div>
      `;
      gridHtml += element;
    });
  }

  document.querySelector('.todo-tasks-grid').innerHTML = gridHtml;
  addStatusButtonListeners();
}

function addStatusButtonListeners() {
  document.querySelectorAll('.status-button').forEach((button) => {
    button.addEventListener('click', () => {
      completeTask(button.dataset.id);
    });
  });
}

renderTodoList();

function addTask() {
  const textElement = document.querySelector('.add-todo-text');
  const dateElement = document.querySelector('.add-todo-date');
  if(textElement.value == "" || dateElement.value == "") {
    alert("Task and date cannot be empty");
    return;
  }

  if(!todoData || todoData == 'null'){
    todoData = {
      idCounter: 0,
      list: []
    };
  }

  todoData.idCounter++;
  todoData.list.push({
    id: todoData.idCounter,
    name: textElement.value,
    dueDate: dateElement.value 
  })

  saveToLocalStorage();
  textElement.value = "";
  dateElement.value = "";
  renderTodoList();
}

function completeTask(taskId) {
  todoData.list.forEach((item) => {
    if(item.id == taskId) {
      item.completed = true;
    }
  });

  saveToLocalStorage()
  renderTodoList();
}

function filterOnCurrentOption() {
  if(!todoData || todoData=='null') {
    return [];
  }

  let today = new Date().toISOString().split('T')[0];
  let tasks = todoData.list;

  switch(currentOption) {
    case 1:
        return tasks;
      break;
    case 2:
        return tasks.filter((task) => {
          return taskDueIn(today, task.dueDate) == 0 & !task.completed;
        })
      break;
    case 3:
        return tasks.filter((task) => {
          let dueDays = taskDueIn(today, task.dueDate);
          return dueDays >=0 & dueDays < 7 & !task.completed;
        })
      break;
    case 4:
        return tasks.filter((task) => {
          return taskDueIn(today, task.dueDate) < 0 & !task.completed;
        })
      break;
    case 5:
        return tasks.filter((task) => {
          return task.completed;
        })
      break;
    default:
      return tasks;
  }
}

function taskDueIn(date1, date2, max) {
  let today = new Date(date1);
  let dueDate = new Date(date2);
  let msInDay = 1000 * 60 * 60 * 24;

  let dueIn = (dueDate - today) / msInDay;
  return dueIn;
}

function saveToLocalStorage() {
  localStorage.setItem('todoData', JSON.stringify(todoData));
}

document.querySelectorAll('.menu-option').forEach((option) => {
  option.addEventListener('click', (event) => {
    currentOption = parseInt(event.target.dataset.optionId);
    renderTodoList();
  });
});

document.querySelector('.add-todo-button').addEventListener('click', () => addTask());
