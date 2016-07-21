<template>
  <ul class="travels">
    <li v-for="travel in travels" class="travel">
      <div class="name">{{ travel.name }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['travels']
}
</script>

<style lang="scss" scoped>
</style>
