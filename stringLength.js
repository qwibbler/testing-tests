function stringLength(string) {
  if (string.length < 1) {
    throw new Error('Too Small')
  } else if (string.length > 10) {
    throw new Error('Too Long')
  }
  return string.length
}

module.exports = stringLength;