<template lang="pug">
.controller
	.controller-containt.fz-14
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
	&__button + &__button
		margin-left: 0.5vw
	&__button
		background-color: transparent
		border: 2px solid
		font: inherit
		cursor: pointer
		font-weight: bold
		outline: none
		padding: 12.5px 20px
		border-radius: 5vw
		opacity: 0.75
		color: white  
		box-shadow: 0 0 10px rgba(black, 0.5)
		&--start
			+buttonInit
		&--stop
			+buttonInit(map-get($color, 'mainRed'))
		&--reset
			+buttonInit(black)
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
		}
	},
	data() {
		return {
			buttonData: [
				{ text: '開始遊戲', type: 'start'},
				{ text: '遊戲暫停', type: 'stop'},
				{ text: '重新開始', type: 'reset'},
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


