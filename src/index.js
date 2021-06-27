import Vue from "vue";
import Button from "./components/Button.vue";
import "./style/reset.scss";
import "./style/index.scss";

Vue.component("GButton", Button);

new Vue({
	el: "#app"
});