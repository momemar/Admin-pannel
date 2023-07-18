import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css/Signup.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [agreedToPrivacyPolicy, setAgreedToPrivacyPolicy] = useState(false); // Step 1: State for the checkbox

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/.test(password);

    if (password.length >= minLength && hasNumber && hasUpper && hasLower && hasSpecial) {
      setPasswordStrength('strong');
    } else if (password.length >= minLength && (hasNumber || hasUpper || hasLower || hasSpecial)) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('weak');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToPrivacyPolicy) {
      alert('Please agree to the Privacy Policy before signing up.');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handlePrivacyPolicyLinkClick = () => {
    // Replace 'https://your-privacy-policy-url.com' with the actual URL of your Privacy Policy
    window.open('https://your-privacy-policy-url.com', '_blank');
  };

  return (
    <div className='auth-form-container' style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <AccountCircleIcon style={{ marginRight: '5px' }} />
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name'
          id='name'
          name='name'
        />
        <label htmlFor='email'>
          <MdEmail style={{ marginRight: '5px' }} />
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>
          <span className='password-icon-placeholder'>
            <FaLock />
          </span>
        </label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type='password'
          placeholder='*********'
          id='password'
          name='password'
        />
        <div>
          <input
            type='checkbox'
            id='privacyPolicyCheckbox'
            checked={agreedToPrivacyPolicy}
            onChange={() => setAgreedToPrivacyPolicy(!agreedToPrivacyPolicy)}
          />
          <label htmlFor='privacyPolicyCheckbox' style={{ fontSize: '8px' }}>
            I agree with the
            <a href='#' onClick={handlePrivacyPolicyLinkClick}>
              Privacy Policy
            </a>
          </label>
        </div>

        {passwordStrength === 'weak' && <p style={{ color: 'red', fontSize: '8px' }}>Password Strength: Weak</p>}
        {passwordStrength === 'medium' && <p style={{ color: 'yellow', fontSize: '8px' }}>Password Strength: Medium</p>}
        {passwordStrength === 'strong' && <p style={{ color: 'green', fontSize: '8px' }}>Password Strength: Strong</p>}
        <Button className='link-btn custom-small-button' type='submit'>
          Create Account
        </Button>
      </form>
      <button className='login-switch-button btn-sm btn-secondary' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
    </div>
  );
};
export default Signup;