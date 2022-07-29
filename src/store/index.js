import Vue from 'vue'
import Vuex from 'vuex'
import ChangeThecolor from './modules/ChangeThecolor'
import DataRendering from './modules/DataRendering'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    arr(state) {
      return state.DataRendering.arr
    },
    TODU(state) {
      return state.ChangeThecolor.todo
    },
    Color(state) {
      return state.ChangeThecolor.color
    }
  },
  mutations: {},
  actions: {},
  modules: {
    ChangeThecolor,
    DataRendering
  }
})
