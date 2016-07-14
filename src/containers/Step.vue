<template>
  <div class="step">
    <h1>{{ name }}</h1>
    <small>{{ date }}</small>
    <p>{{ address }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 1,
      name: 'Step name',
      date: new Date(),
      address: '123 avenue des Champs Elysées, 75008 Paris, France'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
