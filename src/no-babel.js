const { a, b } = require('./somedep');

function fn (x) {
  return x + a + b;
}

export default fn;
