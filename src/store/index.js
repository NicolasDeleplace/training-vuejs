import Vue from 'vue'
import Vuex from 'vuex'
import lamas from './modules/lamas'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    lamas
  }
})
