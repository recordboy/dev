<script setup>
import TextInput from '../components/input/TextInput.vue';
import Radio from '../components/input/Radio.vue';
</script>

<template>
  <main class="con-wrap">
    <div class="visual">
      <h1 class="title">
        사용자 정보를 입력해 주세요
      </h1>

    </div>
    <TextInput id="text-input-01" title="이름" />
    <TextInput id="text-input-02" title="생년월일" />

    <Radio id="radio-01-01" name="성별" title="남자" />
    <Radio id="radio-01-02" name="성별" title="여자" />
  </main>
</template>

<script>
export default {
  name: 'dev-user-info',
}

</script>
<style scoped>
.con-wrap {
  box-sizing: border-box;
  padding: 20px 20px;
  width: 100%;
  height: 100%;
  background: #fff;
}
.con-wrap .visual h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

</style>
