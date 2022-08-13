import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiInterface, getArgsType } from '~/api/types';

export default class Api implements ApiInterface {
  private readonly baseUrl: string;

  private readonly axios: AxiosInstance;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || '127.0.0.1:5173';

    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get = <T>({ path }: getArgsType): Promise<AxiosResponse<T>> =>
    this.axios.get(path);
}
