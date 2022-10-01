import { createStore } from "vuex";

const defaultState = () => ({
  emails: [
    {
      id: 1,
      title: "Your 7-figure plan goes bye bye at midnight",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illo dignissimos sint autem dolorem consequatur commodi fugiat, dicta facilis exercitationem obcaecati! Quaerat dolore similique dolor repellendus veritatis consectetur suscipit? Quaerat voluptatem adipisci delectus error, vero id perferendis, perspiciatis nihil ipsam explicabo qui. Architecto, nam laudantium labore quas repellendus facilis temporibus.",
      read: false,
      archived: false,
      selected: false,
    },
    {
      id: 2,
      title: "[WEEKEND ONLY] Get this NOW before",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illo dignissimos sint autem dolorem consequatur commodi fugiat, dicta facilis exercitationem obcaecati! Quaerat dolore similique dolor repellendus veritatis consectetur suscipit? Quaerat voluptatem adipisci delectus error, vero id perferendis, perspiciatis nihil ipsam explicabo qui. Architecto, nam laudantium labore quas repellendus facilis temporibus.",
      read: false,
      archived: false,
      selected: false,
    },
    {
      id: 3,
      title: "Uh-Oh your prescription is expiring",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illo dignissimos sint autem dolorem consequatur commodi fugiat, dicta facilis exercitationem obcaecati! Quaerat dolore similique dolor repellendus veritatis consectetur suscipit? Quaerat voluptatem adipisci delectus error, vero id perferendis, perspiciatis nihil ipsam explicabo qui. Architecto, nam laudantium labore quas repellendus facilis temporibus.",
      read: false,
      archived: false,
      selected: false,
    },
  ],
  sideModalShown: false,
  selectedEmail: null,
});

export default createStore({
  state: defaultState(),
  getters: {
    getSelectedEmail(state) {
      return state.emails.find((email) => email.id == state.selectedEmail);
    },
  },
  mutations: {
    TOGGLE_SELECTION_ALL(state, status) {
      const newEmails = state.emails.map((email) => ({
        ...email,
        selected: status,
      }));
      state.emails = newEmails;
    },
    TOGGLE_SELECTION(state, id) {
      const newEmails = state.emails.map((email) => {
        if (email.id === id) return { ...email, selected: !email.selected };
        else return email;
      });
      state.emails = newEmails;
    },
    TOGGLE_AS_READ(state) {
      const newEmails = state.emails.map((email) => {
        if (email.selected) return { ...email, read: true, selected: false };
        else return email;
      });
      state.emails = newEmails;
    },
    ARCHIVE(state) {
      const newEmails = state.emails.map((email) => {
        if (email.selected) {
          return {
            ...email,
            selected: false,
            archived: true,
          };
        } else return email;
      });
      state.emails = newEmails;
    },
    UNARCHIVE(state) {
      const newEmails = state.emails.map((email) => {
        if (email.selected)
          return {
            ...email,
            selected: false,
            archived: false,
          };
        else return email;
      });
      state.emails = newEmails;
    },
    SHOW_SIDEMODAL(state, status) {
      state.sideModalShown = status;
    },
    SELECTED_EMAIL(state, id) {
      state.selectedEmail = id;
    },
    TOGGLE_OPEN_EMAIL_AS_READ(state) {
      const newEmails = state.emails.map((email) => {
        if (email.id == state.selectedEmail)
          return { ...email, read: true, selected: false };
        else return email;
      });
      state.emails = newEmails;
    },
    ARCHIVE_OPEN_EMAIL(state) {
      const newEmails = state.emails.map((email) => {
        if (email.id == state.selectedEmail) {
          return {
            ...email,
            archived: true,
          };
        } else return email;
      });
      state.emails = newEmails;
    },
  },
});
