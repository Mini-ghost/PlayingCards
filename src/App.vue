<template lang="pug">
  #app
    main
      section
        .tool
          Counter(:status="inGame", 
                  :type="type", 
                  @status-change="statusChangeHandler")
          Controller( :status="inGame", 
                      :type="type", 
                      :leavles="leavles",
                      @status-change="statusChangeHandler",
                      @leavl-change="leavlChangeHandler")
        .containt
          Cards(:status="inGame", 
                :type="type", 
                :leavles="leavles",
                @status-change="statusChangeHandler",)
</template>

<script>
import Cards from './components/Cards'
import Counter from './components/Counter'
import Controller from './components/Controller'


export default {
  name: 'App',
  components: {
    Cards,
    Counter,
    Controller
  },
  data() {
    return {
      inGame: false,  // 遊戲是否開始
      type: 'stop',   // 遊戲狀態 => start / stop / reset
      leavles: [
				{ rank: 'easily', text: '簡單', num: 3, type: false},
				{ rank: 'general', text: '中等', num: 6, type: true},
        { rank: 'difficult', text: '困難', num: 9, type: false},
        { rank: 'varyDifficult', text: '最困難', num: 13, type: false}
      ],
    }
  },
  methods: {
    statusChangeHandler(inGame, type) {
      this.inGame = inGame
      this.type = type
    },
    leavlChangeHandler(data){
      this.leavles.forEach(obj => {
        obj.type = (obj.rank === data)? true : false;
      })
    }
  }
}
</script>

<style lang="sass">
@import ./assets/sass/variable/include
@import ./assets/sass/variable/reset

*, *:before, *:after
  box-sizing: border-box

html
  font-family: 微軟正黑體
  height: 100%
  background-color: map-get($color, 'main')
  user-select: none
.fz
  &-72
    font-size: rem(72px) 
  &-52
    font-size: rem(52px)
  &-36
    font-size: rem(36px)
  &-24
    font-size: rem(24px)
  &-14
    font-size: rem(14px)
  &-12
    font-size: rem(12px)

.containt
  max-width: 1366px
  width: 80%
  margin: 0 auto

.tool
  position: fixed
  top: 1vw
  left: 1vw
  z-index: 9
  @media (max-width: 767.89px)
    position: relative
    top: 0
    left: 0

</style>
