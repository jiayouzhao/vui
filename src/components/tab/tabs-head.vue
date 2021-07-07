<template>
  <div
    class="tabs-head"
    :class="direction"
  >
    <slot />
    <div class="otherItemWrapper">
      <slot name="otherItem" />
    </div>
    <div
      ref="line"
      class="line"
    />
  </div>
</template>

<script>
export default {
	name:"VuiTabsHead",
	inject:[ "direction", "EventBus" ],
	mounted() {
		
		this.EventBus.$on("update:selected", (name, vm) => {
			const { left, width, height, top } = vm.$el.getBoundingClientRect(); 
			
			if (this.direction === "horizontal") {
				this.$refs.line.style.width = `${width}px`;
				this.$refs.line.style.transform = `translateX(${left}px)`;
			} else if (this.direction === "upright") {
				this.$refs.line.style.height = `${height}px`;
				this.$refs.line.style.transform = `translateY(${top}px)`;
			}   
			
			setTimeout(() => {
				this.$refs.line.style.transition = `all .3s`;
			});
		});
	}
	
};
</script>

<style lang="scss" scoped>
.tabs-head{
    display:flex;
    position:relative;
    .line{
        position:absolute;
    }
    &.horizontal{
        border-bottom:1px solid #ddd;
        .otherItemWrapper{
            margin-left:auto;
            display:flex;
            align-items:center;
            margin-right:16px;
        }
        .line{
            left:0px;
            bottom:-1px;
            border:1px solid #5496E4;
        }
    }
    &.upright{
        flex-direction: column;
        align-items:center;
        border-right:1px solid #ddd;
        .line{
            right:-1px;
            top:0px;
            border:1px solid #5496E4;
        }
    }
}

</style>