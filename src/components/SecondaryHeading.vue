<script>
export default {
  name: "SecondaryHeading",
};
</script>

<template>
  <h2 class="secondary-heading"><slot></slot></h2>
</template>

<style lang="scss" scoped>
.secondary-heading {
  margin-bottom: 1rem;
  opacity: 50%;
}
</style>
