<template>
  <div
    id="mySidenav"
    class="sidenav"
    :style="{ width: navbar ? '250px' : '0px' }"
  >
    <a
      href="javascript:void(0)"
      class="closebtn"
      @click="$emit('toggle-navbar')"
      >&times;</a
    >
    <router-link tag="link" to="/">
      <span> <i class="fa fa-home"></i> </span> Home
    </router-link>
    <router-link tag="link" to="/b64Converter">
      <span> <i class="fa fa-cogs"></i> </span> Base64 Converter
    </router-link>
    <router-link tag="link" to="/SshKeyGen">
      <i class="fa fa-user-secret" aria-hidden="true"></i> SSH Key Generator
    </router-link>
    <router-link tag="link" to="/HashingText">
      <span> <i class="fa fa-shield"></i> </span> Generate Message
      Digest</router-link
    >
    <router-link tag="link" to="/BCryptPass"
      ><span><i class="fa fa-eye-slash"></i></span> BCrypt Password hashing and
      Verification
    </router-link>

    <router-link tag="link" to="/RandomPass"
      ><span><i class="fa fa-random"></i></span> Random Password Generator
    </router-link>

    <router-link tag="link" to="/Htpasswd"
      ><span><i class="fa fa-hashtag"></i></span> Httpaswd
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  props: {
    navbar: Boolean,
  },
  methods: {},
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: dodgerblue;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
