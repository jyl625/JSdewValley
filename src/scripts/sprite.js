class Sprite {

  constructor (option) {
    this.img = new Image();
    this.img.src = option.src;
    this.img.onload = () => {
      this.isLoaded = true;
    };

    this.animations = {
      "idle-right": [ [0, 0] ],
      "walk-right": [ [1, 0], [2, 0], [3, 0], [0, 0] ],
      "idle-left": [ [0, 1] ],
      "walk-left": [ [1, 1], [2, 1], [3, 1], [0, 1] ],
      "idle-up": [ [0, 0] ],
      "walk-up": [ [1, 0], [2, 0], [3, 0], [0, 0] ],
      "idle-down": [ [0, 1] ],
      "walk-down": [ [1, 1], [2, 1], [3, 1], [0, 1] ]
    };
    this.currentAnimation = "idle-right";
    this.currentAnimationFrame = 0;

    this.animationFrameMax = 4;
    this.animationFrameRemaining = this.animationFrameMax;

    this.gameObject = option.gameObject;
  }

  frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key){
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameRemaining = this.animationFrameMax;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameRemaining > 0) {
      this.animationFrameRemaining -= 1;
    } else {
      this.animationFrameRemaining = this.animationFrameMax;
      this.currentAnimationFrame += 1;

      if (this.frame() === undefined) {
        this.currentAnimationFrame = 0;
      }
    }
  }

  draw(ctx) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 20;

    const frameX = this.frame()[0] * 32;
    const frameY = this.frame()[1] * 32;

    if (this.isLoaded) ctx.drawImage(this.img, frameX, frameY, 32, 32, x, y, 32, 32);

    this.updateAnimationProgress();
  }
}

export default Sprite;