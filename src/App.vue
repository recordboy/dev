<template>
  <Header />
  <Front />
</template>

<script>
// Page
import Front from './pages/Front.vue';
import Header from './components/Header';

// style
import './assets/style/reset.css';

export default {
  name: 'App',
  components: {
    Header,
    Front,
  }
}
</script>

<style>
</style>
