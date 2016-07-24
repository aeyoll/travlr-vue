<template>
  <div class="title">Mes voyages</div>
  <ul class="travels">
    <li v-for="travel in travels" class="travel">
      <a href="#" v-link="{ name: 'travel', params: { travelId: travel.id } }">{{ travel.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['travels']
}
</script>

<style lang="scss" scoped>
.title {
  border-bottom: 1px solid #666;
  padding: 1em 0;
  text-transform: uppercase;
}

.travels {
  list-style: none;
  margin: 0;
  padding: 0;
}

.travel {
  padding: 1em 0;

  a {
    color: currentColor;
    text-decoration: none;
  }
}
</style>
