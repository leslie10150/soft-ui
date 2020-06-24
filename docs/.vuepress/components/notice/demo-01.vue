<template>
	<div>
		<s-input type="text"
						 placeholder="标题"
						 v-model="title" />
		<s-input type="text"
						 placeholder="内容"
						 v-model="content" />
		<s-button @click.native="add">{{button}}</s-button>
	</div>

</template>

<script>
export default {
	data() {
		return {
			button: '默认',
			title: '',
			content: ''
		}
	},
	mounted() {
		this.$notice({
			title: '提示',
			content: 'mounted'
		})
	},
	methods: {
		add() {
			this.$notice({
				title: this.title,
				content: this.content
			})
		}
	}
}
</script>