import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import createAuthRefreshInterceptor from 'axios-auth-refresh';
import {AxiosConfigs} from './constants';

const request = axios.create({
  baseURL: AxiosConfigs.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

request.interceptors.response.use(
  res => res,
  err => Promise.reject(err),
);

declare module 'axios' {
  export interface AxiosInstance {
    microservice: Function;
  }
}

request.microservice = (microserviceBaseURL: string) => {
  request.defaults.baseURL = microserviceBaseURL;
  return request;
};

//createAuthRefreshInterceptor(request, refreshAuthLogic);

export default request;
