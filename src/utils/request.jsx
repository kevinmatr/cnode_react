import axios from "axios";

const url = "https://cnodejs.org/api/v1";

const request = axios.create({
  baseURL: url,
});

let token = "8a806951-4a6d-479a-8dcd-2e4e555b5gf3";

request.interceptors.request.use(
  function (config) {
    if (config.method == "get") {
      config.params = { ...config.params, accesstoken: token };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
