<template>
  <div class="modal">
    <form class="modal-content">
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="name"><b>Name</b></label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          v-model="formData.name"
          required
        />
        <br />
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          v-model="formData.email"
          required
        />
        <br />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="formData.password"
          required
        />
        <br />

        <label for="psw-repeat"><b>Age</b></label>
        <input
          type="text"
          placeholder="Your Age"
          name="age"
          required
          v-model="formData.age"
        />

        <div class="clearfix">
          <button type="button" class="cancelbtn" @click="clearForm">
            Cancel
          </button>
          <button type="submit" class="signupbtn" @click.prevent="signingUp">
            Sign Up
          </button>
          <status-msg v-if="!okayToSubmit" :type="msgType"></status-msg>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import StatusMsg from "../components/StatusMsg.vue";
export default {
  components: {
    StatusMsg,
  },
  data() {
    return {
      formData: {
        name: null,
        email: null,
        password: null,
        age: null,
      },
      okayToSubmit: true,
      msgType: null,
    };
  },
  methods: {
    async signingUp() {
      //   for (const prop of Object.getOwnPropertyNames(this.formData)) {
      //     // delete this.formData[prop];
      //     console.log(typeof this.fromData[prop]);
      //   }
      this.okayToSubmit = true;
      for (const property in this.formData) {
        // console.log("11", property, this.formData[property]);
        if (this.formData[property] == null || this.formData[property] == "")
          this.okayToSubmit = false;
      }
      if (this.okayToSubmit == false) {
        this.msgType = "error";
        this.$store.state.errorMessage = "Please fill up all reuired field!";
      } else {
        this.$store.state.errorMessage = null;
        try {
          const response = await this.$guest.post(
            "/user/register",
            this.formData
          );
          this.okayToSubmit = false;
          this.msgType = "success";
          this.$store.state.errorMessage = "Account created successfully!";
          this.$guest.defaults.headers.common["Authorization"] =
            response.data.token;
          console.log("here", response);
          this.clearForm();
        } catch (error) {
          console.log("In error", error);
          this.okayToSubmit = false;
          this.msgType = "error";
          this.$store.state.errorMessage = "Can't create the account " + error;
        }
      }
    },
    clearForm() {
      for (const prop of Object.getOwnPropertyNames(this.formData)) {
        this.formData[prop] = null;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
  /* right: 5px; */
  /* margin: 0px 0px 0px 0px; */
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  /* display: flex; */
  /* float: left; */
  width: 48%;
  margin-right: 5px;
  border-radius: 3px;
  /* justify-content: space-between; */
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  /* display: hidden; Hidden by default */
  position: fixed; /* Stay in place */
  /* z-index: 1; Sit on top */
  left: 0;
  top: 100;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>
