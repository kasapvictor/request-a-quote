/* eslint-disable no-unused-vars, no-use-before-define */

import { AxiosError, Method } from 'axios';

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
  method?: Method;
  withThrow?: boolean;
}

export enum METHOD {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
