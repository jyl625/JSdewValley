import utils from "./utils";

const gameControl = {
  isPaused: true,

  initialize(element) {
    const playPauseContainerEle = element.querySelector("#play-pause-container");
    console.log(playPauseContainerEle);
    playPauseContainerEle.addEventListener("click", e => {
      e.stopPropagation();
      const playPauseButton = playPauseContainerEle.querySelector("img");
      if (this.isPaused === true) {
  
        playPauseButton.src = "./dist/assets/pause.png";

        this.isPaused = false;
        utils.makeTimeBlink("green");

      } else {

        playPauseButton.src = "./dist/assets/play.png";

        this.isPaused = true;
        utils.makeTimeBlink("red");
      }
      playPauseButton.classList.toggle(".play");
      playPauseButton.classList.toggle(".pause");
    });
  },

  updateHUD(option) {
    this.hudEleLeft = document.querySelector(".hud-left");
    this.hudEleRight = document.querySelector(".hud-right");

    this.hudEleLeft.innerHTML = `Day: ${option.gameWorld.gameDays} Seconds: ${option.gameWorld.seconds}`;
    this.hudEleRight.innerHTML = `$ ${option.player.money}`;
  },
};

export default gameControl;