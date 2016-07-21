<template>
  <sidebar name="Travlr">
    <ul class="travels">
      <li v-for="travel in travels" class="travel">
        <div class="name">{{ travel.name }}</div>
      </li>
    </ul>
  </sidebar>

  <content>
    <h1>Homepage</h1>
  </content>
</template>

<script>
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

import { getTravels } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      travels: getTravels
    }
  },
  components: {
    Content,
    Sidebar
  }
}
</script>
