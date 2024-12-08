<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

// 搜索栏
const searchValue = ref("");

const router = useRoute();

function onSearchCancel() {
  router.back();
};

</script>

<template>
  <div class="search-item">
    <van-search v-model="searchValue" show-action placeholder="城市/区域/位置" shape="round" @cancel="onSearchCancel" />
  </div>
</template>

<style scoped>
.search-item {
  position:fixed;
  left: 0;
  right: 0;
  z-index: 8;

}
</style>