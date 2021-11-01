//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class ToolBelt {
  constructor(element) {
    this.toolBeltEle = element.querySelector(".tool-belt");
    this.inventory = [Potato, Tomato, Tool];
    this.invImgSrc = [
      { Potato: '././dist/assets/crops/potato.png'},
      { Tomato: '././dist/assets/crops/tomato.png'}
    ]
    this.createToolBeltElements();
  }


  //Create toobelt HTML elements
  createToolBeltElements (){
    for (let idx = 0; idx < 10; idx++) {
      const invSlot = document.createElement("div");
      invSlot.id = `invSlot-${idx}`;
      invSlot.class = 'invSlot';
      invSlot.innerHTML = idx + 1;
      if (idx + 1 === 10) invSlot.innerHTML = 0;

      const invImg = document.createElement("img")
      if (idx < this.inventory.length) {
        console.log(this.inventory[idx].src);
        const src = Potato.src;
        invImg.src = this.inventory[idx].src;
      }
      invSlot.append(invImg);
      invSlot.class = "invCanvas";
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