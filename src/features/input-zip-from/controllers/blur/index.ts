/* eslint-disable no-unused-vars */

import { zipFromStore } from '@entities/input-zip-from';

import { isCorrectLength, isOnlyDigits, isValue } from '@shared/lib/validation';
import { Errors, Event, InputElements, Status } from '@shared/types';

const MIN_LENGTH = 5;

const isValidValue = (value: string): boolean => {
  return [isValue(value), isOnlyDigits(value, MIN_LENGTH), isCorrectLength(value, MIN_LENGTH)].every((item) => item);
};

export const eventBlur = (el: InputElements['input'], makeRequestFn: (value: string) => void) => {
  el.addEventListener(Event.Blur, async () => {
    const value = el.value.trim();
    const isValid = isValidValue(value);

    if (!isValid) {
      zipFromStore.error.event(Errors.Required);
      zipFromStore.status.event(Status.Error);
    }

    if (zipFromStore.prevValue.state.getState() === value) {
      zipFromStore.status.event(Status.Success);
    }

    if (isValid && zipFromStore.prevValue.state.getState() !== value) {
      zipFromStore.status.event(Status.Loading);

      makeRequestFn(value);
    }
  });
};
