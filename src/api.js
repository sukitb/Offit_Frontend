import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://offit-backend.vercel.app/users',
  withCredentials: true,
  validateStatus: () => true
});