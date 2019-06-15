<template lang="pug">
  transition-group(class="card", tag="div", name="shuffle")
    .card-containt( v-for="(item, index) in cardsData", 
                    @click="selectHandler(item)", 
                    :class="item.active? 'card-containt--active' : ''", 
                    :key="item.name + item.text")
      .card-face
        .card-face__front(:class="['card-face__front--'+item.name, 'card-face__front--'+item.color]")
          .card-face__wrap
            .card-face__corner.card-face__corner--top.fz-24
              .card-num {{item.text}}
            .card-face__corner.card-face__corner--bottom.fz-24
              .card-num {{item.text}}
            .card-face__center(v-if="item.symbols")
              .card-face__symbol(v-for="symbol in item.symbols",
                                  :style="'left:' + symbol.left +'; top:' + symbol.top + ';'",
                                  :class="[{'card-face__symbol--flip' : symbol.flip}, item.text === 'A'? 'fz-72' : 'fz-36'] ")
            .card-face__center(v-else)
              .card-face__text.fz-52 {{item.text}}
        .card-face__back
          .card-face__wrap
</template>

<style lang="sass">
  @import ../assets/sass/variable/include

  .card
    margin: 
      top: 10vw
      bottom: 10vw
      left: -0.5vw
      right: -0.5vw
    font-family: 'Source Serif Pro', serif
    @media (max-width: 767.98px)
      margin-left: -1vw
      margin-right: -1vw
    &-containt
      float: left
      position: relative
      top: 0
      width: calc(16.667% - 1vw)
      margin: 0.5vw
      cursor: pointer
      transform-style: preserve-3d
      transition: 0.3s
      @media (max-width: 1365.98px)
        width: calc(20% - 1vw)
      @media (max-width: 1023.98px)
        width: calc(25% - 1vw)
      @media (max-width: 767.98px)
        width: calc(50% - 2vw)
        margin: 1vw
      &#{&}--active .card-face__front
        transform: rotateY(0)
      &#{&}--active .card-face__back
        transform: rotateY(180deg)
      &#{&}--active
        &:hover
          top: 0
      &:hover
        top: -0.5vw

    &-face
      position: relative
      padding-bottom: 133%
      &__front, &__back
        background-color: #efefef
        backface-visibility: hidden
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        transition: 0.5s
        padding: 8px
        border-radius: 6px
        box-shadow: 0 10px 20px rgba(black, 0.2)
      &__front &__wrap, &__back &__wrap
        position: relative
        width: 100%
        height: 100%
      &__front
        transform: rotateY(180deg)
        &--black
        &--red
          color: map-get($color, 'mainRed')
        &--spades 
          .card-face__corner:after, 
          .card-face__symbol:after
            content: "\02660"
        &--hearts 
          .card-face__corner:after,
          .card-face__symbol:after
            content: "\02665"
        &--diamonds 
          .card-face__corner:after,
          .card-face__symbol:after
            content: "\02663"
        &--clubs 
          .card-face__corner:after, 
          .card-face__symbol:after
            content: "\02666"
      &__back &__wrap
        border: 2px solid map-get($color, 'mainRed')
        background-image: linear-gradient(-60deg,transparent 40%,map-get($color, 'mainRed') 40%,map-get($color, 'mainRed') 60%,transparent 60%), linear-gradient(60deg,transparent 40%,map-get($color, 'mainRed') 40%,map-get($color, 'mainRed') 60%,transparent 60%)
        background-size: 8px 8px
      &__corner
        position: absolute
        font-weight: bold
        text-align: center
        &--top
          top: 10px
          left: 10px
        &--bottom
          bottom: 10px
          right: 10px
          transform: rotate(180deg)
      &__center
      &__symbol
        position: absolute
        transform: translate(-50%, -50%)
        &--flip
          transform: translate(-50%, -50%) rotate(180deg)
      &__text
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        font-weight: bold

  .shuffle
    &-move
      transition: transform 1s

</style>

<script>
  export default {
    name: 'Cards',
    props: {
      status: {
        type: Boolean,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        quantity: 3,
        items: [
          { name: 'spades', color: 'black' },
          { name: 'hearts', color: 'red' },
          { name: 'diamonds', color: 'red' },
          { name: 'clubs', color: 'black' },
        ],
        cardsData: new Object,
        activeCards: new Array,
        isGameOver: false
      }
    },
    mounted(){
      this.cardsData = this.cardsCreateHandler()
    },
    methods: {
      cardsSymbolsHandler(num) {
        switch (num) {
          case 0:
            return [
              { left: '50%', top: '50%' }
            ];
          case 1:
            return [
              { left: '50%', top: '20%' },
              { left: '50%', top: '80%', flip: true }
            ];
          case 2:
            return [
              { left: '50%', top: '50%' },
              { left: '50%', top: '20%' },
              { left: '50%', top: '80%', flip: true }
            ];
          case 3:
            return [
              { left: '33%', top: '20%' },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '20%' },
              { left: '67%', top: '80%', flip: true }
            ];
          case 4:
            return [
              { left: '50%', top: '50%' },
              { left: '33%', top: '20%' },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '20%' },
              { left: '67%', top: '80%', flip: true }
            ];
          case 5:
            return [
              { left: '33%', top: '50%' },
              { left: '33%', top: '20%' },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '50%' },
              { left: '67%', top: '20%' },
              { left: '67%', top: '80%', flip: true }
            ];
          case 6:
            return [
              { left: '33%', top: '50%' },
              { left: '33%', top: '20%' },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '50%' },
              { left: '67%', top: '20%' },
              { left: '67%', top: '80%', flip: true },
              { left: '50%', top: '35%' }
            ];
          case 7:
            return [
              { left: '33%', top: '20%' },
              { left: '33%', top: '40%' },
              { left: '33%', top: '60%', flip: true },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '20%' },
              { left: '67%', top: '40%' },
              { left: '67%', top: '60%', flip: true },
              { left: '67%', top: '80%', flip: true }
            ];
          case 8:
            return [
              { left: '50%', top: '50%' },
              { left: '33%', top: '20%' },
              { left: '33%', top: '40%' },
              { left: '33%', top: '60%', flip: true },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '20%' },
              { left: '67%', top: '40%' },
              { left: '67%', top: '60%', flip: true },
              { left: '67%', top: '80%', flip: true }
            ];
          case 9:
            return [
              { left: '50%', top: '35%' },
              { left: '50%', top: '65%', flip: true },
              { left: '33%', top: '20%' },
              { left: '33%', top: '40%' },
              { left: '33%', top: '60%', flip: true },
              { left: '33%', top: '80%', flip: true },
              { left: '67%', top: '20%' },
              { left: '67%', top: '40%' },
              { left: '67%', top: '60%', flip: true },
              { left: '67%', top: '80%', flip: true }
            ];
        }     
      },
      cardsNumberHandler(num) {
        switch (num) {
          case 0: return 'A';
          case 10: return 'J';
          case 11: return 'Q';
          case 12: return 'K';
          default: return '' + (num + 1);
        }
      },
      cardsShuffleHandler(data) {
        data.sort(() => { return (Math.random() > 0.5) ? 1 : -1 })
      },
      cardsCreateHandler() {
        var i = 0, end = this.items.length,
          cardArray = new Array;
        for (; i < end; i++) {
          var target = this.items[i]
          for (var j = 0; j < this.quantity; j++) {
            var obj = new Object
            obj.name = target.name
            obj.color = target.color
            // 數字替代
            obj.num = j + 1
            obj.text = this.cardsNumberHandler(j)
            obj.symbols = this.cardsSymbolsHandler(j)
            obj.active = false
            cardArray.push(obj)
          }
          
        }
        this.cardsShuffleHandler(cardArray)
        return cardArray
      },
      selectHandler(item) {
        var activeCards = this.activeCards
        if (!this.status) return // 母物件狀態
        if (item.active || activeCards.length === 2) return // 牌已經被翻開 || 點滿兩張牌
        item.active = !item.active
        activeCards.push(item)
        if (activeCards.length < 2) return	// 條件成立才會往下繼續做
        if (activeCards[0].num === activeCards[1].num) {
          activeCards.length = 0
        }
        else {
          setTimeout(() => {
            activeCards[0].active = false
            activeCards[1].active = false
            activeCards.length = 0
          }, 1000)
        }
        this.isGameOver = this.cardsData.every(obj => { return obj.active })
      },
      resetCardHanler(res) {
        let needDelay = this.cardsData.some(obj=>(obj.active === true))
        this.cardsData.forEach(obj => { obj.active = res })
        setTimeout(() => { this.cardsShuffleHandler(this.cardsData) }, needDelay? 500 : 0)
        this.activeCards = new Array
        this.$emit('status-change', false, 'stop')
      }
    },
    watch: {
      isGameOver() {
        if (!this.isGameOver) return
        this.$parent.inGame = false
        this.$parent.type = 'stop'
      },
      type() {
        if (this.type !== 'reset') return
        this.resetCardHanler(false)
      }
    }
  }

</script>

