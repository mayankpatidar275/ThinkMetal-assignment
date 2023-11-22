import '../App.css'
import InputField from '../components/InputField';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useTodoContext } from '../contexts/TodoContext';
import TodoList from '../components/TodoList';
import BlocksAnimation from '../assets/Blocks.gif';

const Home : React.FC = () => {

  const { todos, setTodos, isLoading, setIsLoading } = useTodoContext();
  const [todo, setTodo] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://dummyjson.com/todos?limit=3');
        setTodos(response.data.todos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setTodos, setIsLoading]);

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
          {
            isLoading ? (
                <div>
                    <img src={BlocksAnimation} alt="Loading" />
                </div>
            ) :
            <TodoList todos={todos} setTodos={setTodos}/>
          }
          
        </div>
    </>
  )
}

export default Home
