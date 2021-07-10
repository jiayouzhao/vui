<template>
  <div class="collapse">
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
export default {
	provide() {
		return {
			eventBus:this.eventBus
		};
	},
	props:{
		selected:{
			type:Array
		},
		single:{
			type:Boolean,
			default:false
		}
	},
	data() {
		return {
			eventBus:new Vue()
		};
	},
	mounted() {
		this.eventBus.$emit("update:selected", this.selected);
		this.eventBus.$on("addSelected", (name) => {
			let selectedCopy = JSON.parse(JSON.stringify(this.selected));
			selectedCopy.push(name);
			this.$emit("update:selected", selectedCopy);
			this.eventBus.$emit("update:selected", selectedCopy);
		});
		this.eventBus.$on("removeSelected", (name) => {
			let selectedCopy = JSON.parse(JSON.stringify(this.selected));
			const index = selectedCopy.indexOf(name);
			selectedCopy.splice(index, 1);
			this.$emit("update:selected", selectedCopy);
			this.eventBus.$emit("update:selected", selectedCopy);
		});
	}
};
</script>

<style lang="scss" scoped>
.collapse{
    border:1px solid #ccc;
    border-radius:4px;
}
</style>