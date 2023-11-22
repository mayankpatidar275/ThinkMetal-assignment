import './App.css'
import InputField from './components/InputField';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Todo } from './models/models';
import TodoList from './components/TodoList';

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/todos?limit=6');
        setTodos(response.data.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, completed: false }]);
    }
    setTodo("");
  };

  return (
    <>
        <div className="App">
          <div className="heading">
            Todo list
          </div>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    </>
  )
}

export default App
