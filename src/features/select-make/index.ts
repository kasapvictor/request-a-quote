import { InputElements } from '@shared/types';

import { makeRequest } from './api';
import { eventChange } from './controllers';
import { initMakeChoices } from './lib';
import { watchers } from './view';

export const initSelectMake = async () => {
  const elements = {
    wrapper: document.getElementById('make'),
    select: document.getElementById('make-select'),
    error: document.getElementById('make-error'),
    success: document.getElementById('make-success'),
    load: document.getElementById('make-load'),
  } as InputElements;

  watchers(elements);
  await buildList(elements.select);
  eventControl(elements.select);
};

const buildList = async (select: InputElements['select']) => {
  if (!select) {
    return false;
  }

  const makes = await makeRequest();

  initMakeChoices(select, makes);
};

const eventControl = (el: InputElements['select']) => {
  if (!el) {
    return false;
  }

  eventChange(el);
};
