const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
 it('returns FizzBuzz for 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns Fizz for 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz for 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns Buzz for 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

});

