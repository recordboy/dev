<script>
export default {
  name: 'dev-text-input',
  props: ['id', 'title'],
  setup() {
    // console.log('text-input: ', props);
  }
}
</script>

<template>
  <div class="text-input">
    <label :for="this.id">{{this.title}}</label>
    <input :id="this.id" type="text" :placeholder="this.title + '을 입력하세요'" />
  </div>
</template>

<style scoped>
</style>
