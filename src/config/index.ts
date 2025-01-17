import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://51f0-186-235-79-149.ngrok-free.app',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});