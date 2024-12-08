<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue'
import { formatDate } from '@/utils/formatDate';
import { useCalendarStore } from '@/stores/calendar';

const value = ref();

const calendarStore = useCalendarStore();

const {startDate, endDate} = storeToRefs(calendarStore);

const {showCalendar} = calendarStore;

const {startDateFmt, endDateFmt} = calendarStore.useDateFmt('MM.DD');

</script>

<template>
  <div class="search-bar">
    <van-search v-model="value" placeholder="关键字/位置/民宿" left-icon="" right-icon="search" shape="round">
      <template #left>
        <div class="show-date" @click="showCalendar">
          <div class="item-inner">
            <div class="cell">
              <span class="tip">住</span>
              <span class="date">{{ startDateFmt }}</span>
            </div>
            <div class="cell">
              <span class="tip">离</span>
              <span class="date">{{ endDateFmt }}</span>
            </div>
          </div>
        </div>
      </template>
    </van-search>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;

  --van-search-input-height: 45px;

  &:deep(.van-search__content--round) {
    border-radius: 0px 4px 4px 0px;
  }

  .show-date {
    font-size: 10px;
    line-height: 14px;
    background-color: var(--van-search-content-background);
    height: var(--van-search-input-height);

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 12px;

    border-radius: 4px 0 0 4px;
    margin-right: 1px;

    .item-inner {
      padding-right: 5px;
      flex: 1;

      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      

      .tip {
        color: #999;
        margin-right: 2px;
      }

      .date {
        color: #333;
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 3px;
        border: 2px solid #333;
        border-top-color: transparent;
        border-left-color: transparent;
      }
    }
  }
}
</style>