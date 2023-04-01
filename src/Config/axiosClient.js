import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://backend-reveco.onrender.com"
})

export default axiosClient;