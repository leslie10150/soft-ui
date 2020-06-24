<template>
	<div>
		soft ui
		<s-checkbox-group v-model="hobby">
			<s-checkbox label="篮球">篮球</s-checkbox>
			<s-checkbox label="足球">足球</s-checkbox>
			<s-checkbox label="乒乓球">乒乓球</s-checkbox>
		</s-checkbox-group>
		element ui
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
			<el-checkbox label="禁用"
									 disabled></el-checkbox>
			<el-checkbox label="选中且禁用"
									 disabled></el-checkbox>
		</el-checkbox-group>
		<p>您选择的爱好是:{{hobby}}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			hobby: ['足球'],
			checkList: ['选中且禁用', '复选框 A'],
			checked: true
		}
	}
}
</script>