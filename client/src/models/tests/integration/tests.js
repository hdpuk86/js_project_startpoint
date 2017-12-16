var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('space oddity functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should have hidden hover div on creation of planet', function(){
    var planet = element(by.css('#circle_Earth'));
    var stats = element(by.css('#hover_Earth_div'));
    expect(stats.getCssValue('visibility')).to.eventually.equal('hidden');
  });

  it('should have hover event over planet', function(){
    var planet = element(by.css('#circle_Earth'));
    var stats = element(by.css('#hover_Earth_div'));
    browser.actions().mouseMove(planet).perform();
    expect(stats.getCssValue('visibility')).to.eventually.equal('visible');
  });

  it('should have click event on planet', function(){
    var popup = element(by.css('.popup'));
    var planet = element(by.css('#circle_Earth'));
    planet.click();
    expect(popup.getCssValue('display')).to.eventually.equal('block');
  });

  it('should set display to none for planet popup on out of popup window click event', function(){
    var popup = element(by.css('.popup'));
    var planet = element(by.css('#circle_Earth'));
    var pluto = element(by.css('#circle_Pluto'));
    planet.click();
    browser.actions().mouseMove({x: 400, y: 400}).doubleClick().perform();
    // pluto.click();
    expect(popup.getCssValue('display')).to.eventually.equal('none');
  });

  it('should set display to none for planet popup on close click event', function(){
    var popup = element(by.css('.popup'));
    var planet = element(by.css('#circle_Earth'));
    planet.click();
    var span = element(by.css('.close-popup'));
    span.click();
    expect(popup.getCssValue('display')).to.eventually.equal('none');
  });


});
