import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import createAuthRefreshInterceptor from 'axios-auth-refresh';
const qs = require('qs');

// Function that will be called to refresh authorization
// https://www.npmjs.com/package/axios-auth-refresh
// TODO: complete refreshToken logic
const refreshAuthLogic = async failedRequest => {
  // await AsyncStorage.setItem('refreshToken');
  const data = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: '',
  });

  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${'basicURL'}/oauth/token`,
    headers: {
      Authorization: '',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };
  axios(config).then(async tokenRefreshResponse => {
    await AsyncStorage.setItem('token', tokenRefreshResponse.data.token);
    failedRequest.response.config.headers['Authorization'] =
      'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
  });
};

const request = axios.create({
  baseURL: 'AxiosConfigs.BASE_URL',
  headers: {'Access-Control-Allow-Origin': '*'},
});

request.interceptors.request.use(
  async config => {
    const tmpConfigs = {...config};

    // if (__DEV__ && tmpConfigs?.data?.microserv) {
    //   const { microserv, ...data } = tmpConfigs?.data;
    //   tmpConfigs.baseURL = MICROSERVICE_BASE_URL[microserv];
    //   tmpConfigs.data = data;
    // }

    const token = await AsyncStorage.getItem('authToken');
    if (token && !tmpConfigs?.headers?.Authorization) {
      tmpConfigs.headers['Authorization'] = `Bearer ${token}`;
    }
    return tmpConfigs;
  },
  error => Promise.reject(error),
);

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

createAuthRefreshInterceptor(request, refreshAuthLogic);

export default request;
