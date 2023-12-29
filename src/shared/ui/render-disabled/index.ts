import { InputElements } from '@shared/types';

export const renderDisabled = (el: InputElements['input'], isDisabled: boolean) => {
  if (!el) {
    return false;
  }

  el.disabled = isDisabled;
};
