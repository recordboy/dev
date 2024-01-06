<template>
  <main class="con-wrap">
    <button @click="show = !show">토글</button>
    <Transition>
      <p v-if="show">안녕</p>
    </Transition>
  </main>
</template>

<script>
export default {
  name: 'dev-front',
}

</script>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
<style scoped></style>
