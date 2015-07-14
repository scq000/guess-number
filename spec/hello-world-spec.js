'use strict';

var HelloWorld = require('../main/hello-world');

describe('HelloWorld', function() {

  it('demo test', function() {
    expect('Hello World').toBe('Hello World');
  });

  it('should be mock', function() {
    var helloWorld = new HelloWorld();
    spyOn(helloWorld, 'beenCalled').and.returnValue('Hello World');

    expect(helloWorld.beenCalled()).toBe('Hello World');
  });
});
