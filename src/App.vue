<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { getAllTravels } from './vuex/actions'

  getAllTravels(store)

  export default {
    name: 'App',
    store: store
  }
</script>

<style lang="scss">
#app {
  bottom: 0;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  display: flex;
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  right: 0;
  width: 100%;
  top: 0;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
