import { zipToStore } from '@entities/input-zip-to';

import { Event, InputElements, Status } from '@shared/types';

export const eventInput = (el: InputElements['input']) => {
  el.addEventListener(Event.Input, () => {
    zipToStore.status.event(Status.Input);
    zipToStore.value.event(el.value.trim());
  });
};
