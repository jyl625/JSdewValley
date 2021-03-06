import Potato from "./potato";
import Tomato from "./tomato";
import utils from "./utils";
import gameControl from "./game_control";


const maxNumItems = 10;

class Store {
  constructor(option) {
    this.storeEle = option.element.querySelector(".store");
    this.storeEle.classList.add("buy-selected");
    this.player = option.player;
    this.forSaleCount = {}; //ex {Potato: [count, PotatoConstructor]}
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

      if (Store.masterStoreList[i - 2]) {
        storeItem.dataset.listIdx = i - 2;
        storeItem.innerHTML = `$${Store.masterStoreList[i - 2].seedPrice}`;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");

        const itemImg = document.createElement("img");
        itemImg.src = Store.masterStoreList[i - 2].src;

        imgContainer.append(itemImg);
        storeItem.append(imgContainer);
        // storeItem.append(itemImg);
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

      // { Potato: [count, PotatoConstructor] }

      if (Store.masterStoreList[i - 2]) {
        storeItem.dataset.listIdx = i - 2;

        const currentSellPrice = Store.masterStoreList[i - 2].sellPrice;
        const deltaPrice = currentSellPrice - Store.masterStoreList[i - 2].seedPrice;

        if (deltaPrice > 0) {
          storeItem.innerHTML = `$${currentSellPrice}(+${deltaPrice})`;
          storeItem.classList.add("green-price");
        } else if (deltaPrice === 0) {
          storeItem.innerHTML = `$${currentSellPrice}(-)`;
        } else {
          storeItem.innerHTML = `$${currentSellPrice}(${deltaPrice})`;
          storeItem.classList.add("red-price");
        }


        storeItem.dataset.cropType = Store.masterStoreList[i - 2].name;

        const itemImg = document.createElement("img");
        itemImg.src = Store.masterStoreList[i - 2].ripeSrc;



        const cropKey = Store.masterStoreList[i - 2].name;

 

        let cropCount = 0;
        if (this.forSaleCount[cropKey]) {
          cropCount = this.forSaleCount[cropKey][0];
        }

        const itemCount = document.createElement("div"); 
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

    } else {
      if (gameControl.isPaused) return;
      if ( clickedItem.classList.contains("store-item-buy") ) {
        const idx = parseInt(clickedItem.dataset.listIdx);
        this.purchaseItem(idx);
      } else if (clickedItem.classList.contains("store-item-sell")) {
        const cropType = clickedItem.dataset.cropType;


        this.sellItem({
          cropType: cropType,
          clickedItem: clickedItem
        });

  
      }
    }
  }

  sellItem(option) {
    
    let itemCount = parseInt(option.clickedItem.querySelector(".itemCount").innerHTML.split("x")[1]);
    if (itemCount >= 1) {


      let i = this.player.forSale.length - 1;
      while (i >= 0) {
        if (this.player.forSale[i].constructor.name === option.cropType) {
          this.player.money += this.player.forSale[i].constructor.sellPrice;
          this.player.forSale.splice(i, 1);

          utils.makeMoneyBlink("green");

          break;
        }
        i--;
      }
      itemCount--;
      option.clickedItem.querySelector(".itemCount").innerHTML = `x${itemCount}`;

      this.updateForSaleByCount();
    } 
    if (itemCount === 0) {
  
      utils.makeSellCountBlinkRedOn(option.clickedItem.querySelector(".itemCount"));
    }
  }

  purchaseItem(idx) {
    const selectedItem = Store.masterStoreList[idx];

    if (selectedItem) {
      if (this.player.money >= selectedItem.seedPrice) {
        if (this.player.toolBelt.addToolBeltElements(selectedItem)) {

          this.player.money -= selectedItem.seedPrice;
          if (this.player.money === 0) utils.makeMoneyBlink("red");
        } else {
    
          utils.makeToolBeltBlinkRed();
        }
      } else {

        utils.makeMoneyBlink("red");
      }
    }
  }

  updateForSaleByCount() {
    this.forSaleCount = {};
    this.player.forSale.forEach( crop => {
 
      const cropName = crop.constructor.name;

      //get the count of crop and update
      if (!this.forSaleCount[cropName]) {

        this.forSaleCount[cropName] = [0, crop.constructor];
      }
      this.forSaleCount[cropName][0]++;
    } );
  }

  updateSellPrices() {
    Store.masterStoreList.forEach(plantClass => {
      plantClass.updateSellPrice();
    });
    this.renderStore();
  }

  resetSellPrices() {
    Store.masterStoreList.forEach(plantClass => {
      plantClass.resetSellPrice();
    });
  }

  reset() {
    this.storeEle.innerHTML = "";
    this.resetSellPrices();
    this.forSaleCount = {};

    //rending store with buy tab selected
    this.renderStoreTabHTMLElements();
    this.storeEle.classList.add("buy-selected");
    this.renderBuyHTMLElements();
  }
}

Store.masterStoreList = [Potato, Tomato];

export default Store;