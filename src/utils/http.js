import axios from 'axios'  
import Vue from 'vue';
import Router from '@/router'
import config from '@/config/index'
/*
 * code
 * 	100   常规错误
	101   参数不全
	110   未登录
	111   插入失败
	112   更新失败
	113   删除失败
	404   查无数据
	200     请求正常（有数据）
 */

let http = axios.create({
    baseURL : config.base_request_host,
    withCredentials: true,//跨域
})


class Http extends Vue {
    //POST方法
    post (url,params) {
        //每次请求都提交缓存中的session_id
        http.defaults.headers = {
            // "authorization": Storage.get('session_id') ? Storage.get('session_id') :'',
            'content-type': 'application/json',
        }    
		
        return new Promise((resolve, reject) => {
            http({
                method: 'post',
                url,
                params,
            }).then(res => { 
                //判断code
                switch (res.data.code) {
                    case 200: //正常，且有数据，或操作成功
                        resolve(res.data)
                        break;
					case 100: //正常错误
					    this.utils.toast(res.data.msg)
					    break;
					case 110: //未登录
						this.utils.msg(res.data.msg,()=>{
							Router.replace('/')
						})
					    break;
                    case 112: //无数据或操作失败
                        this.utils.msg(res.data.msg)
                        break;
					case 404: //无数据或操作失败
					    this.utils.msg('网络错误，请稍后重试')
					    break;
                }
            }).catch(err => {
                console.log(err)
            })

        })
    }
}
export default new Http