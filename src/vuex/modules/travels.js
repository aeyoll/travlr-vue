import {
  RECEIVE_TRAVELS
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_TRAVELS] (state, travels) {
    state.all = travels
  }
}

export default {
  state,
  mutations
}
