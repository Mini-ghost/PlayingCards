<template lang="pug">
	div
	//- transition-group(class="scoreboard", tag="section", name="fade")
		.containt
			p 5566 e
</template>

<style lang="sass">
	@import ../assets/sass/variable/include

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
			scoreData: new Array
		}
	},
	mounted() {
		this.$bus.$on('successEvent', this.scoreTimeHandler)
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

			uploadPath.set({
				score: timeText,
				sec: sec,
				timestamp: timestamp
			})
			downloadPath.once('value').then(snapshot => {
				let data = this.fireBaseData = snapshot.val()
				for(let item in data){ this.scoreData.push(data[item]) }
			})
		}
	}
}
</script>
