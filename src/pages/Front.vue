<script setup>
import TextInput from '../components/input/TextInput.vue';
</script>

<template>
  <main class="con-wrap">
    <div class="visual">
      <h1 class="title">
        사용자 정보를 입력해 주세요
      </h1>

    </div>
    <TextInput id="text-input-01" name="이름" />
    <TextInput id="text-input-02" name="생년월일" />
  </main>
</template>

<script>
export default {
  name: 'dev-front',
}

</script>
<style scoped>
.con-wrap {
  box-sizing: border-box;
  padding: 20px 20px;
  width: 100%;
  height: 100%;
}
.con-wrap .visual h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

</style>
