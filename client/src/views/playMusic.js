var isPlaying = false;

var playMusic = function(event, src){
  var audio = document.getElementById('elton');
  if(!isPlaying && event.keyCode === 32){
    audio.play();
    isPlaying = true;
  } else if(isPlaying && event.keyCode === 32){
    audio.pause();
    isPlaying = false;
  };
};

module.exports = playMusic;
