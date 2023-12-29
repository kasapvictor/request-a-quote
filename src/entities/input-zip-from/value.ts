import { createEvent, createStore, sample } from 'effector';

export const changedValue = createEvent<string>();
export const $value = createStore<string>('');

// via SAMPLE function
sample({
  clock: changedValue,
  source: $value,
  fn: (_, newValue) => newValue,
  filter: (currentValue, newValue) => currentValue !== newValue,
  target: $value,
});

// Via ON method
// $value.on(changedValue, (currentValue, newValue) => {
//   return currentValue !== newValue ? newValue : currentValue;
// });
