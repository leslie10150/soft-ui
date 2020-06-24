<template>
	<div class="soft-notice">
		<div class="soft-notice__main"
				 v-for="item in notices"
				 :key="item.id">
			<div class="soft-notice__title">{{item.title||'通知'}}</div>
			<div class="soft-notice__content">{{item.content||'暂无说明'}}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			notices: []
		}
	},
	methods: {
		add(notice) {
      console.log("add -> notice", notice)
			let id = +new Date()
			notice.id = id
			this.notices.push(notice)

			const duration = notice.duration
			setTimeout(() => {
				this.remove(id)
			}, 3000)
		},
		remove(id) {
			for (let i = 0; i < this.notices.length; i++) {
				if (this.notices[i].id === id) {
					this.notices.splice(i, 1)
					break
				}
			}
		}
	}
}
</script>

