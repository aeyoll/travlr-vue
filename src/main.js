import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// Components
import Sidebar from './components/Sidebar'
Vue.component('sidebar', Sidebar)

// Containers
import Home from './containers/Home'
import Travel from './containers/Travel'
import Step from './containers/Step'

// Routing
Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/travel': {
    component: Travel
  },
  '/step': {
    component: Step
  }
})

router.start(App, '#app')
