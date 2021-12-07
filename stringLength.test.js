const stringLength = require('./stringLength')

test('String length: Happy trail', () => {
  expect(stringLength('abc')).toBe(3);
})

test('String length: Less than 1', () => {
  expect(() => stringLength('')).toThrow('Too Small')
})

test('String length: Greater than 10', () => {
  expect(() => stringLength('abcdeabcdea')).toThrow('Too Long')
})