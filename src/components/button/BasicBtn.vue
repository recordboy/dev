<script>
export default {
  name: 'dev-basic-btn',
  props: ['name']
}
</script>

<template>
  <div class="basic-btn">
    <button type="button">
      {{ name }}
    </button>
  </div>
</template>
