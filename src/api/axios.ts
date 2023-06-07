import axios, { AxiosHeaders } from 'axios'
import * as api from './api';
import storage from "./storage";

export type TAxiosHeaders = AxiosHeaders & {
  Token: string;
}

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const axiosPublic = axios.create();
const axiosPrivate = axios.create();

axiosPrivate.interceptors.request.use(
  config => {
    const localToken = localStorage.getItem("token");
    config.headers = {
      ...config.headers as AxiosHeaders,
      'Token': localToken,
    } as TAxiosHeaders;
    return config;
  },
  error => Promise.reject(error));

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    if ( error.response.status === 401 && !originalRequest._retry ) {
      originalRequest._retry = true;
      const result = await api.token.get();
      const token: string = result.data.token;
      storage.token.set(JSON.stringify(token))
      originalRequest.headers["Token"] = token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { axiosPublic, axiosPrivate, axios }
