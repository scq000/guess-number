'use strict';

function Guess(generator, comparator) {
  this.answer = generator.generate();
  this.comparator = comparator;
}

Guess.prototype.run = function(input) {
  return this.comparator.compare(this.answer, input);
};

module.exports = Guess;
