import axios from "axios";

import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    // console.log('interceptors hit')
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // interceptors for 401 and 403

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    // console.log('error in the interceptors', status )
    if (status === 401 || status === 403) {
     
      navigate('/login')
    }
    return Promise.reject(error)
  })

  return axiosSecure;
};

export default useAxiosSecure;