import React from 'react';

const Login = () => {
  return (
    <form>
    <label htmlFor="email">Email</label>
    <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="*********" id="password" name="password" />
  </form>
  );
};

export default Login;

