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

describe("Tabs", () => {

	it("Tabs 存在", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Tabs).to.be.ok;
	});
    
	describe("props", () => {
		let vm;
		const Constructor = Vue.extend(Tabs);
		
		afterEach(() => {
			vm.$destroy();
		});
		it("接收 direction 属性", () => {
			vm = new Constructor({
				propsData:{
					direction:"upright"
				}
			}).$mount();
			expect(vm.$el.classList.contains("upright")).to.eq(true);
		});
		it("接收 selected 属性", (done) => {
			const div = document.createElement("div");
			document.body.appendChild(div);
			div.innerHTML = `
                <i-tabs selected="money">
                    <i-tabs-head>
                        <i-tabs-item name="money">美元</i-tabs-item>
                    </i-tabs-head>
                    <i-tabs-body></i-tabs-body>
                </i-tabs>
            `;
			vm = new Vue({
				el:div
			}).$mount();

			setTimeout(() => {
				const activeElement = vm.$el.querySelector(".tabs-item");
				expect(activeElement.classList.contains("active")).to.eq(true);

				done();
			});
		});

	}); 
});