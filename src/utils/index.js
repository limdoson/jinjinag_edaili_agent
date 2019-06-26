import Vue from 'vue';

class Utils extends Vue {
    constructor () {
        super();
		
    }
	msg (msg,cb) {
		this.$dialog.alert({
			message: msg,
			confirmButtonColor :'orangered'
		}).then(()=>{
			cb && cb();
		})
	}
	toast(msg) {
		this.$toast(msg);
	}
}

export default new Utils;