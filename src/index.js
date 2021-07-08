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
import Toast from "./components/plugin/Toast.js";
import Tabs from "./components/tab/tabs.vue";
import TabsHead from "./components/tab/tabs-head.vue";
import TabsItem from "./components/tab/tabs-item.vue";
import TabsBody from "./components/tab/tabs-body.vue";
import TabsContent from "./components/tab/tabs-content.vue";
import Popover from "./components/popover.vue";

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
Vue.component("ITabs", Tabs);
Vue.component("ITabsHead", TabsHead);
Vue.component("ITabsItem", TabsItem);
Vue.component("ITabsBody", TabsBody);
Vue.component("ITabsContent", TabsContent);
Vue.component("IPopover", Popover);
Vue.use(Toast);

new Vue({
	el: "#app",
	data:{
		message:"hi",
		selectedType:"money"
	},
	created() {
		
	},
	methods:{
		showMessage1() {
			this.showMessage({ position:"top" });
		},
		showMessage2() {
			this.showMessage({ position:"middle" });
		},
		showMessage3() {
			this.showMessage({ position:"bottom" });
		},
		showMessage({ position }) {
			this.$message("<h1>我爱中国</h1><script>alert('1')</script>", {
				enableHtml:true,
				position,
				closeButton:{
					text:"求走嘛带",
					callback() {
						console.log("我知道了");
					}
			    },
				autoClose:false,
				autoCloseDelay:1
			});
		}
	}
});