<template>
  <div
    class="inputWrapper"
    :class="{error}"
  >
    <input
      :value="value"
      type="text"
      class="i-input"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event)"
      @input="$emit('input',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <i-icon name="error" />
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
	components:{
		"i-icon":Icon
	},
	props:{
		value:{
			type:String
		},
		disabled:{
			type:Boolean,
			default:false
		},
		readonly:{
			type:Boolean,
			default:false
		},
		error:{
			type:String,
			defalut:""
		}
	}
};
</script>

<style lang="scss" scoped>
$border-color:#999999;
$border-hover:#666666;
$border-radius:4px;
$red:#F35B54;
$font-size:14px;
$line-height:24px;

.inputWrapper{  
    display:inline-block;
    font-size:$font-size;

    &.error{
        display:flex;
        align-items:center;
        color:$red;
        .i-input{
            border-color:$red;
        }
        svg{
            margin:0px 2px;
            fill:$red;
        }
        .errorMessage{
            
        }
    }
    .i-input{
        border:1px solid $border-color;
        font-size:$font-size;
        line-height:$line-height;
        padding:0px 8px;
        border-radius:$border-radius;
        &:hover{
            border-color:$border-hover;
        }
        &:focus{
            box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
            outline:none;
        }
        &:disabled,&:read-only{
            border-color:#aaa;
            color:#aaa;
            cursor:not-allowed;
        }
    }
}

</style>