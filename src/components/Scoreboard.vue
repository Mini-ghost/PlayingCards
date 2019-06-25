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
			fireBaseData: new Object,
			scoreData: new Array,
			userData: new Object
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
				sec: sec,
				timestamp: timestamp
			}
			// 傳一份資料到資料庫
			uploadPath.set(this.userData)

			downloadPath.once('value').then(snapshot => {
				let data = this.fireBaseData = snapshot.val()
				for(let item in data){ this.scoreData.push(data[item]) }
				this.scoreData = this.scoreData.sort((a, b) => {
					return a.sec - b.sec
				})

				if(this.scoreData.length > 10) { this.scoreData.length = 10 }
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
