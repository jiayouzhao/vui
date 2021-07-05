const expect = chai.expect;
import Vue from "vue";
import Col from "../src/components/col.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
	it("存在", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Col).to.be.ok;
	});
	
	describe("props", () => {
		let vm;
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 span 属性", () => {
			const Constructor = Vue.extend(Col);
			vm = new Constructor({
				propsData:{
					span:"10"
				}
			}).$mount();

			expect(vm.$el.classList.contains("col-10")).to.eq(true);
        
		});
		it("接收 offset 属性", () => {
			const Constructor = Vue.extend(Col);
			vm = new Constructor({
				propsData:{
					offset:"10"
				}
			}).$mount();

			expect(vm.$el.classList.contains("offset-10")).to.eq(true);
		});
		it("接收 sm 属性", () => {
			const Constructor = Vue.extend(Col);
			vm = new Constructor({
				propsData:{
					sm:{ span:"10", offset:"5" }
				}
			}).$mount();

			expect(vm.$el.classList.contains("col-sm-10")).to.eq(true);
			expect(vm.$el.classList.contains("offset-sm-5")).to.eq(true);
		});
	});

});
