<template>
  <svg class="i-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
	props:[ "name" ]
};
</script>

<style lang="scss" scoped>
.i-icon {
    width: 1em;
    height: 1em;
}
</style>