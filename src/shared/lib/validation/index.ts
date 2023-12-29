export const isOnlyDigits = (value: string, min: number) => {
  const regex = new RegExp(`^\\d{${min}}$`);

  return regex.test(value);
};

export const isValue = (value: string) => Boolean(value);

export const isCorrectLength = (value: string, min: number) => value.length === min;
