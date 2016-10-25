describe("Airport", function() {

  var airport;
  var plane = "Test";

  beforeEach(function(){
    airport = new Airport();
  });

  describe("it has planes", function(){
    it("starts with 0 planes", function(){
      expect(planes.length).toEqual(0);
    });

    it("gets a plane if a plane lands", function(){
      airport.landPlane(plane);
      expect(planes.length).toEqual(1);
    });

    it("allows a plane to take off", function(){
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(planes.length).toEqual(0);
    });
  });
  describe("weather", function(){


    it("blocks landing in stormy weather", function(){
      spyOn(Math, 'random').and.returnValue(0.5);
      airport.landPlane(plane);
      expect(planes.length).toEqual(0);
    });
  });
});
