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
      // const response = await axios.get('http://localhost:5001/todo-items');
      // const realdata = await response.json();

      // hardcoded data for now
      const data = [
        {
          title: "title1",
          description: "description1",
          priority: 1,
          dueDate: "2024-01-30",
          completed: true,
        },
        {
          title: "title2",
          description: "description2",
          priority: 2,
          dueDate: "2024-01-30",
          completed: true,
        },
        {
          title: "title3",
          description: "description3",
          priority: 3,
          dueDate: "2024-01-30",
          completed: false,
        },
        {
          title: "title4",
          description: "description4",
          priority: 4,
          dueDate: "2024-01-31",
          completed: false,
        },
        {
          title: "title5",
          description: "description5",
          priority: 5,
          dueDate: "2024-01-30",
          completed: false,
        },
      ];

      setTodoItems(data);

      // hardcoded for now
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className='text-left text-2xl'>Todo List App</h2>
      <h6 className='text-left'>Red is unfinished, green is finished</h6>
      <h6> I created an express backend with working endpoints (tested with postman) and made this frontend, but unfortunately ran out of time to sync them together :(</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todoItems.map(item => (
          <ToDoItem description={item.description} title={item.title} priority={item.priority} dueDate={item.dueDate} visible={true} completed={item.completed}/>
        ))}
      </div>

      <div>
        <CreateNewTodoItemForm />
      </div>
      
    </div>
  );
}

export default App;
