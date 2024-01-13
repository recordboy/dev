
<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { ViewModule } from '../src/module/ViewModule.js'
import { router } from './router/index.js';
</script>

<script>


// 슬라이드 전환 구분
let showOn = false;

export default {
  created() {
  },
  mounted() {
    showOn = true;
    console.log('슬라이드 전환 시작: ', showOn);
    router.push({ path: 'front' });
  },
  methods: {
    handlePageIdxUpdate() {

      // 현재 페이지 업데이트
      this.pageName = ViewModule.getPageName();
    },
  },
  data() {
    return {
      pageName: ViewModule.getPageName()
    }
  }


  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //     console.log(to, from);
  //   },
  // },
}



</script>

<template>
  <div id="app">
    <Header @update="handlePageIdxUpdate" :title="pageName"  />

    <!-- 화면 전환 -->
    <router-view v-slot="{ Component }">
      <transition v-if="showOn" name="slide">
        <component :is="Component" :class="ViewModule.pageState === 'next' ? 'next' : 'prev'" />
      </transition>
      <transition v-else>
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer @update="handlePageIdxUpdate" />
  </div>
</template>
