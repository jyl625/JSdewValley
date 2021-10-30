const PlantSprite = require("./plant_sprite");

function PlantObject (option) {
  this.x = option.x;
  this.y = option.y;
  this.sprite = new PlantSprite({
    plantObject: this,
    src: option.src,
  });

}

module.exports = PlantObject;