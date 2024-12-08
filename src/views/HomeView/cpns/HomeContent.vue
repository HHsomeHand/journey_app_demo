<script setup>
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import HouseItemType3 from '@/components/HouseItem/HouseItemType3.vue';
import HouseItemType9 from '@/components/HouseItem/HouseItemType9.vue';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore();
const {houseData} = storeToRefs(homeStore);

const router = useRouter();

function onItemClick(houseId) {
  router.push(`/detail/${houseId}`);
}
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="house-container">
      <template v-for="(house, idx) of houseData">
        <house-item-type9 @click="onItemClick(house.data.houseId)" v-if="house.discoveryContentType == 9" :item-data="house.data"/>
        <house-item-type3 @click="onItemClick(house.data.houseId)" v-else-if="house.discoveryContentType == 3" :item-data="house.data"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.content {
  .title {
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bolder;
  }
  .house-container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>