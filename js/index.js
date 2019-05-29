'use strict';

;(function (Vue) {

  Vue.component('cards', {
    template: '#cards',
    data: function data() {
      return {
        quantity: 13,
        items: [{ name: 'spades', color: 'black' }, { name: 'hearts', color: 'red' }, { name: 'diamonds', color: 'red' }, { name: 'clubs', color: 'black' }],
        cardsData: new Object()

      };
    },
    mounted: function mounted() {
      this.cardsData = this.cardsDataHandler();
    },

    methods: {
      cardCenterHandler: function cardCenterHandler(num) {
        switch (num) {
          case 0:
            return [{ left: '50%', top: '50%' }];
          case 1:
            return [{ left: '50%', top: '20%' }, { left: '50%', top: '80%', flip: true }];
          case 2:
            return [{ left: '50%', top: '50%' }, { left: '50%', top: '20%' }, { left: '50%', top: '80%', flip: true }];
          case 3:
            return [{ left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
          case 4:
            return [{ left: '50%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
          case 5:
            return [{ left: '33%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '50%' }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
          case 6:
            return [{ left: '33%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '50%' }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }, { left: '50%', top: '35%' }];
          case 7:
            return [{ left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
          case 8:
            return [{ left: '50%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
          case 9:
            return [{ left: '50%', top: '35%' }, { left: '50%', top: '65%', flip: true }, { left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
        }
      },
      selectHandler: function selectHandler(item) {
        item.active = !item.active;
      },
      cardsDataHandler: function cardsDataHandler() {
        var i = 0,
            end = this.items.length,
            cardArray = new Array();
        for (; i < end; i++) {
          var target = this.items[i];
          for (var j = 0; j < this.quantity; j++) {
            var obj = new Object();
            obj.name = target.name;
            obj.color = target.color;
            // 數字替代
            obj.num = function (j) {
              switch (j) {
                case 0:
                  return 'A';
                case 10:
                  return 'J';
                case 11:
                  return 'Q';
                case 12:
                  return 'K';
                default:
                  return '' + (j + 1);
              }
            }(j);
            obj.symbols = this.cardCenterHandler(j);
            obj.active = false;
            cardArray.push(obj);
          }
        }
        cardArray.sort(function (a, b) {
          return Math.random() > 0.5 ? 1 : -1;
        });
        return cardArray;
      }
    }
  });

  var vm = new Vue({
    el: '#app',
    data: function data() {
      return {};
    }
  });
})(Vue);