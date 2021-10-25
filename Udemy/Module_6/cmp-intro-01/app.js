const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// Creating component in vue, it it same as Vue.createApp
// but take two arguments('component-name',an obj). And then
// we can use it like html tag in a vue controlled template.
// This gives us the power to get rid of repetitive coding
// and clearner and more organizrd workplace.
app.component("friend-list", {
  template: `
    <ul>
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="showDetails">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
      </ul>
    `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
