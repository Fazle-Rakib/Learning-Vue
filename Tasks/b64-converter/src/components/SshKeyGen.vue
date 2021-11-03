<template>
  <div>
    <p>This is a text</p>
    <button type="submit" @click="submitted">Generate</button>
    <Loader v-if="isLoading"></Loader>
    <template v-if="isDataReady">
      <!-- v-model="publicKey" -->

      <TextArea
        :parentData="keypair.publicKey"
        @on-change-text="onChangePublic"
        :placeholder="'Public Key'"
        readonly
      ></TextArea>
      <TextArea
        :parentData="keypair.privateKey"
        @on-change-text="onChangePrivate"
        :placeholder="'Private Key'"
        readonly
      >
      </TextArea>
    </template>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";
import Loader from "./Loader.vue";
console.log("SSH key gen!");
// import cryptico from "cryptico";
// // The passphrase used to repeatably generate this RSA key.
// var PassPhrase = "The Moon is a Harsh Mistress.";

// // The length of the RSA key, in bits.
// var Bits = 1024 * 2;

// var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
// var MattsPublicKeyString = cryptico.privateKeyString(MattsRSAkey);
// console.log(MattsRSAkey, MattsPublicKeyString);
// const crypto = require('crypto');

// const RSA = "rsa";

// const passphrase = "I had learned that some things are best kept secret.";

// let options = {
//   modulusLength: 1024 * 2,
//   publicKeyEncoding: {
//     type: "spki",
//     format: "pem",
//   },
//   privateKeyEncoding: {
//     type: "pkcs8",
//     format: "pem",
//     cipher: "aes-256-cbc",
//     passphrase: passphrase,
//   },
// };

// let start = Date.now();

// let myCallback = (err, publicKey, privateKey) => {
//   if (!err) {
//     console.log("\n");
//     console.log(publicKey);
//     console.log(privateKey);

//     let end = Date.now();
//     console.log(
//       "\n> Process completed successfully in " +
//         (end - start) +
//         " milliseconds."
//     );
//   } else {
//     throw err;
//   }
// };

// crypto.generateKeyPair(RSA, options, myCallback);

import * as openpgp from "openpgp";
const keyGenerator = async (passphrase = "") => {
  const { privateKey, publicKey } = await openpgp.generateKey({
    type: "rsa", // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: "", email: "" }], // you can pass multiple user IDs
    passphrase, // protects the private key
  });
  return { privateKey, publicKey };
};

let start = Date.now();

keyGenerator("This is a sample")
  .then((response) => {
    let end = Date.now();
    console.log(
      "\n> Process completed successfully in " +
        (end - start) +
        " milliseconds."
    );
    // console.log(response.privateKey, response.publicKey);
    return response;
  })
  .catch((error) => console.log(error));

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
    };
  },
  components: {
    TextArea,
    Loader,
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
    async submitted() {
      this.isDataReady = false;
      this.isLoading = true;
      this.keypair = await keyGenerator();
      // console.log(this.keypair.privateKey);
      this.isDataReady = true;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped></style>
