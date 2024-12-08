<script setup>
import { ref, watch, computed, onActivated} from 'vue'
import HomeNavBar from './cpns/HomeNavBar.vue';
import HomeSearchBox from './cpns/HomeSearchBox.vue';
import HomeCategoryList from './cpns/HomeCategoryList.vue';
import HomeContent from './cpns/HomeContent.vue';
import SearchBar from '@/components/SearchBar.vue';

import { useHomeStore } from '@/stores/home';
import { useScroll } from '@/hooks/useScroll';

const homeStore = useHomeStore();
homeStore.fetchHotCitiesData();
homeStore.fetchCategoryData();
homeStore.fetchHouseData();

function loadHouseInfo() {
  homeStore.fetchHouseData();
}

const {isBottom, scrollTop} = useScroll();

watch(isBottom, () => {
  if (isBottom.value) {
    console.log("到底部了");
    homeStore.fetchHouseData();
  }
});

const isShowSearchBar = computed(() => {
  return scrollTop.value > 350;
});

onActivated(() => {
  window.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<template>
  <div class="home-view">
    <home-nav-bar />
    <img class="banner" src="@/assets/img/home/banner.webp" alt="横幅">
    <home-search-box />
    <search-bar v-show="isShowSearchBar"/>
    <home-category-list />
    <home-content />
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
}
.home-view {
  background-color: #f5f7f9;
}
</style>