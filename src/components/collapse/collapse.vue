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
			this.addSelected(name);
		});
		this.eventBus.$on("removeSelected", (name) => {
			this.removeSelected(name);
		});
	},
	methods:{
		copyElement(element) {
			return JSON.parse(JSON.stringify(element));
		},
		triggerUpdate(selectedCopy) {
			this.$emit("update:selected", selectedCopy);
			this.eventBus.$emit("update:selected", selectedCopy);
		},
		addSelected(name) {
			let selectedCopy = this.copyElement(this.selected);

			this.single ? selectedCopy = [ name ] : selectedCopy.push(name);
			
			this.triggerUpdate(selectedCopy);
		},
		removeSelected(name) {
			let selectedCopy = this.copyElement(this.selected);
			if (this.single) {
				selectedCopy = [];
			} else {
				const index = selectedCopy.indexOf(name);
				selectedCopy.splice(index, 1);
			}
			
			this.triggerUpdate(selectedCopy);
		}
	}
};
</script>

<style lang="scss" scoped>
.collapse{
    border:1px solid #ccc;
    border-radius:4px;
}
</style>