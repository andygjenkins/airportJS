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
    beforeEach(function(){
      weather = {
        setWeather: function(value) {
          stormy = value;
        }
      };
      spyOn(weather, 'setStormy').and.callThrough();
    });

    it("blocks landing in stormy weather", function(){
      weather.setWeather("stormy");
      airport.landPlane(plane);
      expect(planes.length).toEqual(0);
    });
  });
});
