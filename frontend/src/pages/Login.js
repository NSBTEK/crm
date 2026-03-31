import { useState } from 'react';
import API from '../services/api';

export default function Login({ setToken }) {
  const [username, setU] = useState('');
  const [password, setP] = useState('');

  const login = async () => {
    const res = await API.post('/auth/login', { username, password });
    setToken(res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={e => setU(e.target.value)} placeholder="username" />
      <input onChange={e => setP(e.target.value)} type="password" />
      <button onClick={login}>Login</button>
    </div>
  );
}