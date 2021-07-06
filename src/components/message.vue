<template>
  <div
    ref="messageWrapper"
    class="message"
    :class="messageClass"
  >
    <div class="content">
      <div
        v-if="enableHtml"
        v-html="$slots.default"
      />
      <slot v-else />
    </div>
    
    <span
      ref="lineWrapper"
      class="line"
    />
    <span
      v-if="closeButton"
      class="close"
      @click="closeClick"
    >
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>

export default {
	name:"VuiMessage",
	props:{
		position:{
			type:String,
			default:"top",
			validator(value) {
				return [ "top", "bottom", "middle" ].indexOf(value) >= 0;
			}
		},
		autoClose:{
			type:Boolean,
			default:true
		},
		autoCloseDelay:{
			type:Number,
			default:5000
		},
		closeButton:{
			type:Object,
			default() {
				return {
					text:"关闭",
					callback:undefined
				};
			}
		},
		enableHtml:{
			type:Boolean,
			default:false
		}
	},
	computed:{
		messageClass() {
			return [ `position-${this.position}` ];
		}
	},
	mounted() {
		this.closeMessage();
		this.updateStyle(); 
	},
	methods:{
		closeMessage() {
			if (this.autoClose) {
				
				setTimeout(() => {
					this.close();
				}, this.autoCloseDelay * 1000);
			}
		},
		updateStyle() {
			this.$nextTick(() => {
				if (this.$refs.lineWrapper) {
					this.$refs.lineWrapper.style.height = `${this.$refs.messageWrapper.getBoundingClientRect().height}px`;
				}
			});
		},
		close() {
			this.$el.remove();
			this.$emit("beforeClose");
			this.$destroy();
			
		},
		closeClick() {
		
			this.close();
			if (this.closeButton && typeof this.closeButton.callback === "function") {
				this.closeButton.callback();
			}
			
		}
	}
};
</script>

<style lang="scss" scoped>
$font-size:14px;
$height:40px;
$bg:#424242;
$color:#F9F9F9;
.message{
    position:fixed;
    left:50%;
    font-size:$font-size;
    min-height:$height;
    line-height:1.8;
    display:flex;
    align-items:center;
    background:$bg;
    color:$color;
    border-radius:4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,.5);
    padding:0 16px;
    &.position-top{
        top:0px;
        //transform:translateX(-50%);
        animation:topIn .3s forwards;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    &.position-bottom{
        bottom:0px;
        //transform:translateX(-50%);
        animation:bottomIn .3s forwards;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    &.position-middle{
        top:50%;
        transform:translate(-50%,-50%);
        animation:fade .3s forwards;
    }
    .content{
        padding:5px 0px;
    }
    .line{
        border-left:1px solid #666;    
        margin-left:16px;
    }
    .close{
        margin-left:16px;
        cursor:default;
        flex-shrink: 0;
    }
    @keyframes topIn{
        0%{
            transform:translate(-50%,-100%);

        }
        100%{
            transform:translate(-50%,0);
        }
    }

    @keyframes bottomIn{
        0%{
            transform:translate(-50%,100%);
        }
        100%{
            transform: translate(-50%,0);
        }
    }
    @keyframes fade{
        0%{
            opacity:0;
        }
        100%{
            opacity: 1;
        }
    
    }
}
</style>