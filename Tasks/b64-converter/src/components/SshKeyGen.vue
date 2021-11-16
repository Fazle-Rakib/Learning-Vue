<template>
  <div>
    <responsive-form
      :contents="formContent"
      @btn-click="submitted"
    ></responsive-form>
    <br />
    <Loader v-if="isLoading"></Loader>
    <template v-if="isDataReady">
      <!-- v-model="publicKey" -->
      <label><strong>Public Key</strong></label>
      <TextArea
        :parentData="keypair.publicKey"
        @on-change-text="onChangePublic"
        :placeholder="'Public Key'"
        readonly
        style="display: block"
      ></TextArea>
      <label><strong>Private Key </strong></label>
      <TextArea
        :parentData="keypair.privateKey"
        @on-change-text="onChangePrivate"
        :placeholder="'Private Key'"
        readonly
        style="display: block"
      >
      </TextArea>
    </template>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";
import Loader from "./Loader.vue";
import ResponsiveForm from "./ResponsiveForm.vue";
console.log("SSH key gen!");

import * as openpgp from "openpgp";
const keyGenerator = async (obj, keyLen = 2048) => {
  console.log("Inside Key gen", obj, keyLen);
  const { privateKey, publicKey } = await openpgp.generateKey({
    type: "rsa", // Type of the key
    rsaBits: keyLen, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: obj.name, email: obj.email }], // you can pass multiple user IDs
    passphrase: obj.passphrase, // protects the private key
  });
  return { privateKey, publicKey };
};

// let start = Date.now();

// keyGenerator()
//   .then((response) => {
//     let end = Date.now();
//     console.log(
//       "\n> Process completed successfully in " +
//         (end - start) +
//         " milliseconds."
//     );
//     // console.log(response.privateKey, response.publicKey);
//     return response;
//   })
//   .catch((error) => console.log(error));

export default {
  name: "SshKeyGen",
  data() {
    return {
      keypair: {
        publicKey: "",
        privateKey: "",
      },
      isDataReady: false,
      isLoading: false,
      formContent: [
        {
          label: "Name",
          placeHolder: "Your Name",
          type: "text",
        },
        {
          label: "Email",
          placeHolder: "Your Email",
          type: "text",
        },
        {
          label: "Passphrase",
          placeHolder: "Write Something...",
          type: "text",
        },
        {
          label: "RSA Key Size ",
          type: "radio",
          options: [
            { text: "2048 bits", value: 2048 },
            { text: "4096 bits", value: 4096 },
          ],
        },
      ],
    };
  },
  components: {
    TextArea,
    Loader,
    ResponsiveForm,
  },
  methods: {
    onChangePublic(data) {
      // console.log("", data);
      this.keypair.publicKey = data;
    },
    onChangePrivate(data) {
      this.keypair.privateKey = data;
      console.log("SSH:", this.keypair);
    },
    async submitted(data) {
      this.isDataReady = false;
      this.isLoading = true;
      this.keypair = await keyGenerator(
        data.parent_id,
        data.parent_id[data.parent_id.length - 1]
      );
      console.log(this.data);
      this.isDataReady = true;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped></style>
