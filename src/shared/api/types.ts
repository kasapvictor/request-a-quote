/* eslint-disable no-unused-vars, no-use-before-define */

import { AxiosError, Method as AxiosMethod } from 'axios';

export type ApiError = AxiosError<ServerError> | Error;

export interface ServerError {
  code?: string;
  error?: string;
  message?: string;
  status?: number;
}

export interface ApiRequestOptions<D> {
  data?: D;
  params?: D;
  url?: string;
  debug?: boolean;
  method?: AxiosMethod;
  withThrow?: boolean;
}

export enum Method {
  Post = 'post',
  Get = 'get',
  Delete = 'delete',
  Put = 'put',
}
