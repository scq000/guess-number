'use strict';

function CompareNumber (){
}

CompareNumber.prototype.compare =function (answer, input){
  var countA = 0;
  var countB = 0;

  answer.split('').forEach(function(num,index) {
    var findIndex = input.indexOf(num);
    countA += (findIndex === index)? 1: 0;
    countB += (findIndex !== -1 && findIndex !== index)? 1:0;
  });

  return  countA +'A' + countB + 'B';
};

module.exports = CompareNumber;
