import React, { useState } from 'react';

function CreateNewTodoItemForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState(3); // default priority is 1

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newToDo = { title, description };

    try {
        const response = await fetch('http://localhost:500`/todo-items', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newToDo),
        });

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
  
        // reset fields
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority(1);

      } catch (error) {
        console.error('Error adding new ToDo: ', error);
      }
  };

  return (
    <div>
        <h2 className='text-left text-2xl'>Create New ToDo</h2>
        <h6> sadly doens't work since I haven't been able to hook backend to frontend yet :(</h6>
        
        <form className="mb-4" onSubmit={handleSubmit}>
        <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 mb-2 border rounded"
        />
        <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 mb-2 border rounded"
        />
        {/* <input 
            type="checkbox"
            checked={completed}
            // onChange={(e) => setCompleted(e.target.checked)}
            className="mb-2"
        /> */}
        {/* <label className="ml-2">Completed</label> */}
        <input 
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
        />
        <input 
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            placeholder="Priority (1-5)"
            className="w-full p-2 mb-2 border rounded"
            min="1" max="5"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add ToDo</button>
        </form>
    </div>
    
  );
}

export default CreateNewTodoItemForm;
