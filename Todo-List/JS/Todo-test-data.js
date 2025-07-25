
export function getTestData() {
  let testData = structuredClone(todoTestData);

  console.log(todoTestData);

  testData.list.forEach((task) => {
    let date = new Date()
    date.setDate(date.getDate() + task.dueDate);
    task.dueDate = date.toISOString().split('T')[0];
  });
  return testData;
}

const todoTestData = {
  idCounter: 7,
  list : [{
            id: 1,
            name: 'Task-1',
            dueDate: -2,
            completed: true
          },
          {
            id: 2,
            name: 'Task-2',
            dueDate: -2,
            completed: false
          },
          {
            id: 3,
            name: 'Task-3',
            dueDate: -1,
            completed: true
          },
          {
            id: 4,
            name: 'Task-4',
            dueDate: -1,
            completed: true
          },
          {
            id: 5,
            name: 'Task-5',
            dueDate: 0,
            completed: true
          },
          {
            id: 6,
            name: 'Task-6',
            dueDate: 0,
            completed: false
          },
          {
            id: 7,
            name: 'Task-7',
            dueDate: 1,
            completed: true
          },
          {
            id: 8,
            name: 'Task-8',
            dueDate: 1,
            completed: false
          },
          {
            id: 9,
            name: 'Task-7',
            dueDate: 3,
            completed: false
          },
          {
            id: 10,
            name: 'Task-7',
            dueDate: 5,
            completed: false
          }]
}