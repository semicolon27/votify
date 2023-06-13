import axios from 'axios';

const api = axios.create({
  // Pengaturan default untuk Axios
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthHeader = async () => {
  const token = await localStorage.getItem('token'); // Membaca JWT dari local storage

  api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, X-CSRF-Token'
  api.defaults.headers.common['Access-Control-Allow-Methods'] = 'OPTIONS, GET, POST, PUT, DELETE'
  api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  api.defaults.headers.common['Content-Type'] = 'application/json, Authorization'

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

export const requestGet = (url: string) => {
  const token = localStorage.getItem('token'); // Membaca JWT dari local storage

  return axios.get(
    `http://localhost:8080` + url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
}

export default request;