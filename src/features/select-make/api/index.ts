import { makeStore } from '@entities/select-make';

import { apiRequest } from '@shared/api';
import { Method } from '@shared/api/types';
import { Errors, Status } from '@shared/types';

export const requestZipApi = async () => {
  return await apiRequest({ url: '?makes', method: Method.Get });
};

export const makeRequest = async () => {
  makeStore.status.event(Status.Loading);

  try {
    const makeRequest = await requestZipApi();

    makeStore.status.event(Status.Filled);

    return makeRequest.data;
  } catch (err) {
    makeStore.error.event(Errors.Network);
    makeStore.status.event(Status.Error);
  }
};
