'use strict';

var HelloWorld = (function() {

  function HelloWorld() {
  }

  HelloWorld.prototype.beenCalled = function() {
    return 'Leave me alone.';
  };

  return HelloWorld;

})();

exports.HelloWorld = HelloWorld;
