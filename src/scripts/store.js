import Potato from "./potato";
import Tomato from "./tomato";
import Player from "./player";

const masterStoreList = [Potato, Tomato];
const maxNumItems = 10;

class Store {
  constructor(option) {
    this.storeEle = option.element.querySelector(".store");
    this.storeEle.classList.add("buy-selected");
    this.player = option.player;
    this.forSaleCount = {}; //ex {Potato: [money, count, PotatoConstructor]}
    this.renderStore();
  }

  renderStore() {
    this.storeEle.innerHTML = "";
    this.renderStoreTabHTMLElements();
    if (this.storeEle.classList.contains("buy-selected")){
      this.renderBuyHTMLElements();
    } else {
      this.renderSellHTMLElements();
    }
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
          storeTab.id = "store-buy-tab";
          storeTab.innerHTML = "Buy";
        } 
        if (i === 1) { 
          storeTab.classList.add("sell");
          storeTab.id = "store-sell-tab";
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
      storeItem.classList.add("store-item-buy");
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
    this.updateForSaleByCount();

    for (let i = 2; i < maxNumItems + 2; i++) {
      const storeItem = document.createElement("div");
      storeItem.classList.add("store-item-sell");
      storeItem.id = `store-item-slot-${i - 1}`;

      // { Potato: [money, count, PotatoConstructor] }
      if (i - 2 < Object.keys(this.forSaleCount).length) {
        const cropKey = Object.keys(this.forSaleCount)[i - 2];
        // this is really unnecessary, need to refactor later
        const cropPrice = this.forSaleCount[cropKey][0];
        const cropCount = this.forSaleCount[cropKey][1];
        const imgSrc = this.forSaleCount[cropKey][2].ripeSrc;
        console.log(this.forSaleCount[cropKey][2]);
        storeItem.innerHTML = `$${cropPrice}`;

        const itemImg = document.createElement("img");
        itemImg.src = imgSrc;

        const itemCount = document.createElement("div"); //might need to change the class name
        itemCount.className = "itemCount";
        itemCount.innerHTML = `x${cropCount}`;

        storeItem.append(itemImg);
        storeItem.append(itemCount);

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

    //Store Tab Selected
    if (clickedItem.classList.contains("store-tab")) {

      this.storeEle.innerHTML = "";
      this.renderStoreTabHTMLElements();

      if (clickedItem.classList.contains("buy")) {
        this.storeEle.classList.add("buy-selected");
        this.renderBuyHTMLElements();
      } else {
        this.storeEle.classList.remove("buy-selected");
        console.log("before sale")
        console.log(this.player.forSale);
        console.log(this.forSaleCount);

        //NEED TO SELL HERE
        this.renderSellHTMLElements();

        console.log("after sale")
        console.log(this.player.forSale);
        console.log(this.forSaleCount);
      }

    //Item Selected
    } else {
      if ( clickedItem.classList.contains("store-item-buy") ) {
        console.log("We are buying");
        const idx = parseInt(clickedItem.dataset.listIdx);
        this.purchaseItem(idx);
      } else {
        // I M HERE NOW - NEED TO SELL
      }
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
 
      const cropName = crop.constructor.name;

      //get the count of crop and update
      if (!this.forSaleCount[cropName]) {
        const price = crop.price();

        this.forSaleCount[cropName] = [price, 0, crop.constructor];
      }
      this.forSaleCount[cropName][1]++;
    } );
  }
}

export default Store;