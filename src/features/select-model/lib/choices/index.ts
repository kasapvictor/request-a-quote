import { Options } from 'choices.js';

import { initChoice } from '@shared/lib';
import { InputElements } from '@shared/types';

export const initModelChoices = (select: InputElements['select']) => {
  if (!select) {
    return false;
  }

  return initChoice(select, {
    removeItemButton: true,
    // searchResultLimit: 4,
    silent: false,
  } as Options);
};
