'use strict';

describe("Feature Test:", function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe("it has planes", function(){
    it("starts with 0 planes", function(){
      expect(airport.planes.length).toEqual(0);
    });

    it("gets a plane if a plane lands", function(){
      spyOn(airport, 'checkWeather').and.returnValue("sunny");
      airport.landPlane(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it("allows a plane to take off", function(){
      spyOn(airport, 'checkWeather').and.returnValue("sunny");
      // airport.planes = [plane]
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });
  describe("weather", function(){
    it("blocks landing in stormy weather", function() {
      spyOn(airport, 'checkWeather').and.returnValue("stormy");
      airport.landPlane(plane);
      expect(airport.planes.length).toEqual(0);
    });
    it("blocks takeoff in stormy weather", function() {
      spyOn(airport, 'checkWeather').and.returnValue("stormy");
      airport.planes = [plane]
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });
});