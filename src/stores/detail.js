import {getHouseInfo} from "@/services/modules/detail"
import { defineStore } from "pinia"
import {ref} from 'vue'

export const useDetailStore = defineStore('detail', () => {
  const houseInfo = ref({});

  async function fetchHouseInfo(houseId) {
    houseInfo.value = await getHouseInfo(houseId);
    return houseInfo.value;
  }

  return {
    houseInfo,
    fetchHouseInfo
  }
});