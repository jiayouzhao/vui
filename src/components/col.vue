<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
	props:{
		span:[ Number, String ],
		offset:{
			type:[ Number, String ]
		}
	},
	data() {
		return {
			gutter:0
		};
	},
	computed:{
		colClass() {
			return {
				[`col-${this.span}`]:this.span,
				[`offset-${this.offset}`]:this.offset 
			};
		},
		colStyle() {
			return {
				paddingLeft:`${this.gutter / 2}px`,
				paddingRight:`${this.gutter / 2}px`
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.col{
    height:100px;
    $class-prefix:col-;
    @for $i from 1 through 24{
        &.#{$class-prefix}#{$i}{
            width:($i/24)*100%;
        }
    }
    $class-prefix:offset-;
    @for $i from 1 through 24{
        &.#{$class-prefix}#{$i}{
            margin-left:($i/24)*100%;
        }
    }
}
</style>