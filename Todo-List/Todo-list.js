const todoList = [{
  id: '1',
  name: 'Task-1',
  date: '23/07/2025'
},
{
  id: '2',
  name: 'Task-2',
  date: '24/07/2025'
},
{
  id: '3',
  name: 'Task-3',
  date: '25/07/2025'
},
{
  id: '4',
  name: 'Task-4',
  date: '26/07/2025'
},
{
  id: '5',
  name: 'Task-5',
  date: '25/07/2025'
},
{
  id: '6',
  name: 'Task-6',
  date: '26/07/2025'
},
{
  id: '7',
  name: 'Task-7',
  date: '27/07/2025'
}]




function renderTodo() {
  let gridHtml = `
  <div class="grid-header">Task Id</div>
  <div class="grid-header">Task name</div>
  <div class="grid-header">Task due by</div>
  <div class="grid-header">status</div>
  `;

  todoList.forEach((value, index) => {
    let element = `
      <div class="grid-item">${value.id}</div>
      <div class="grid-item">${value.name}</div>
      <div class="grid-item">${value.date}</div>
      <div class="grid-item">
        <button class="status-button">Mark as complete</button>
      </div>
    `;
    gridHtml += element;
  })

  document.querySelector('.todo-tasks-grid').innerHTML = gridHtml;
}

renderTodo();