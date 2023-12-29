// input-zip-from/index.ts
import { InputElements } from '@shared/types';

import { makeRequest } from './api';
import { eventInput, eventBlur, eventFocus } from './controllers';
import { initZipMask } from './lib';
import { watchers } from './view';

export const initInputZipTo = () => {
  const elements = {
    wrapper: document.getElementById('zip-to'),
    input: document.getElementById('zip-to-input'),
    error: document.getElementById('zip-to-error'),
    success: document.getElementById('zip-to-success'),
    load: document.getElementById('zip-to-load'),
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
  eventBlur(el, makeRequest);
};
