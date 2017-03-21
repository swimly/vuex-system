import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import aside from './modules/aside'
import count from './modules/count'
import editInfo from './modules/editInfo'
import users from './modules/users'
Vue.use(Vuex)
const state = {
  user: 'swimly',
  list: ['刘勇', 'swimly', 'liyan']
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    aside,
    count,
    editInfo,
    users
  }
})
