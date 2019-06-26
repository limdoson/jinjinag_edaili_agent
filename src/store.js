import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        config : {
            agent : null,
			agentApply :null,
        }
    },
    mutations : {
		initUserInfo (state,payload) {
			state.agent = payload.agent;
			state.agentApply = payload.agentApply;
		}
	},
    actions : {},
	plugins : [VuexAlong]
})
