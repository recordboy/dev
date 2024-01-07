<script>
export default {
  name: 'dev-header',
}
</script>

<template>
  <header class="header-wrap">
    <!-- <h5 class="header-title">정보 입력</h5> -->
    <router-link to="/">프론트</router-link>
    <router-link to="/user-info">사용자 입력</router-link>
  </header>
</template>

<style scoped>
.header-wrap {
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 1;
  background-color: #fff;
}


</style>
