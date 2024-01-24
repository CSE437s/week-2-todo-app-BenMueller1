import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// import components
import ToDoItem from './components/ToDoItem';
import CreateNewTodoItemForm from './components/CreateNewTodoItemForm';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Fetch all ToDoItems on initial load
  useEffect(() => {
    const fetchData = async () => {
      // TODO DEBUG REQUEST TO BACKEND IF TIME ALLOWS
      // axios get all todo items
      // const response = await fetch('http://localhost:5001/todo-items');
      // const data = await response.json();


      // hardcoded for now
    };

    // fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className='text-left text-2xl'>Todo List App</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ToDoItem description={"description"} title={"TASK"} priority={3} dueData={"2024-01-30"} visible={true}/>
        <ToDoItem description={"description"} title={"TASK"} priority={3} dueData={"2024-01-30"} visible={true}/>
        <ToDoItem description={"description"} title={"TASK"} priority={3} dueData={"2024-01-30"} visible={true}/>

        {/* {todoItems.map(item => (
          <ToDoItem description={""} title={""} priority={3} dueData={"2024-01-30"} visible={true}/>
        ))} */}
      </div>

      <div>
        <CreateNewTodoItemForm />
      </div>
      
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Todo list baby
        </p>
      </header>
    </div>
  );
}

export default App;
