<template>
  <div class="title">Mes voyages</div>
  <ul class="items">
    <li v-for="travel in travels" class="item">
      <a href="#" v-link="{ name: 'travel', params: { travelId: travel.id } }">{{ travel.name }}</a>
    </li>
    <li class="item">
      <a href="#" v-link="{ name: 'travelNew' }">Ajouter un voyage</a>
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

.items {
  list-style: none;
  margin: -1px 0 0;
  padding: 0;
}

.item {
  padding: .5em 0;

  &:first-child {
    margin-top: .5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
}
</style>
