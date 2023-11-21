import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskDetails from '../components/TaskDetails';

const TaskDetailsPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch task details based on the id
    // Replace the fetchTaskDetails function with your actual API call or data retrieval logic

    const fetchTaskDetails = async () => {
      try {
        // Example API call
        const response = await fetch(`/api/tasks/${id}`);
        const data = await response.json();

        setTask(data); // Set the task data
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };

    fetchTaskDetails();
  }, [id]);

  if (!task) {
    // Render a loading indicator or handle the case where the task is not found
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <TaskDetails task={task} />
    </div>
  );
};

export default TaskDetailsPage;
