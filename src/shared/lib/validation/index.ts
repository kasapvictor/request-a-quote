import * as yup from 'yup';

export const isOnlyDigits = (value: string, min: number) => {
  const regex = new RegExp(`^\\d{${min}}$`);

  return regex.test(value);
};

export const isValidEmail = (email: string) => {
  if (email.startsWith('.')) {
    return false;
  }

  const domainPart = email.split('@')[1];
  const tld = domainPart.split('.').pop();
  if (!tld || tld.length < 2) {
    return false;
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  return schema.isValidSync({ email });
};

export const isValue = (value: string) => Boolean(value);

export const isCorrectLength = (value: string, min: number) => value.length === min;
