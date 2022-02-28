import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import RestaurantsModule from '../store/modules/restaurants-module'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout,
    RestaurantsModule
  }
})
