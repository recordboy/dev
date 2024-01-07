
<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>

<template>
  <div id="app">
    <Header />

    <!-- 화면 전환 -->
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<script>
export default {
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   },
  // },
}
</script>

<style scoped>

/* 오른쪽에서 나타날 패널 */
.slide-enter-active {
  transition: all 100s ease-in-out;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

/* 왼쪽으로 사라질 패널 */
.slide-leave-active {
  transition: all 100s ease-in-out;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}


</style>
