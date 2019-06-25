<template lang="pug">
	transition(name="slide-top", appear)
		section#scoreboard
			.containt
				.scoreboard
					.scoreboard-cover
					.scoreboard-containt
						.scoreboard-title 
							.scoreboard-title__ch.fz-52.fz-mm-36.fz-ms-24 成績統計
							.scoreboard-title__en
						.scoreboard-userTime.fz-24.fz-mm-24 花費時間為 {{userData.score}}
						.scoreboard-leavle 遊戲難易度：{{leavleOn.text}}
						transition-group(tag="div", class="scoreboard-group fz-24 fz-mm-16", name="slide-bottom", appear)
							.scoreboard-group__item(v-for="(score, id) in scoreData",
																			:class="(userData.timestamp === score.timestamp)? 'scoreboard-group__item--active' : ''"
																			:style="'transition-delay: ' + ((id === 0)? id : id*0.125) + 's;'"
																			:key="score.timestamp")
								.scoreboard-group__id 第 {{(id+1 >= 10)? id+1 : '0' + (id + 1)}} 名
								.scoreboard-group__score {{score.score}}
								.scoreboard-group__timestamp.fz-12 {{getDateHandler(score.timestamp)}}
						.scoreboard-close.fz-14 
							span.scoreboard-close__button(@click="closeHandler") CLOSE
</template>

<style lang="sass">
@import ../assets/sass/variable/include

%full__extend
	width: 100%
	height: 100vh

#scoreboard
	position: fixed
	top: 0
	left: 0
	@extend %full__extend
	z-index: 9
	> .containt,
	.scoreboard
		@extend %full__extend

.scoreboard
	+flexCenter
	@media (max-width: 666.98px)
		display: block
	&-cover
		position: absolute
		top: 0
		left: 0
		@extend %full__extend
		background-color: rgba(getColor(main), 0.8)
		z-index: -1
	&-containt
		width: 95%
		min-height: 85%
		max-width: 768px
		padding: 3vw
		color: white
		background-color: rgba(getColor(mainBlack), 0.8)
		box-shadow: 0 0 20px rgba(getColor(mainBlack), 0.8)
		overflow: auto
		@media (max-width: 767.98px)
			padding: 6vw
			min-height: 95%
		@media (max-width: 666.98px)
			width: 100%
			height: 100%

	&-title, &-userTime
		font-weight: bold
	&-userTime, &-leavle
		margin-top: 16px
	&-group
		margin-top: 2.5vw
		@media (max-width: 767.98px)
			margin-top: 5vw
		&__item
			display: flex
			border-bottom: 1px solid rgba(white, 0.25)
			padding: 10px
			&--active
				background-color: rgba(orange, 0.5)
		&__score
			margin-left: 5vw
		&__timestamp
			color: rgba(white, 0.25)
			align-self: flex-end
			margin-left: auto
	&-close
		margin-top: 5vw
		text-align: center
		&__button
			padding: 5px
			cursor: pointer
			background-color: transparent
			transition: 0.5s
			&:hover
				background-color: rgba(white, 0.25)

		
.slide
	&-bottom
		&-enter, 
		&-leave-to
			opacity: 0
			transform: translateY(5vw)
		&-enter-active, 
		&-leave-active
			transition: 1s 0.5s, transform 0.5s
	&-top
		&-enter, 
		&-leave-to
			opacity: 0
			transform: translateY(100%)
		&-enter-active
			transition: opacity 1s, transform 0.5s 
			transition-delay: 1s
		&-leave-active
			transition: opacity 0.5s, transform 1s
</style>

<script>

import config from 'firebaseConfig/config'
const firebase =  require('firebase/app');
                  require('firebase/database');
firebase.initializeApp(config);

export default {
	name: 'Scoreboard',
	props: {
		leavleOn: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			fireBaseData: {

				"1561428058946" : {
					"score" : "00:18",
					"sec" : 19,
					"timestamp" : 1561428058946
				},
				"1561428405612" : {
					"score" : "00:27",
					"sec" : 28,
					"timestamp" : 1561428405612
				},
				"1561429115530" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561429115530
				},
				"1561429164697" : {
					"score" : "00:19",
					"sec" : 20,
					"timestamp" : 1561429164697
				},
				"1561429206316" : {
					"score" : "00:24",
					"sec" : 25,
					"timestamp" : 1561429206316
				},
				"1561429312040" : {
					"score" : "00:17",
					"sec" : 18,
					"timestamp" : 1561429312040
				},
				"1561429350775" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561429350775
				},
				"1561429477351" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561429477351
				},
				"1561429631553" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561429631553
				},
				"1561429663332" : {
					"score" : "00:20",
					"sec" : 21,
					"timestamp" : 1561429663332
				},
				"1561429663825" : {
					"score" : "00:24",
					"sec" : 25,
					"timestamp" : 1561429663825
				},
				"1561429683105" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429683105
				},
				"1561429702160" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561429702160
				},
				"1561429702161" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561429702161
				},
				"1561429702162" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561429702162
				},
				"1561429718577" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429718577
				},
				"1561429724958" : {
					"score" : "00:18",
					"sec" : 19,
					"timestamp" : 1561429724958
				},
				"1561429738345" : {
					"score" : "00:18",
					"sec" : 19,
					"timestamp" : 1561429738345
				},
				"1561429759392" : {
					"score" : "00:17",
					"sec" : 18,
					"timestamp" : 1561429759392
				},
				"1561429759393" : {
					"score" : "00:17",
					"sec" : 18,
					"timestamp" : 1561429759393
				},
				"1561429759396" : {
					"score" : "00:17",
					"sec" : 18,
					"timestamp" : 1561429759396
				},
				"1561429801730" : {
					"score" : "00:19",
					"sec" : 20,
					"timestamp" : 1561429801730
				},
				"1561429801736" : {
					"score" : "00:19",
					"sec" : 20,
					"timestamp" : 1561429801736
				},
				"1561429822528" : {
					"score" : "00:13",
					"sec" : 14,
					"timestamp" : 1561429822528
				},
				"1561429822532" : {
					"score" : "00:13",
					"sec" : 14,
					"timestamp" : 1561429822532
				},
				"1561429841523" : {
					"score" : "00:13",
					"sec" : 14,
					"timestamp" : 1561429841523
				},
				"1561429841524" : {
					"score" : "00:13",
					"sec" : 14,
					"timestamp" : 1561429841524
				},
				"1561429863097" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429863097
				},
				"1561429863103" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429863103
				},
				"1561429884464" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429884464
				},
				"1561429884472" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561429884472
				},
				"1561429905400" : {
					"score" : "00:18",
					"sec" : 19,
					"timestamp" : 1561429905400
				},
				"1561429924056" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561429924056
				},
				"1561430819457" : {
					"score" : "00:11",
					"sec" : 12,
					"timestamp" : 1561430819457
				},
				"1561431383100" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561431383100
				},
				"1561431458908" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561431458908
				},
				"1561431683417" : {
					"score" : "00:20",
					"sec" : 21,
					"timestamp" : 1561431683417
				},
				"1561431729024" : {
					"score" : "00:23",
					"sec" : 24,
					"timestamp" : 1561431729024
				},
				"1561432009895" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561432009895
				},
				"1561432033587" : {
					"score" : "00:17",
					"sec" : 18,
					"timestamp" : 1561432033587
				},
				"1561432235409" : {
					"score" : "00:12",
					"sec" : 13,
					"timestamp" : 1561432235409
				},
				"1561432407193" : {
					"score" : "00:12",
					"sec" : 13,
					"timestamp" : 1561432407193
				},
				"1561432407194" : {
					"score" : "00:12",
					"sec" : 13,
					"timestamp" : 1561432407194
				},
				"1561432721336" : {
					"score" : "00:12",
					"sec" : 13,
					"timestamp" : 1561432721336
				},
				"1561432749731" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561432749731
				},
				"1561432783563" : {
					"score" : "00:16",
					"sec" : 17,
					"timestamp" : 1561432783563
				},
				"1561433113570" : {
					"score" : "00:14",
					"sec" : 15,
					"timestamp" : 1561433113570
				},
				"1561433714411" : {
					"score" : "00:22",
					"sec" : 23,
					"timestamp" : 1561433714411
				},
				"1561434049885" : {
					"score" : "00:15",
					"sec" : 16,
					"timestamp" : 1561434049885
				}
  
			},
			scoreData: new Array,
			userData: {
				score: null,
				timestamp: null
			}
		}
	},
	mounted() {
		this.$bus.$once('successEvent', this.scoreTimeHandler)
	},
	methods: {
		scoreTimeHandler(time) {
			let timeText = time[0].join('\:'),
					sec = time[1];
			let timestamp = +new Date(),
					path = `${this.leavleOn.rank}/${timestamp}`,
					dataBace = firebase.database(),
					uploadPath = dataBace.ref(`/playingCards/${path}/`),
					downloadPath = dataBace.ref(`/playingCards/${this.leavleOn.rank}/`);

			// 傳一份資料給自己
			this.userData = {
				score: timeText,
				timestamp: timestamp
			}
			// 傳一份資料到資料庫
			uploadPath.set({
				score: timeText,
				sec: sec,
				timestamp: timestamp
			})

			downloadPath.once('value').then(snapshot => {
				let data = this.fireBaseData = snapshot.val()
				for(let item in data){ this.scoreData.push(data[item]) }
				this.scoreData = this.scoreData.sort((a, b) => {
					return a.sec - b.sec
				})
				this.scoreData.length = 10
			})
		},
		getDateHandler(date) {
			let newDate = new Date(date)
			let yy = newDate.getFullYear(),
					mm = newDate.getMonth() + 1,
					dd = newDate.getDate(),
					h = newDate.getHours(),
					m = newDate.getMinutes(),
					s = newDate.getSeconds();
			return `${yy}-${mm}-${dd}, ${h? h : '0'+h}:${m>9? m : '0'+m}:${s>9? s : '0'+s}`
		},
		closeHandler() {
			this.$emit('status-change', false, 'reset')
		}
	}
}
</script>
