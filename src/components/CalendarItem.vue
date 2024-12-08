<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useCalendarStore } from '@/stores/calendar';

const {
  startDate,
  endDate,
  isShowCalendar,
} = storeToRefs(useCalendarStore());

function calendarFormatter(day) {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
}

const calendarEl = ref();

function onConfirm(values) {
  startDate.value = values[0];
  endDate.value = values[1];

  isShowCalendar.value = false;
  calendarEl.value.reset();
}
</script>

<template>
  <div class="calendar-item">
    <van-calendar 
      ref="calendarEl" 
      v-model:show="isShowCalendar" 
      color="#ff9854" 
      :round="false" 
      :formatter="calendarFormatter"
      type="range" 
      @confirm="onConfirm" 
      :default-date="null"
    />
  </div>
</template>

<style lang="less" scoped>
.calendar-item {
  --van-calendar-popup-height: 100%;
}
</style>