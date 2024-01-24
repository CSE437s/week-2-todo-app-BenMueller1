import React, { useState } from "react";

function ToDoItem(props) {
  // TODO try and get the visible prop working (conditional display)
  const [completed, setCompleted] = useState(props.completed);

  if (!props.visible) {
    return null;
  }

  function onComplete() {
    setCompleted(true);

    const itemStyle = props.completed
    ? "bg-green-100 border-green-500 text-green-700"
    : "bg-red-100 border-red-500 text-red-700";
  }

  const completedStyle = "bg-green-100 border-green-500 text-green-700"
  const incompleeStyle = "bg-red-100 border-red-500 text-red-700"

  return (
    <div className={`ToDoItem m-4 p-4 border-l-4 rounded-lg ${completed ? completedStyle : incompleeStyle}`}>
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="mb-2">{props.description}</p>
      <p className="text-sm mb-1">Priority: {props.priority}</p>
      <p className="text-sm">Due Date: {props.dueDate}</p>
      {completed ? <p className="text-sm">Completed</p> : <button onClick={onComplete}>Mark as completed</button>}
      
    </div>
  );
}

export default ToDoItem;
