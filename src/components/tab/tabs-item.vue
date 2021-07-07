<template>
  <div
    class="tabs-item"
    :class="{active}"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
	name:"VuiTabsItem",
	inject:[ "EventBus" ],
	props:{
		name:String
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
	},
	methods:{
		onClick() {
			//console.log(this.name);
			this.EventBus.$emit("update:selected", this.name, this);
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs-item{
    font-size:16px;
    cursor:default;
    padding:0.5em 1em;
    &.active{
        color:#5496E4;
    }
}
</style>