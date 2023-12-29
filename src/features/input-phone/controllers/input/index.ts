import { phoneStore } from '@entities/input-phone';

import { Event, InputElements, Status } from '@shared/types';

export const eventInput = (el: InputElements['input']) => {
  el.addEventListener(Event.Input, () => {
    phoneStore.status.event(Status.Input);
    phoneStore.value.event(el.value.trim());
  });
};
