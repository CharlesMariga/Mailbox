<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import SecondaryHeading from "../components/SecondaryHeading.vue";
import PrimaryHeading from "../components/PrimaryHeading.vue";
import emailsMixin from "../mixins/emailsMixin";
import ButtonMain from "../components/ButtonMain.vue";
import EmailList from "../components/EmailList.vue";
import SideModal from "../components/SideModal.vue";

export default {
  name: "ArchiveView",
  mixins: [emailsMixin],
  components: {
    DefaultLayout,
    SecondaryHeading,
    PrimaryHeading,
    ButtonMain,
    EmailList,
    SideModal,
  },
  computed: {
    archivedEmails() {
      return this.emails.filter((email) => email.archived);
    },
  },
  methods: {
    unarchive() {
      this.checkboxSelected = false;
      this.$store.commit("UNARCHIVE");
    },
    eventHandlers(e) {
      if (e.code === "KeyR") this.markAsRead();
      if (e.code === "KeyA") this.unarchive();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.eventHandlers);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.eventHandlers);
  },
};
</script>

<template>
  <DefaultLayout>
    <SecondaryHeading>Archive</SecondaryHeading>
    <PrimaryHeading>Emails Selected ({{ selectedCount }})</PrimaryHeading>
    <div class="button-group">
      <input
        type="checkbox"
        value="selectAll"
        v-model="checkboxSelected"
        @change="toggleEmailSelection"
      />
      <ButtonMain @click="markAsRead">Mark as read (r)</ButtonMain>
      <ButtonMain @click="unarchive">Unarchive (a)</ButtonMain>
    </div>
    <EmailList :emails="archivedEmails" />
    <SideModal :showModal="sideModalShown" />
  </DefaultLayout>
</template>
