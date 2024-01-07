<script>
export default {
  name: 'dev-text-input',
  props: ['id', 'name'],
  setup(props) {
    console.log(props);
  }
}
</script>

<template>
  <div class="text-input">
    <label :for="this.id">{{this.name}}</label>
    <input :id="this.id" type="text" :placeholder="this.name + '을 입력하세요'" />
  </div>
</template>

<style scoped>
.text-input {
  margin: 20px 0 0;;
}

.text-input>label {
  padding-left: 8px;
  font-size: 0.8rem;
}
.text-input>input[type="text"] {
  display: inline-block;
  margin-top: 5px;
  border: 2px solid #ebebeb;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 8px;
  width: 100%;
  height: 60px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
}
.text-input>input[type="text"]::placeholder {
  color: #ccc;
}
.text-input>input[type="text"]:focus {
  border: 2px solid #7f56da;
  outline: none;
}
</style>
