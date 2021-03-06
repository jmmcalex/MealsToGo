import axios, { AxiosResponse, Method } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
});

export const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};
