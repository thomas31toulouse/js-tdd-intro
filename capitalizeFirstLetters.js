const assert = require('assert');

String.prototype.toJadenCase = function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
  };


assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('javaScript is love'), 'JavaScript Is Love');

assert.strictEqual(capitalizeFirstLetters('zebra'), 'Zebra');

assert.strictEqual(capitalizeFirstLetters(''), '');
