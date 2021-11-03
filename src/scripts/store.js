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

        storeItem.dataset.cropType = this.forSaleCount[cropKey][2].name;

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
        storeItem.innerHTML = `---`;
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
        this.storeEle.classList.remove("sell-selected");
        this.renderBuyHTMLElements();
      } else {
        this.storeEle.classList.remove("buy-selected");
        this.storeEle.classList.add("sell-selected");

        this.renderSellHTMLElements();
      }

    //Item Selected
    } else {
      if ( clickedItem.classList.contains("store-item-buy") ) {
        const idx = parseInt(clickedItem.dataset.listIdx);
        this.purchaseItem(idx);
      } else if (clickedItem.classList.contains("store-item-sell")) {
        const cropType = clickedItem.dataset.cropType;

        // console.log("before sale")
        // console.log(this.player.forSale);
        // console.log(this.forSaleCount);

        this.sellItem({
          cropType: cropType,
          clickedItem: clickedItem
        });

        // console.log("after sale")
        // console.log(this.player.forSale);
        // console.log(this.forSaleCount);
      }
    }
  }

  sellItem(option) {
    if (option.cropType) {
      console.log(option.cropType);
      console.log(option.clickedItem);

      let i = this.player.forSale.length - 1;
      while (i >= 0) {
        if (this.player.forSale[i].constructor.name === option.cropType) {
          this.player.money += this.player.forSale[i].sellPrice();
          this.player.forSale.splice(i, 1);

          //make money blink
          const hudEle = document.querySelector(".hud-right");
          hudEle.classList.add("hud-right-blink-green");
          setTimeout(() => {
            hudEle.classList.remove("hud-right-blink-green");
          }, 1500);

          break;
        }
        i--;
      }

      let itemCount = parseInt(option.clickedItem.querySelector(".itemCount").innerHTML.split("x")[1]);
      if (itemCount <= 1) {
        option.clickedItem.innerHTML = "---";
        delete option.clickedItem.dataset.cropType; 
      } else {
        option.clickedItem.querySelector(".itemCount").innerHTML = `x${itemCount - 1}`;
      }
      this.updateForSaleByCount();
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

          const toolBeltEle = document.querySelector(".tool-belt");
          toolBeltEle.classList.add("tool-belt-blink-red");
          setTimeout(() => {
            toolBeltEle.classList.remove("tool-belt-blink-red");
          }, 1500);

        }
      } else {
        console.log("not enough money");

        //make money blink
        const hudEle = document.querySelector(".hud-right");
        hudEle.classList.add("hud-right-blink-red");
        setTimeout( () => {
          hudEle.classList.remove("hud-right-blink-red");
        },1500 );
      }
    }
  }

  updateForSaleByCount() {
    this.forSaleCount = {};
    this.player.forSale.forEach( crop => {
 
      const cropName = crop.constructor.name;

      //get the count of crop and update
      if (!this.forSaleCount[cropName]) {
        const price = crop.sellPrice();

        this.forSaleCount[cropName] = [price, 0, crop.constructor];
      }
      this.forSaleCount[cropName][1]++;
    } );
  }
}

export default Store;