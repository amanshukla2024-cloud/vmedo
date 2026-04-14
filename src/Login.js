import React, { useState } from 'react';
import './Login.css';

export default function Login({ setRole }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'student' && password === 'student') {
      setRole('student');
    }
    else if (username === 'physician' && password === 'physician') {
      setRole('physician');
    }
    else if (username === 'admin' && password === 'admin') {
      setRole('admin');
    }
    else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        {/* 🔷 LOGO IMAGE (TOP) */}
        <div className="logo-section">
          <img src="/ccc.png" alt="logo" />
        </div>

        {/* 🔷 TITLE */}
        <h1 className="title">V-MEDO</h1>

        {/* 🔷 INPUTS */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔷 BUTTON */}
        <button onClick={handleLogin}>
          Login
        </button>

        {/* 🔷 ERROR */}
        {error && <p className="login-error">{error}</p>}

      </div>

    </div>
  );
}


