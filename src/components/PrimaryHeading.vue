<script>
export default {
  name: "PrimaryHeading",
};
</script>

<template>
  <h1 class="primary-heading"><slot></slot></h1>
</template>

<style lang="scss" scoped>
.primary-heading {
  margin-bottom: 2rem;
}
</style>
