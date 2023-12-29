import { InputElements, Success } from '@shared/types';

export const renderSuccess = (el: InputElements['success'], success: Success | string) => {
  if (!el) {
    return false;
  }

  el.textContent = success;
};
