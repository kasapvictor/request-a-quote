import { phoneStore } from '@entities/input-phone';

import { log } from '@shared/lib';
import { isCorrectLength, isOnlyDigits, isValue } from '@shared/lib/validation';
import { Errors, Event, InputElements, Status } from '@shared/types';

const MIN_LENGTH = 11;

const isValidValue = (value: string): boolean => {
  const formattedValue = value.replace(/\D/g, '');

  return [
    isValue(formattedValue),
    isOnlyDigits(formattedValue, MIN_LENGTH),
    isCorrectLength(formattedValue, MIN_LENGTH),
  ].every((item) => item);
};

export const eventBlur = (el: InputElements['input']) => {
  el.addEventListener(Event.Blur, async () => {
    const value = el.value.trim();
    const isValid = isValidValue(value);

    log('isValid', isValid);

    if (!isValid) {
      phoneStore.error.event(Errors.Required);
      phoneStore.status.event(Status.Error);
    }

    if (isValid) {
      phoneStore.status.event(Status.Success);
    }
  });
};
