<template>
  <div class="i-button-group">
    <slot />
  </div>
</template>

<script>
export default {
	created() {
        
	}
};
</script>

<style lang="scss" scoped>
.i-button-group{
    display:flex;
    .i-button{
        border-radius:0px;
        &:first-child{
            border-top-left-radius:var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
            margin-right:-1px;
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position:realtive;
            z-index:1;
        }
    }
    
}
</style>