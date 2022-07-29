export default {
  namespaced: true, // 启用命名空间
  state: {
    todo: 'todos',
    color: 'red'
  },
  getters: {},
  mutations: {
    changeColor(state, payload) {
      state.color = payload
    }
  },
  actions: {
    changeColor({ commit }, payload) {
      commit('changeColor', payload)
    }
  }
}
