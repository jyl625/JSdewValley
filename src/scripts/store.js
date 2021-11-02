import Potato from "./potato";
import Tomato from "./tomato";
import Player from "./player";

const masterStoreList = [Potato, Tomato];
const maxNumItems = 12;

class Store {
  constructor(option) {
    this.storeEle = option.element.querySelector(".store");
    this.player = option.player;
    this.forSaleCount = {}; //ex {Potato: [money, count, PotatoConstructor]}
    this.renderStoreTabHTMLElements();
    this.renderBuyHTMLElements();
  }


  renderStoreTabHTMLElements() {
    console.log("creating")
    for(let i = 0; i < maxNumItems + 2; i++) {
      if (i < 2) {
        const storeTab = document.createElement("div");
        storeTab.classList.add("store-tab");
        if (i === 0) {
          storeTab.classList.add("buy");
          // storeTab.classList.add("buy", "selected");
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
      }
    }
  }

  // THIS IS FOR BUY!!!!//
  renderBuyHTMLElements() {
    for (let i = 2; i < maxNumItems + 2; i++) {
      const storeItem = document.createElement("div");
      storeItem.classList.add("store-item");

      storeItem.id = `store-item-slot-${i - 1}`;
      if (masterStoreList[i - 2]) {
        storeItem.dataset.listIdx = i - 2;
        storeItem.innerHTML = `$${masterStoreList[i - 2].price}`;

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

  renderSellHTMLElements() {
    for (let i = 2; i < maxNumItems + 2; i++) {
      const storeItem = document.createElement("div");
      storeItem.classList.add("store-item");

      storeItem.id = `store-item-slot-${i - 1}`;
      if (masterStoreList[i - 2]) {
        storeItem.dataset.listIdx = i - 2;
        storeItem.innerHTML = `$${masterStoreList[i - 2].price}`;

        const itemImg = document.createElement("img");
        itemImg.src = masterStoreList[i - 2].src;

        storeItem.append(itemImg);
      } else {
        storeItem.innerHTML = `XXX`;
      }

      this.bindEvents(storeItem);

      this.storeEle.append(storeItem);
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
      this.storeEle.innerHTML = "";
      this.renderStoreTabHTMLElements();
      if (clickedItem.classList.contains("buy")) {
        this.renderBuyHTMLElements();
      } else {
        this.updateForSaleByCount();
        console.log("will render sell items");
        this.renderSellHTMLElements();
        console.log(this.player.forSale);
        console.log(this.forSaleCount);
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
    if (selectedItem) {
      if (this.player.money >= selectedItem.price) {
        if (this.player.toolBelt.addToolBeltElements(selectedItem)) {
          console.log(`buying ${selectedItem.name}`);
          this.player.money -= selectedItem.price;
        } else {
          console.log("not enough room in toolbelt");
        }
      } else {
        console.log("not enough money");

        //make money blink
        const hudEle = document.querySelector(".hud-right");
        hudEle.classList.add("hud-right-blink");
        setTimeout( () => {
          hudEle.classList.remove("hud-right-blink");
        },1500 );
      }
    }
  }

  updateForSaleByCount() {
    this.player.forSale.forEach( crop => {
      console.log(crop.constructor.name);
      console.log(crop.price());
 
      const cropName = crop.constructor.name;

      //get the count of crop and update
      if (!this.forSaleCount[cropName]) {
        const price = crop.price();

        this.forSaleCount[cropName] = [price, 0, crop];
      }
      this.forSaleCount[cropName][1]++;

    } );
  }
}

export default Store;