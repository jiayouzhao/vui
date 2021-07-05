
<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot />
  </div>
</template>

<script>
/* 
xs < 576px
sm >= 576 px
md >= 768 px
lg >= 992 px
xl >= 1200 px
xxl >= 1600 px
 */
let validator = (value) => {
	let validate = true;
	let keys = Object.keys(value);
	keys.forEach(key => {
		if (![ "span", "offset" ].includes(key)) {
			validate = false;
		}
	});

	return validate;
};

export default {
	name:"Col",
	props:{
		span:[ Number, String ],
		offset:{
			type:[ Number, String ]
		},
		sm:{ type:Object, validator },
		md:{ type:Object, validator },
		lg:{ type:Object, validator },
		xl:{ type:Object, validator },
		xll:{ type:Object, validator }
	},
	data() {
		return {
			gutter:0
		};
	},
	computed:{
		colClass() {
			let { span, offset, sm, md, lg, xl, xxl } = this;
			let createColClass = this.setColClass;
			return [
				...createColClass(span, "span"),
				...createColClass(offset, "offset"),
				...createColClass(sm, "sm"),
				...createColClass(md, "md"),
				...createColClass(lg, "lg"),
				...createColClass(xl, "xl"),
				...createColClass(xxl, "xxl")
			];
		},
		colStyle() {
			return {
				paddingLeft:`${this.gutter / 2}px`,
				paddingRight:`${this.gutter / 2}px`
			};
		}
	},
	methods:{
		setColClass(type, string) {
			let arr = [];

			if (typeof type === "object") {
				
				if (type.span) {
					arr.push(`col-${string}-${type.span}`);
				}
				if (type.offset) {
					arr.push(`offset-${string}-${type.offset}`);
				}
			} else if (typeof type === "string") {
			
				if (string === "span") {
					arr.push(`col-${type}`);
				}
				if (string === "offset") {
					arr.push(`offset-${type}`);
				}
			}
			
			return arr;
		}
	}
};
</script>

<style lang="scss" scoped>
.col{
    height:100px;
    $class-prefix:col-;
    @for $i from 1 through 24{
        &.#{$class-prefix}#{$i}{
            width:($i/24)*100%;
        }
    } 
    $class-prefix:offset-;
    @for $i from 1 through 24{
        &.#{$class-prefix}#{$i}{
            margin-left:($i/24)*100%;
        }
    }
    @media (min-width:576px){
        $class-prefix:col-sm-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                width:($i/24)*100%;
            }
        }
        $class-prefix:offset-sm-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                margin-left:($i/24)*100%;
            }
        }
    }
    @media (min-width:768px){
        $class-prefix:col-md-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                width:($i/24)*100%;
            }
        }
        $class-prefix:offset-md-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                margin-left:($i/24)*100%;
            }
        }
    }
    @media (min-width:992px){
        $class-prefix:col-lg-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                width:($i/24)*100%;
            }
        }
        $class-prefix:offset-lg-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                margin-left:($i/24)*100%;
            }
        }
    }
    @media (min-width:1200px){
        $class-prefix:col-xl-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                width:($i/24)*100%;
            }
        }
        $class-prefix:offset-xl-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                margin-left:($i/24)*100%;
            }
        }
    }
    @media (min-width:1600px){
        $class-prefix:col-xxl-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                width:($i/24)*100%;
            }
        }
        $class-prefix:offset-xxl-;
        @for $i from 1 through 24{
            &.#{$class-prefix}#{$i}{
                margin-left:($i/24)*100%;
            }
        }
    }
}
</style>