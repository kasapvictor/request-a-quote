import { createEvent, createStore } from 'effector';

import { Errors } from '@shared/types';

export const changedError = createEvent<Errors>();
export const $error = createStore<Errors>(Errors.Empty);

$error.on(changedError, (_, error) => error);
