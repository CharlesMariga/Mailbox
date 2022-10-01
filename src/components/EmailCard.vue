<script>
export default {
  name: "EmailCard",
  props: {
    email: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    emitChangeEvent() {
      this.$emit("input");
    },
  },
};
</script>

<template>
  <div class="card" :class="{ 'card--read': email.read }" targetSelector>
    <input
      type="checkbox"
      :checked="email.selected"
      @change="emitChangeEvent"
    />
    <p targetSelector>{{ email.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  display: flex;
  gap: 2rem;
  border-radius: 8px;
  cursor: pointer;

  transition: all 250ms;

  &:hover {
    background-color: #ccc;
  }

  &--read {
    opacity: 0.5;
  }
}
</style>
