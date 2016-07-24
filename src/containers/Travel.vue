<template>
  <sidebar>
    <div class="details">
      <p>Du {{ from_date | moment "dddd Do MMMM YYYY" }} au {{ to_date | moment "dddd Do MMMM YYYY" }}</p>
    </div>
    <step-list :steps="steps"></step-list>
  </sidebar>

  <div class="l-content">
    <navbar>{{ name }}</navbar>

    <content>
      <div class="travel">
      </div>
    </content>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import StepList from '../components/StepList'

export default {
  components: {
    Sidebar,
    Content,
    Navbar,
    StepList
  },

  data () {
    return {
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
</script>

<style lang="scss" scoped>
</style>
