// sum.test.ts

import { describe, it, expect } from 'vitest';

import { THROW_MESSAGE } from './constants';
import { sum } from './sum';

describe('Sum test #1', () => {
  it('1) Should be 5', () => {
    expect(sum(3, 2)).toBe(5);
  });

  it('2) Should be -3', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('3) Should be 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('4) Should be 5', () => {
    expect(sum(0, 5)).toBe(5);
  });

  it('5) Should be float 3.7', () => {
    expect(sum(1.2, 2.5)).toBe(3.7);
  });

  it('6) Should be ok with big numbers', () => {
    expect(sum(10000000, 50000000)).toBe(60000000);
  });

  it('7) Should be Throw Error', () => {
    expect(() => sum('3' as never, 2 as never)).toThrow(THROW_MESSAGE);
    expect(() => sum('test' as never, 2)).throw(THROW_MESSAGE);
    expect(() => sum(true as never, 2)).throw(THROW_MESSAGE);
  });
});
