<template>
  <button
    class="i-button"
    :class="iconPosition ? `icon-${iconPosition}`:''"
  >
    <i-icon
      v-if="icon"
      class="icon"
      :name="icon"
    />
    <div class="slotWrapper">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
	props: { 
		icon:{
			type:String
		},
		loading:{
			type:Boolean,
			default:false
		},
		iconPosition:{
			type:String,
			default:"",
			validator:(value) => {
				return value === "" || value === "right";
			}
		} 
	}
};
</script> 

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
}
$font-size:14px;
$button-height:32px;
$button-bg:white;
$border-color:#999;
$border-radius:4px;
$border-color-hover:#666;
$button-active-bg:#eee;
.i-button {
    font-size: $font-size;
    height: $button-height;
    background: $button-bg;
    color: $border-color;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0px 0.5em;
    display:inline-flex;
    vertical-align:middle;
    align-items:center;
    
    display:inline-flex;
    justify-content: center;
    align-items:center;
   
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }
    .icon{
        order:1;
        margin-right:0.1em;

    }
    .slotWrapper{
        line-height:$font-size;
        order:2;
        margin-left:0.2em;
        &:first-child{
            margin-left:0px;
        }
    }
    &.icon-right{
        .icon{
            order:2;
            margin-left:0.1em;
            margin-right:0px;
        }
        .slotWrapper{
            order:1;
        }
    }

}
</style>
