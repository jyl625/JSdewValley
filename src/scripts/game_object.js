const Sprite = require("./sprite");

function GameObject (option) {
  this.x = option.x;
  this.y = option.y;
  this.sprite = new Sprite({
    gameObject: this,
    src: option.src,
  });

  console.log(this.x);
  console.log(this.y);
}

module.exports = GameObject;