import Player from "./player";
import PlantObject from "./plant_object";
import utils from "./utils";


class GameWorld {
  constructor(option) {
    this.gameObjects = option.gameObjects;
    
    this.farmMap = new Image();
    this.farmMap.src = option.src;
  }

  draw(ctx) {
    ctx.drawImage(this.farmMap, 0, 0);
  }
}

window.GameWorldMaps = {
  FarmDefault: {
    src: '././dist/assets/farm_dev.png',
    gameObjects: {
      // create play 1
      potato: new PlantObject({
        x: utils.gridVal(2), y: utils.gridVal(2), src: '././dist/assets/crops/potato.png'
      }),
      
      // create plant 2
      tomato: new PlantObject({
        x: utils.gridVal(3), y: utils.gridVal(3), src: '././dist/assets/crops/tomato.png'
      }),

      // create player
      player: new Player({
        x: utils.gridVal(5), y: utils.gridVal(4), src: '././dist/assets/player_1.png'
      })
    }
  }
};




// function GameWorld (option) {
//   this.gameObjects = option.gameObjects;

//   this.farmMap = new Image();
//   this.farmMap.src = option.src;

//   // farm.src = '././dist/assets/farm_dev.png';
// }

// GameWorld.prototype.drawFarm = function (ctx) {
//   ctx.drawImage(this.farmMap, 0, 0);
// }

// window.GameWorldMaps = {
//   FarmDefault: {
//     src: '././dist/assets/farm_dev.png',
//     gameObjects: {
//       player: new GameObject({
//         x: 5, y: 4, src: '././dist/assets/character.png'
//       }),


//       potato: new PlantObject({
//         x: 2, y: 2, src: '././dist/assets/crops/potato.png'
//       }),


//       tomato: new PlantObject({
//         x: 3, y: 3, src: '././dist/assets/crops/tomato.png'
//       })
//     }
//   }
// };

export default GameWorld;