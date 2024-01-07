<script>
export default {
  name: 'dev-basic-btn',
}
</script>

<template>
  <div class="basic-btn">
    <button type="button">
      NEXT
    </button>
  </div>
</template>

<style scoped>
.basic-btn {
  margin: 0;
}
.basic-btn > button[type="button"] {
  display: inline-block;
  border: 2px solid #7f56da;
  border-radius: 10px;
  padding: 0;
  width: 100%;
  height: 60px;
  font-size: 1rem;
  font-weight: bold;
  background: #7f56da;
  color: #fff;
  cursor: pointer;
}
</style>
