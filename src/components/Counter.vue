<template lang="pug">
.counter
	.counter-text.fz-72 {{timeText.join(':')}}
</template>

<style lang="sass">
	.counter
		margin: 2rem 0
		color: rgba(white, 0.75)
</style>


<script>
export default {
	name: 'Counter',
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
			timeText: ['00', '00'],
			sec: 0,
			timerId: new Number
		}
	},
	methods: {
		timerHandler() {
			var sec = this.sec,
				hh = ~~(sec / 3600),
				mm = ~~((sec - (hh * 3600)) / 60),
				ss = sec - (hh * 3600) - (mm * 60);
			
			mm = mm > 9 ? mm : '0' + mm
			ss = ss > 9 ? ss : '0' + ss

			
			this.sec++
			this.timeText = [hh, mm, ss].filter(obj => { return obj })
			this.timerId = setTimeout(this.timerHandler, 1000)
		}
	},
	watch: {
		type() {
			if (this.status && this.type ==='start') { this.timerHandler() }
			else {
				clearTimeout(this.timerId)
				if (this.type === 'stop') return
				/* --- 如果是重新設定，執行以下動作 --- */
				// 計時器初始化
				this.sec = 0
				this.timeText = ['00', '00']
			}
		}
	}
}
</script>

