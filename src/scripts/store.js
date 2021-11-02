import Potato from "./potato";
import Tomato from "./tomato";
// import Player from "./player";

const masterStoreList = [Potato, Tomato];
const maxNumItems = 10;

class Store {
  constructor(option) {
    this.storeEle = option.element.querySelector(".store");
    this.player = option.player;
    this.createStoreHTMLElements();
    // this.bindEvents();
  }


  createStoreHTMLElements() {
    console.log("creating")
    for(let i = 0; i < maxNumItems + 2; i++) {
      if (i < 2) {
        const storeTab = document.createElement("div");
        storeTab.classList.add("store-tab");
        if (i === 0) {
          storeTab.classList.add("buy", "selected");
          storeTab.id = "store-buy";
          storeTab.innerHTML = "Buy";
        } 
        if (i === 1) { 
          storeTab.classList.add("sell");
          storeTab.id = "store-sell";
          storeTab.innerHTML = "Sell";
        }

        this.bindEvents(storeTab);

        this.storeEle.append(storeTab);
        
      } else {
        const storeItem = document.createElement("div");
        storeItem.classList.add("store-item");

        storeItem.id = `store-item-slot-${i-1}`;
        if (masterStoreList[i-2]) {
          storeItem.dataset.listIdx = i - 2;
          storeItem.innerHTML = `$${masterStoreList[i-2].price}`;

          const itemImg = document.createElement("img");
          itemImg.src = masterStoreList[i - 2].src;

          storeItem.append(itemImg);
        } else {
          storeItem.innerHTML = `??`;
        }

        this.bindEvents(storeItem);

        this.storeEle.append(storeItem);
      }
    }
  }


  bindEvents(storeGrid) {
    storeGrid.addEventListener("click", this.handleStoreClick.bind(this));
  }



  handleStoreClick(e) {
    e.stopPropagation();
    const clickedItem = e.currentTarget;

    console.log(clickedItem);
    if (clickedItem.classList.contains("store-tab")) {
      if (clickedItem.classList.contains("selected")) {
        console.log("it's a tab! and already selected");
      } else {
        console.log("it's a tab! and not selected yet");
      }
    } else {
      const idx = parseInt(clickedItem.dataset.listIdx);
      console.log(`it's slot # ${idx}`);
      this.purchaseItem(idx);
    }
  }

  purchaseItem(idx) {
    const selectedItem = masterStoreList[idx]
    console.log(this.player.money);
    if (this.player.money > selectedItem.price) {
      console.log(`Can buy ${selectedItem.name}`);
      this.player.money -= selectedItem.price;
      
      this.player.toolbelt.addToolBeltElements(selectedItem);
    }
  }
}

export default Store;