const reverseString = require('./reverseString');

test('Reverse String: Happy trail', () => {
  expect(reverseString('abc')).toBe('cba')
})

test('Reverse String: Spaces', () => {
  expect(reverseString('ab c')).toBe('c ba')
})

test('Reverse String: Capitals', () => {
  expect(reverseString('Abc')).toBe('cbA')
})