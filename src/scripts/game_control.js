import utils from "./utils";
import Game from "./game";

const gameControl = {
  isPaused: true,

  initialize(option) {
    const element = option.element;
    const game = option.game;

    const playPauseContainerEle = element.querySelector("#play-pause-container");
    const canvasOverlayEle = element.querySelector("#canvas-overlay");
    const toolBeltOverlayEle = element.querySelector("#tool-belt-overlay");

    const resumeButtonEle = element.querySelector("#resume-button");
    const restartQuitButtonEle = element.querySelector("#restart-button");

    playPauseContainerEle.addEventListener("click", e => {
      e.stopPropagation();
      const playPauseButton = playPauseContainerEle.querySelector("img");
      if (gameControl.isPaused === true) {
  
        playPauseButton.src = "./dist/assets/pause.png";

        gameControl.isPaused = false;
        utils.makeTimeBlink("green");

        canvasOverlayEle.style.opacity = "0";
        toolBeltOverlayEle.style.opacity = "0";
        
      } else {

        playPauseButton.src = "./dist/assets/play.png";

        gameControl.isPaused = true;
        utils.makeTimeBlink("red");

        canvasOverlayEle.style.opacity = "0.80";
        toolBeltOverlayEle.style.opacity = "1";

      }
      playPauseButton.classList.toggle(".play");
      playPauseButton.classList.toggle(".pause");
    });

    resumeButtonEle.addEventListener("click", e => {
      e.stopPropagation();
      const playPauseButton = playPauseContainerEle.querySelector("img");
      if (gameControl.isPaused === true) {

        playPauseButton.src = "./dist/assets/pause.png";

        gameControl.isPaused = false;
        utils.makeTimeBlink("green");

        canvasOverlayEle.style.opacity = "0";
        toolBeltOverlayEle.style.opacity = "0";
      } 
    });

    restartQuitButtonEle.addEventListener("click", e=> {
      e.stopPropagation();
      // Game.restart();
      game.restart();
    });
  },

  // restart(game) {
  //   console.log(game);
  //   game.restart();
  // },

  // handleGamePausePlay(e, )

  updateHUD(option) {
    this.hudEleLeft = document.querySelector(".hud-left");
    this.hudEleRight = document.querySelector(".hud-right");

    this.hudEleLeft.innerHTML = `Day: ${option.gameWorld.gameDays} Seconds: ${option.gameWorld.seconds}`;
    this.hudEleRight.innerHTML = `$ ${option.player.money}`;
  },
};

export default gameControl;