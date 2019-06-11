import axios from 'axios'  
import Vue from 'vue';
import Storage from './storage.js'
import Router from '@/router'
import config from '@/utils/config'
/*
 * code
 * -100 错误或者为空
 * -301 重定向
 * -403 无权限
 */
//axios.defaults.baseURL ='http://47.92.234.240:9501/admin/'
//axios.defaults.headers = {
//  "authorization":'111',
//}
//axios.defaults.withCredentials = true;
let http = axios.create({
    baseURL : config.baseUrl,
    withCredentials: true,//跨域
})

class Http extends Vue {
    //
    post (url,params) {
        //每次请求都提交缓存中的session_id
        http.defaults.headers = {
            "authorization": Storage.get('session_id') ? Storage.get('session_id') :'',
            'content-type': 'application/json',
        }
        //显示loading层
        const loading = this.$loading({
            lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
        })
        
        return new Promise((resolve, reject) => {
            http({
                method: 'get',
                url,
                params,
            }).then(res => { 
                loading.close()
                resolve(res.data)
                //判断code
                switch (res.data.code) {
                    case 200: //正常，且有数据，或操作成功
                        resolve(res.data)
                        break;
                    case 100: //无数据或操作失败
                        this.$alert(res.data.msg,'提示',{
                            confirmButtonText: '确定',
                            callback : action => {
                                
                            }
                        })
                        break;
                    case 301 :
                        this.$alert('token已过期，请重新登录','提示',{
                            confirmButtonText: '确定',
                            callback : action => {
                                Router.replace('/')
                            }
                        })
                        break;
                    case 403 :
                        this.$alert('无访问权限，请重新登录','提示',{
                            confirmButtonText: '确定',
                            callback : action => {
                                Router.replace('/')
                            }
                        })
                        //无访问权限
                        break;   
                }
            }).catch(err => {
                console.log(err)
            })

        })
    }
}
export default new Http