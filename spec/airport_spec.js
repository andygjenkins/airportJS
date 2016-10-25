describe('Airport', function () {

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    var capacity = 2;
  });

  describe('landing the plane', function(){
    it('allows planes to land', function(){
      airport.land(plane);
      expect(planes.length).toBe(1);
    });
  });

  describe('plane takes off', function(){
    it('allows planes to takeoff', function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(planes.length).toBe(0);
    });
  });

  describe('plane takes off', function(){
    it('allows planes to takeoff', function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(planes.length).toBe(0);
    });
  });

  describe('avoiding collisions', function() {
    it('prevents landing when airport is full',function() {
      for (var i = 0; i < (capacity + 1); i++) {
        airport.land(plane);
      }
      expect(planes.length).toBe(2);
    });
  });

  describe('stormy weather', function() {
    it('prevents landing in stormy weather', function(){
      airport.land(plane)
      expect(planes.length).toBe(0);
    });
  });



});
