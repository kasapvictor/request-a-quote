import { emailStore } from '@entities/input-email';

import { isValue, isValidEmail } from '@shared/lib';
import { Errors, Event, InputElements, Status } from '@shared/types';

const isValidValue = (value: string): boolean => {
  return [isValue(value), isValidEmail(value)].every((item) => item);
};

export const eventBlur = (el: InputElements['input']) => {
  el.addEventListener(Event.Blur, async () => {
    const value = el.value.trim();
    const isValid = isValidValue(value);

    if (!isValue(value)) {
      emailStore.error.event(Errors.Required);
      emailStore.status.event(Status.Error);
    }

    if (!isValidEmail(value) && isValue(value)) {
      emailStore.error.event(Errors.IncorrectEmail);
      emailStore.status.event(Status.Error);
    }

    if (isValid) {
      emailStore.status.event(Status.Success);
    }
  });
};
