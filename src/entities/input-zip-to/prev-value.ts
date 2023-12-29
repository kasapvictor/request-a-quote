import { createEvent, createStore } from 'effector';

export const changedPrevValue = createEvent<string>();
export const $prevSuccessValue = createStore<string>('');

$prevSuccessValue.on(changedPrevValue, (_, newValue) => newValue);
