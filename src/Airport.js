function Airport(){
}

var planes = [];

Airport.prototype.landPlane =function(plane){
  planes.push(plane);
  return planes;
}

Airport.prototype.planes = function(){
  return planes;
}
