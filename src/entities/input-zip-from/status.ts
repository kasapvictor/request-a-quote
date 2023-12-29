import { createEvent, createStore } from 'effector';

import { Status } from '@shared/types';

export const changedStatus = createEvent<Status>();
export const $status = createStore<Status>(Status.Idle);

$status.on(changedStatus, (_, status) => status);
