<template>
  <sidebar>
    <travel-list :travels="travels"></travel-list>
  </sidebar>

  <div class="l-content">
    <navbar>Nouveau voyage</navbar>

    <content>
      <form action="" @submit.prevent="addTravel(travel.name, travel.from, travel.to)" method="POST">
        <div>
          <label for="name">Nom</label>
          <input v-model="travel.name" type="text" id="name" name="name">
        </div>
        <div>
          <label for="from">Du</label>
          <datepicker :time.sync="travel.from"></datepicker>
          <input v-model="travel.from" type="text" id="from" name="from" :option="datepicker.option">
        </div>
        <div>
          <label for="to">Au</label>
          <input v-model="travel.to" type="text" id="to" name="to">
        </div>

        <button type="submit" @click.prevent="addTravel(travel.name, travel.from, travel.to)">Créer</button>
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

import { addTravel } from '../vuex/actions'

export default {
  vuex: {
    actions: {
      addTravel
    },
    getters: {
      travels: getTravels
    }
  },

  methods: {
    onAddTravel (travel) {
      this.$route.router.go({ name: 'home' })
    }
  },

  components: {
    Sidebar,
    Content,
    Navbar,
    TravelList
  },

  data () {
    return {
      travel: {
        name: '',
        from: '',
        to: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
