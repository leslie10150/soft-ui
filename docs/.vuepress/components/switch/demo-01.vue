<template>
	<div>
		<s-switch v-model="show"></s-switch>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false
		}
	},
	updated() {
		console.log(this.show)
	}
}
</script>

<style lang="sass" scoped>
</style>