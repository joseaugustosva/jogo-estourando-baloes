var audio = new Audio("/jogo-estourando-baloes/audio/highway-167255.mp3");

play = false;

audio.play();

document.querySelector("#play").addEventListener("click", () => {
  if (play) return;

  audio.play();

  play = true;
});

document.querySelector("#pause").addEventListener("click", () => {
  audio.pause();

  play = false;
});
