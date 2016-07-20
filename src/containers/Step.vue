<template>
  <sidebar :name="travel.name">
    <div class="details">
      <p>Du {{ from_date | moment "dddd Do MMMM YYYY" }} au {{ to_date | moment "dddd Do MMMM YYYY" }}</p>
    </div>
    <step-list :steps="travel.steps"></step-list>
  </sidebar>

  <content>
    <div class="step">
      <h1>{{ name }}</h1>
      <small>{{ date }}</small>
      <p>{{ address }}</p>
    </div>
  </content>
</template>

<script>
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import StepList from '../components/StepList'

export default {
  components: {
    Content,
    Sidebar,
    StepList
  },

  data () {
    return {
      id: 1,
      name: 'Step name',
      date: new Date(),
      address: '123 avenue des Champs Elysées, 75008 Paris, France',
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
</style>
