import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://wizard-world-api.herokuapp.com",
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API error:', error);
      return Promise.reject(error);
    }
  );
  
  export default axiosClient;