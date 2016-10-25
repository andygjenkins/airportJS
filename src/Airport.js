function Airport(){

}

var planes = [];


Airport.prototype.landPlane =function(plane){
  if(weather === "stormy") {
    return "cannot land"
  }else {
    planes.push(plane);
  }
}

Airport.prototype.planes = function(){
  return planes;
}

Airport.prototype.takeOff = function(plane){
  planes.splice(plane);
}
