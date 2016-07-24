<template>
  <sidebar name="Travlr">
    <travel-list :travels="travels"></travel-list>
  </sidebar>

  <content>
    <h1>Your travel companion</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo blanditiis eligendi temporibus. Quas minima voluptatum eum inventore animi, incidunt sunt illum, itaque alias culpa ex aspernatur minus, qui eaque quo.</p>
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
