<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import SecondaryHeading from "../components/SecondaryHeading.vue";
import PrimaryHeading from "../components/PrimaryHeading.vue";
import EmailList from "../components/EmailList.vue";
import ButtonMain from "../components/ButtonMain.vue";
import emailsMixin from "../mixins/emailsMixin";
import SideModal from "../components/SideModal.vue";

export default {
  name: "InboxView",
  mixins: [emailsMixin],
  components: {
    DefaultLayout,
    SecondaryHeading,
    PrimaryHeading,
    EmailList,
    ButtonMain,
    SideModal,
  },
  computed: {
    inboxEmails() {
      return this.emails.filter((email) => !email.archived);
    },
  },
  methods: {
    archive() {
      this.checkboxSelected = false;
      this.$store.commit("ARCHIVE");
    },
    eventHandlers(e) {
      if (e.code === "KeyR") this.markAsRead();
      if (e.code === "KeyA") this.archive();
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
    <SecondaryHeading>Inbox</SecondaryHeading>
    <PrimaryHeading>Emails Selected ({{ selectedCount }})</PrimaryHeading>
    <div class="button-group">
      <input
        type="checkbox"
        value="selectAll"
        v-model="checkboxSelected"
        @change="toggleEmailSelection"
      />
      <ButtonMain @click="markAsRead">Mark as read (r)</ButtonMain>
      <ButtonMain @click="archive">Archive (a)</ButtonMain>
    </div>
    <EmailList :emails="inboxEmails" />
    <SideModal :showModal="sideModalShown" />
  </DefaultLayout>
</template>
