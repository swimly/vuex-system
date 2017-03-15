const state = {
  chart1: [{
    name: '衬衫',
    value: 456
  }, {
    name: '羊毛衫',
    value: 200
  }, {
    name: '雪纺衫',
    value: 150
  }, {
    name: '裤子',
    value: 500
  }, {
    name: '高跟鞋',
    value: 257
  }, {
    name: '袜子',
    value: 350
  }]
}
const getters = {
  getChart1 (state) {
    return state.chart1
  }
}
const mutations = {
  addItem (state, value) {
    state.data.push(value)
  },
  setFace (state, value) {
    state.user.face = value
  }
}
const actions = {
  addItem ({commit}, value) {
    const date = new Date()
    commit('addItem', value.text + date)
  },
  setFace ({commit}, src) {
    commit('setFace', src)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
