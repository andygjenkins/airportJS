var Airport = function() {};
var Plane = function() {};

var planes = [];
var capacity = 2;

Airport.prototype.land = function(plane) {
  var airportFull = this.full();
  if (airportFull === false) {
    planes.push(plane);
  }
  else {
    return "Cannot Land"
  }
};

Airport.prototype.takeoff = function(plane) {
  planes.splice(plane);
  return planes;
};

Airport.prototype.full = function() {
  if(planes.length >= capacity) {
    return true;
  }
  return false;
};
