import { $error, changedError } from './error';
import { $status, changedStatus } from './status';
import { $value, changedValue } from './value';

export const phoneStore = {
  value: {
    state: $value,
    event: changedValue,
  },
  status: {
    state: $status,
    event: changedStatus,
  },
  error: {
    state: $error,
    event: changedError,
  },
};
