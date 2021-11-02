//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class ToolBelt {
  constructor(element) {
    this.toolBeltEle = element.querySelector(".tool-belt");
    this.inventory = [
      [Tool, 1], 
      [Potato, 1], 
      [Tomato, 1]
    ];

    this.createToolBeltElements();
  }


  //Create toobelt HTML elements
  //DONT RUN THIS CONSTANTLY
  createToolBeltElements (){
    for (let idx = 0; idx < 10; idx++) {
      const invSlot = document.createElement("div");
      invSlot.id = `invSlot-${idx}`;
      invSlot.class = 'invSlot';

      invSlot.innerHTML = idx + 1;
      if (idx + 1 === 10) invSlot.innerHTML = 0;

      const invImg = document.createElement("img")
      if (idx < this.inventory.length) {
        invImg.src = this.inventory[idx][0].src;
      }

      invSlot.append(invImg);
      invSlot.class = "invImg";
      this.toolBeltEle.append(invSlot);

    }
  }

  highlight(option) {
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