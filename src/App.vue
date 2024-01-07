
<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />

    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  console.log(toDepth, fromDepth);
  console.log(to, from);
    },
  },

}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 10s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
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
