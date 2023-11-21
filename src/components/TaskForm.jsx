import { useForm } from 'react-hook-form';

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>Title</label>
      <input {...register('title', { required: true })} />
      <label>Description</label>
      <textarea {...register('description')} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
