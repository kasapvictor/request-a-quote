import { emailStore } from '@entities/input-email';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventFocus = (el: InputElements['input']) => {
  el.addEventListener(Event.Focus, () => {
    emailStore.status.event(Status.Focused);
    emailStore.error.event(Errors.Empty);
  });
};
