import Vue from "vue";
import Button from "./components/Button.vue";
import "./style/reset.scss";
import "./style/index.scss";
import Icon from "./components/Icon.vue";

Vue.component("GButton", Button);
Vue.component("IIcon", Icon);

new Vue({
	el: "#app"
});