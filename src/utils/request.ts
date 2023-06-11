import axios from 'axios';

const api = axios.create({
  // Pengaturan default untuk Axios
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

const setAuthHeader = () => {
  const token = localStorage.getItem('token'); // Membaca JWT dari local storage

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Menambahkan header Authorization jika token JWT tersedia
  } else {
    delete api.defaults.headers.common['Authorization']; // Menghapus header Authorization jika token JWT tidak tersedia
  }
};


// Fungsi untuk melakukan request
const getRequest = () => {
  setAuthHeader(); // Mengatur header Authorization
  return api
};

const request = getRequest()

export default request;