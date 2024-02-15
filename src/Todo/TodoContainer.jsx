import React, { useState, useEffect } from 'react';
import styles from './Todo.module.scss';
import TodoView from './TodoView';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [list, setList] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const handleTaskClick = (item) => {
    // console.log('Clicked task with id: ', item);
    setSelectedTask(item);
  };
  const markComplete = (task) => {
    if (task.completed) {
      return; // Do nothing if the task is already completed
    }

    const updatedTask = { ...task, completed: true };

    fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error('There was an error!', error));
  }, []); // The empty array makes sure the effect runs once after the initial render

  return (
    <div className={styles.tdContainer}>
      <TodoList list={list} onTaskClick={handleTaskClick} />
      <TodoView task={selectedTask} completed={markComplete} />
    </div>
  );
};

export default TodoContainer;
