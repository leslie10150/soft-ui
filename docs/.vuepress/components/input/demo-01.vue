<template>

	<div class="input-wrapper">
		<s-input v-model="msg">
		</s-input>
		<s-input disabled
						 size="small"
						 v-model="msg">
		</s-input>

		<s-input type="textarea"
						 v-model="msg">
		</s-input>

		<s-input placeholder="请输入姓名"
						 clearable
						 center
						 :value="msg"
						 @input="(data) => msg=data">
			<template slot="prepend">https://</template>
		</s-input>

		<s-input placeholder="请输入姓名"
						 clearable
						 center
						 :value="msg"
						 @input="(data) => msg=data">
			<template slot="append">.com</template>
		</s-input>

		<s-input placeholder="请输入姓名"
						 clearable
						 center
						 :value="msg"
						 @input="(data) => msg=data">
			<template slot="prepend">https://</template>
			<template slot="append">.com</template>
		</s-input>

	</div>

</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello world'
		}
	}
}
</script>
<style lang="scss" scoped>
.input-wrapper {
	.inline-container {
		margin: 10px;
	}
}
</style>
