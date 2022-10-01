<script>
import { mapGetters } from "vuex";
import ButtonMain from "./ButtonMain.vue";
import PrimaryHeading from "./PrimaryHeading.vue";
export default {
  name: "SideModal",
  components: { ButtonMain, PrimaryHeading },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["getSelectedEmail"]),
  },
  methods: {
    closeSideModal() {
      this.$store.commit("SHOW_SIDEMODAL", false);
    },
    closeModal(e) {
      if (e.target.classList.contains("sidemodal")) {
        this.closeSideModal();
      }
    },
    markAsRead() {
      this.$store.commit("TOGGLE_OPEN_EMAIL_AS_READ");
    },
    archive() {
      this.$store.commit("ARCHIVE_OPEN_EMAIL");
    },
    eventHandlers(e) {
      if (e.code === "KeyR") this.markAsRead();
      if (e.code === "KeyA") this.archive();
      if (e.code === "Escape") this.closeSideModal();
    },
  },
  mounted() {
    window.addEventListener("keyup", this.eventHandlers);
  },
};
</script>

<template>
  <div
    class="sidemodal"
    :class="{ 'sidemodal--open': showModal }"
    @click="closeModal"
  >
    <div
      class="sidemodal__container"
      :class="{ 'sidemodal__container--open': showModal }"
    >
      <p class="sidemodal__escape" @click="closeSideModal">Close (Esc)</p>
      <div class="sidemodal__btn-group">
        <ButtonMain @click="markAsRead" :disabled="getSelectedEmail?.read"
          >Mark as read (r)</ButtonMain
        >
        <ButtonMain @click="archive" :disabled="getSelectedEmail?.archived"
          >Archive (a)</ButtonMain
        >
      </div>
      <PrimaryHeading>{{ getSelectedEmail?.title }}</PrimaryHeading>
      <p>{{ getSelectedEmail?.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidemodal {
  position: absolute;
  background-color: red;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;

  &--open {
    display: block !important;
  }

  &__container {
    width: 900px;
    height: 100%;
    margin-left: auto;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 5s;
    padding: 2rem;

    &--open {
      transform: translateX(0%);
    }
  }

  &__escape {
    display: inline-block;
    text-decoration: underline;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  &__btn-group {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}
</style>
