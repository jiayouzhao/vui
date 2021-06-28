<template>
  <svg
    class="i-icon"
    :class="name==='loading' ? 'loading' : ''"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
	props:[ "name" ],
	created() {
		
	}
};
</script>

<style lang="scss" scoped>
.i-icon {
    width: 1em;
    height: 1em;
}
@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.loading{
    animation:spin 1s infinite linear;
}
</style>