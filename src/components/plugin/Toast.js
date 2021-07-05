import Message from "../message.vue";
export default {
	install(Vue, options) {
		Vue.prototype.$message = function(msg) {
			const Constructor = Vue.extend(Message);
			let message = new Constructor();
	
			message.$slots.default = msg;
	
			message.$mount();
			document.body.appendChild(message.$el);
		};
	}
};