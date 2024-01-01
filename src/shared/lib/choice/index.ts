import './styles.css';
import Choices, { Options } from 'choices.js';

import { InputElements } from '@shared/types';

export const initChoice = (select: InputElements['select'], parentEl: HTMLDivElement, config: Options) => {
  const defaultConfig = {
    // renderChoiceLimit: 6,
    // position: 'bottom',
    searchResultLimit: 4,
    allowHTML: true,
  };

  const newConfig = Object.assign({}, defaultConfig, config);

  const choices = new Choices(select, newConfig);

  choices.passedElement.element.addEventListener('showDropdown', () => {
    parentEl.style.zIndex = '100';
  });

  choices.passedElement.element.addEventListener('hideDropdown', () => {
    parentEl.style.zIndex = '10';
  });

  return choices;
};
