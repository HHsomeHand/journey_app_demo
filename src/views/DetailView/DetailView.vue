<script setup>
import { ref, computed, watchEffect} from 'vue'
import { useRoute } from 'vue-router';
import { useDetailStore } from '@/stores/detail';
import { storeToRefs } from 'pinia';

import NavBar from './cpns/detail-01_NavBar.vue';
import SwipeContainer from './cpns/detail-02_SwipeContainer.vue';
import ShowInfo from './cpns/detail-03_ShowInfo.vue';
import FacilitySection from './cpns/detail-04_FacilitySection.vue';

const route = useRoute();

const detailStore = useDetailStore();
detailStore.fetchHouseInfo(route.params.houseId);

const {houseInfo} = storeToRefs(detailStore);

const mainPart = computed(() => houseInfo?.value?.mainPart);

const topModule = computed(() => mainPart?.value?.topModule);

const housePics = computed(() => topModule.value?.housePicture?.housePics);

const houseTags = computed(() => topModule.value?.houseTags);

const commentBrief = computed(() => topModule.value?.commentBrief);

const houseFacility = computed(() => mainPart?.value?.dynamicModule?.facilityModule?.houseFacility);
</script>

<template>
  <div class="detail-view" v-if="mainPart != undefined">
    <nav-bar />
    <swipe-container :house-pics="housePics"/>
    <show-info 
      :house-tags="houseTags" 
      :house-name="topModule.houseName" 
      :comment-brief="commentBrief" 
      :location="topModule.nearByPosition.address"
    />
    <facility-section :house-facility="houseFacility"/>
  </div>
</template>

<style lang="less" scoped>

</style>