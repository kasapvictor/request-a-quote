/* eslint-disable no-unused-vars */

export enum Errors {
  Empty = '',
  Required = 'Required field',
  IncorrectZip = 'Incorrect ZIP',
  Incorrect = 'Incorrect data',
  Network = 'Network Error',
}

export enum Success {
  Correct = 'Correct',
}

export enum Load {
  Request = 'Checking...',
}

export enum Event {
  Input = 'input',
  Blur = 'blur',
  Focus = 'focus',
}
export enum Status {
  Idle,
  Focused,
  Input,
  Filled,
  Success,
  Error,
  Loading,
  Disabled,
}

export interface InputElements {
  wrapper: HTMLDivElement;
  input: HTMLInputElement;
  error: HTMLDivElement;
  success: HTMLDivElement;
  load: HTMLDivElement;
}
