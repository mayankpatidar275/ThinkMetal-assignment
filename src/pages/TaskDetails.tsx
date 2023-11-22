import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles.css';

const TaskDetails: React.FC = () => {
    const { id } = useParams();
  return (
    <div className="task-details-container">
      <div className="background-image"></div>
      <div className="content-container">
        <h2>Task Details</h2>
        <p>
          Here is all the details of the task!
        </p>
        <div className="task-details-info">
          <strong>Task ID: </strong> {id}
        </div>
        <div className="task-details-info">
          <strong>Assigned To:</strong> John Doe
        </div>
        <div className="task-details-info">
          <strong>Due Date:</strong> January 31, 2023
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
