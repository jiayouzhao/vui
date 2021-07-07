const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/components/tab/tabs.vue";
import TabsHead from "../src/components/tab/tabs-head.vue";
import TabsItem from "../src/components/tab/tabs-item.vue";
import TabsBody from "../src/components/tab/tabs-body.vue";
import TabsContent from "../src/components/tab/tabs-content.vue";

Vue.component("ITabs", Tabs);
Vue.component("ITabsHead", TabsHead);
Vue.component("ITabsItem", TabsItem);
Vue.component("ITabsBody", TabsBody);
Vue.component("ITabsContent", TabsContent);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {

	it("TabsItem 存在", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(TabsItem).to.be.ok;
	});
    
	describe("props", () => {
		let vm;
		const Constructor = Vue.extend(TabsItem);
		
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 name 属性", () => {
			vm = new Constructor({
				propsData:{
					name:"money"
				}
			}).$mount();
			expect(vm.$el.getAttribute("data-name")).to.eq("money");
		});
		it("接收 disabled 属性", () => {
			vm = new Constructor({
				propsData:{
					disabled:false
				}
			}).$mount();
			expect(vm.$el.classList.contains("disabled")).to.eq(false);
			const callback = sinon.fake();
			vm.$on("click", callback);
			vm.$el.click();
			// eslint-disable-next-line no-unused-expressions
			expect(callback).to.have.been.called;
		}); 

	}); 
});