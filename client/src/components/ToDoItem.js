
{/* <ToDoItem description={""} title={""} priority={3} dueData={"2024-01-30"} visible={true}/> */}

function ToDoItem(props) {
  // TODO try and get the visible prop working (conditional display)

  if (!props.visible) {
    return null;
  }

  const itemStyle = props.completed
    ? "bg-green-100 border-green-500 text-green-700"
    : "bg-red-100 border-red-500 text-red-700";

  return (
    <div className={`ToDoItem m-4 p-4 border-l-4 rounded-lg ${itemStyle}`}>
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="mb-2">{props.description}</p>
      <p className="text-sm mb-1">Priority: {props.priority}</p>
      <p className="text-sm">Due Date: {props.dueDate}</p>
    </div>
  );
}

export default ToDoItem;
