class DirInput {
  constructor() {
    this.direction = null;
    this.action = null;
    this.inventorySelection = 0;
    this.keyMap = {
      "KeyW": "up",
      "KeyA": "left",
      "KeyS": "down",
      "KeyD": "right",
      "Space": "action",
      "Digit1": 0, //inventory index number
      "Digit2": 1,
      "Digit3": 2,
      "Digit4": 3,
      "Digit5": 4,
      "Digit6": 5,
      "Digit7": 6,
      "Digit8": 7,
      "Digit9": 8,
      "Digit0": 9,
    };
  }

  initialize() {
    document.addEventListener("keydown", e => {
      if (e.code.includes("Digit")) {
      // if (e.code === "Digit1" || e.code === "Digit2" || e.code === "Digit3") {
        this.inventorySelection = this.keyMap[e.code];
      } else if (e.code === "Space") {
        e.preventDefault();
        this.action = this.keyMap[e.code];
      } else {
        this.direction = this.keyMap[e.code];
      }
    });

    document.addEventListener("keyup", e => {
      if (e.code === "Space") {
        this.action = null;
      } else {
        this.direction = null;
      }
    });
  }

}

export default DirInput;