import { initImask } from '@shared/lib/imask';
import { InputElements } from '@shared/types';

export const initZipMask = (el: InputElements['input']) => {
  initImask(el, { mask: '{+1} (000) 000 0000', lazy: false });
};
