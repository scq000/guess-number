'use strict';

function AnswerGenerator() {}

AnswerGenerator.prototype.generate = function() {
  var randomString = '';
  var _ = require('lodash');

  while(randomString.length !== 4){
    var randomNum = _.random(0, 9);
    if (_.includes(randomString, randomNum)) {
      continue;
    }
    randomString += randomNum;
  }

  return randomString;
};

module.exports = AnswerGenerator;
