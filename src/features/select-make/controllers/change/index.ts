import { makeStore } from '@entities/select-make';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventChange = (el: InputElements['select']) => {
  el.addEventListener(Event.Change, () => {
    if (!el.value) {
      makeStore.status.event(Status.Error);
      makeStore.error.event(Errors.Required);
    }

    if (el.value) {
      makeStore.status.event(Status.Success);
    }

    makeStore.value.event(el.value.trim());
  });
};
