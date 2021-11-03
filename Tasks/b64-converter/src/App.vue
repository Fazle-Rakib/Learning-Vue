<template>
  <Header
    headerTitle="Base64 Converter"
    @toggle-navbar="toggleNavbar"
    :class="{ slide: showNavbar }"
  ></Header>
  <Navbar :navbar="showNavbar" @toggle-navbar="toggleNavbar"></Navbar>
  <!-- <Form></Form> -->
  <router-view :class="{ slide: showNavbar }"></router-view>
</template>

<script>
// import Form from "./components/Form.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
// import SshKeyGen from "./components/SshKeyGen.vue";

export default {
  name: "App",
  components: {
    // Form,
    Header,
    Navbar,
    // SshKeyGen,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  methods: {
    toggleNavbar() {
      console.log("Btn-clicked");
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.slide {
  margin-left: 250px;
}
</style>
