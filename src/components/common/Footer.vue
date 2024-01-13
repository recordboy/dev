<script setup>
import BasicBtn from '../button/BasicBtn.vue';
import { ViewModule } from '../../module/ViewModule.js';
</script>

<script>

export default {
  name: 'dev-footer',
  mounted() {
  },
  methods: {

    /* 다음 화면 전환 */
    basicBtnClick() {
      
      // 페이지 이동
      ViewModule.nextPage();

      // 페이지 index 업데이트
      this.$emit('update');
    }

  }
}
</script>

<template>
  <footer class="footer-wrap">
    <div class="footer-inner">
      <BasicBtn name="NEXT" @click="basicBtnClick" />
    </div>
  </footer>
</template>

