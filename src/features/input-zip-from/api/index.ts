import { zipFromStore } from '@entities/input-zip-from';

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
      zipFromStore.status.event(Status.Success);
      zipFromStore.prevValue.event(value);
    } else {
      zipFromStore.error.event(Errors.IncorrectZip);
      zipFromStore.status.event(Status.Error);
    }
  } catch (err) {
    zipFromStore.error.event(Errors.Network);
    zipFromStore.status.event(Status.Error);
  }
};
