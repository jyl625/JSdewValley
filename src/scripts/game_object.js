class GameObject {
  constructor(option) {
    this.x = option.x;
    this.y = option.y;
  }

  update() {
    // will be over-written in subclass
  }
}

export default GameObject;