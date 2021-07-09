<template>
  <div
    ref="popover"
    class="popover"
  >
    <div
      v-if="toggle"
      ref="popoverContent"
      class="popoverWrapper"
      :class="{[`position-${position}`]:position}"
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
	props:{
		position:{
			type:String,
			default:"top",
			validator(value) {
				return [ "left", "right", "top", "bottom" ].indexOf(value) >= 0;
			}
		},
		trigger:{
			type:String,
			default:"click",
			validator(value) {
				return [ "click", "hover" ].indexOf(value) >= 0;
			}
		}
	},
	data() {
		return {
			toggle:false
		};
	},
	mounted() {
		//@click="popClick"
		if (this.trigger === "click") {
			this.$refs.popover.addEventListener(this.trigger, this.popClick);
		} else if (this.trigger === "hover") {
			this.$refs.popover.addEventListener("mouseenter", this.popClick);
			this.$refs.popover.addEventListener("mouseleave", this.close); 
		}
		
	},
	destroyed() {
		if (this.trigger === "click") {
			this.$refs.popover.removeEventListener(this.trigger, this.popClick);
		} else {
			this.$refs.popover.removeEventListener("mouseenter", this.popClick);
			this.$refs.popover.removeEventListener("mouseleave", this.close);
		}
        
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
			
			const { top, left, width, height } = this.$refs.content.getBoundingClientRect();
			document.body.appendChild(this.$refs.popoverContent);
			const { height:height2 } = this.$refs.popoverContent.getBoundingClientRect();
			const positions = {
				"top":{
					left:left + window.scrollX,
					top:top + window.scrollY
				},
				"left":{
					left:left + window.scrollX,
					top:top + (height - height2) / 2 + window.scrollY
				},
				"right":{
					left:left + width + window.scrollX,
					top:top + height2 + (height - height2) / 2 + window.scrollY
				},
				"bottom":{
					left:left + window.scrollX,
					top:top + height2 + height + window.scrollY
				}
			};
			this.$refs.popoverContent.style.left = positions[this.position].left + "px";
			this.$refs.popoverContent.style.top = positions[this.position].top + "px";
			
		},
		close() {
			this.toggle = false;
			document.removeEventListener("click", this.documentClick);
		},
		popClick() {
			
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
    border:1px solid #333;
    border-radius:4px;
    position:absolute;
    transform:translateY(-100%);
    padding:0.5em 0.8em;
    max-width:6em;
    word-break:break-all;
    background:#fff;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.5));
    &::before,&::after{
        content:'';
        display:block;
        height:0px;
        width:0px;
        border:10px solid transparent;
        position:absolute;
    }
    &.position-top{
        margin-top:-10px;
        &::before,&::after{
            left:10px;
            border-bottom:none;
        }
        &::before{
            border-top-color: #333;
            top:100%;
        }
        &::after{
            border-top-color:#fff;
            top:calc(100% - 1px);
        }
    }
    &.position-left{
        margin-left:-10px;
        transform:translateX(-100%);
        &::before,&::after{
            top:50%;
            transform:translatey(-50%);
            border-right:none;
        }
        &::before{
            border-left-color: #333;
            left:100%;
        }
        &::after{
            border-left-color:#fff;
            left:calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left:10px;
        &::before,&::after{
            top:50%;
            transform:translatey(-50%);
            border-left:none;
        }
        &::before{
            border-right-color: #333;
            right:100%;
        }
        &::after{
            border-right-color:#fff;
            right:calc(100% - 1px);
        }
    }
    &.position-bottom{
        margin-top:10px;
        &::before,&::after{
            left:10px;
            bottom:100%;
            border-top:none;
        }
        &::before{
            border-bottom-color: #333;
        }
        &::after{
            border-bottom-color:#fff;
            bottom:calc(100% - 1px);
        }
    }
}
</style>