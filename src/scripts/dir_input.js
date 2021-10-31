class DirInput {
  constructor() {
    this.direction = null;
    this.keyMap = {
      "KeyW": "up",
      "KeyA": "left",
      "KeyS": "down",
      "KeyD": "right"
    };
  }

  direction() {
    return this.direction;
  }

  initialize() {
    document.addEventListener("keydown", e => {
      this.direction = this.keyMap[e.code];
    });
    document.addEventListener("keyup", e => {
      this.direction = null;
    });
  }

}

export default DirInput;