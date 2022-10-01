<script>
import { RouterLink } from "vue-router";

export default {
  name: "ButtonLink",
  components: { RouterLink },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <RouterLink :to="to" class="btn">
    <slot></slot>
  </RouterLink>
</template>

<style lang="scss" scoped>
.btn {
  border: none;
  background-color: #f4f4f4;
  color: black;
  padding: 14px 16px;
  display: inline-block;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.25rem;
  transition: all 250ms;

  &:hover {
    background-color: #ccc;
  }
}
</style>
