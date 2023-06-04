import axios from 'axios';

const api = axios.create({
  // Pengaturan default untuk Axios
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthHeader = () => {
  const token = localStorage.getItem('jwt'); // Membaca JWT dari local storage

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