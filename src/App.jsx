import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';
import BingWallpaper from './components/BingWallpaper';
import 'antd/dist/reset.css';

function App() {
  return (
    <Router basename="/bolt-generated-project">
      <BingWallpaper>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </BingWallpaper>
    </Router>
  );
}

export default App;
