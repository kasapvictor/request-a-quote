import { InputElements } from '@shared/types';

export const renderDisabled = (el: InputElements['input'] | InputElements['select'], isDisabled: boolean) => {
  if (!el) {
    return false;
  }

  el.disabled = isDisabled;
};
