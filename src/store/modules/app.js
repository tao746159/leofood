import Cookies from 'js-cookie'

const state = {
  loading: false
}

const mutations = {
  CHANGE_LOADING: (state, loading) => {
    state.loading = loading
  }
}

const actions = {
  changeLoading({ commit }, loading) {
    commit('CHANGE_LOADING', loading)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
