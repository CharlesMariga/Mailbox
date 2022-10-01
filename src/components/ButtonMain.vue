<script>
export default {
  name: "ButtonMain",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button class="btn" :disabled="disabled"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 14px 16px;
  display: inline-block;
  font-size: 1rem;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  transition: all 250ms;

  &:hover {
    background-color: #ccc;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
