<script setup>
import { useCityStore } from '@/stores/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

// 选择城市部分
const cityStore = useCityStore();

const { citiesData } = storeToRefs(cityStore);

const currCityGroupName = ref("");
</script>

<template>
  <div class="tabs-item">
    <van-tabs 
      v-model:active="currCityGroupName" 
      color="#ff9854"
    >
      <template 
        v-for="(cityGroup, cityGroupName) of citiesData" :key="cityGroupName"
      >
        <van-tab 
          :title="cityGroup.title" 
          :name="cityGroupName" 
        >
          <div class="context-container">
            <slot :groupData="citiesData[cityGroupName]"></slot>
          </div>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped>
:deep(.van-tabs__wrap) {
  position: fixed;
  z-index: 8;
  top: 54px;
  left: 0;
  right: 0;
}
.context-container {
  height: calc(100vh - 54px - 44px);
  margin-top: calc(54px + 44px);
  overflow-y: auto;
}
</style>