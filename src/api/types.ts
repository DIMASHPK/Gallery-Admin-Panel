import { AxiosResponse } from 'axios';
import { ApiPathNamesType } from '~/types';

export type getArgsType = {
  path: ApiPathNamesType;
};

export interface ApiInterface {
  get: (data: getArgsType) => Promise<AxiosResponse>;
}
