import './App.css'
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './models/models';
import TodoList from './components/TodoList';

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
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
