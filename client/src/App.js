import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import AdminNavbar from '../src/pages/Navbars/AdminNavbar.jsx';
import UserHeader from './pages/Header/UserHeader.jsx';
import Header from './pages/Header/Header.jsx';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <Router>
      <div className='App'>
        {/* <AdminNavbar /> */}
        <UserHeader /> {/* Add this line */}
        {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />}
        <Header /> {/* Add this line */}
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;

