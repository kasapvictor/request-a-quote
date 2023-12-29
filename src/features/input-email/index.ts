import { InputElements } from '@shared/types';

import { eventInput, eventBlur, eventFocus } from './controllers';
import { watchers } from './view';

export const initInputEmail = () => {
  const elements = {
    wrapper: document.getElementById('email'),
    input: document.getElementById('email-input'),
    error: document.getElementById('email-error'),
    success: document.getElementById('email-success'),
  } as InputElements;

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
