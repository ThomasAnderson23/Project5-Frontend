import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://https://backend-reveco.onrender.com"
})

export default axiosClient;