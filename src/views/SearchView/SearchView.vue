<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="search-view">
    <h2>search-view</h2>
    <h2>开始日期: {{ $route.query.startDate }}</h2>
    <h2>结束日期: {{ $route.query.endDate }}</h2>
    <h2>当前城市: {{ $route.query.currCity }}</h2>
  </div>
</template>

<style scoped>

</style>