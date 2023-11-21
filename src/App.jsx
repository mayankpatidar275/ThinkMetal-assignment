import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetailsPage from './pages/TaskDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
