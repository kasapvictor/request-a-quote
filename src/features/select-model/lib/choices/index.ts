import { Options } from 'choices.js';

import { initChoice } from '@shared/lib';
import { InputElements } from '@shared/types';

export const initModelChoices = (select: InputElements['select'], parentEl: HTMLDivElement) => {
  if (!select) {
    return false;
  }

  return initChoice(select, parentEl, {
    removeItemButton: true,
    // searchResultLimit: 4,
    silent: false,
  } as Options);
};
