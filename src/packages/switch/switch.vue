<template>
	<div>
		<span class="soft-switch"
					:class="{'soft-switch-on' : checked}"
					:value="value"
					@click="toggle"></span>
	</div>
</template>

<script>
export default {
	name: 's-switch',
	props: {
		value: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			checked: this.value
		}
	},
	watch: {
		checked(val) {
			this.$emit('input', val)
		}
	},
	methods: {
		toggle() {
			this.checked = !this.checked
		}
	}
}
</script>

