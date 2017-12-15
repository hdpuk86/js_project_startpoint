var Planet = function(object){
  if (!object) throw error;
  this.name = object.name;
  this.image = object.image;
  this.dayLength = object.dayLength;
  this.yearLength = object.yearLength
  this.numMoons = object.numMoons;
  this.composition = object.composition;
  this.gravity = object.gravity;
  this.radius = object.radius;
  this.distance = object.distance;
};

module.exports = Planet;
