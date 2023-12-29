import { InputElements } from '@shared/types';

import { eventInput, eventBlur, eventFocus } from './controllers';
import { initZipMask } from './lib';
import { watchers } from './view';

export const initInputPhone = () => {
  const elements = {
    wrapper: document.getElementById('phone-to'),
    input: document.getElementById('phone-input'),
    error: document.getElementById('phone-error'),
    success: document.getElementById('phone-success'),
    load: document.getElementById('phone-load'),
  } as InputElements;

  initZipMask(elements.input);
  eventControl(elements.input);
  watchers(elements);
};

const eventControl = (el: InputElements['input']) => {
  if (!el) {
    return false;
  }

  eventFocus(el);
  eventInput(el);
  eventBlur(el);
};
