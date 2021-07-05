const expert = chai.expect;
import Vue from "vue";
import Row from "../src/components/row.vue";
import Col from "../src/components/col.vue"; 
import _ from "lodash";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
	it("Row存在", () => {
		// eslint-disable-next-line no-unused-expressions
		expect(Row).to.be.ok;
	});
    
	describe("props", () => {
		let vm;
		afterEach(() => {
			vm.$destroy();
		});
		it("接收gutter属性", (done) => {
			Vue.component("GRow", Row);
			Vue.component("GCol", Col);
			const div = document.createElement("div");
			div.innerHTML = `
            <g-row gutter="20" align="right">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
            `;
			document.body.appendChild(div);
			vm = new Vue({
				el:div
			});
			setTimeout(() => {
				const cols = vm.$el.querySelectorAll(".col");
				
				expect(cols[0].style.paddingLeft).to.equal("10px");
				expect(cols[0].style.paddingRight).to.equal("10px");

				done();
			}, 0);
		});
		it("接收 align 属性", () => {
			const div = document.createElement("div");
			document.body.appendChild(div);
			const Constructor = Vue.extend(Row);
			const vm = new Constructor({
				propsData:{
					align:"left"
				}
			}).$mount(div);
			const RowElement = vm.$el;
		
			expect(getComputedStyle(RowElement).justifyContent).to.eq("flex-start");
		});

	});
});