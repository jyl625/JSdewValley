//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class ToolBelt {
  constructor(element) {
    this.toolBeltEle = element.querySelector(".tool-belt");
    console.log(element.querySelector(".tool-belt"));
    this.inventory = [Potato, Tomato, Tool];
    //create HTML elements
    console.log(this.toolBeltEle);
    for (let idx = 0; idx < 10; idx++) {
      let invSlot = document.createElement("div");
      invSlot.innerHTML = idx;

      let invCanvas = document.createElement("canvas");
      invCanvas.width = 16;
      invCanvas.height = 16;
      invCanvas.class = "invSlot";
      invCanvas.id = `invSlot-${idx}`;
      invSlot.append(invCanvas);

      this.toolBeltEle.append(invSlot);
    }
  }
}

export default ToolBelt;