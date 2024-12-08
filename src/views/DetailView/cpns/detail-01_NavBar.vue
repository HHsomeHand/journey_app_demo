<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function onClickLeft() {
  router.back();
}
</script>

<template>
  <div class="nav-bar">
    <van-nav-bar 
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<style lang="less" scoped>

</style>