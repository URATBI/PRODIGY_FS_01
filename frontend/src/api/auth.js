import axios from 'axios';

const API_URL = 'https://samplesever.onrender.com/api/auth';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const fetchProtected = async (token) => {
  const response = await axios.get(`${API_URL}/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
