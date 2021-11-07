const baseUrl = 'https://61856c5523a2fe0017fff620.mockapi.io/api/ToDoList';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      //   this.fetchTasksList();
      throw new Error('Faild to create task');
    }
  });

export const fetchTasksList = () =>
  fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(
      tasksList => tasksList,
      //   this.setState({
      //     tasks: tasksList,
      //   });
    );

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to put task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to delete task');
    }
  });
