
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ShoppingListCheckOffService() {
        var service = this;


        var toBuyItems = [
            {
                name: 'cookies',
                quantity: 25
            }, {
                name: 'chips',
                quantity: 5
            }, {
                name: 'soda',
                quantity: 10
            }, {
                name: 'cheese blocks',
                quantity: 4
            }, {
                name: 'donuts',
                quantity: 12
            }
        ];


        var boughtItems = [];


        service.checkOff = function (index) {

            var item = toBuyItems[index];
            toBuyItems.splice(index, 1);
            boughtItems.push(item);
        };


        service.getToBuyItems = function () {
            return toBuyItems;
        };


        service.getAlreadyBoughtItems = function () {
            return boughtItems;
        };

    };

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;


        toBuy.itemList = ShoppingListCheckOffService.getToBuyItems();


        toBuy.checkOff = function (index) {
            return ShoppingListCheckOffService.checkOff(index);
        };

    };


    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;


        alreadyBought.itemList = ShoppingListCheckOffService.getAlreadyBoughtItems();

    };

})();
