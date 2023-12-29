import { phoneStore } from '@entities/input-phone';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventFocus = (el: InputElements['input']) => {
  el.addEventListener(Event.Focus, () => {
    phoneStore.status.event(Status.Focused);
    phoneStore.error.event(Errors.Empty);
  });
};
