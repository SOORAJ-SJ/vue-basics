import api from './api';

export const authenticate = (credentials) => api.post('/auth/login', credentials);