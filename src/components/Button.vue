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
	},
};
</script> 

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
}

.i-button {
    font-size: var(--font-size);
    height: var(--button-height);
    background: var(--button-bg);
    color: var(--border-color);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0px 1em;
    display:flex;
    justify-content: center;
    align-items:center;
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    .icon{
        order:1;
        margin-right:0.1em;

    }
    .slotWrapper{
        line-height:var(--font-size);
        order:2;
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
