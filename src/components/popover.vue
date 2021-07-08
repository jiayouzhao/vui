<template>
  <div
    class="popover"
    @click="popClick"
  >
    <div
      v-if="toggle"
      ref="popoverContent"
      class="popoverWrapper"
    >
      <slot
        name="popContent"
      />
    </div>
    
    <div
      ref="content"
      class="contentWrapper"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			toggle:false
		};
	},

	methods:{
		documentClick(e) {
	
			if (this.$refs.popoverContent.contains(e.target) || this.$refs.content.contains(e.target)) {
				return; 
			} else {
				this.close();
			}
		},
		popoverPosition() {
			let { top, left, width } = this.$refs.content.getBoundingClientRect();
			this.$refs.popoverContent.style.left = `${left + window.scrollX}px`;
			this.$refs.popoverContent.style.top = `${top + window.scrollY}px`;
			document.body.appendChild(this.$refs.popoverContent);
		},
		close() {
			this.toggle = false;
			document.removeEventListener("click", this.documentClick);
		},
		popClick(e) {
			
			if (this.toggle === false) {
				this.toggle = true;
				
				this.$nextTick(() => {
					this.popoverPosition();
					document.addEventListener("click", this.documentClick);

				});
				
			} else {
				this.close();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.popover{
    display:inline-block;
    position:relative;
    vertical-align:top;
}
.popoverWrapper{
    border:1px solid red;
    position:absolute;
    transform:translate(-25%,-100%);
    width:5em;
}
</style>