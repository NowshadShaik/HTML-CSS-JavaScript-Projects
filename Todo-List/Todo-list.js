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
}]




function renderTodo() {
  let gridHtml = '';

  todoList.forEach((value, index) => {
    let element = `
    <div>
      <div>${value.id}</div>
      <div>${value.name}</div>
      <div>${value.date}</div>
    </div>
    `;
    gridHtml += element;
  })

  document.querySelector('.todo-grid').innerHTML = gridHtml;
}

renderTodo();