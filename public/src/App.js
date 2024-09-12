import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Logout from './Logout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on app load
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Verify the token with an API call
      axios.get('http://localhost:8080/api/v1/user', { // Ensure this URL is correct
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => setIsAuthenticated(true))
        .catch(() => {
          localStorage.removeItem('jwtToken');
          setIsAuthenticated(false);
        });
    }
  }, []);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout setIsAuthenticated={handleLogin} />} />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          } 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
