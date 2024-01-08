
<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
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
    <Header />

    <!-- 화면 전환 -->
    <router-view v-slot="{ Component }">
      <transition v-if="showOn" name="slide">
        <component :is="Component" />
      </transition>
      <transition v-else>
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>
