const state = {
  user: {
    name: 'swimly',
    face: './static/img/face.jpg',
    showInfo: false,
    age: 27,
    degree: '管理员',
    summary: '性格偏于内向，为人坦率、热情、讲求原则；处事乐观、专心、细致、头脑清醒；富有责任心、乐于助人。'
  },
  data: [{
    text: '首页',
    url: '/home',
    icon: 'icon-home'
  }, {
    text: '用户管理',
    url: '/users',
    icon: 'icon-users'
  }, {
    text: '项目管理',
    url: '/projects',
    icon: 'icon-projects'
  }, {
    text: '文章管理',
    url: '/articles',
    icon: 'icon-articles'
  }, {
    text: '图库管理',
    url: '/photos',
    icon: 'icon-photos'
  }, {
    text: '权限管理',
    url: '/manage',
    icon: 'icon-manage'
  }, {
    text: '统计',
    url: '/count',
    icon: 'icon-count'
  }, {
    text: '日程',
    url: '/daily',
    icon: 'icon-daily'
  }, {
    text: '设置',
    url: '/setting',
    icon: 'icon-setting'
  }, {
    text: '关于',
    url: '/about',
    icon: 'icon-about'
  }]
}
const getters = {
  getaside (state) {
    return state.data
  },
  getuser (state) {
    return state.user
  },
  showInfo (state) {
    return state.user.showInfo
  }
}
const mutations = {
  addItem (state, value) {
    state.data.push(value)
  },
  setFace (state, value) {
    state.user.face = value
  },
  toggleInfo (state) {
    state.user.showInfo = !state.user.showInfo
  }
}
const actions = {
  addItem ({commit}, value) {
    const date = new Date()
    commit('addItem', value.text + date)
  },
  setFace ({commit}, src) {
    commit('setFace', src)
  },
  toggleInfo ({commit}) {
    commit('toggleInfo')
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
