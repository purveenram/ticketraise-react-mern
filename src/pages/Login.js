import React, { useState } from 'react';
import { login } from '../services/api';
import '../css/Login.css'; // Import the CSS file for styling

function Login({ setRole, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      setRole(response.data.role);
      setUserId(response.data.userId);
    } catch (error) {
      console.error("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <p>Please log in to continue</p>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
}

export default Login;
