/**
 * npm install axios -> para fzr requisição da api
 */

 import axios from 'axios';

// Configurando a url base para toda a requisição para a api
 const api = axios.create({
     baseURL: 'http://localhost:3333',
 })

 export default api;