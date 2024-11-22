import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
