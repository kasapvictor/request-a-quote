import { Options } from 'choices.js';

import { initChoice } from '@shared/lib';
import { InputElements } from '@shared/types';

type Choice = { value: string; label: string };

export const initYearChoices = (
  select: InputElements['select'],
  parentEl: HTMLDivElement,
  years: number[] | string[],
) => {
  const choice = initChoice(select, parentEl, {
    removeItemButton: true,
    // searchResultLimit: 4,
    silent: false,
    sorter: (a: Choice, b: Choice) => Number(b.value) - Number(a.label),
  } as Options);

  choice.setChoices(
    years.map((year: number | string) => ({ value: String(year), label: String(year) })),
    'value',
    'label',
    false,
  );
};
