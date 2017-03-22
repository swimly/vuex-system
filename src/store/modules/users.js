import config from '../../config'
const state = {
  i: 0,
  max: 20,
  showAdd: false,
  showEdit: false,
  showMore: false,
  showDelete: false,
  info: [],
  caption: config.caption
}
const getters = {
  showAdd (state) {
    return state.showAdd
  },
  showEdit (state) {
    return state.showEdit
  },
  showMore (state) {
    return state.showMore
  },
  showDelete (state) {
    return state.showDelete
  },
  getCaption (state) {
    return state.caption
  },
  getInfo (state) {
    return state.info
  },
  idx (state) {
    return state.i * state.max
  },
  i (state) {
    return state.i + 1
  },
  sum (state) {
    return state.info.length
  },
  n (state) {
    return Math.ceil(state.info.length / state.max)
  },
  limit (state) {
    return state.info.slice(state.i * state.max, (state.i + 1) * state.max)
  }
}
const mutations = {
  getData (state, data) {
    state.info = data
  },
  prev (state) {
    if (state.i > 0) {
      state.i = state.i - 1
    } else {
      return false
    }
  },
  next (state, n) {
    if (state.i < n - 1) {
      state.i = state.i + 1
    } else {
      return false
    }
  },
  home (state) {
    state.i = 0
  },
  end (state, n) {
    state.i = n - 1
  },
  search (state, payload) {
    if (payload.displayName === '' && payload.sexType !== '') {
      state.info = state.info.filter(function (item) {
        return item.sex.match(payload.sexType)
      })
    } else if (payload.displayName !== '' && payload.sexType === '') {
      state.info = state.info.filter(function (item) {
        return item.displayName.match(payload.displayName)
      })
    } else if (payload.displayName !== '' && payload.sexType !== '') {
      state.info = state.info.filter(function (item) {
        return item.displayName.match(payload.displayName) && item.sex.match(payload.sexType)
      })
    } else {
      state.info = state.info
    }
  },
  toggleAdd (state) {
    state.showAdd = !state.showAdd
  },
  toggleEdit (state) {
    state.showEdit = !state.showEdit
  },
  toggleMore (state) {
    state.showMore = !state.showMore
  },
  toggleDelete (state) {
    state.showDelete = !state.showDelete
  }
}
const actions = {
  getData ({commit}, data) {
    commit('getData', data)
  },
  toggleAdd ({commit}) {
    commit('toggleAdd')
  },
  toggleEdit ({commit}) {
    commit('toggleEdit')
  },
  toggleMore ({commit}) {
    commit('toggleMore')
  },
  toggleDelete ({commit}) {
    commit('toggleDelete')
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
