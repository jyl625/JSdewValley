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
  

    playPauseContainerEle.addEventListener("click", e => {
      e.stopPropagation();
      const playPauseButton = playPauseContainerEle.querySelector("img");

      //if Play is clicked
      if (gameControl.isPaused === true) {
  
        playPauseButton.src = "./dist/assets/pause.png";

        gameControl.isPaused = false;
        utils.makeTimeBlink("green");

        canvasOverlayEle.style.opacity = "0";
        toolBeltOverlayEle.style.opacity = "0";
        
      } else { //if Pause if clicked


        playPauseButton.src = "./dist/assets/play.png";

        gameControl.isPaused = true;
        utils.makeTimeBlink("red");

        canvasOverlayEle.style.opacity = "0.95";
        toolBeltOverlayEle.style.opacity = "0.95";

      }
      playPauseButton.classList.toggle(".play");
      playPauseButton.classList.toggle(".pause");

      //rename start button as resume game and adding restart/quit button after game has started
      
      const canvasOverlayEleChildrenLength = element.querySelector("#canvas-overlay").children.length;
      if (canvasOverlayEleChildrenLength === 1 || canvasOverlayEleChildrenLength === 4) {
        const restartQuitButtonEle =this.createRestartQuitButton();
        canvasOverlayEle.append(restartQuitButtonEle);

        resumeButtonEle.innerHTML = "RESUME GAME";

        //if restart button is clicked
        restartQuitButtonEle.addEventListener("click", e => {
          e.stopPropagation();

          restartQuitButtonEle.remove();
          resumeButtonEle.innerHTML = "START GAME";

          game.restart();

    
        });

      }

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

        //remove previous score buttons
        if (element.querySelector("#toatlScoreEle")) {
          element.querySelector("#totalProfit").remove();
          element.querySelector("#totalDays").remove();
          element.querySelector("#toatlScoreEle").remove();
        }
      } 
    });

    //add pop-up instructions
    const howToPlayEle = element.querySelector("#instructions");
    howToPlayEle.addEventListener("click", e => {
      e.stopPropagation();
      // gameControl.isPaused = true;
      const canvasContainerEle = element.querySelector(".canvas-container");
      if (canvasContainerEle.children.length === 2) {

        const gameInstructionOne = document.createElement("div");
        const gameInstructionTwo = document.createElement("div");
        const gameInstructionThree = document.createElement("div");
        const gameInstructionFour = document.createElement("div");
        const gameInstructionFive = document.createElement("div");
        const gameInstructionClose = document.createElement("div");

        gameInstructionOne.classList.add("instruction")
        gameInstructionTwo.classList.add("instruction")
        gameInstructionThree.classList.add("instruction")
        gameInstructionFour.classList.add("instruction")
        gameInstructionFive.classList.add("instruction")

        gameInstructionOne.innerHTML = "Press W,A,S,D to MOVE around";
        gameInstructionTwo.innerHTML = "Press any of 1~0 NUM KEYS to select SEEDS/TOOL";
        gameInstructionThree.innerHTML = "Press SPACE BAR to either PLANT/HARVEST";
        gameInstructionFour.innerHTML = "CLICK on Store to BUY seeds or SELL crops!";
        gameInstructionFive.innerHTML = "But ACT FAST because crop prices change DAILY and a day in the life of a farmer goes by QUICKER than you think! ";
        gameInstructionClose.innerHTML = "CLOSE";
        gameInstructionClose.id = "close-instructions";

        const gameInstructions = document.createElement("div");
        gameInstructions.id = "game-instructions";

        gameInstructions.append(gameInstructionOne, gameInstructionTwo, gameInstructionThree, gameInstructionFour, gameInstructionFive, gameInstructionClose);
        canvasContainerEle.append(gameInstructions);

        gameInstructionClose.addEventListener("click", e => {
          e.stopPropagation();
          // gameControl.isPaused = false;
          gameInstructions.remove();
        });
      }
    });
  },

  createRestartQuitButton() {
    const newRestartQuitButton = document.createElement("button");
    newRestartQuitButton.id = "restart-button";
    newRestartQuitButton.innerHTML = "RESTART/QUIT";
    return newRestartQuitButton;
  },

  updateHUD(option) {
    this.hudEleLeft = document.querySelector(".hud-left");
    this.hudEleRight = document.querySelector(".hud-right");

    // For Development Only: show seconds
    // this.hudEleLeft.innerHTML = `Day: ${option.gameWorld.gameDays} Seconds: ${option.gameWorld.seconds}`;

    this.hudEleLeft.innerHTML = `Day: ${option.gameWorld.gameDays}`;
    this.hudEleRight.innerHTML = `$ ${option.player.money}`;
  },
};

export default gameControl;