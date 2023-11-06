import axios, { AxiosError, AxiosResponse } from 'axios';

import { routesPath, showMessage } from '../utils';

const { HOME } = routesPath;

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log(BASE_URL, 'BASE_URL');

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    // 'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(async config => {
  return config;
});

instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    if (err.response?.status === 403) {
      window.location.href = HOME;
      return Promise.reject(err.response.data);
    }

    if (
      err.response?.status === 401 ||
      err.response?.status === 404 ||
      err.response?.status === 500 ||
      err.response?.status === 400
    ) {
      showMessage({
        type: 'error',
        message: err?.message,
      });
    }

    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  },
);

const api = instance;

export default api;
