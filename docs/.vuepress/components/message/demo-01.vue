<template>
	<div>
		<s-button @click.native="add">{{button}}</s-button>
	</div>

</template>

<script>
export default {
	data() {
		return {
			button: '点击',
			title: '',
			content: ''
		}
	},
	mounted() {
		this.$message({
			message: '我是一个message 消息提示',
			duration: 3000,
			position: 'right',
			type: 'error'
		})
	},
	methods: {
		add() {
			this.$message({
				message: '我是一个message 消息提示',
				duration: 3000,
				position: 'right',
				type: 'error'
			})
		}
	}
}
</script>