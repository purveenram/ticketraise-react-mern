import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Login function
export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);

// Query functions
export const getQueries = ({ userId, role }) => {
  const queryParams = new URLSearchParams({ userId, role }).toString();
  return axios.get(`${API_URL}/allQueries?${queryParams}`);
};

  
export const addQuery = (queryData) => {
  return axios.post(`${API_URL}/addQuery`, queryData);
};

export const getStudentDetails = (userId) => {
  return axios.get(`${API_URL}/student/${userId}`);
};

export const updateQuery = (queryId, queryData) => axios.put(`${API_URL}/updateQuery/${queryId}`, queryData);
export const deleteQuery = (queryId) => axios.delete(`${API_URL}/deleteQuery/${queryId}`);

// Logout
export const logout = () => axios.post(`${API_URL}/logout`);
