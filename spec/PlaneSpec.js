'use strict';

describe("Plane", function() {
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  it('can instruct planes to land', function(){
    expect(plane).not.toBeUndefined()
  });
});
