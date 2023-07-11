import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setNewTask(""); // Reset newTask to an empty string
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  return (
    <div className="App">
      <div className="addTask">
        <h1>
          <u style={{ color: "red" }}>
            TodoList App By <b style={{ color: "blue" }}>Hozaifa</b>
          </u>
        </h1>
        <input id="textb" type="text" value={newTask} onChange={handleChange} />
        <br />
        <br />
        <br />
        <button id="addb" onClick={addTask}>
          Add Task
        </button>
      </div>



      <div className="list"></div>
      <br/><hr id='partition'/>
      <h1><u style={{color:"darkgreen"}}>List of Tasks</u></h1>
      {todoList.map((task) => {
        return (
          <div id="lst" key={task.id}>
              
              <h1>{task.taskName}</h1>
              <button id="delb" onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
