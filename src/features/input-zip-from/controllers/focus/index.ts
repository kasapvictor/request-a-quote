// input-zip-from/lib/imask/index.ts

import { zipFromStore } from '@entities/input-zip-from';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventFocus = (el: InputElements['input']) => {
  el.addEventListener(Event.Focus, () => {
    zipFromStore.status.event(Status.Focused);
    zipFromStore.error.event(Errors.Empty);
  });
};
