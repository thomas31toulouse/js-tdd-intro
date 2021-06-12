const assert = require('assert');


assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirstLetters('javaScript is love'), 'JavaScript Is Love');

assert.strictEqual(capitalizeFirst('zebra'), 'Zebra');

assert.strictEqual(capitalizeFirst(''), '');
