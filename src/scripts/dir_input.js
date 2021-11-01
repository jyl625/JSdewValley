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
      "Digit1": 0,
      "Digit2": 1,
    };
  }

  // direction() {
  //   return this.direction;
  // }

  // action() {
  //   return this.action;
  // }

  initialize() {
    document.addEventListener("keydown", e => {
      if (e.code === "Digit1" || e.code === "Digit2") {
        this.inventorySelection = this.keyMap[e.code];
      } else if (e.code === "Space") {
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