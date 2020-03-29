import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-hero.herokuapp.com',
});

export default api;