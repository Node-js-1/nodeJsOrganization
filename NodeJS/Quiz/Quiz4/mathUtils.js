add = (a, b) => {
    return a + b;
  };
  
subtract = (a, b) => {
    return a - b;
};

multiply = (a, b) => {
    return a * b;
};

divide = (a, b) => {
    if (b === 0) {
        return null;
    } else {
        return a / b;
    }
};

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
}