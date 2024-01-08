<script>
export default {
  name: 'dev-radio',
  props: ['id', 'name', 'title', 'value', 'checked'],
  setup() {
    // console.log('Radio:', props);
  }
}
</script>

<template>
  <div class="radio-input">
    <input :id="id" :name="name" type="radio" :value="value" :checked="checked" />
    <label :for="id">{{ title }}</label>
  </div>
</template>
