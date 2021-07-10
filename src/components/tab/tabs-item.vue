<template>
  <div
    class="tabs-item"
    :class="{active,disabled}"
    :data-name="name"
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
		name:String,
		disabled:{
			type:Boolean
		}
	},
	data() {
		return {
			active:false
		};
	},
	mounted() {
		if (this.EventBus) {
			this.EventBus.$on("update:selected", (name) => {
				this.active = name === this.name;
			});
		}
		
	},
	methods:{
		onClick() {
		
			if (this.disabled === true) {
				return; 
			}
			if (this.EventBus) {
				this.EventBus.$emit("update:selected", this.name, this);
			}
			//测试
			this.$emit("click");
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
    &.disabled{
        color:rgb(221, 221, 221);
        cursor:not-allowed;
    }
}
</style>