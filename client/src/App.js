import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Admin from './pages/adminprofile';
import UserProfile from './pages/UserProfile';
import UserHeader from './components/Header/UserHeader.jsx';
import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import TopNav from '../src/components/Header/TopNav.jsx'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <Router>
      <TopNav/>
      <Sidebar />
      <div className='App'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      </div>
    </Router>
  );

}

export default App;

