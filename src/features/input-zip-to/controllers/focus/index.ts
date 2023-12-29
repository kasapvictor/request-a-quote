// input-zip-from/lib/imask/index.ts

import { zipToStore } from '@entities/input-zip-to';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventFocus = (el: InputElements['input']) => {
  el.addEventListener(Event.Focus, () => {
    zipToStore.status.event(Status.Focused);
    zipToStore.error.event(Errors.Empty);
  });
};
