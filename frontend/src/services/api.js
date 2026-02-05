import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profileAPI = {
  // Get profile
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  // Create profile
  createProfile: async (profileData) => {
    const response = await api.post('/profile', profileData);
    return response.data;
  },

  // Update profile
  updateProfile: async (profileData) => {
    const response = await api.put('/profile', profileData);
    return response.data;
  },

  // Get projects by skill
  getProjectsBySkill: async (skill) => {
    const response = await api.get(`/projects?skill=${skill}`);
    return response.data;
  },

  // Get top skills
  getTopSkills: async () => {
    const response = await api.get('/skills/top');
    return response.data;
  },

  // Search
  search: async (query) => {
    const response = await api.get(`/search?q=${query}`);
    return response.data;
  },

  // Health check
  healthCheck: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};

export default api;
