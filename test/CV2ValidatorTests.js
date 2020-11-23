// noinspection JSValidateTypes
global.window = {};
const assert = require('assert');
import('../src/CV2Validator.js');

describe('CV2Validator', function() {
  describe('ShouldBe12Characters', function() {
    it('undefinedReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate(undefined));
    });
    it('emptyReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate(''));
    });
    it('lessThen12CharactersReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate('CV123456759'));
    });
    it('MoreThen12CharactersReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate('CV12345675970'));
    });
  });
  describe('ShouldBeAString', function() {
    it('numberReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate(1234));
    });
    it('booleanReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate(false));
    });
  });

  describe('ShouldStartWithCV', function() {
    it('StartwithCVSuccess', function() {         
      assert(global.window.CV2Validator.validate('CV1234567597'));
    });

    it('StartwithoutCVReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate('VC1234567597'));
    });
  });

  describe('ShouldHaveCorrectNumber', function() {
    it('IfLastCharactersIsNotANumberReturnsFalse', function() {
      assert(!global.window.CV2Validator.validate('CVA234567597'));
      assert(!global.window.CV2Validator.validate('CV1A34567597'));
      assert(!global.window.CV2Validator.validate('CV12A4567597'));
      assert(!global.window.CV2Validator.validate('CV123A567597'));
      assert(!global.window.CV2Validator.validate('CV1234A67597'));
      assert(!global.window.CV2Validator.validate('CV12345A7597'));
      assert(!global.window.CV2Validator.validate('CV123456A597'));
      assert(!global.window.CV2Validator.validate('CV123456A797'));
      assert(!global.window.CV2Validator.validate('CV12345675A7'));
      assert(!global.window.CV2Validator.validate('CV123456759A'));
    });
  });

  describe('ValidateCodeExamples', function() {
    it('AllCodesShouldReturnTrue', function() {
      assert(global.window.CV2Validator.validate('CV1234567803'));
      assert(global.window.CV2Validator.validate('CV1234567597'));
    });

    it('AllCodesShouldReturnFalse', function() {
      assert(!global.window.CV2Validator.validate('CV1234567804'));
      assert(!global.window.CV2Validator.validate('CV1234567500'));
    });
  });
});