import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  instagramLink: '',
  instagramConverted: {
    links: '',
    pic_t: '',
    pic_m: '',
    pic_l: '',
    vid: ''
  }
}

const mutations = {
  setInstagramLink: function (state, payload) {
    state.instagramLink = payload
  },
  convertedInstagramLink: function (state, payload) {
    state.instagramConverted = payload
  },
  cleared: function (state) {
    state.instagramLink = ''
    state.instagramConverted = {
      links: '',
      pic_t: '',
      pic_m: '',
      pic_l: '',
      vid: ''
    }
  }
}

const actions = {
  getInstagramLink: function ({ commit }, link) {
    commit('setInstagramLink', link.iLink)
  },
  convertInstagramLink: function ({ commit }, link) {
    if (link.isVideo) {
      axios.get('http://localhost:3000/?l=' + link.iLink + '&v=1')
      .then(({ data }) => {
        commit('convertedInstagramLink', data)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      axios.get('http://localhost:3000/?l=' + link.iLink)
      .then(({ data }) => {
        commit('convertedInstagramLink', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  clearData: function ({ commit }) {
    commit('cleared')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
