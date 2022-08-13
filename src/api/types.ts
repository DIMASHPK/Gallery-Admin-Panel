import { AxiosResponse } from 'axios';
import { GetOptionalType } from '~/utils/typeHelpers';
import { API_PATH_NAMES } from '~/data/constants';

export type getArgsType = {
  path: GetOptionalType<typeof API_PATH_NAMES>;
};

export interface ApiInterface {
  get: (data: getArgsType) => Promise<AxiosResponse>;
}
