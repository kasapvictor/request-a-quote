import { modelStore } from '@entities/select-model';

import { Errors, Event, InputElements, Status } from '@shared/types';

export const eventChange = (el: InputElements['select']) => {
  el.addEventListener(Event.Change, () => {
    if (!el.value) {
      modelStore.status.event(Status.Error);
      modelStore.error.event(Errors.Required);
    }

    if (el.value) {
      modelStore.status.event(Status.Success);
    }

    modelStore.value.event(el.value.trim());
  });
};
