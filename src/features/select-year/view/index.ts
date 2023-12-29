import { yearStore } from '@entities/select-year';

import { InputElements, Status, Success } from '@shared/types';
import { renderDisabled, renderError, renderSuccess } from '@shared/ui';

export const watchers = (elements: InputElements) => {
  yearStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  yearStore.status.state.watch((state) => {
    renderDisabled(elements.input, false);
    renderSuccess(elements.success, '');
    renderError(elements.error, '');

    if (state === Status.Success) {
      renderSuccess(elements.success, Success.Correct);
    }
  });
};
