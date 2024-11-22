import React, { useState, useEffect } from 'react';
import { Table, Card, Input, Button, Switch, message, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Mock from 'mockjs';

function TodoList() {
  // ... (previous state and useEffect remain the same)

  return (
    <div className="container mx-auto p-4">
      <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">Todo List</h1>
        <div className="mb-6 flex justify-between items-center">
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 200px)' }}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={addTodo}>
              Add
            </Button>
          </Input.Group>
          <Radio.Group value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
            <Radio.Button value="table">Table</Radio.Button>
            <Radio.Button value="card">Card</Radio.Button>
          </Radio.Group>
        </div>
        
        {viewMode === 'table' ? (
          <Table columns={columns} dataSource={todos} rowKey="id" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todos.map(todo => (
              <Card
                key={todo.id}
                title={todo.title}
                extra={<Button type="link" onClick={() => deleteTodo(todo.id)}>Delete</Button>}
              >
                <p>Created at: {todo.createdAt}</p>
                <p>
                  Status: 
                  <Switch
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={{ marginLeft: '8px' }}
                  />
                </p>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

export default TodoList;
