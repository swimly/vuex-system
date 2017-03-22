import config from '../../config'
const state = {
  i: 0,
  max: 20,
  show: false,
  info: [],
  caption: config.caption
}
const getters = {
  show (state) {
    return state.show
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
  showMask (state) {
    state.show = true
  }
}
const actions = {
  getData ({commit}, data) {
    commit('getData', data)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
