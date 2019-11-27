import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
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
    }
  },
  actions: {
    async fetchLamas({commit}) {
      try{
        const response = await axios.get('/lamas')
        commit('setLamas', response.data)
      } catch (e) {
        throw e
      }
    },
    //eslint-disable-next-line no-unused-vars
    async addLama({commit}, lama) {
      //TODO
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
    lamas: state => state.lamas
  }
}
