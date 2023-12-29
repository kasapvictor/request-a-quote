import Choices from 'choices.js';

import { InputElements } from '@shared/types';

import { modelRequest } from './api';
import { eventChange } from './controllers';
import { initModelChoices } from './lib';
import { watchers } from './view';

export const initSelectModel = async () => {
  const elements = {
    wrapper: document.getElementById('model'),
    select: document.getElementById('model-select'),
    error: document.getElementById('model-error'),
    success: document.getElementById('model-success'),
    load: document.getElementById('model-load'),
  } as InputElements;

  const choice = initModelChoices(elements.select) as Choices;
  watchers(elements, buildList, choice);
  eventControl(elements.select);
};

const buildList = async (select: InputElements['select'], make: string, year = '', choice: Choices) => {
  if (!select) {
    return false;
  }

  const models = await modelRequest(make, year);

  choice.destroy();
  choice.init();
  choice.setChoices(
    models.map(({ id, name }: { id: number; name: string }) => ({ value: name, label: name, id })),
    'value',
    'label',
    false,
  );
};

const eventControl = (el: InputElements['select']) => {
  if (!el) {
    return false;
  }

  eventChange(el);
};
