export const calculate = (
  number1: number,
  number2: number,
  operator: string
) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }

  if (operator === '*') {
    return number1 * number2;
  }

  if (operator === '/') {
    return number1 / number2;
  }
};
