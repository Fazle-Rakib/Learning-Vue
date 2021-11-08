<template>
  <div class="flex-container">
    <!-- <label>Input</label> -->
    <div class="flex-item">
      <label><strong>Text</strong> </label>
      <textarea
        type="text"
        v-model="inputText"
        name="text"
        placeholder="Text Input"
        @keyup="onChangeText"
        spellcheck="false"
      />
    </div>

    <div class="flex-item">
      <label> <strong>Base64</strong> </label>
      <textarea
        type="text"
        v-model="encodedText"
        placeholder="Base64 Encoded Text"
        @keyup="onChangeEncodedText"
        spellcheck="false"
      />
      <!-- :value="encodedText" -->
    </div>

    <!-- <h2>Data : {{ encodedText }}</h2> -->
  </div>
</template>

<script>
console.log("From : Form");
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function text2Binary(string, len = 8) {
  return string
    .split("")
    .map((char) => {
      let binChar;
      if (len == 8) {
        binChar = char.charCodeAt(0).toString(2);
      } else {
        binChar = b64.indexOf(char).toString(2);
        if (binChar == "-1") {
          return "";
        }
        // console.log(char, b64.indexOf(char), binChar);
      }
      if (binChar.length % len != 0) {
        binChar = "0".repeat(len - binChar.length) + binChar;
      }
      return binChar;
    })
    .join("");
}

function binary2Text(string, len) {
  const stringLenRem = string.length % len;
  if (stringLenRem != 0) {
    string += "0".repeat(len - stringLenRem);
  }
  const regExLen = /.{6}/g;
  let text = "";
  if (string == null || string == "") {
    return "";
  }
  console.log("String value", string);
  string.match(regExLen).map((biString) => {
    text += b64[parseInt(biString, 2)];
  });
  const textLen = text.length % 4;
  if (textLen != 0) {
    text += "=".repeat(4 - textLen);
  }
  return text;
}

function encodeToB64(text = "what") {
  // const exText = "Aeio";
  const binText = text2Binary(text);
  // console.log(binText.length, binText);
  const encodedText = binary2Text(binText, 6);
  // console.log(encodedText);
  return encodedText;
}

function decodeFromB64(encodedText) {
  const binText = text2Binary(encodedText, 6);
  const formatedBinText = binText.substring(
    0,
    Math.floor(binText.length / 8) * 8
  );
  const regExLen = /.{8}/g;
  let text = "";
  if (formatedBinText == null || formatedBinText == "") {
    return "";
  }
  // console.log("String value", formatedBinText);
  formatedBinText.match(regExLen).map((biString) => {
    text += String.fromCharCode(parseInt(biString, 2));
  });

  // console.log(binText, formatedBinText, text);
  return text;
}
// console.log(encodeToB64());

export default {
  name: "Form",
  data() {
    return {
      inputText: "",
      encodedText: "",
    };
  },
  methods: {
    onChangeText() {
      this.encodedText = encodeToB64(this.inputText);
    },
    onChangeEncodedText() {
      this.inputText = decodeFromB64(this.encodedText);
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  /* background-color: DodgerBlue; */
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 400px;
  text-align: initial;
  margin-top: 5px;
  /* width: 100%; */
}

.flex-container > input {
  background-color: #f1f1f1;
  outline: none;
  margin: 5px;
  padding: 0px;
  font-size: 30px;
  box-sizing: border-box;
  resize: none;
  /* text-align: initial; */
  /* align-self: baseline; */
}
.flex-container .flex-item > label {
  /* background: #3cbc8d;
  color: white;
  align-self: center; 
  text-align: center;
  justify-content: center;
  flex: 50%;
  min-width: 500px; 
  margin-bottom: 50px; */
  font-size: 18px;
}
.flex-container .flex-item > textarea {
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  resize: none;
  width: 100%;
  min-height: 400px;
}
.flex-item {
  margin-left: 15px;
  flex: 45%;
}
/* .flex-item-right {
  flex: 45%;
} */
/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item {
    flex: 100%;
  }
}

textarea[type="text"]:focus {
  /* border: 3px solid #3cbc8d; */
  /* background-color: #fff; */
  border: 2px solid DodgerBlue;
}
</style>
