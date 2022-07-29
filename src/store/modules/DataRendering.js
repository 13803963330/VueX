export default {
  namespaced: true, // 启用命名空间
  state: {
    arr: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    // 删除
    deldeArr(state, payload) {
      state.arr.splice(payload, 1)
    },
    // 添加
    createArr(state, payload) {
      state.arr.unshift({
        id: state.arr.length == 0 ? 1 : state.arr[state.arr.length - 1].id + 1,
        name: payload,
        done: false
      })
    },
    // 更换状态
    replaceArr(state, payload) {
      state.arr[payload].done = !state.arr[payload].done
    }
  },
  actions: {
    // 删除
    delArr({ commit }, payload) {
      commit('deldeArr', payload)
    },
    // 添加
    createFn({ commit }, payload) {
      commit('createArr', payload)
    },
    // 更换状态
    replaceArr({ commit }, payload) {
      commit('replaceArr', payload)
    }
  }
}
