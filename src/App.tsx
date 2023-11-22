import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';
import { Toaster } from "react-hot-toast";
import { TodoProvider } from './contexts/TodoContext';

const App: React.FC = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<TodoProvider><Home /></TodoProvider>} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
    <Toaster 
    containerStyle={{
      top: 80,     // Adjust the top position as needed
      left: 20,    // Adjust the left position as needed
      bottom: 20,  // Adjust the bottom position as needed
      right: 20,   // Adjust the right position as needed
    }}
  />
    </>
  );
};

export default App;
