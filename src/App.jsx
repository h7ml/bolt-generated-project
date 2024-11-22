import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';
import BingWallpaper from './components/BingWallpaper';
import 'antd/dist/reset.css';

function App() {
  return (
    <BingWallpaper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </BingWallpaper>
  );
}

export default App;
