<script setup>
import TextInput from '../components/input/TextInput.vue';
// import RadioBox from '../components/input/RadioBox.vue';
// import Radio from '../components/input/Radio.vue';
</script>

<script>
// const radioLit = [
//   {
//     'id': '01',
//     'gender': 'm',
//     'title': '남자',
//     'checked': true
//   },
//   {
//     'id': '02',
//     'gender': 'f',
//     'title': '여자',
//     'checked': false
//   }
// ]

let option = {
  focus: 'start01',
  motion: 0.2
}

</script>

<template>
  <main class="con-wrap">
    <div class="visual">
      <h1 class="title">
        사용자 정보를 입력해 주세요
      </h1>
    </div>
    <TextInput id="text-input-01" title="이름" :option="option" />
    <!-- <TextInput id="text-input-02" title="생년월일" focus="start02" /> -->
    
    <!-- <RadioBox :radioLit="radioLit" name="radio-01" title="성별" /> -->

    <!-- <div class="radio-wrap">
      <Radio id="radio-02-01" name="radio-02" title="남자" value="m" checked="checked" />
      <Radio id="radio-02-02" name="radio-02" title="여자" value="f" />
    </div> -->

  </main>
</template>
