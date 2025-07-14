const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.name-input');
  const name = inputElement.value;
  const dateElement = document.querySelector('.date-input');
  const date = dateElement.value;

  const todoElement = {
    name,
    date
  };

  todoList.push(todoElement);
  inputElement.value = "";

  renderTodoList();
}

function renderTodoList() {
  let todoListHtml = '';

  /* 
  // BASIC FOR
  for (let i = 0; i < todoList.length; i++) {
    let element = `
                    <div>${todoList[i].name}</div>
                    <div>${todoList[i].date}</div>
                    <button onclick="removeTodo(${i}, 1)" class="delete-todo-button">Delete</button>
                  `;
    todoListHtml += element;
  }
  */

  /*
  // FOR EACH with anonymous function for CALLBACK with array for each method
  todoList.forEach(function (value, index) {
    let element = `
                    <div>${value.name}</div>
                    <div>${value.date}</div>
                    <button onclick="removeTodo(${index}, 1)" class="delete-todo-button">Delete</button>
                  `;
    todoListHtml += element;
  });
  */

  // Arrow function 
  todoList.forEach((value, index) => {
    let element = `
                    <div>${value.name}</div>
                    <div>${value.date}</div>
                    <button onclick="removeTodo(${index}, 1)" class="delete-todo-button">Delete</button>
                  `;
    todoListHtml += element;
  });

  document.querySelector(".todo-list").innerHTML = todoListHtml;
}

function removeTodo(index, count) {
  todoList.splice(index, count);
  renderTodoList();
}