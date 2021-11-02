//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class ToolBelt {
  constructor(element) {
    this.toolBeltEle = element.querySelector(".tool-belt");
    this.inventory = [
      [Tool, 1], 
      [Potato, 5], 
      [Tomato, 5]
    ];

    this.createToolBeltElements();
  }


  //Create toobelt HTML elements
  //DONT RUN THIS CONSTANTLY
  createToolBeltElements (){
    for (let idx = 0; idx < 10; idx++) {
      const invSlot = document.createElement("div");
      invSlot.id = `invSlot-${idx}`;
      invSlot.className = 'invSlot';

      invSlot.innerHTML = idx + 1;
      if (idx + 1 === 10) invSlot.innerHTML = 0;

      const invImg = document.createElement("img");
      const itemCount = document.createElement("div");
      invImg.className = "invImg";
      itemCount.className = "itemCount";

      if (idx < this.inventory.length) {
        invImg.src = this.inventory[idx][0].src;
        itemCount.innerHTML = `X ${this.inventory[idx][1]}`;
      }

      invSlot.append(invImg);
      invSlot.append(itemCount);

      this.toolBeltEle.append(invSlot);

    }
  }

  updateToolBeltElements () {
    this.toolBeltEle.innerHTML = "";
    this.removeZeroCountTools();
    this.createToolBeltElements();
  }

  removeZeroCountTools () {
    if (this.inventory.some( toolArr => toolArr[1]===0)){
      this.inventory = this.inventory.filter( toolArr => {
        return toolArr[1] >= 1;
      });
      console.log(this.inventory);
    }
  }

  highlight(option) {
    this.updateToolBeltElements();
    const toolBeltEleArr = this.toolBeltEle.children;
    const selectedSlot = option.selectedSlot;

    for (let idx = 0; idx < 10; idx++) {
      if (idx === selectedSlot) {
        toolBeltEleArr[idx].style.backgroundColor = "yellow";
      } else {
        toolBeltEleArr[idx].style.backgroundColor ="";
      }
    }


  }
}

export default ToolBelt;