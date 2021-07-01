const expect = chai.expect;
import Vue from "vue";
import Input from "../src/components/input.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
	it("存在.", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Input).to.be.ok;
	});

	describe("props", () => {
		
		const Constructor = Vue.extend(Input);
		let vm;
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 value", () => {
			
			vm = new Constructor({
				propsData: {
					value: "1235"
				}
			}).$mount();
			const inputElement = vm.$el.querySelector("input");
			expect(inputElement.value).to.equal("1235");
			
		});
		it("接收 disabled", () => {
			vm = new Constructor({
				propsData: {
					disabled:true
				}
			}).$mount();
			const inputElement = vm.$el.querySelector("input");
			expect(inputElement.disabled).to.equal(true);

		});
		it("接收 readonly", () => {
			
			vm = new Constructor({
				propsData: {
					readonly:true
				}
			}).$mount();
			const inputElement = vm.$el.querySelector("input");
			expect(inputElement.readOnly).to.equal(true);
			
		});
		it("接收 error", () => {
			
			vm = new Constructor({
				propsData: {
					error:"用户名不合法"
				}
			}).$mount();
			const useElement = vm.$el.querySelector("use");
			expect(useElement.getAttribute("xlink:href")).to.equal("#icon-error");
			const spanElement = vm.$el.querySelector(".errorMessage");
			expect(spanElement.innerText).to.equal("用户名不合法");
			
		});
	});
	describe("事件", () => {
		const Constructor = Vue.extend(Input);
		let vm;
		afterEach(() => {
			vm.$destroy();
		});
		it("支持change/focus/input/blur事件", () => {
			[ "change", "input", "focus", "blur" ].forEach((eventName) => {
				vm = new Constructor().$mount();
				const callback = sinon.fake();
				vm.$on(eventName, callback);
				let event = new Event(eventName);
				Object.defineProperty(event, "target", {
					value:{ value:"hi" },
					enumerable:true
				});
				let inputElement = vm.$el.querySelector("input");
				inputElement.dispatchEvent(event);
				
				expect(callback).to.have.been.calledWith("hi");
			});
			
		});
		/* it("支持change事件", () => {
			vm = new Constructor().$mount();
			const callback = sinon.fake();
			vm.$on("change", callback);
			let event = new Event("change");
			let inputElement = vm.$el.querySelector("input");
			inputElement.dispatchEvent(event);
			// eslint-disable-next-line no-unused-expressions
			expect(callback).to.have.been.calledWith(event);
		});
		it("支持 input 事件", () => {
			vm = new Constructor().$mount();
			const callback = sinon.fake();
			vm.$on("input", callback);
			let event = new Event("input");
			let inputElement = vm.$el.querySelector("input");
			inputElement.dispatchEvent(event);
			// eslint-disable-next-line no-unused-expressions
			expect(callback).to.have.been.calledWith(event);
		});
		it("支持 focus 事件", () => {
			vm = new Constructor().$mount();
			const callback = sinon.fake();
			vm.$on("focus", callback);
			let event = new Event("focus");
			let inputElement = vm.$el.querySelector("input");
			inputElement.dispatchEvent(event);
			// eslint-disable-next-line no-unused-expressions
			expect(callback).to.have.been.calledWith(event);
		});
		it("支持 blur 事件", () => {
			vm = new Constructor().$mount();
			const callback = sinon.fake();
			vm.$on("blur", callback);
			let event = new Event("blur");
			let inputElement = vm.$el.querySelector("input");
			inputElement.dispatchEvent(event);
			// eslint-disable-next-line no-unused-expressions
			expect(callback).to.have.been.calledWith(event);
		});*/
	}); 
	/*it("icon 默认的 order 是 1", () => {
		const div = document.createElement("div");
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: "settings",
			}
		}).$mount(div);
		const icon = vm.$el.querySelector("svg");
		expect(getComputedStyle(icon).order).to.eq("1");
		vm.$el.remove();
		vm.$destroy();
	});
	it("设置 iconPosition 可以改变 order", () => {
		const div = document.createElement("div");
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: "settings",
				iconPosition: "right"
			}
		}).$mount(div);
		const icon = vm.$el.querySelector("svg");
		expect(getComputedStyle(icon).order).to.eq("2");
		vm.$el.remove();
		vm.$destroy();
	});
	it("点击 button 触发 click 事件", () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: "settings",
			}
		}).$mount();

		const callback = sinon.fake();
		vm.$on("click", callback);
		vm.$el.click();
		expect(callback).to.have.been.called;

	}); */
});