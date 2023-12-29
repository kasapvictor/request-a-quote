import { combine } from 'effector';

import { emailStore } from '@entities/input-email';
import { phoneStore } from '@entities/input-phone';
import { zipFromStore } from '@entities/input-zip-from';
import { zipToStore } from '@entities/input-zip-to';
import { makeStore } from '@entities/select-make';
import { modelStore } from '@entities/select-model';
import { yearStore } from '@entities/select-year';

import { Status } from '@shared/types';

export const initForm = () => {
  const submitButton = document.getElementById('request-a-quote-submit') as HTMLButtonElement;

  watcher(submitButton);
};

const watcher = (submitButton: HTMLButtonElement) => {
  const $stores = combine(
    zipFromStore.status.state,
    zipToStore.status.state,
    yearStore.status.state,
    makeStore.status.state,
    modelStore.status.state,
    phoneStore.status.state,
    emailStore.status.state,
    (store1, store2, store3, store4, store5, store6, store7) => {
      return [store1, store2, store3, store4, store5, store6, store7].every((value) => value === Status.Success);
    },
  );

  submitButton.addEventListener('click', (e) => {
    if (!$stores.getState()) {
      e.preventDefault();

      return false;
    }
  });
};
