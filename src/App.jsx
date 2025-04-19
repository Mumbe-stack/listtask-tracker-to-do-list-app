import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const defaultTasks = [
    { id: 1, title: 'Complete React assignment', dueDate: '2025-04-25' },
    { id: 2, title: 'Study JavaScript concepts', dueDate: '2025-04-26' },
    { id: 3, title: 'Review Git and GitHub collaboration', dueDate: '2025-04-27' },
    { id: 4, title: 'Practice coding interview questions', dueDate: '2025-04-28' },
    { id: 5, title: 'Submit Software Engineering project', dueDate: '2025-04-29' }
  ];

  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>TaskTrackr - To-Do List App</h1>
      </div>

      <div className="tasks-container">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

export default App;
