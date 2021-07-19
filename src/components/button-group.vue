<template>
  <div class="i-button-group">
    <slot />
  </div>
</template>

<script>
export default {
	mounted() {
		//如果按钮组额外添加div提示错误。
		
	}
};
</script>

<style lang="scss" scoped>
$border-radius:4px;
.i-button-group{
    display:inline-flex;
    .i-button{
        border-radius:0px;
        &:first-child{
            border-top-left-radius:$border-radius;
            border-bottom-left-radius: $border-radius;
            margin-right:-1px;
        }
        &:last-child{
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            margin-left:-1px;
        }
        &:hover{
            position:realtive;
            z-index:1;
        }
    }
    
}
</style>