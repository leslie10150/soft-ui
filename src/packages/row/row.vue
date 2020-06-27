<script>
export default {
	name: 'SRow',
	componentName: 'SRow',

	props: {
		tag: {
			type: String,
			default: 'div'
		},
		gutter: Number,
		type: String,
		justify: {
			type: String,
			default: 'start'
		},
		align: {
			type: String,
			default: 'top'
		}
	},

	computed: {
		style() {
			const ret = {}

			if (this.gutter) {
				ret.marginLeft = `-${this.gutter / 2}px`
				ret.marginRight = ret.marginLeft
			}

			return ret
		}
	},

	render(h) {
		return h(
			this.tag,
			{
				class: [
					's-row',
					this.justify !== 'start' ? `is-justify-${this.justify}` : '',
					this.align !== 'top' ? `is-align-${this.align}` : '',
					{ 's-row--flex': this.type === 'flex' }
				],
				style: this.style
			},
			this.$slots.default
		)
	}
}
</script>
