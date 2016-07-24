<template>
  <div class="l-sidebar">
    <div class="header">
      <h1 class="name"><a href="#" v-link="{name: 'home'}">Travlr</a></h1>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$green-dark: #25ce98;
$green-light: #24ab80;

$sidebar-background: #2b2e2e;

.l-sidebar {
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
}

.name {
  font-size: 22px;
  margin: 0 ;

  a {
    display: block;
    padding: 1em 30px;
  }
}

.content {
  padding: 0 30px;
}
</style>
