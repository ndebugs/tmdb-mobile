import axios from 'axios';
import { BASE_URL, READ_ACCESS_TOKEN } from '../constants/api'

const commonAxios = axios.create({
  baseURL: BASE_URL
});

commonAxios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + READ_ACCESS_TOKEN;
console.log(config);
  return config;
});

commonAxios.interceptors.response.use(function (response) {
  const { data } = response;
  if (data.status_code) {
    const error = new Error(data.status_message || 'Unknown error.');
    error.code = data.status_code;
    throw error;
  }
  return data;
}, function (error) {
  return Promise.reject(error);
});

export { commonAxios };
