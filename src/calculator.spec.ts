import { calculate } from './calculator';

describe('계산기가', () => {
  it('덧셈을 한다.', () => {
    expect(calculate(1, 2, '+')).toBe(3);
  });

  it('뺄셈을 한다.', () => {
    expect(calculate(1, 2, '-')).toBe(-1);
  });

  it('곱셈을 한다.', () => {
    expect(calculate(1, 2, '*')).toBe(2);
  });

  it('나눗셈을 한다.', () => {
    expect(calculate(1, 2, '/')).toBe(0.5);
  });
});
