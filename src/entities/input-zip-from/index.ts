import { $error, changedError } from './error';
import { $prevSuccessValue, changedPrevValue } from './prev-value';
import { $status, changedStatus } from './status';
import { $value, changedValue } from './value';

export const zipFromStore = {
  value: {
    state: $value,
    event: changedValue,
  },
  prevValue: {
    state: $prevSuccessValue,
    event: changedPrevValue,
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
