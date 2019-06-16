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
                      @status-change="statusChangeHandler")
        .containt
          Cards(:status="inGame", 
                :type="type", 
                @status-change="statusChangeHandler")
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
      inGame: false,
      type: 'stop'
    }
  },
  methods: {
    statusChangeHandler(inGame, type) {
      this.inGame = inGame
      this.type = type
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
