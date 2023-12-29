import { InputElements } from '@shared/types';

export const renderError = (el: InputElements['error'], error: string) => {
  if (!el) {
    return false;
  }

  el.textContent = error;
};
