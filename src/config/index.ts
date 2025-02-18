import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://bcc5-186-235-79-149.ngrok-free.app',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});