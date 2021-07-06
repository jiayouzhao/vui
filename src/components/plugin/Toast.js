import Message from "../message.vue";
let currentMessage;

export default {
	install(Vue, options) {
		Vue.prototype.$message = function(msg, props) {
			
			if (currentMessage) {
				currentMessage.close();
			}
			currentMessage = createMessage({ 
				Vue, 
				msg, 
				props, 
				onbeforeClose() {
					currentMessage = null;
			
				}
			});
		};
	}
};

function createMessage({ Vue, msg, props, onbeforeClose }) {
	const Constructor = Vue.extend(Message);
    
	let message = new Constructor({
		propsData:props
	});
    
	message.$slots.default = msg;
	message.$on("beforeClose", onbeforeClose);
	message.$mount();
	
	document.body.appendChild(message.$el);
	return message;
}