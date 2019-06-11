let code = {
    code : '',
    code_data : [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    max_length : 4,
    /*
     * 生成随机的验证码
     */
    createCode () {
        if (this.code != '') {
            this.code = '';
        }
        
        for (let i = 0; i < this.max_length; i ++) {
        	let index = Math.floor(Math.random()*36);
            this.code += this.code_data[index]
        }
        return this.code;
    },
    /*
     * 校验用户传入的验证码
     */
    checkCode (code_input) {
        if (code_input == this.code) {
            return true;
        } else {
            return false;
        }
    }
}
export default code;