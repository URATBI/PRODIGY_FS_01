import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../api/auth';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const { login: loginUser } = useContext(AuthContext);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      loginUser(res.token);
      <Navigate to="/Home" />
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={onChange} required />
      <input type="password" name="password" value={password} onChange={onChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
