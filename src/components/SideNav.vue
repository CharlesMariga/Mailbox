<script>
import { mapState } from "vuex";
import ButtonLink from "./ButtonLink.vue";

export default {
  name: "SideNav",
  components: { ButtonLink },
  computed: {
    ...mapState(["emails"]),
    inboxCount() {
      return this.emails.filter((email) => !email.archived).length;
    },
    archiveCount() {
      return this.emails.filter((email) => email.archived).length;
    },
  },
};
</script>

<template>
  <div class="sidenav">
    <div class="sidenav__toplinks">
      <ButtonLink to="/">Inbox ({{ inboxCount }})</ButtonLink>
      <ButtonLink to="/archive">Archive ({{ archiveCount }})</ButtonLink>
    </div>
    <div class="sidenav__bottomlinks">
      <ButtonLink to="/">Logout</ButtonLink>
    </div>
  </div>
</template>

<style lang="scss">
.sidenav {
  background-color: #212121;
  color: white;
  width: 350px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__toplinks,
  &__bottomlinks {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
