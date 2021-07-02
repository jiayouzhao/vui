import Vue from "vue";
import Button from "./components/Button.vue";
import "./style/reset.scss";
import "./style/index.scss";
import Icon from "./components/Icon.vue";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";

Vue.component("GButton", Button);
Vue.component("IIcon", Icon);
Vue.component("ButtonGroup", ButtonGroup);
Vue.component("IInput", Input);
Vue.component("IRow", Row);
Vue.component("ICol", Col);

new Vue({
	el: "#app",
	data:{
		message:"hi"
	},
	methods:{
		inputChange(e) {
			
		}
	}
});