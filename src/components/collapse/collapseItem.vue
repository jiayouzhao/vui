<template>
  <div class="collapseItem">
    <div
      class="title"
      @click="changeToggle"
    >
      {{ title }}
    </div>
    <div
      v-if="toggle"
      class="content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
	inject:[ "eventBus" ],
	props:{
		title:{
			type:String,
			required:true
		},
		name:{
			type:String,
			required:true
		}
	},
	data() {
		return {
			toggle:false
		};
	},
	mounted() {
		this.eventBus.$on("update:selected", (arr) => {
			this.toggle = arr.indexOf(this.name) >= 0;
		});
	},
	methods:{
		changeToggle() {
			if (this.toggle) {
			
				this.eventBus.$emit("removeSelected", this.name);
			} else {
				this.eventBus.$emit("addSelected", this.name);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.collapseItem{
    .title{
        border:1px solid #ccc;
        padding:5px 10px;
        margin:-1px;
    }
    &:first-child{
        :first-child{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
    &:last-child{
        :last-child{
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    .content{
        padding:10px;
    }
}
</style>