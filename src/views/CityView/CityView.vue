<script setup>
import { ref, computed } from 'vue'
import SearchItem from './cpns/CitySearchItem.vue';
import TabsItem from './cpns/CityTabsItem.vue';
import IndexBar from './cpns/CityIndexBar.vue';
import { useCityStore } from '@/stores/city';

const cityStore = useCityStore();

cityStore.fetchCitiesData();
</script>

<template>
  <!-- <div class="city-view no-tabbar-page"> -->
  <div class="city-view">
    <search-item />

    <tabs-item>
      <template v-slot="props">
        <index-bar :group-data="props.groupData"/>
      </template>
    </tabs-item>
 

  </div>

</template>

<style scoped>
.city-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>