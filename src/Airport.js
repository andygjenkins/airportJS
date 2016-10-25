function Airport(){
}

var planes = [];

Airport.prototype.land_plane =function(plane){
  planes.push(plane);
  return planes;
}

Airport.prototype.planes = function(){
  return planes;
}
