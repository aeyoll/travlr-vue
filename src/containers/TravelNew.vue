<template>
  <sidebar>
    <travel-list :travels="travels"></travel-list>
  </sidebar>

  <div class="l-content">
    <navbar>Nouveau voyage</navbar>

    <content>
      <form action="">
        <div>
          <label for="name">Nom</label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <label for="from">Du</label>
          <input type="text" id="from" name="from">
        </div>
        <div>
          <label for="to">Au</label>
          <input type="text" id="to" name="to">
        </div>
      </form>
    </content>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import TravelList from '../components/TravelList'

import { getTravels } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      travels: getTravels
    }
  },
  components: {
    Sidebar,
    Content,
    Navbar,
    TravelList
  }
}
</script>

<style lang="scss" scoped>
</style>
