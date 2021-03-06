const expect = chai.expect;
import Vue from "vue";
import Message from "../src/components/message.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Message", () => {
	it("存在 ", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Message).to.be.ok;
	});

	describe("props", () => {
		
		const Constructor = Vue.extend(Message);
		let vm;
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 autoClose", (done) => {
			const div = document.createElement("div");
			document.body.appendChild(div);
			vm = new Constructor({
				propsData: {
					autoClose: true,
					autoCloseDelay:1
				}
			}).$mount(div);
			
			vm.$on("beforeClose", () => {
				expect(document.body.contains(vm.$el)).to.equal(false);
				done();
			});
			//setTimeout(() => {
			// eslint-disable-next-line no-unused-expressions
			//	expect(document.body.contains(vm.$el)).to.equal(false);
				
			//	done();
			//}, 1500); 
		});
		it("接收 closeButton", (done) => {
			const callback = sinon.fake();
			vm = new Constructor({
				propsData: {
					closeButton:{
						text:"关闭错误",
						callback
					}
				}
			}).$mount();
			let closeBtn = vm.$el.querySelector(".close");
			expect(closeBtn.innerText.trim()).to.eq("关闭错误");
			setTimeout(() => {
				closeBtn.click();
				// eslint-disable-next-line no-unused-expressions
				expect(callback).to.have.been.called;
				done();
			}, 200);
		}); 
		it("接收 enableHtml", () => {
			
			vm = new Constructor({
				propsData: {
					enableHtml:false
				}
			});
			vm.$slots.default = "<strong>hi</strong>";
			vm.$mount();
			let content = vm.$el.querySelector(".content");
			expect(content.innerText.trim()).to.equal("<strong>hi</strong>");

		});
		it("接收 position", () => {
			
			vm = new Constructor({
				propsData: {
					position:"top"
				}
			}).$mount();
			expect(vm.$el.classList.contains("position-top")).to.eq(true);
			
		}); 
	});
	
});