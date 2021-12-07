const capitalize = require('./capitalize')

test('Capitalize: Happy trail', () => {
  expect(capitalize('abc')).toBe('Abc');
})