import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Container>
        <Form className="auth-form-container login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '5px' }} />
          </label>
          <Form.Control
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label htmlFor="password" style={{ display: 'flex', alignItems: 'center' }}>
            <FaLock style={{ marginRight: '5px' }} />
          </label>
          <Form.Control
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Form.Check>
            <Form.Check.Input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="rememberMe"
              name="rememberMe"
            />
            <Form.Check.Label className="remember-me-container" htmlFor="rememberMe" style={{ paddingTop: '3px' }}>Remember Me</Form.Check.Label>
          </Form.Check>

          <Button className="link-btn" type="submit" variant="success">
            Login
          </Button>

          <div className="forgot-password" style={{ fontSize: '8px', textAlign: 'left' }}>
            <a href="#">Forgot Password?</a>
          </div>
          <Button onClick={() => props.onFormSwitch('Signup')} variant="blank" style={{ fontSize: '8px', textAlign: 'right' }}>
            Create new account
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
