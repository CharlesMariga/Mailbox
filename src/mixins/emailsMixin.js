import { mapState } from "vuex";

export default {
  data() {
    return {
      checkboxSelected: false,
    };
  },
  computed: {
    ...mapState(["emails", "sideModalShown"]),
    selectedCount() {
      return this.emails.filter((email) => email.selected).length;
    },
  },
  methods: {
    toggleEmailSelection() {
      this.$store.commit("TOGGLE_SELECTION_ALL", this.checkboxSelected);
    },
    markAsRead() {
      this.checkboxSelected = false;
      this.$store.commit("TOGGLE_AS_READ");
    },
  },
};
