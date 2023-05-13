import './App.css';
import React, {useState } from 'react';
import ToDo from './molecules/todo';

const initialState = "";

function App() {

  const [taskList, setTaskList] = useState(initialState);
  const [addTask, setAddTask] = useState([]);


  function taskEvent(e) {
    setTaskList(e.target.value)

  }

  function onClickAddTask() {
    setAddTask((oldItems) => {
      return [...oldItems, taskList]
    })
    setTaskList(initialState);
  }






  return (
    <div className="App">
      <div className='container'>
        <h1>To Do List</h1>
        <br/>
        <ul>
          {
            addTask.map((items) => {
              return <ToDo item={items} />
            })
          }
        </ul>
        <input type='text' placeholder='Add Task' onChange={taskEvent} value={taskList} />
        <button className='btn' onClick={onClickAddTask}> + </button>
       
       
      </div>
    </div>
  );
}

export default App;
