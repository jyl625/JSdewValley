import Sprite from "./sprite";

class GameObject {
  constructor(option) {
    this.x = option.x;
    this.y = option.y;
    this.sprite = new Sprite({
      gameObject: this,
      src: option.src,
    });

  }
}

export default GameObject;