<script setup>
import { ViewModule } from '../../module/ViewModule.js';
</script>

<script>
export default {
  name: 'dev-header',
  mounted() {
    // if (ViewModule.pageIdx === 0) {
    // }
  },
  data() {
    return {
      idx: 0
    }

  },
  methods: {
    headerBackBtnClick() {
      ViewModule.prevPage();
      this.idx = ViewModule.pageIdx;
    }
    
  },
}

</script>

<template>
  <header class="header-wrap">
    <h1 class="header-title">정보 입력{{this.idx}}</h1>
    <button 
      type="button" 
      class="header-back-btn" 
      @click="headerBackBtnClick">
      &lt;
    </button>
  </header>
</template>
