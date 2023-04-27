const multiply = require('./multiply');

describe('multiply', () => {
it('multiples 2 by 5', () => {
  expect(multiply(2,5)).toBe(10);
})

it('multiples 3 by 0', () => {
  expect(multiply(3,0)).toBe(0);
})
});