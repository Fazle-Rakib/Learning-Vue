<template>
  <Header
    :headerTitle="headerTitle"
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
      allHeaderTitles: {
        "": "Home",
        b64Converter: "Base64 Converter",
        SshKeyGen: "Generate SSH Keys",
        HashingText: "Generate Message Digest",
        BCryptPass: "BCrypt Password hashing and Verification",
        RandomPass: "Strong Random Password Generator",
        Htpasswd:
          "Generates an Apache/nginx htpasswd compatible based hash value",
      },
      showNavbar: false,
      headerTitle: "Base64 Converter",
    };
  },
  watch: {
    $route() {
      this.headerTitle = this.allHeaderTitles[this.$route.path.split("/")[1]];
      console.log(this.$route.path.split("/")[1], this.headerTitle);
      // if(this.$route.path)
    },
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
