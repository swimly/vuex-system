const state = {
  tab: [{
    name: '基本设置',
    url: 'basic'
  }, {
    name: '个性化设置',
    url: 'personality'
  }, {
    name: '账户安全',
    url: 'safe'
  }, {
    name: '消息设置',
    url: 'notice'
  }, {
    name: '其他',
    url: 'other'
  }]
}
const getters = {
  gettab (state) {
    return state.tab
  }
}
const mutations = {
}
const actions = {
}
export default {
  state,
  mutations,
  getters,
  actions
}
