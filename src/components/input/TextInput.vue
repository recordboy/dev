<script>
export default {
  name: 'dev-text-input',
  props: ['id', 'title', 'option'],
  setup() {
    // console.log('text-input: ', props);
  },
  mounted() {


    setTimeout(() => {
      this.$refs[this.option.focus].focus();
    }, 500);

    // setTimeout(() => {
    //   this.$refs.start01.focus();
    // }, 500);
  }
}
</script>

<template>
  <div class="text-input">
    <label :for="this.id">{{this.title}}</label>
    <input :id="this.id" type="text" :placeholder="this.title + '을 입력하세요'" :ref="this.option.focus" />
    <!-- <input :id="this.id" type="text" :placeholder="this.title + '을 입력하세요'" ref="aa" /> -->
  </div>
</template>

<style scoped>
</style>
