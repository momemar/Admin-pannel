import React, { useState } from 'react';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    // Password strength criteria (e.g., minimum length, complexity)
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);

    if (password.length >= minLength && hasNumber && hasUpper && hasLower) {
      setPasswordStrength('strong');
    } else if (password.length >= minLength && (hasNumber || hasUpper || hasLower)) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('weak');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='auth-form-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name'
          id='name'
          name='name'
        />
        <label htmlFor='email'>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type='password'
          placeholder='*********'
          id='password'
          name='password'
        />
        {passwordStrength === 'weak' && <p style={{ color: 'red', fontSize: '8px' }}>Password Strength: Weak</p>}
        {passwordStrength === 'medium' && <p style={{ color: 'yellow', fontSize: '8px' }}>Password Strength: Medium</p>}
        {passwordStrength === 'strong' && <p style={{ color: 'green', fontSize: '8px' }}>Password Strength: Strong</p>}
        <button className='link-btn' type='submit'>
          Sign up
        </button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
    </div>
  );
};

export default Signup;