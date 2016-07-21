import Vue from 'vue'
import Vuex from 'vuex'
import travels from './modules/travels'
import createLogger from 'vuex/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    travels
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
