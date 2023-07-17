import React, { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className='auth-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <div className="remember-me-container">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            id="rememberMe"
            name="rememberMe"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className='link-btn' type="submit">Login</button>
        <div className="forgot-password">
          {/* <a href="#">Forgot Password?</a> */}
        </div>
      </form>
      <button onClick={() => props.onFormSwitch('Signup')}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;
