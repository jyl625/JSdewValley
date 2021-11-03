//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class ToolBelt {
  constructor(element) {
    this.toolBeltEle = element.querySelector(".tool-belt");
    this.inventory = {
      0: [Tool, 1], 
      1: [Potato, 5], 
      2: [Tomato, 5],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    };

    this.createToolBeltElements();
  }

  //highlights toolbelt slot based on input
  highlight(option) {
    // this.updateToolBeltElements();
    const toolBeltEleArr = this.toolBeltEle.children;
    const selectedSlot = option.selectedSlot;

    for (let idx = 0; idx < 10; idx++) {
      if (idx === selectedSlot) {
        toolBeltEleArr[idx].style.backgroundColor = "yellow";
        // toolBeltEleArr[idx].style.outlineColor = "Red";
      } else {
        toolBeltEleArr[idx].style.backgroundColor = "";
        // toolBeltEleArr[idx].style.outlineColor ="";
      }
    }
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



      if (this.inventory[idx].length != 0) {
        invImg.src = this.inventory[idx][0].src;
        itemCount.innerHTML = `x${this.inventory[idx][1]}`;
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
    Object.keys(this.inventory).forEach(key => {
      if (this.inventory[key][1] === 0) {
        this.inventory[key] = [];
      }
    });
  }

  addToolBeltElements(selectedItem) {
    const toolBeltIdxOfPurchased = this.searchToolBeltIdxByItemName(selectedItem);
    if (toolBeltIdxOfPurchased !== -1) {
      this.inventory[toolBeltIdxOfPurchased][1]++;
      this.toolBeltEle.innerHTML = "";
      this.updateToolBeltElements();
      console.log("this should create tool belt elements");
      return true;
    } else {
      return this.addNewItemToToolBelt(selectedItem);
    }
  }

  searchToolBeltIdxByItemName(item) {
    let result = -1;
    Object.keys(this.inventory).forEach( toolBeltKey => {
      const tool = this.inventory[toolBeltKey][0];
      if (tool === item) result = toolBeltKey;
    } );
    return result;
  }

  addNewItemToToolBelt(item) {
    //[item, count]
    if (this.hasEmptySlots()) {
      console.log(this.emptyToolBeltIdx());
      this.inventory[this.emptyToolBeltIdx()] = [item, 1];
      this.updateToolBeltElements();
      return true;
    } else {
      return false;
    }
  }

  emptyToolBeltIdx() {
    for (let i = 0; i <= 9; i++) {
      console.log(this.inventory[i].length === 0);
      if (this.inventory[i].length === 0) return i;
    }

    return -1;
  }

  hasEmptySlots() {
    if (this.emptyToolBeltIdx() === -1) {
      return false;
    } else {
      return true;
    }
  }




}

export default ToolBelt;