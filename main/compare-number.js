'use strict';

function CompareNumber (){
}

CompareNumber.prototype.compare =function (answer, input){
  var countA = 0;
  var countB = 0;

  for(var i = 0; i < answer.length; i++){
    for(var k = 0; k < input.length; k ++){
      if(answer[i] === input[k]){
        if(i === k){
          countA += 1;
        }else{
          countB += 1;
        }
      }
    }
  }

  return  countA +'A' + countB + 'B';

};

module.exports = CompareNumber;
