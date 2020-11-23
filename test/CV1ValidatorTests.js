// noinspection JSConstantReassignment,JSValidateTypes
global.window = {};
const assert = require('assert');
import('../src/CV1Validator.js');

describe('CV1Validator', function() {
  describe('ShouldBe12Characters', function() {
    it('undefinedReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate(undefined));
    });
    it('emptyReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate(''));
    });
    it('lessThen12CharactersReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate('CV-06001501'));
    });
    it('MoreThen12CharactersReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate('CV-0600150155'));
    });
  });
  describe('ShouldBeAString', function() {
    it('numberReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate(1234));
    });
    it('booleanReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate(false));
    });
  });

  describe('ShouldStartWithCV', function() {
    it('StartwithCV-Success', function() {
      assert(global.window.CV1Validator.validate('CV-060015015'));
    });

    it('StartwithoutCVReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate('VC-060015015'));
    });
  });

  describe('ShouldHaveCorrectNumber', function() {
    it('IfLastCharactersIsNotANumberReturnsFalse', function() {
      assert(!global.window.CV1Validator.validate('CV-A60015015'));
      assert(!global.window.CV1Validator.validate('CV-0A0015015'));
      assert(!global.window.CV1Validator.validate('CV-06A015015'));
      assert(!global.window.CV1Validator.validate('CV-060A15015'));
      assert(!global.window.CV1Validator.validate('CV-0600A5015'));
      assert(!global.window.CV1Validator.validate('CV-06001A015'));
      assert(!global.window.CV1Validator.validate('CV-060015A15'));
      assert(!global.window.CV1Validator.validate('CV-0600150A5'));
      assert(!global.window.CV1Validator.validate('CV-06001501A'));
    });
  });

  describe('nextMultipleOfTen', function() {
    it('ShouldReturnNextMultipleOf10', function() {
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(10),10);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(21),30);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(32),40);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(43),50);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(54),60);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(65),70);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(76),80);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(87),90);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(98),100);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(19),20);
      assert.strictEqual(global.window.CV1Validator.nextMultipleOfTen(20),20);
    });
  });

  describe('ValidateCodeExamples', function() {
    it('AllCodesShouldReturnTrue', function() {
      assert(global.window.CV1Validator.validate('CV-060015015'));
      assert(global.window.CV1Validator.validate('CV-000000000'));
      assert(global.window.CV1Validator.validate('CV-100000007'));
      assert(global.window.CV1Validator.validate('CV-010000009'));
      assert(global.window.CV1Validator.validate('CV-001000007'));
      assert(global.window.CV1Validator.validate('CV-000100009'));
      assert(global.window.CV1Validator.validate('CV-000010007'));
      assert(global.window.CV1Validator.validate('CV-000001009'));
      assert(global.window.CV1Validator.validate('CV-000000107'));
      assert(global.window.CV1Validator.validate('CV-000000019'));
      assert(global.window.CV1Validator.validate('CV-010101016'));
    });

    it('AllCodesShouldReturnFalse', function() {
      assert(!global.window.CV1Validator.validate('CV-060015016'));
      assert(!global.window.CV1Validator.validate('CV-010101017'));
    });
  });
});