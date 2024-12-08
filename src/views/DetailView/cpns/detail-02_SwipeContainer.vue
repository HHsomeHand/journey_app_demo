<script setup>
import { useDetailStore } from '@/stores/detail';
import { storeToRefs } from 'pinia';
import { ref, computed, watchEffect} from 'vue'

const props = defineProps({
  housePics: {
    type: Array,
    default: () => ([]),
  },
})

const houseGroup = ref({});

for (const housePic of props.housePics) {
  let houseArr = houseGroup.value[housePic.enumPictureCategory];
  if (houseArr == undefined)
  {
    houseArr = [];
    houseGroup.value[housePic.enumPictureCategory] = houseArr;
  }
  houseArr.push(housePic);
}

// const nameReg = /【(.*?)】：/i;
// function getGroupName(name) {
//   const result = nameReg.exec(name);
//   return result[1];
// }

function getGroupName(name) {
  return name?.replace('【', '')?.replace('】', '')?.replace('：', '');
}

function getIdxInGroup(target) {
  const houseArr = houseGroup.value[target.enumPictureCategory];

  return houseArr.findIndex(item => item == target);
}
</script>

<template>
  <div v-if="housePics" class="swipe-container">
    <van-swipe class="my-swipe" :autoplay="3000">
      <template v-for="housePic of housePics">
        <van-swipe-item>
          <img class="image" :src="housePic.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active:activeIdx }">
        <div class="custom-indicator">
          <template v-for="(group, key) of houseGroup">
            <div class="group" 
              :class="{['active-group']: key == housePics[activeIdx]?.enumPictureCategory} "
            >
              <template v-if="key == housePics[activeIdx]?.enumPictureCategory">
                <span>{{ getGroupName(group[getIdxInGroup(housePics[activeIdx])]?.title) }}</span>
              </template>
              <template v-else>
                <span>{{ getGroupName(group[0]?.title) }}</span>
              </template>
              <span v-if="key == housePics[activeIdx]?.enumPictureCategory">
                {{ getIdxInGroup(housePics[activeIdx])+1 }} / {{ group.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swipe-container {
  .image {
    width: 100%;
  }

  .custom-indicator {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    line-height: 15px;

    .group {
      margin-left: 5px;
    }
    .active-group {
      padding: 0 5px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.9);
      color: black;
    }
  }
}
</style>