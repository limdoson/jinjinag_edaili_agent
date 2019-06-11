import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        config : {
            default_fx_config : 1,//默认分销比例
			default_agent_income_rate : null,//代理默认进货折扣
        }
    },
    mutations : {},
    actions : {},
	plugins : [VuexAlong]
})
