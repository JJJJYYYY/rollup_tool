const assert = require('assert');
import main from '../src/main'

describe('Main', function() {
  describe('test', function() {
    it('es6 test', function() {
      assert.equal(typeof main(), 'string');
    });
  });
});
