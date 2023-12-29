// input-zip-from/lib/imask/index.js
import { initImask } from '@shared/lib';
import { InputElements } from '@shared/types';

export const initZipMask = (el: InputElements['input']) => {
  const PLACEHOLDER_CHAR = '_';
  const options = {
    mask: '00000',
    placeholderChar: PLACEHOLDER_CHAR,
    lazy: false,
  };

  initImask(el, options);
};
