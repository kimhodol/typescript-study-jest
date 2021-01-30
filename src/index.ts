import { calculate } from './calculator';

console.log(calculate(1, 2, '+')); // 3이 나와야 한다.
console.log(calculate(1, 2, '-')); // -1이 나와야 한다.
console.log(calculate(1, 2, '*')); // 2가 나와야 한다.
console.log(calculate(1, 2, '/')); // 0.5가 나와야 한다.
