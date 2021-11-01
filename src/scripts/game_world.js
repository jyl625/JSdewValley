import Player from "./player";
import utils from "./utils";
import Potato from "./potato";
import Tomato from "./tomato";


class GameWorld {
  constructor(option) {
    this.plantObjects = option.plantObjects;
    this.gameObjects = option.gameObjects;
    this.player = option.player;
    
    this.farmMap = new Image();
    this.farmMap.src = option.src;
  }

  draw(ctx) {
    ctx.drawImage(this.farmMap, 0, 0);
  }

  isEmptyPlot(pos) {
    return !this.plantObjects.some( plant => {
      return (plant.x === pos[0] && plant.y === pos[1]);
    } );
  }
}

window.GameWorldMaps = {
  FarmDefault: {
    src: '././dist/assets/farm_dev.png',
    plantObjects: [
      // create plant 1
      new Potato({
        x: utils.gridVal(2), y: utils.gridVal(2)
      }),

      // create plant 2
      new Tomato({
        x: utils.gridVal(3), y: utils.gridVal(3)
      })
    ],
    gameObjects: {
      // // create plant 1
      // potato: new Potato({
      //   x: utils.gridVal(2), y: utils.gridVal(2)
      // }),
      
      // // create plant 2
      // tomato: new Tomato({
      //   x: utils.gridVal(3), y: utils.gridVal(3)
      // }),

      // create player
    },
    player: new Player({
      x: utils.gridVal(5), y: utils.gridVal(4)
    })
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