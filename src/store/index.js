import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lamas: [],
    selectedLama: null,
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
    selectLama(state, lama){
      state.selectedLama = lama
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
    async updateLama({commit, state}, lama){
      commit('updateLama', lama)
      try {
        const response = await axios.patch('/lamas/' + lama.id, lama)
        commit('updateLama', response.data)
      } catch (e) {
        commit('updateLama', state.selectedLama)
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
    lama: state => state.selectedLama,
    lamas: state => state.lamas
  }
})
