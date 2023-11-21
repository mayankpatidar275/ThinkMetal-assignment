const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggle(task.id)}>Toggle Done</button>
    </div>
  );
};

export default Task;
