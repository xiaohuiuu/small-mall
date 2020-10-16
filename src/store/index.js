import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //购物车列表
    cartlist:[]
  },


  mutations,
  actions,
  getters,



  modules: {
  }
})
