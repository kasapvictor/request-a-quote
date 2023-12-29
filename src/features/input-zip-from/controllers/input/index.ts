import { zipFromStore } from '@entities/input-zip-from';

import { Event, InputElements, Status } from '@shared/types';

export const eventInput = (el: InputElements['input']) => {
  el.addEventListener(Event.Input, () => {
    zipFromStore.status.event(Status.Input);
    zipFromStore.value.event(el.value.trim());
  });
};
