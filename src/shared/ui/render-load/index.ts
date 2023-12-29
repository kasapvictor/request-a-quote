import { InputElements, Load } from '@shared/types';

export const renderLoad = (el: InputElements['success'], load: Load | string) => {
  if (!el) {
    return false;
  }

  el.textContent = load;
};
