<script>
export default {
  name: 'dev-radio',
  props: ['id', 'name', 'title'],
  setup(props) {
    console.log('Radio:', props);
  }
}
</script>

<template>
  <div class="radio-wrap">
    <label :for="this.id">{{this.title}}</label>
    <input :id="this.id" :name="this.name" type="radio" />
  </div>
</template>


<style scoped>
  .radio-wrap {
    margin: 20px 0 0;
  }




</style>



<!-- <style scoped>
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
</style> -->
