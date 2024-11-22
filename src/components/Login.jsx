import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'password') {
      message.success('Login successful');
      navigate('/todos');
    } else {
      message.error('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <LoginForm
          title="Todo App"
          subTitle="Manage your tasks efficiently"
          onFinish={handleSubmit}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className="prefixIcon" />,
            }}
            placeholder="Username: admin"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className="prefixIcon" />,
            }}
            placeholder="Password: password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          />
        </LoginForm>
      </Card>
    </div>
  );
};

export default Login;
