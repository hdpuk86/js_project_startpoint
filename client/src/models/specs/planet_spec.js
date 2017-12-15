var assert = require('assert');
var Planet = require('../planet');

describe('Planet', function() {
  describe('Instance Variables', function() {
    var jupiter;

    beforeEach(function() {
      var jupiterSpecs = {
        name: 'Jupiter',
        radius: 40,
        numMoons: 69,
        image: '\/images\/jupiter.png',
        dayLength: 10,
        yearLength: 4333,
        composition: {
          hydrogen: 92,
          helium: 8,
        },
        gravity: 2.528,
      }
      jupiter = new Planet(jupiterSpecs);
    });

    it('should have a radius', function() {
      assert.strictEqual(jupiter.radius, 40);
    });

    it('should have a name', function(){
      assert.strictEqual(jupiter.name, "Jupiter");
    });

    it('should have an image url', function(){
      assert.strictEqual(jupiter.image, "\/images\/jupiter.png");
    });

    it('should have a day length', function(){
      assert.strictEqual(jupiter.dayLength, 10);
    });

    it('should have a year length', function() {
      assert.strictEqual(jupiter.yearLength, 4333);
    });

    it('should have a composition which have names and a percent', function(){
      assert.strictEqual(Object.keys(jupiter.composition).length, 2);
      assert.strictEqual(jupiter.composition.hydrogen, 92);
      assert.strictEqual(jupiter.composition.helium, 8);
    });

    it('should have a number of moons', function(){
      assert.strictEqual(jupiter.numMoons, 69);
    });

    it('should have a gravity', function() {
      assert.strictEqual(jupiter.gravity, 2.528);
    });
  });
});
