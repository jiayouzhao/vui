<template>
  <div
    v-if="active"
    class="tabs-content"
  >
    <slot />
  </div>
</template>

<script>
export default {
	inject:[ "EventBus" ],
	props:{
		name:{
			type:String
		}
	},
	data() {
		return {
			active:false
		};
	},
	mounted() {
		this.EventBus.$on("update:selected", (name) => {
			this.active = name === this.name;
		});
	}
};
</script>

<style lang="scss" scoped>
.tabs-content{
    padding:10px;
}
</style>