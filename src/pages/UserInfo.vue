<script setup>
import TextInput from '../components/input/TextInput.vue';
// import RadioBox from '../components/input/RadioBox.vue';
// import Radio from '../components/input/Radio.vue';
</script>

<script>
export default {
  name: 'dev-uset-info',
  methods: {


    
    func(keyCode) {

      if (keyCode === 13) {

        idx++;
        // console.log(idx)

        
      }

    }
  }
}


let idx = 0;

let option = {
  focus: '01',
  motion: 500,
}

</script>

<template>
  <main class="con-wrap">
    <div class="visual">
      <h1 class="title">
        사용자 정보를 입력해 주세요
      </h1>
    </div>
    <TextInput id="text-input-01" title="이름" :option="option" :func="func" :idx="idx" />
    <TextInput id="text-input-02" title="이름2" :option="option" :idx="idx" />
    <!-- <TextInput id="text-input-02" title="생년월일" focus="start02" /> -->
    
    <!-- <RadioBox :radioLit="radioLit" name="radio-01" title="성별" /> -->

    <!-- <div class="radio-wrap">
      <Radio id="radio-02-01" name="radio-02" title="남자" value="m" checked="checked" />
      <Radio id="radio-02-02" name="radio-02" title="여자" value="f" />
    </div> -->

  </main>
</template>
