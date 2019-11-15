import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'


export default {
  state: {
    trophies: [],
  },
  mutations: {
    setTrophies(state, trophies){
      state.trophies = trophies
    },
    updateTrophy(state, trophy){
      const index = state.trophies.findIndex(t => t.id === trophy.id)
      if(index !== -1){
        state.trophies[index] = trophy
      }
    }
  },
  actions: {
    async fetchTrophies({commit}){
      try{
        const response = await axios.get('/trophies')
        commit('setTrophies', response.data)
      } catch (e) {
        throw e
      }
    },
    async unlockTrophy({commit}, trophy){
      trophy.unlocked = true
      commit('updateTrophy', trophy)
      try {
        await axios.patch('/trophies/' + trophy.id, trophy)
      } catch (e) {
        trophy.unlocked = false
        commit('updateTrophy', trophy)
        throw e
      }
    },
  },
  getters:{
    trophies: state => state.trophies
  }
}
