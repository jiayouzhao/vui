<template>
  <div
    class="layoutWrapper"
    :class="layoutClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
	data() {
		return {
			layoutClass:{
				hasSider:false
			}
		};
	},
	mounted() {
		this.$children.forEach((vm) => {
			if (vm.$options.name === "VuiSider") {
				this.layoutClass.hasSider = true;
			};
		});
	}
};
</script>

<style lang="scss" scoped>
.layoutWrapper{
    display:flex;
    flex-direction: column;
    flex-grow:1;
    &.hasSider{
        flex-direction: row;
    }
}
</style>