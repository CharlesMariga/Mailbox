<script>
import SideNav from "../components/SideNav.vue";

export default {
  name: "DefaultLayout",
  components: { SideNav },
};
</script>

<template>
  <div class="container">
    <SideNav />
    <div class="mainview">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
}

.mainview {
  flex: 1 1 0%;
  padding: 2rem 3rem;
  position: relative;
}
</style>
