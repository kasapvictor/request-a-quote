import { yearStore } from '@entities/select-year';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventChange = (el: InputElements['select']) => {
  el.addEventListener(Event.Change, () => {
    if (!el.value) {
      yearStore.status.event(Status.Error);
      yearStore.error.event(Errors.Required);
    }

    if (el.value) {
      yearStore.status.event(Status.Success);
    }

    yearStore.value.event(el.value.trim());
  });
};
