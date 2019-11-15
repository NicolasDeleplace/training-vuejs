import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lamas: []
  },
  mutations: {
    setLamas(state, lamas){
      state.lamas = lamas
    },
    addLama(state, lama){
      state.lamas.push(lama)
    },
    removeLama(state, lama){
      state.lamas = state.lamas.filter(l => l.id !== lama.id)
    },
    updateLama(state, lama){
      const index = state.lamas.findIndex(l => l.id === lama.id)
      if(index !== -1){
        state.lamas[index] = lama
      }
    }
  },
  actions: {
    async fetchLamas({commit}){
      try{
        const response = await axios.get('/lamas')
        commit('setLamas', response.data)
      } catch (e) {
        throw e
      }
    },
    async addLama({commit}, lama) {
      try {
        const response = await axios.post('/lamas/', lama)
        commit('addLama', response.data)
      } catch(e) {
        throw e
      }
    },
    async updateLama({commit, getters}, lama){
      const oldLama = {...getters.lama(lama.id)}
      commit('updateLama', lama)
      try {
        const response = await axios.put('/lamas/' + lama.id, lama)
        commit('updateLama', response.data)
      } catch (e) {
        commit('updateLama', oldLama)
        throw e
      }
    },
    removeLama({commit}, lama){
      commit('removeLama', lama)
      try {
        axios.delete('/lamas/' + lama.id)
      } catch (e) {
        commit('addLama', lama)
        throw e
      }
    },
  },
  getters:{
    lama: state => id => state.lamas.find(l => l.id === id),
    lamas: state => state.lamas
  }
})
