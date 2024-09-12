import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        setError('Token is missing. Please login.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/v1/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
        setError('Failed to load user details, please try again.');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {userDetails ? (
        <div>
          <p>Username: {userDetails.username}</p>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Dashboard;
