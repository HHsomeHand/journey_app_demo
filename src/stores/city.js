import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCities } from '@/services';

export const useCityStore = defineStore('city', () => {
  const citiesData = ref({});

  async function fetchCitiesData() {
    citiesData.value = await getCities();

    return citiesData.value;
  }

  const currCity = ref({
    cityName: "广东",
  })

  // const currCityGroupName = ref("");

  // const currCityGroup = computed(() => {
  //   return cities.value[currCityGroupName.value];
  // });

  // return { cities, fetchCities, currCityGroupName, currCityGroup }
  return { citiesData, fetchCitiesData, currCity }
})
