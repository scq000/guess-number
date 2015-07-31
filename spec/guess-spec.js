'use strict';

var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');
var Guess = require('../main/guess.js');
var _ = require('lodash');

describe('Guess', function() {

  describe('#run', function() {

    describe('Unit Test', function() {

      it('should return a correct result', function() {
        var generator = new AnswerGenerator();
        var comparator = new CompareNumber();

        spyOn(generator, 'generate').and.returnValue('1243');
        spyOn(comparator, 'compare').and.callFake(function(answer, input) {
          if (answer === '1243' && input === '1234') {
            return '2A2B';
          }
        });

        var guess = new Guess(generator, comparator);
        expect(guess.run('1234')).toBe('2A2B');
      });
    });

    describe('Integeration test', function() {
      var guess;

      beforeEach(function() {
        var callCount = 0;
        spyOn(_, 'random').and.callFake(function() {
          var givenNum = [2, 1, 0, 6];
          return givenNum[callCount++];
        });

        var generator = new AnswerGenerator(_.random);
        var compartor = new CompareNumber();
        guess = new Guess(generator, compartor);
      });

      it('should return 4A0B', function() {
        expect(guess.run('2106')).toBe('4A0B');
      });

      it('should return 0A4B', function() {
        expect(guess.run('1260')).toBe('0A4B');
      });

      it('should return 0A0B', function() {
        expect(guess.run('5378')).toBe('0A0B');
      });
    });

  });

});
