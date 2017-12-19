var flatEarth = function(event) {
  if (event.keyCode === 45) {
    var circles = document.getElementsByClassName('circle');
    for (var circle of circles) {
      if (circle.id === 'circle_Earth') {
        circle.style.height = '2px';
      } else {
        circle.style.width = '2px';
      }
      circle.style.borderRadius = '0%';
    }
  } else if (event.keyCode === 111) {
    var circles = document.getElementsByClassName('circle');
    document.body.style.backgroundImage = "";
    for (var circle of circles) {
      if (circle.id === 'circle_Earth') {
        circle.style.height = circle.style.width;
      } else {
        circle.style.width = circle.style.height;
      }
      circle.style.borderRadius = '50%';
      circle.style.backgroundImage = "";
    }

  } else if (event.keyCode === 115) {
    var circles = document.getElementsByClassName('circle');
    for (var circle of circles) {
      circle.style.backgroundImage = `url(../images/${circle.id}.png)`;
      }
      document.body.style.backgroundImage = "url(../images/stars2.jpg)";
    }

}

module.exports = flatEarth;
