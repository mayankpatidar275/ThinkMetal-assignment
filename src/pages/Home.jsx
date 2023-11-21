import { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
      <div>
        <Link to="/task/1">Task Details 1</Link>
        <Link to="/task/2">Task Details 2</Link>
      </div>
    </div>
  );
};

export default Home;
