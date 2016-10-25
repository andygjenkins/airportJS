'use strict';

function Airport(){}


var planes = [];
// var weather = "sunny";

Airport.prototype.planes = function() {
  return planes;
}

Airport.prototype.landPlane =function(plane) {
  var weather = this.checkWeather();
  if (weather === "stormy") {
    return "cannot land";
  } else {
    planes.push(plane);
  }
}

Airport.prototype.takeOff = function(plane) {
  planes.splice(plane);
}

Airport.prototype.checkWeather = function() {
  if (Math.random() < 0.5) {
    return "stormy";
  } else {
    return "sunny";
  }
}
