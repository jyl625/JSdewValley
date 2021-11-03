const utils = {
  gridVal(n) {
    return n * 16;
  },

  rounded(pixel) {
    return Math.floor((pixel + 8) / 16) * 16;
  },

  makeMoneyBlink(color) {
    const hudEle = document.querySelector(".hud-right");
    hudEle.classList.add(`hud-right-blink-${color.toLowerCase()}`);
    setTimeout(() => {
      hudEle.classList.remove(`hud-right-blink-${color.toLowerCase()}`);
    }, 1500);
  },

  makeToolBeltBlinkRed() {
    const toolBeltEle = document.querySelector(".tool-belt");
    toolBeltEle.classList.add("tool-belt-blink-red");
    setTimeout(() => {
      toolBeltEle.classList.remove("tool-belt-blink-red");
    }, 1500);
  },


  randomGuassian(num) {
    let numLoops = 10;
    let sum = 0;
    for(let i = 0; i < numLoops; i++ ) {
      sum += Math.random();
    }
    return Math.round(sum / numLoops * 2 * num);
  }


};

export default utils;