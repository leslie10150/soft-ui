---
title: checkbox
---

# 复选框


简单使用
::: demo

```vue
<template>
	<div>
		<s-checkbox-group v-model="hobby">
			<s-checkbox label="篮球">篮球</s-checkbox>
			<s-checkbox label="足球">足球</s-checkbox>
			<s-checkbox label="乒乓球">乒乓球</s-checkbox>
		</s-checkbox-group>
		<p>您选择的爱好是:{{hobby}}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			hobby: ['足球'],
			checked: true
		}
	}
}
</script>
```

:::