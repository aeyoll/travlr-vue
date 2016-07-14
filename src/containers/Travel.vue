<template>
  <sidebar :name="name">
    <div class="details">
      <p>Du {{ from_date }} au {{ to_date }}</p>
    </div>
    <step-list :steps="steps"></step-list>
  </sidebar>

  <content>
    <div class="travel">
      <h1>{{ name }}</h1>
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
$green-light: #24ab80;

.details {
  background: $green-light;
  margin: 0 -30px;
  padding: 1em 30px;
}
</style>
