import Vue from "vue";
import Button from "./components/Button.vue";
import "./style/reset.scss";
import "./style/index.scss";
import Icon from "./components/Icon.vue";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";
import Layout from "./components/layout/layout.vue";
import Header from "./components/layout/header.vue";
import Content from "./components/layout/content.vue";
import Footer from "./components/layout/footer.vue";
import Sider from "./components/layout/sider.vue";
import Message from "./components/message.vue";
import Toast from "./components/plugin/Toast.js";

Vue.component("GButton", Button);
Vue.component("IIcon", Icon);
Vue.component("ButtonGroup", ButtonGroup);
Vue.component("IInput", Input);
Vue.component("IRow", Row);
Vue.component("ICol", Col);
Vue.component("ILayout", Layout);
Vue.component("IHeader", Header);
Vue.component("IContent", Content);
Vue.component("IFooter", Footer);
Vue.component("ISider", Sider);
Vue.use(Toast);

new Vue({
	el: "#app",
	data:{
		message:"hi"
	},
	created() {
		
	},
	methods:{
		showMessage() {
			this.$message("我是 Message");
		}
	}
});