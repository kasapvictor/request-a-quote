import { InputElements } from '@shared/types';

import { eventChange } from './controllers';
import { initYearChoices } from './lib';
import { watchers } from './view';

export const initSelectYear = () => {
  const elements = {
    wrapper: document.getElementById('year'),
    select: document.getElementById('year-select'),
    error: document.getElementById('year-error'),
    success: document.getElementById('year-success'),
  } as InputElements;

  buildList(elements.select, elements.wrapper);
  eventControl(elements.select);
  watchers(elements);
};

const buildList = (select: InputElements['select'], parentEl: HTMLDivElement) => {
  if (!select) {
    return false;
  }

  const nowYear = new Date().getFullYear();
  const pastFromNowYear = nowYear - 100;
  const years = Array.from({ length: 100 }, (_, index) => pastFromNowYear + index + 1);

  initYearChoices(select, parentEl, years);
};

const eventControl = (el: InputElements['select']) => {
  if (!el) {
    return false;
  }

  eventChange(el);
};
