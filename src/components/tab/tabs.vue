<template>
  <div
    class="tabs"
    :class="direction"
  >
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
export default {
	provide() {
		return {
			direction:this.direction,
			EventBus:this.EventBus
		};
	},
	props:{
		direction:{
			type:String,
			default:"upright",
			validator(value) {
				return [ "upright", "horizontal" ].indexOf(value) >= 0;
			}
		},
		selected:{
			type:String
		}
	},
	data() {
		return {
			EventBus:new Vue()
		};
	},
	created() {
		
	},
	mounted() {
		this.$children.forEach(vm => {
			if (vm.$options.name === "VuiTabsHead") {

				vm.$children.forEach(childvm => {
					if (childvm.$options.name === "VuiTabsItem" && childvm.name === this.selected) {
						this.EventBus.$emit("update:selected", this.selected, childvm);
					}
				});
			}
		});

		this.EventBus.$on("update:selected", (name) => {
			//console.log("tabs", name);
		});
	}
};
</script>

<style lang="scss" scoped>
.tabs{
    display:flex;
    &.upright{
        flex-direction: row;
    }
    &.horizontal{
        flex-direction: column;
    }
}
</style>