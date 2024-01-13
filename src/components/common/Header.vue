<script setup>
import { ViewModule } from '../../module/ViewModule.js';

</script>

<script>

export default {
  name: 'dev-header',
  props: ['title'],
  mounted() {
  },
  methods: {
    headerBackBtnClick() {

      // 페이지 이동
      ViewModule.prevPage();

      // 페이지 index 업데이트
      this.$emit('update');
    }
    
  },
}

</script>

<template>
  <header class="header-wrap">
    <h1 class="header-title">{{title}}</h1>

    <button 
      type="button"
      :class="ViewModule.pageIdx ? 'header-back-btn' : 'header-back-btn none'" 
      @click="headerBackBtnClick">
      &lt;
    </button>
  </header>
</template>
