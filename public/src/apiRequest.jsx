import axios from 'axios';

const apiRequest = async () => {
  const token = localStorage.getItem('jwtToken');
  
  if (!token) {
    console.error('No JWT token found, user may not be authenticated.');
    return;
  }
  
  try {
    const response = await axios.get('http://localhost:8080/api/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);

    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access, redirecting to login...');
    }
  }
};
