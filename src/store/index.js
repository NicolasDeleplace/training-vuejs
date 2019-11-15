import Vue from 'vue'
import Vuex from 'vuex'
import lamas from './modules/lamas'
import trophies from './modules/trophies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    lamas,
    trophies,
  }
})
