<script setup>
import BasicBtn from '../button/BasicBtn.vue';
import { ViewModule } from '../../module/ViewModule.js';
</script>

<script>

export default {
  name: 'dev-footer',
  mounted() {
  }
}

/* 다음 화면 전환 */
function basicBtnClick() {
  ViewModule.nextPage();
}

</script>

<template>
  <footer class="footer-wrap">
    <div class="footer-inner">
      <BasicBtn name="NEXT" @click="basicBtnClick" />
    </div>
  </footer>
</template>

