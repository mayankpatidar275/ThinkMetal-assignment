import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.done ? 'Done' : 'Undone'}</p>
    </div>
  );
};

export default TaskDetails;
