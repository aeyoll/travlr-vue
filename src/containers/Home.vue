<template>
  <sidebar name="Travlr">
    <travel-list :travels="travels"></travel-list>
  </sidebar>

  <content>
    <h1>Homepage</h1>
  </content>
</template>

<script>
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import TravelList from '../components/TravelList'

import { getTravels } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      travels: getTravels
    }
  },
  components: {
    Content,
    Sidebar,
    TravelList
  }
}
</script>
