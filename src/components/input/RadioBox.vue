<script setup>
import Radio from './Radio.vue';
</script>

<script>
export default {
  name: 'dev-radio',
  props: ['radioLit', 'title', 'name'],
  setup(props) {
    console.log('RadioBox:', props);
  }
}
</script>

<template>
  <div class="radio-wrap">
    <div class="radio-title">{{ title }}</div>
    <Radio 
      v-for="item in radioLit"
      v-bind:key="item"
      :id="name + '-' + item.id"
      :title="item.title"
      :value="item.value"
      :checked="item.checked"
      :name="name"
    />
  </div>
</template>

