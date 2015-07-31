'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {

  describe('#generate', function() {

    var answerGenerator;
    var randomString;

    beforeEach(function() {
      answerGenerator = new AnswerGenerator();
      randomString = answerGenerator.generate();
    });

    it('should return a random string whose length is 4', function() {
      expect(randomString.length).toBe(4);
    });

    it('has not repeat elements', function() {

      function hasRepeated(input) {
        var sortArray = input.split('').sort();
        for (var i = 0; i < sortArray.length - 1; i++) {
          if (sortArray[i] === sortArray[i + 1]) {
            return false;
          }
        }
        return true;
      }

      expect(hasRepeated(randomString)).toBe(true);
    });

    it('should return a string whose elements are number', function() {
      expect(parseInt(+randomString) === +randomString).toBe(true);
    });

    it('should return random result', function() {
      expect(randomString !== answerGenerator.generate()).toBe(true);
    });

  });

});
