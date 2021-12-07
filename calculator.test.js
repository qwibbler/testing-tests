const Calculator = require('./Calculator')

describe('Calculate:', () => {
  test('Add 1+2', () => {
    expect(new Calculator(1,2).add()).toEqual(3);
  });

  test('Subtract 2-1', () => {
    expect(new Calculator(2,1).subtract()).toEqual(1);
  });

  test('Multiply 2*3', () => {
    expect(new Calculator(2,3).multiply()).toEqual(6);
  })

  test('Divide 4/2', () => {
    expect(new Calculator(4,2).divide()).toEqual(2)
  })
})