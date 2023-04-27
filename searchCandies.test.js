const searchCandies = require('./searchCandies');

describe('searchCandies', () =>  {
  it('returns Mars for Ma, max price 2', () => {
    result = searchCandies('Ma', 2)
    expect(result).toEqual(['Mars']);
  });

  it('returns Mars for Ma, max price 5', () => {
    result = searchCandies('M', 5)
    expect(result).not.toContain('Mentos');
  });

  it('returns two candies for Ma, max price 10', () => {
    result = searchCandies('Ma', 10)
    expect(result).toEqual([ 'Mars', 'Maltesers' ])
  });

  it('returns three candies for S, max price 10', () => {
    result = searchCandies('S', 10)
    expect(result).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    expect(result.length).toEqual(3)
  });

  it('returns three candies for S, max price 4', () => {
    result = searchCandies('S', 4)
    expect(result).not.toContain('Starburst')
    expect(result).toEqual(['Skitties', 'Skittles'])
  });

  it('returns Mars for ma (lowercase), max price 2', () => {
    result = searchCandies('ma', 10)
    expect(result).toEqual(['Mars', 'Maltesers']);
  });

});

