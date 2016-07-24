<template>
  <sidebar>
    <div class="details">
      <p>Du {{ travel.from_date | moment "dddd Do MMMM YYYY" }} au {{ travel.to_date | moment "dddd Do MMMM YYYY" }}</p>
    </div>
    <step-list :steps="travel.steps"></step-list>
  </sidebar>

  <div class="l-content">
    <navbar>{{ travel.name }}</navbar>

    <content>
      <div class="step">
        <map
          :center.sync="step.map.center"
          :zoom.sync="step.map.zoom"
        >
          <marker
            v-for="m in step.map.markers"
            :position.sync="m.position"
            :clickable.sync="m.clickable"
            :draggable.sync="m.draggable"
            @g-click="center=m.position"
          ></marker>
        </map>
        <h1>{{ step.name }}</h1>
        <small>{{ step.date | moment "dddd Do MMMM YYYY" }}</small>
        <p>{{ step.address }}</p>
      </div>
    </content>
  </div>
</template>

<script>
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import StepList from '../components/StepList'

import {load, Map, Marker} from 'vue-google-maps'

load('AIzaSyDYjPyLNURIyfIeoQsXPBbu_9b8dmo5g4c')

export default {
  components: {
    Content,
    Navbar,
    Sidebar,
    StepList,
    Map,
    Marker
  },

  data () {
    return {
      step: {
        id: 1,
        name: 'Step name',
        date: new Date(),
        address: '123 avenue des Champs Elysées, 75008 Paris, France',
        map: {
          zoom: 7,
          center: {lat: 10.0, lng: 10.0},
          markers: [{
            position: {lat: 10.0, lng: 10.0},
            clickable: true,
            draggable: true
          }, {
            position: {lat: 11.0, lng: 11.0},
            clickable: true,
            draggable: true
          }]
        }
      },
      travel: {
        id: 1,
        name: 'Bretagne',
        from_date: new Date(),
        to_date: new Date(),
        steps: [{
          id: 1,
          date: new Date(),
          description: 'Lorem ipsum dolor sit amet',
          address: '123 avenue des Champs Elysées, 75008 Paris, France'
        }, {
          id: 2,
          date: new Date(),
          description: 'Consectetur adipisicing elit',
          address: '123 avenue des Champs Elysées, 75008 Paris, France'
        }]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
map {
  display: block;
  height: 300px;
  width: 100%;
}
</style>
