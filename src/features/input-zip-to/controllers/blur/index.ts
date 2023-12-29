/* eslint-disable no-unused-vars */

import { zipToStore } from '@entities/input-zip-to';

import { isCorrectLength, isOnlyDigits, isValue } from '@shared/lib';
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
      zipToStore.error.event(Errors.Required);
      zipToStore.status.event(Status.Error);
    }

    if (zipToStore.prevValue.state.getState() === value) {
      zipToStore.status.event(Status.Success);
    }

    if (isValid && zipToStore.prevValue.state.getState() !== value) {
      zipToStore.status.event(Status.Loading);

      makeRequestFn(value);
    }
  });
};
