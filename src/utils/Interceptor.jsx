import axios from "axios";

const interceptor = (data) => {
  axios.interceptors.request.use((config) => {
    config.headers.authorization = data;
    return config;
  });
};

export default interceptor;
