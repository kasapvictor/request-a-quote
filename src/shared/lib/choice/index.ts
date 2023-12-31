import './styles.css';
import Choices, { Options } from 'choices.js';

import { InputElements } from '@shared/types';

export const initChoice = (select: InputElements['select'], config: Options) => {
  const defaultConfig = {
    // renderChoiceLimit: 6,
    position: 'bottom',
    searchResultLimit: 4,
    allowHTML: true,
  };

  const newConfig = Object.assign({}, defaultConfig, config);

  return new Choices(select, newConfig);
};
