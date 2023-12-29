// input-zip-from/index.ts
import { InputElements } from '@shared/types';

import { makeRequest } from './api';
import { eventInput, eventBlur, eventFocus } from './controllers';
import { initZipMask } from './lib';
import { watchers } from './view';

export const initInputZipFrom = () => {
  const elements = {
    wrapper: document.getElementById('zip-from'),
    input: document.getElementById('zip-from-input'),
    error: document.getElementById('zip-from-error'),
    success: document.getElementById('zip-from-success'),
    load: document.getElementById('zip-from-load'),
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
