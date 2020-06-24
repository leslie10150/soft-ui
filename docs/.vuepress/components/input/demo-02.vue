<template>
	<div class="input-number-container">
		<s-inputnumber v-model="count"
									 :step="1"
									 :max="10"
									 :min="1"
									 :precision="2"></s-inputnumber>
		<h1>{{count}}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 5
		}
	}
}
</script>

