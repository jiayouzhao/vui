<template>
  <div
    class="row"
    :style="rowStyle"
    :class="rowAlign"
  >
    <slot />
  </div>
</template>

<script>
export default {
	props:{
		gutter:{
			type:[ Number, String ]
		},
		align:{
			type:String,
			validator(value) {
				return [ "left", "right", "center" ].includes(value);
			}
		}
	},
	computed:{
		rowStyle() {
			return { marginLeft:`-${this.gutter / 2}px`, marginRight:`-${this.gutter / 2}px` };
		},
		rowAlign() {
			return { [`row-${this.align}`]:this.align };
		}
	},
	mounted() {
		this.$children.forEach(vm => {
			vm.gutter = this.gutter;
		});
	}
};
</script>

<style lang="scss" scoped>
.row{

    display:flex;
    flex-wrap:warp;
    &.row-left{
        justify-content: flex-start;
    }
    &.row-right{
        justify-content:flex-end;
    }
    &.row-center{
        justify-content: center;
    }
}
</style>