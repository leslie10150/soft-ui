<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 's-form',
	provide() {
		return {
			Form: this
		}
	},
	props: {
		model: {
			type: Object
		},
		rules: {
			type: Object
		},
		labelWidth: {
			type: String
		}
	},
	methods: {
		validate(cb) {
			let promise = this.$children
				.filter(item => item.prop)
				.map(child => child.startValidate())

			Promise.all(promise)
				.then(data => {
					cb(true)
				})
				.catch(err => cb(false))
		}
	}
}
</script>

