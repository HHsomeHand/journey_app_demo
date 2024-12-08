<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const mainStore = useMainStore();
const {isLoading} = storeToRefs(mainStore);

function onClick() {
  isLoading.value = false;
}
</script>

<template>
  <div class="loading" v-show="isLoading" @click="onClick">
    <div class="loading-bg">
      <img class="loading-img" src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 12;

  .loading-bg {
    width: 100%;
    height: 100%;
    background: url(@/assets/img/home/loading-bg.png) no-repeat center center;
    background-size: 104px 104px;

    display: flex;
    justify-content: center;
    align-items: center;

    .loading-img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;

    }
  }
}
</style>