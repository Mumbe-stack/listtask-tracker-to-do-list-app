import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <h1>TaskTrackr - To-Do List App</h1>
      {/* <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} /> */}
    </div>
  
    </>
  )
}

export default App
