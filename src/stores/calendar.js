import dayjs from "dayjs";
import { formatDate } from "@/utils/formatDate";
import { defineStore } from "pinia";
import {ref, computed} from 'vue';

export const useCalendarStore = defineStore('calendar', () => {
  const startDate = ref(dayjs());
  const endDate = ref(dayjs().add(1, 'day'));

  const intvlDay = computed(() => {
    return dayjs(endDate.value).diff(startDate.value, 'day')
  });

  const isShowCalendar = ref(false);

  function useDateFmt(fmt='MM月DD日') {
    const startDateFmt = computed(() => {
      return formatDate(startDate.value, fmt);
    });
    
    const endDateFmt = computed(() => {
      return formatDate(endDate.value, fmt);
    });

    return {
      startDateFmt,
      endDateFmt
    }
  }

  function showCalendar() {
    isShowCalendar.value = true;
  }

  return {
    startDate,
    endDate,
    useDateFmt,
    intvlDay,
    isShowCalendar,
    showCalendar,
  }
})