<script setup>
import { useCityStore } from '@/stores/city';
import { formatDate } from '@/utils/formatDate';
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { ref, computed, watchEffect } from 'vue'

import { useRouter } from 'vue-router';
import { useHomeStore } from '@/stores/home';
import { useCalendarStore } from '@/stores/calendar';

const router = useRouter();

const onCityClick = () => {
  router.push('/city');
};

const cityStore = useCityStore();

const { currCity } = storeToRefs(cityStore);


const calendarStore = useCalendarStore();
const {
  intvlDay,
} = storeToRefs(calendarStore);
const {showCalendar} = calendarStore;

const {startDateFmt, endDateFmt} = calendarStore.useDateFmt();


const homeStore = useHomeStore();
const {hotCitiesData} = storeToRefs(homeStore);

function onSearchBtnClick() {
  router.push({
    path: '/search',
    query: {
      startDate: startDateFmt.value,
      endDate: endDateFmt.value,
      currCity: currCity.value.cityName 
    }
  })
}
</script>

<template>
  <div class="search-box">
    <div class="cell show-location">
      <div class="" @click="onCityClick">
        {{ currCity.cityName }}
      </div>

      <div class="location">
        <span class="location-text">我的位置</span>
        <img class="location-icon" src="@\assets\img\home\icon_location.png" alt="">
      </div>
    </div>

    <div class="show-date" >
      <div class="cell container" @click="showCalendar">
        <div class="start">
          <span class="tip">入住</span>
          <div class="">{{ startDateFmt }}</div>
        </div>
        <span class="tip">共{{ intvlDay }}晚</span>
        <div class="end">
          <span class="tip">离店</span>
          <div class="">{{ endDateFmt }}</div>
        </div>
      </div>
      
    </div>

    <div class="show-price-people cell">
      <span class="tip">价格不限</span>
      <span class="tip">人数不限</span>
    </div>

    <div class="show-keyword cell">
      <span class="tip">关键字/位置/民宿名</span>
    </div>

    <div class="show-hot-cities ">
      <template v-for="(item) of hotCitiesData">
        <div 
          class="hot-city"
          :style="{color: item.tagText.color, backgroundColor: item.tagText.background.color}"
        >
        {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="show-search-btn cell">
      <button @click="onSearchBtnClick" class="search-btn">开始搜索</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  padding: 0 20px;

  .cell {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    color: #333;

    .tip {
      font-size: 12px;
      color: #999;
    }
  }

  .show-location {
    .location-text {
      font-size: 12px;
      margin-right: 4px;
      color: #666;
    }

    .location-icon {
      width: 18px;
      vertical-align: middle;
    }
  }

  .show-hot-cities {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .hot-city {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 12px;
      margin: 3px;
    }
  }

  .show-search-btn {
    margin-top: 10px;
    .search-btn {
      background-image: var(--theme-linear-gradient);
      flex: 1;
      height: 38px;
      border: none;
      border-radius: 22px;
      color: white;
      font-size: 18px;
    }
  }
  
}
</style>