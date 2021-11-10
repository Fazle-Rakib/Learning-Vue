<template>
  <li>
    <h2>{{ name }}{{ isFavorite == true ? " [Favorite]" : "" }}</h2>
    <button @click="toggleDetails">More Details</button>
    <button @click="$emit('toggle-fav', 1)">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phone }}</li>
      <li><strong>Email: </strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  // Below is the basic use of emits,
  // but we can also validate custom events

  // emits: ["toggle-fav"],

  emits: {
    "toggle-fav": function(id) {
      if (id) {
        return true;
      } else {
        return false;
      }
    },
  },

  // props can be declared as an array of props_name &
  // also can be as an array of obj that can be validated

  // props: ["name", "phoneNumber", "emailAddress"],

  // props can be declared with vue known property like
  // (type,required,default,validator()) --> default can also be a function
  // validator(value) can validated the props value
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function(value) {
        return typeof value === "boolean";
      },
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style scoped></style>
