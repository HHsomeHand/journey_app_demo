import { getCategory, getHotCities, getHouse } from "@/services/modules/home";
import { defineStore } from "pinia";
import {ref} from 'vue';

export const useHomeStore = defineStore('home', () => {
  const hotCitiesData = ref([]);

  async function fetchHotCitiesData() {
    hotCitiesData.value = await getHotCities();

    return hotCitiesData.value;
  }

  const categoryData = ref([]);

  async function fetchCategoryData() {
    categoryData.value = await getCategory();

    return categoryData.value;
  }

  const houseData = ref([]);
  const currPage = ref(1);

  async function fetchHouseData() {
    if (currPage.value > 3) return;

    const newHouseData = await getHouse(currPage.value);
    houseData.value.push(...newHouseData);
    currPage.value++;

    return houseData.value;
  }

  return {
    hotCitiesData, 
    fetchHotCitiesData, 
    categoryData, 
    fetchCategoryData,
    houseData,
    currPage,
    fetchHouseData
  };
})