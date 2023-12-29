import { zipToStore } from '@entities/input-zip-to';

import { apiRequest } from '@shared/api';
import { Method } from '@shared/api/types';
import { Errors, Status } from '@shared/types';

export const requestZipApi = async (zip: string) => {
  return await apiRequest({ url: `?zip=${zip}`, method: Method.Get });
};

export const makeRequest = async (value: string) => {
  try {
    const zipRequest = await requestZipApi(value);

    if (zipRequest.length) {
      zipToStore.status.event(Status.Success);
      zipToStore.prevValue.event(value);
    } else {
      zipToStore.error.event(Errors.IncorrectZip);
      zipToStore.status.event(Status.Error);
    }
  } catch (err) {
    zipToStore.error.event(Errors.Network);
    zipToStore.status.event(Status.Error);
  }
};
