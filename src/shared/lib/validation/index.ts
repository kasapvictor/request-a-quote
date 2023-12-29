export const isOnlyDigits = (value: string) => {
  return /^\d{5}$/.test(value);
};

export const isValue = (value: string) => Boolean(value);

export const isCorrectLength = (value: string, min: number) => value.length === min;
