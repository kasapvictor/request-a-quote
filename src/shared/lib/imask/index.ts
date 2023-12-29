import IMask from 'imask';

export const initImask = (el: HTMLInputElement, options: Record<string, string | number | boolean>) => {
  IMask(el, options);
};
