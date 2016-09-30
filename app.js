(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var showBuyList = this;

  showBuyList.BuyList = ShoppingListCheckOffService.getBuyList();

  showBuyList.removeItem = function(buyIndex, buyName, buyQuantity){
		ShoppingListCheckOffService.removeItem(buyIndex, buyName, buyQuantity);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;

  showBoughtList.BoughtList = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService (){
  var service = this;
  var BuyList = [
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Milk",
      quantity: "400"
    },
    {
      name: "Bread",
      quantity: "50"
    },
    {
      name: "Vanilla",
      quantity: "17"
    },
    {
      name: "Cola",
      quantity: "800"
    }
  ];

  var BoughtList = [];

  service.getBuyList = function (){
    return BuyList;
  };

  service.getBoughtList = function (){
    return BoughtList;
  };

  service.removeItem = function(buyIndex, buyName, buyQuantity){
    BuyList.splice(buyIndex, 1);

     var bought = {
       name: buyName,
       quantity: buyQuantity
     };

     BoughtList.push(bought);
  };

}

})();
