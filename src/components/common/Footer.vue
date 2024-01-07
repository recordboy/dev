<script setup>
import BasicBtn from '../button/BasicBtn.vue';
</script>

<script>
export default {
  name: 'dev-footer',
}
</script>

<template>
  <footer class="footer-wrap">
    <div class="footer-inner">
      <BasicBtn />
    </div>
  </footer>
</template>

<style scoped>
.footer-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer-wrap .footer-inner {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
}

</style>
