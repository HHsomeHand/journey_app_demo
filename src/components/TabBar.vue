<script setup>
import { ref, watchEffect } from 'vue'

import tabberData from '@/assets/data/tabberData';

import { getImagetURL } from '@/utils/load_assets';

const currSel = ref(0);


</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currSel" active-color="#ff9854" route :placeholder="true">
      <template v-for="(item) of tabberData">
        <!-- <van-tabbar-item :to="item.path"> -->
        <van-tabbar-item :to="item.path" :icon="item.icon">
          <!-- <template #icon="props">
            <img 
              class="icon"
              :src="getImagetURL(props.active ? item.imgActive : item.img)" 
            >
          </template> -->
          <span class="text">{{item.text}}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style scoped>
/* .tab-bar { 
  font-size: 18px;
  --van-tabbar-item-font-size: 18px;
}

.tab-bar .icon {
  height: 25px;
}

:deep(.van-icon) {
  font-size: 25px;
} */

</style>