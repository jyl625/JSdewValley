const gameControl = {
  isPaused: true,

  updateHUD(option) {
    this.hudEleLeft = document.querySelector(".hud-left");
    this.hudEleRight = document.querySelector(".hud-right");

    this.hudEleLeft.innerHTML = `Day: ${option.gameWorld.gameDays} Seconds: ${option.gameWorld.seconds}`;
    this.hudEleRight.innerHTML = `$ ${option.player.money}`;
  },
};

export default gameControl;