<template>
	<div>
		<s-radio-group v-model="group_sex">
			<s-radio label="男人">男人</s-radio>
			<s-radio label="女人">女人</s-radio>
			<s-radio label="人妖">人妖</s-radio>
		</s-radio-group>
		<h1>{{group_sex}}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			group_sex: '男人'
		}
	}
}
</script>

