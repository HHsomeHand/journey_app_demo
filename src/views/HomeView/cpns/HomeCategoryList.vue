<script setup>
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const currSel = ref(0);

const homeStore = useHomeStore();
const {categoryData} = storeToRefs(homeStore);
</script>

<template>
  <div class="category-list">
    <van-tabs v-model:active="currSel">
      <template v-for="(category) of categoryData" :key="category.id">
        <van-tab>
          <template #title>
            <div class="category-item">
              <img class="category-img" :src="category.pictureUrl" />
              <span class="category-text">{{ category.title }}</span>
            </div>
          </template>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.category-list {
  --van-tabs-line-height: 50px;
  --van-font-bold: normal;
  
  margin-top: 14px;

  .category-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  .category-img {
    width: 32px;
  }
}
}


</style>