<template lang="pug">
	.tips
		transition-group(	class="tips-group", 
											tag="ul",
											name="fade"
											appear)
			li.tips-group__item.fz-14(v-for="(tip, index) in tips",
													:class="'tips-group__item--' + tip.type"
													:key="index") {{tip.content}}
				

</template>

<style lang="sass">
	@import ../assets/sass/variable/include

	.tips
		position: fixed
		bottom: 2vw
		right: 2vw
		z-index: 9
		@media (max-width: 767.98px)
			position: relative
			bottom: auto
			right: auto
			margin: 1rem 0
		&-group
			&__item
				border: 1px solid transparent
				border-radius: 0.25rem
				&--success
					color: #155724
					background-color: rgba(#d4edda, 0.8)
					padding: 0.75rem 1.25rem
					border-color: #c3e6cb

	.fade
		&-enter, 
		&-leave-to
			opacity: 0

		&-enter-active, 
		&-leave-active
			transition: opacity 1s 0.5s
</style>

<script>
export default {
	name: 'Tips',
	data() {
		return {
			tips: [
				{type: 'success', content: '請嘗試翻開撲克牌，並配對「點數相同」的卡牌。'}
			]
		}
	}
	
}
</script>
