/* eslint-disable no-unused-vars */
import Choices from 'choices.js';

import { makeStore } from '@entities/select-make';
import { modelStore } from '@entities/select-model';
import { yearStore } from '@entities/select-year';

import { Errors, InputElements, Load, Status, Success } from '@shared/types';
import { renderDisabled, renderError, renderLoad, renderSuccess } from '@shared/ui';

export const watchers = (
  elements: InputElements,
  requestFn: (select: InputElements['select'], make: string, year: string, choice: Choices) => void,
  choiceInstance: Choices | boolean,
) => {
  renderDisabled(elements.select, true);

  modelStore.error.state.watch((state) => {
    if (elements.error.textContent !== state) {
      renderError(elements.error, state);
    }
  });

  modelStore.status.state.watch((state) => {
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

  yearStore.value.state.watch((state) => {
    if (makeStore.value.state.getState()) {
      requestFn(elements.select, makeStore.value.state.getState(), state, choiceInstance as Choices);
      renderDisabled(elements.select, false);
    }
  });

  makeStore.value.state.watch((state) => {
    if (state) {
      requestFn(elements.select, state, yearStore.value.state.getState(), choiceInstance as Choices);
      renderDisabled(elements.select, false);
    }
  });
};
