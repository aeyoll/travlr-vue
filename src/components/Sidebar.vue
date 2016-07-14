<template>
  <div class="sidebar">
    <div class="header">
      <h1 class="name">{{ name }}</h1>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$green-dark: #25ce98;
$green-light: #24ab80;

$sidebar-background: #2b2e2e;

.sidebar {
  background: $sidebar-background;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 320px;

  a {
    color: currentColor;
    text-decoration: none;
  }
}

.header {
  background: $green-dark;
  padding: 0 30px;
}

.name {
  font-size: 22px;
  margin: 0;
  padding: 1em 0;
}

.content {
  padding: 0 30px;
}
</style>
