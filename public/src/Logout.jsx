import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('jwtToken');
      setIsAuthenticated(false);
      navigate('/login'); // Redirect to login page after logout
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
