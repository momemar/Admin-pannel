import React, { useState } from 'react';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const hanleSubmit = (e) => {
    e.preventDefault();
    console.log('email: ', email);
  };

  return (
    < div className='auth-form-container' >
      <form className='signup-form' onSubmit={hanleSubmit} >
        <label htmlFor='name' >Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="full name" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
        <button className='link-btn' type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>

    </div >
  );
};

export default Signup;
