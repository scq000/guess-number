'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {

  describe('#generate', function() {

    var answerGenerator;
    var randomString;
    var _ = require('lodash');

    beforeEach(function() {
      var callCount = 0;
      spyOn(_, 'random').and.callFake(function() {
        var randomNumbers = [1, 1, 2, 3, 4];
        return randomNumbers[callCount++];
      });

      answerGenerator = new AnswerGenerator(_.random);
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

    it('should return random result', function() {
      expect(randomString).toBe('1234');
    });

  });
});
