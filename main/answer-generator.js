'use strict';

function AnswerGenerator(random) {
  this.random = random;
}

AnswerGenerator.prototype.generate = function() {
  var randomString = '';
  var _ = require('lodash');

  while(randomString.length !== 4){
    var randomNum = this.random(0, 9);
    console.log(randomNum);
    if (_.includes(randomString, randomNum)) {
      continue;
    }

    randomString += randomNum;
  }

  return randomString;
};

module.exports = AnswerGenerator;
