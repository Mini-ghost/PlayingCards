; (function (Vue) {

	// 卡牌模組 --------------------------
	Vue.component('cards', {
		template: '#cards',
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
		mounted() {
			this.cardsData = this.cardsCreateHandler()
			// this.$bus.$on('resetCards', this.resetCardHanler)

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
				data.sort((a, b) => { return (Math.random() > 0.5) ? 1 : -1 })
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
				this.cardsData.forEach(obj => { obj.active = res })
				setTimeout(() => { this.cardsShuffleHandler(this.cardsData) }, 500)
				this.activeCards = new Array
				this.$parent.type = 'reset'
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
	})
	
	// 計時器模組 ------------------------
	Vue.component('timer', {
		template: '#timer',
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
	})

	// 控制模組 --------------------------
	Vue.component('controller', {
		template: '#controller',
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
	})

	// Vue 母體 -------------------------
	var vm = new Vue({
		el: '#app',
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
	})
})(Vue)
