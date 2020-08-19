---
title: Button
---
### 简单使用
::: demo
```html
<template>
	<div>
		<s-button>{{button}}</s-button>
		<s-button type="default">default</s-button>
		<s-button type="primary">primary</s-button>
		<s-button type="info">info</s-button>
		<s-button type="success">success</s-button>
		<s-button type="warning">warning</s-button>
		<s-button type="error">error</s-button>
	</div>

</template>

<script>
export default {
	data() {
		return {
			button: '默认'
		}
	}
}
</script>
```
:::
