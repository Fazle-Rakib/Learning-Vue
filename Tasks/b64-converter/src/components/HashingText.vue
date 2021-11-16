<template>
  <div>
    <responsive-form :contents="formContent" @btn-click="submitted">
    </responsive-form>
    <loader v-if="isLoading"></loader>
    <template v-if="isDataReady">
      <Table :contents="tableContent"></Table>
      <div class="footer">
        <p class="green">
          {{ randomStrArr.first }}
        </p>
        <p>
          Digest Length : <strong>{{ digestLength }} </strong>
        </p>
        <p class="green">
          {{ randomStrArr.second }}
        </p>
        <p>
          Execution Time : <strong>{{ executionTime }}ms </strong>
        </p>
        <p class="green">
          {{ randomStrArr.third }}
        </p>
        <!-- <p>
          Digest Length : <strong>{{ digestLength }} </strong>
        </p>
        <p>---</p>
        <p>
          Execution Time : <strong>{{ executionTime }}ms </strong>
        </p> -->
      </div>
    </template>
  </div>
</template>

<script>
import * as hashWasm from "hash-wasm";
import ResponsiveForm from "./ResponsiveForm.vue";
import Loader from "./Loader.vue";
import Table from "./Table.vue";

async function hash(text, functionName) {
  return await hashWasm[functionName](text);
}

function hexToBase64(hexstring) {
  return btoa(
    hexstring
      .match(/\w{2}/g)
      .map(function (a) {
        return String.fromCharCode(parseInt(a, 16));
      })
      .join("")
  );
}
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let randomStrLen = 0;
let randomStr = "";
while (randomStrLen < 85) {
  randomStr += Math.round(Math.random());
  randomStrLen++;
}

export default {
  name: "HashingString",
  components: {
    ResponsiveForm,
    Loader,
    Table,
  },
  data() {
    return {
      isDataReady: false,
      isLoading: false,
      digestLength: null,
      executionTime: null,
      randomStrArr: {
        first: null,
        second: null,
        third: null,
      },
      hashedValue: {
        hexFormat: "",
        base64Format: "",
      },
      reauiredData: ["message", "functionOption"],
      formContent: [
        {
          label: "Input Message",
          placeHolder: "Type your message to generate Message Digest",
          type: "text",
          isRequired: true,
        },
        {
          label: "Choose Message Digest",
          type: "select",
          isRequired: true,
          options: [
            { text: "MD4", value: "md4" },
            { text: "MD5", value: "md5" },
            { text: "adler32", value: "adler32" },
            { text: "xxhash3", value: "xxhash3" },
            { text: "blake2b", value: "blake2b" },
            { text: "blake2s", value: "blake2s" },
            { text: "blake3", value: "blake3" },
            { text: "crc32", value: "crc32" },
            { text: "crc32c", value: "crc32c" },
            { text: "keccak-512", value: "keccak" },
            { text: "ripemd160", value: "ripemd160" },
            { text: "SHA-1", value: "sha1" },
            { text: "SHA-256", value: "sha256" },
            { text: "SHA-512", value: "sha512" },
            { text: "sha3", value: "sha3" },
            { text: "sha384", value: "sha384" },
            { text: "sm3", value: "sm3" },
            { text: "whirlpool", value: "whirlpool" },
            { text: "xxhash32", value: "xxhash32" },
            { text: "xxhash64", value: "xxhash64" },
            { text: "xxhash128", value: "xxhash128" },
          ],
        },
      ],
      tableContent: {
        header: ["Algorithm", "Format", "Hashed Message"],
        data: [],
      },
    };
  },
  methods: {
    async submitted(data) {
      const startTime = new Date().getMilliseconds();
      this.isDataReady = false;
      this.isLoading = true;
      const lastIndex = data.parent_id.length - 1;
      console.log("In submission", data);
      this.hashedValue.hexFormat = await hash(
        data.parent_id[0],
        data.parent_id[lastIndex]
      );
      this.hashedValue.base64Format = hexToBase64(this.hashedValue.hexFormat);
      // this.tableContent.data.splice();
      // console.log(this.tableContent.data);
      this.tableContent.data = [];
      this.tableContent.data.push(
        [data.parent_id[lastIndex], "Base 64", this.hashedValue.base64Format],
        [data.parent_id[lastIndex], "Hex", this.hashedValue.hexFormat]
      );
      this.isLoading = false;
      this.isDataReady = true;

      // Generation the random binary string
      let randLen = getRandomArbitrary(10, 35);
      this.randomStrArr.first = randomStr.slice(0, randLen);
      this.randomStrArr.second = randomStr.slice(
        randLen,
        (randLen += getRandomArbitrary(25, 55))
      );
      this.randomStrArr.third = randomStr.slice(randLen, randomStr.length);
      // console.log(this.randomStrArr.first);

      const endTime = new Date().getMilliseconds();
      this.digestLength = this.hashedValue.base64Format.length;
      this.executionTime = endTime - startTime;
    },
  },
};
</script>

<style scoped>
.footer {
  margin-top: 5px;
  display: flex;
  gap: 10px;
  word-wrap: break-word;
  color: green;
  /* justify-content: space-evenly; */
}
.footer > .green {
  color: green;
}
.footer > p,
.footer > p > strong {
  color: red;
}

strong {
  color: green;
}
</style>
