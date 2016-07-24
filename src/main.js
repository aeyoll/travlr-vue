import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import App from './App'

// Components
import Sidebar from './components/Sidebar'
Vue.component('sidebar', Sidebar)

// Containers
import Home from './containers/Home'
import Travel from './containers/Travel'
import TravelNew from './containers/TravelNew'
import Step from './containers/Step'

// Dates
import moment from 'moment'
moment.locale(navigator.language || navigator.userLanguage)

// Modules
Vue.use(VueRouter)
Vue.use(VueMoment, { 'moment': moment })

// Routing
var router = new VueRouter()

router.map({
  '/': {
    component: Home,
    name: 'home'
  },
  '/travel/:travelId': {
    component: Travel,
    name: 'travel'
  },
  '/travel/new': {
    component: TravelNew,
    name: 'travelNew'
  },
  '/step/:stepId': {
    component: Step,
    name: 'step'
  }
})

router.start(App, '#app')
