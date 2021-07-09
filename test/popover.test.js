const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/components/popover.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover", () => {
	it("存在", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Popover).to.be.ok;
	});
	
	describe("props", () => {
		let vm;
		
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 position 属性", (done) => {
			Vue.component("IPopover", Popover);
			const div = document.createElement("div");
			document.body.appendChild(div);
			div.innerHTML = `
                <i-popover position="bottom" ref="test">
                    <template slot="popContent">
                        <div>popover内容</div>
                    </template>
                    <button>点击</button>
                </i-popover>
            `;
			vm = new Vue({
				el:div
			});
			vm.$nextTick(() => {
				document.body.querySelector("button").click();
				setTimeout(() => {
			
					expect(vm.$refs.test.$refs.popoverContent.classList.contains("position-bottom")).to.eq(true); ;
					done();
				});
				
			});
	
		});
		it("接收 trigger 属性", (done) => {
			Vue.component("IPopover", Popover);
			const div = document.createElement("div");
			document.body.appendChild(div);
			div.innerHTML = `
                <i-popover trigger="hover" ref="test">
                    <template slot="popContent">
                        <div>popover内容</div>
                    </template>
                    <button>点击</button>
                </i-popover>
            `;
			vm = new Vue({
				el:div
			});
			
			vm.$nextTick(() => {
				let event = new Event("mouseenter");
				let popoverElement = vm.$refs.test.$refs.popover;
				popoverElement.dispatchEvent(event);
				setTimeout(() => {
					// eslint-disable-next-line no-unused-expressions
					expect(vm.$refs.test.$refs.popoverContent).to.be.exist;
					done();
				}); 
				
			});
        
		});
		
	}); 

});
