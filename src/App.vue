<script setup>
import { ref, computed} from 'vue'

import TabBar from './components/TabBar.vue';
import CalendarItem from './components/CalendarItem.vue';
import LoadingItem from './components/LoadingItem.vue';

import { useRoute } from 'vue-router';


const route = useRoute();

const isHiddenTabBar = computed(() => {
  return route.meta.isHiddenTabBar;
});

</script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive :include="['home']">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- <router-view></router-view> -->
    
    <tab-bar v-show="!isHiddenTabBar" />

    <calendar-item />
    <loading-item />
  </div>
</template>

<style scoped>

</style>