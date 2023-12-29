import { emailStore } from '@entities/input-email';

import { Event, InputElements, Status } from '@shared/types';

export const eventInput = (el: InputElements['input']) => {
  el.addEventListener(Event.Input, () => {
    emailStore.status.event(Status.Input);
    emailStore.value.event(el.value.trim());
  });
};
