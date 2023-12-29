import { makeStore } from '@entities/select-make';

import { Errors, InputElements, Load, Status, Success } from '@shared/types';
import { renderError, renderLoad, renderSuccess } from '@shared/ui';

export const watchers = (elements: InputElements) => {
  makeStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  makeStore.status.state.watch((state) => {
    renderSuccess(elements.success, '');
    renderError(elements.error, '');
    renderLoad(elements.load, '');

    if (state === Status.Loading) {
      renderLoad(elements.load, Load.Loading);
    }

    if (state === Status.Error) {
      renderSuccess(elements.success, '');
      renderError(elements.error, Errors.Required);
    }

    if (state === Status.Success) {
      renderSuccess(elements.success, Success.Correct);
    }
  });
};
