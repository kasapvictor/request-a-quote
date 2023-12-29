import { modelStore } from '@entities/select-model';

import { apiRequest } from '@shared/api';
import { Method } from '@shared/api/types';
import { Errors, Status } from '@shared/types';

export const requestZipApi = async (make: string, year: string) => {
  return await apiRequest({ url: `?models-of=${make}&year=${year}`, method: Method.Get });
};

export const modelRequest = async (make: string, year = '') => {
  modelStore.status.event(Status.Loading);

  try {
    const modelRequest = await requestZipApi(make, year);

    modelStore.status.event(Status.Filled);

    return modelRequest.data;
  } catch (err) {
    modelStore.error.event(Errors.Network);
    modelStore.status.event(Status.Error);
  }
};
