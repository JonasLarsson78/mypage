import { createStore } from 'vuex'

export default createStore({
  state: {
    routeTitle: 'Hem'
  },
  getters: {
    getRouteTitle: (state) => state.routeTitle
  },
  actions: {
    setRouteTitle({ commit }, payload) {
      commit('mutateRouteTitle', payload)
    }
  },
  mutations: {
    mutateRouteTitle(state, payload) {
      state.routeTitle = payload
    }
  }
})
