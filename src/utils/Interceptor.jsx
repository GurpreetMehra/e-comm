import axios from "axios";

const interceptor = (token) => {
  console.log({ token });
  axios.interceptors.request.use(
    function (config) {
      config.headers.authorization = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default interceptor;
