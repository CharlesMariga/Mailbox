<script>
import EmailCard from "./EmailCard.vue";
export default {
  name: "EmailList",
  props: {
    emails: {
      type: Array,
      defauly: () => [],
    },
  },
  components: { EmailCard },
  methods: {
    toggleSelected(id) {
      this.$store.commit("TOGGLE_SELECTION", id);
    },
    showModal(e, id) {
      if (e.target.hasAttribute("targetSelector")) {
        this.$store.commit("SHOW_SIDEMODAL", true);
        this.$store.commit("SELECTED_EMAIL", id);
      }
    },
  },
};
</script>

<template>
  <div class="email-list">
    <EmailCard
      v-for="email in emails"
      :key="email.id"
      :email="email"
      @change="toggleSelected(email.id)"
      @click="showModal($event, email.id)"
    />
  </div>
</template>

<style scoped>
.email-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
