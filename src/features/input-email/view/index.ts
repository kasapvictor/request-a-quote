import { emailStore } from '@entities/input-email';

import { InputElements, Status, Success } from '@shared/types';
import { renderDisabled, renderError, renderLoad, renderSuccess } from '@shared/ui';

export const watchers = (elements: InputElements) => {
  emailStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  emailStore.status.state.watch((state) => {
    renderDisabled(elements.input, false);
    renderSuccess(elements.success, '');
    renderLoad(elements.load, '');

    if (state === Status.Success) {
      renderSuccess(elements.success, Success.Correct);
    }
  });
};
