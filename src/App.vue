
<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>

<script>
export default {
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      console.log(to, from);
    },
  },
}
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

<style scoped>

/* 오른쪽에서 나타날 패널 */
.slide-enter-active {
  transition: all 1s ease-in-out;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}


/* 왼쪽으로 사라질 패널 */
.slide-leave-active {
  transition: all 1s ease-in-out;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
  opacity: 0;
}
</style>

<!-- <style scoped>
#app {
  background-color: #000;
}
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

/* 보여질 패널 */
.scale-slide-enter-from {
  right: -100%;
}

.scale-slide-enter-to {
  right: 0%;
}

/* 사라질 패널 */
.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style> -->