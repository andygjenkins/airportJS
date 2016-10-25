'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  it('can instruct planes to land', function(){
    expect(airport.landPlane).not.toBeUndefined();
  });
  it('moves planes to a hangar once landed', function(){
    spyOn(airport, 'checkWeather').and.returnValue("sunny");
    airport.landPlane(plane);
    expect(planes.length).toEqual(1);
  });
});
