<script setup>
import { useCityStore } from '@/stores/city';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';


// 选择城市部分
// const cityStore = useCityStore();

// cityStore.fetchCities();

// const { currCityGroup } = storeToRefs(cityStore);

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group);
  list.unshift('#');
  return list;
});

const cityStore = useCityStore();

const {currCity} = storeToRefs(cityStore);

const router = useRouter();

function changeCurrCity(city) {
  currCity.value = city;
  router.back();
}
</script>

<template>
  <div class="index-bar">
    <van-index-bar 
      :sticky="false" 
      :index-list="indexList"
      highlight-color="#ff9854"
    >
      <!-- <template v-for="(cityArr) of currCityGroup?.cities" :key="cityArr.group"> -->
        <van-index-anchor index="#" >热门</van-index-anchor>
        <div class="hot-city-container">
          <template 
            v-for="hotCity of groupData.hotCities" 
            :id="hotCity.cityId"
          >
            <div 
              class="hot-city-item" 
              @click="changeCurrCity(hotCity)"
            >
              {{ hotCity.cityName }}
            </div>
          </template>
        </div>
      <template 
        v-for="(cityArr) of groupData?.cities" 
        :key="cityArr.group"
      >
            <van-index-anchor :index="cityArr.group" />
            <template v-for="(city) of cityArr.cities" :key="city.cityId">
              <van-cell 
                :title="city.cityName"
                @click="changeCurrCity(city)"
              />
            </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style scoped>
.hot-city-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px 10px;
  padding-right: 25px;
  padding-top: 0px;
  margin-top: -5px;
}

.hot-city-container .hot-city-item {
  width: 70px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 14px;
  font-size: 12px;
  background-color: #fff4ec;
  margin-top: 13px;
}
</style>