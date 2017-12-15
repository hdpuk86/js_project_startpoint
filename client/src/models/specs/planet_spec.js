var assert = require('assert');

describe('Planet', function() {
  describe('Instance Variables', function() {
    var jupiter;

    beforeEach(function() {
      jupiter = new Planet('Jupiter', 40);
    });

    it('should have a radius', function() {
      assert.strictEqual(jupiter.radius, 40);
    });

    xit('should have a name', function(){
      assert.strictEqual(jupiter.name, "Jupiter");
    });

    xit('should have an image url', function(){
      assert.strictEqual(jupiter.image, "\/images\/jupiter.png");
    });

    xit('should have a day length', function(){
      assert.strictEqual(jupiter.dayLength, 10);
    });

    xit('should have a year length', function() {
      assert.strictEqual(jupiter.yearLength, 4333);
    });

    xit('should have a composition which have names and a percent', function(){
      assert.strictEqual(jupiter.composition.length, 2);
      assert.strictEqual(jupiter.composition[0].name, "Hydrogen");
      assert.strictEqual(jupiter.composition[0].percent, 92);
    });

    xit('should have a number of moons', function(){
      assert.strictEqual(jupiter.numMoons, 69);
    });

    xit('should have a gravity', function() {
      assert.strictEqual(jupiter.gravity, 2.528);
    });
  });
});
