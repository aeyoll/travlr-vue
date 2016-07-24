<template>
  <ul class="steps">
    <li v-for="step in steps" class="step">
      <div class="description">{{ step.description }}</div>
      <div class="date">{{ step.date | moment "dddd Do MMMM YYYY" }}</div>
      <div class="address">{{ step.address }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['steps']
}
</script>

<style lang="scss" scoped>
.steps {
  flex: 1;
  list-style: none;
  padding: 0;
}

.step {
  color: #ddd;
  position: relative;
  padding: 1em 0 1em 40px;
  transition: .2s all ease-in;

  &.is-active {
    color: #f1f1f1;
  }

  &::before {
    background: #25ce98;
    border-radius: 100%;
    border: 3px solid #24ab80;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    top: calc(50% - 10px);
    width: 20px;
    z-index: 2;
  }

  &::after {
    background: #666;
    content: '';
    height: 100%;
    display: block;
    left: 12px;
    position: absolute;
    top: 0;
    width: 3px;
    z-index: 1;
  }

  &:hover {
    color: #fff;
  }

  a {
    color: currentColor;
    display: block;
    padding: 0 30px 0 60px;
    text-decoration: none;
  }
}
</style>
