<script setup>
import { ViewModule } from '../../module/ViewModule.js';
</script>

<script>
export default {
  name: 'dev-header',
  mounted() {

    // if (ViewModule.pageIdx === 0) {

    // }

  }
}

/* 이전 화면 전환 */
function headerBackBtnClick() {
  ViewModule.prevPage();
}

</script>

<template>
  <header class="header-wrap">
    <h1 class="header-title">정보 입력</h1>
    <button 
      type="button" 
      class="header-back-btn" 
      @click="headerBackBtnClick">
      &lt;
    </button>
  </header>
</template>
