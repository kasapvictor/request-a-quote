// sum.ts

import { THROW_MESSAGE } from './constants';

export const sum = (a: number, b: number) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error(THROW_MESSAGE);
  }

  return a + b;
};
