const assert = require('assert');
const rectangle = require('../rectangle');

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof rectangle, 'function');
    assert.strictEqual(rectangle.length, 1);
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(rectangle('javaScript'), 'JavaScript');
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(rectangle('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(rectangle(''), '');
  });
});