import { Options } from 'choices.js';

import { initChoice } from '@shared/lib';
import { InputElements } from '@shared/types';

export const initMakeChoices = (select: InputElements['select'], makes: { id: number; name: string }[]) => {
  const choice = initChoice(select, {
    removeItemButton: true,
    // searchResultLimit: 4,
    silent: false,
  } as Options);

  choice.setChoices(
    makes.map(({ id, name }) => ({ value: name, label: name, id })),
    'value',
    'label',
    false,
  );
};
