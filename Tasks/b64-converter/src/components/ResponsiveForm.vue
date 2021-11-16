<template>
  <div class="container">
    <form>
      <div
        class="row"
        v-for="(content, index) in contents"
        :key="content.label"
      >
        <div class="col-25">
          <label :for="content.label">{{ content.label }}</label>
        </div>
        <div class="col-75">
          <!-- Input -->
          <input
            v-if="content.type == 'text'"
            :type="content.type"
            :id="content.label"
            :name="content.label"
            v-model="formData.parent_id[index]"
            :placeholder="content.placeHolder"
          />

          <!-- Radio -->
          <section
            v-for="option in content.options"
            :key="option.value"
            style="display: inline; margin-top: 20px"
          >
            <template v-if="content.type == 'radio'">
              <input
                type="radio"
                id="option.value"
                :value="option.value"
                v-model="formData.parent_id[index]"
              />
              <!-- v-model="formData.keyBitsLen" -->
              <label for="option.value">{{ option.text }}</label>
            </template>
          </section>

          <!-- SELECT -->
          <section v-if="content.type == 'select'">
            <!-- v-model="formData.selectedOption" -->
            <select v-model="formData.parent_id[index]">
              <option disabled value="">Please select one</option>

              <option
                v-for="option in content.options"
                :value="option.value"
                :key="option.text"
              >
                {{ option.text }}
              </option>
            </select>
          </section>
        </div>
      </div>
      <!-- type="submit"    :buttonText="'Generate'" :padLength="10"    :defaultBehavior="true" -->

      <button @click="submitted">Generate</button>
    </form>
  </div>
  <p v-if="!validated">{{ validationMsg }}</p>
  <!-- <alert-message v-if="!validated" :message="alertMessage"></alert-message> -->
</template>

<script>
export default {
  name: "ResponsiveForm",
  components: {},
  props: { contents: Object, requiredData: Array },
  emits: ["btn-click"],
  data() {
    return {
      validated: true,
      validationMsg: "",
      formData: {
        parent_id: [],
      },
      values: [],
    };
  },
  methods: {
    submitted(e) {
      e.preventDefault();
      this.validated = true;
      this.contents.forEach((content, index) => {
        if (content.isRequired && this.validated) {
          if (this.formData.parent_id[index] == undefined) {
            this.validated = false;
            this.validationMsg =
              "Please fill up the " + content.label + " field";
          }
        }
      });

      if (this.validated) this.$emit("btn-click", this.formData);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

button {
  background-color: dodgerblue;
  border: none;
  /* color: white; */
  border-radius: 4px;
  padding: 2px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  /* margin: 14px 5px; */
  display: block;
  margin-left: auto;
  width: 20%;
  padding: 10px;
  /* padding: 20px; */
}
button:hover {
  background-color: black;
  color: white;
}
</style>
