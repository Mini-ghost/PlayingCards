<template lang="pug">
.controller
	.controller-containt
		.controller-content.fz-12(:class="status? 'controller-content--enable':''")
			button.controller__button(v-for="leavle in leavles",
																@click="leavleSelectHandler(leavle.rank)"
																:class="[leavle.type? 'controller__button--active' : '']") {{leavle.text}}
		.controller-content.fz-14
			button.controller__button(v-for="btn in buttonComputed", 
			:class="'controller__button--' + btn.type", 
			@click="gameContorHandler(btn.type)") {{btn.text}}


</template>

<style lang="sass">
@import ../assets/sass/variable/include

@mixin buttonInit($color: orange)
	border-color: $color
	background-color: $color

.controller
	@media (max-width: 767.89px)
		text-align: center
	&-content
		&--enable
			transition: opacity 0.5s
			opacity: 0.5
	// 遊戲開始後，某些按鈕不能被使用
	&-content--enable &__button
		cursor: not-allowed
	&-content + &-content
		margin-top: 16px
	&__button + &__button
		margin-left: 0.5vw
		@media (max-width: 767.89px)
			margin-left: 2vw
	&__button
		background-color: rgba(black, 0.5)
		border: 2px solid
		font: inherit
		cursor: pointer
		font-weight: bold
		outline: none
		padding: 12.5px 20px
		border-radius: 50px
		opacity: 0.75
		color: white  
		box-shadow: 0 0 10px rgba(black, 0.5)
		&--start
			+buttonInit
		&--stop
			+buttonInit(map-get($color, 'mainRed'))
		&--reset
			+buttonInit(black)
		&--active
			color: black
			background-color: white
			border-color: white
			opacity: 1
		&:hover
			opacity: 1

</style>

<script>
export default {
	name: 'Controller',
	props: {
		status: {
			type: Boolean,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		leavles: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			buttonData: [
				{ text: '開始遊戲', type: 'start'},
				{ text: '遊戲暫停', type: 'stop'},
				{ text: '重新洗牌', type: 'reset'},
			]
		}
	},
	methods: {
		gameContorHandler(res) {
			switch (res) {
				// 幾時器開跑
				case 'start': 
					this.$emit('status-change', true, res)
					break
				// 重新開始：時間暫停				
				case 'reset': 
				case 'stop': 
					this.$emit('status-change', false, res)			
					break	
			}
		},
		leavleSelectHandler(res) {
			if(this.type === 'start') return
			this.$emit('leavl-change', res)
		}
	},
	computed: {
		buttonComputed() {
			this.buttonData.forEach(obj => {
				if (obj.type === 'reset') obj.show = true
				else if (obj.type === 'start') obj.show = !this.status
				else if(obj.type === 'stop') obj.show = this.status
			})
			return this.buttonData.filter(obj => {
				return obj.show 
			})
		}
	}
}
</script>


