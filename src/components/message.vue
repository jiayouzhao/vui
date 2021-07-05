<template>
  <div class="message">
    <slot />
  </div>
</template>

<script>

export default {
    
};
</script>

<style lang="scss" scoped>
$font-size:14px;
$height:40px;
$bg:#424242;
$color:#F9F9F9;
.message{

    position:fixed;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    font-size:$font-size;
    line-height:1.8;
    height:$height;
    display:flex;
    align-items:center;
    background:$bg;
    color:$color;
    border-radius:4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);
    padding:0 16px;
}
</style>