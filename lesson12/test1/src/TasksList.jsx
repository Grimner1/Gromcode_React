import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './TasksGateway';

class TasksList extends Component {
  state = {
    // tasks: this.fetchTasksList(),
    tasks: [],
    // tasks: [
    //     { text: 'Clean Flat', done: false, id: 1 },
    //     { text: 'Buy milk', done: false, id: 2 },
    //     { text: 'Walk with dog', done: false, id: 3 },
    //     { text: 'Repare computer', done: true, id: 4 },
    //     { text: 'Creat project', done: true, id: 5 },
    // ],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );

    // fetch(baseUrl)
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then(tasksList => {
    //     this.setState({
    //       tasks: tasksList,
    //     });
    //   });
  };

  onCreate = text => {
    // const { tasks } = this.state;

    const newTask = {
      text,
      done: false,
      //   id: Math.random(),
    };

    createTask(newTask).then(() => this.fetchTasks());

    // fetch(baseUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(newTask),
    // }).then(response => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error('Faild to create task');
    //   }
    // });

    // const updateTasks = tasks.concat(newTask);
    // this.setState({ tasks: updateTasks });
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
    // fetch(`${baseUrl}/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(updatedTask),
    // }).then(response => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error('Faild to put task');
    //   }
    // });

    // const updateTasks = this.state.tasks.map(task => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       done: !task.done,
    //     };
    //   }
    //   return task;
    // });

    // this.setState({ tasks: updateTasks });
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());

    // fetch(`${baseUrl}/${id}`, {
    //   method: 'DELETE',
    // }).then(response => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error('Faild to delete task');
    //   }
    // });
    // const updateTasks = this.state.tasks.filter(task => task.id !== id);
    // this.setState({ tasks: updateTasks });
  };

  render() {
    // fetch(baseUrl)
    //   .then(response => response.json())
    //   .then(res => console.log(res));
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
