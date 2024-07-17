// src/Login.js

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
            <img src='./profile2.svg' width="64" height="64" viewBox="0 0 24 24"/>
            
        </div>
        <div className="input-group">
          <input type="text" placeholder="USERNAME" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="PASSWORD" />
        </div>
        <button className="login-button">LOGIN</button>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
