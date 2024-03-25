module.exports.add = (a, b) => {
  return a + b;
};

module.exports.subtract = (a, b) => {
  return a - b;
};

module.exports.multiply = (a, b) => {
  return a * b;
};

module.exports.divide = (a, b) => {
  if (b === 0) {
    return null;
  } else {
    return a / b;
  }
};
