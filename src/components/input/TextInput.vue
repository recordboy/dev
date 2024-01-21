<script>
export default {
  name: 'dev-text-input',
  // props: ['id', 'title', 'option'],
  props: ['id', 'title', 'func', 'idx'],
  setup() {
    // console.log('text-input: ', props);
  },
  mounted() {

    console.log(this.idx);


    // setTimeout(() => {
    //   this.$refs[this.option.focus].focus();
    // }, this.option.motion);

    // setTimeout(() => {
    //   this.$refs.start01.focus();
    // }, 500);
  },
  methods: {
    keyDown(e) {

      this.func(e.keyCode);


    }
  }
}
</script>

<template>
  <div class="text-input">
    <label :for="this.id">{{this.title}}</label>
    <input :id="this.id" type="text" :placeholder="this.title + '을 입력하세요'" @keydown="keyDown"/>
    <!-- <input :id="this.id" type="text" :placeholder="this.title + '을 입력하세요'" :ref="this.option.focus" /> -->
  </div>
</template>

<style scoped>
</style>
