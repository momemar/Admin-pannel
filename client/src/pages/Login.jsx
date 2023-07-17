import React, { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const hanleSubmit = (e) => {
    e.preventDefault();
    console.log('email: ', email);
  };



  return (
    <>
      <form onSubmit={hanleSubmit} >
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('Signup')}>Don't have an account? Register here</button>

    </>

  );
};

export default Login;

