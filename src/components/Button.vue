<template>
  <button class="i-button">
    按钮
  </button>
</template>

<script>
export default {
	
};
</script>

<style lang="scss" scoped>
.i-button{
    --button-height:32px;
    --font-size:14px;
    --button-bg:white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666;
}
.i-button{
    font-size:var(--font-size);
    height:var(--button-height);
    background:var(--button-bg);
    color:var(--border-color);
    border:1px solid  var(--border-color);
    border-radius:var(--border-radius);
    padding:0px 1em;
    line-height:var(--button-height);
    &:hover{
        border-color:var(--border-color-hover);
    }
    &:active{
        background-color:var(--button-active-bg);
    }
}
</style>
