<script setup>
import { ref } from 'vue'
import DetailSection from '@/components/DetailSection.vue';

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="facility-section">
    <detail-section title="房屋设施" footer-text="查看全部设施">
      <template v-for="(facility, facilityIndex) of houseFacility.houseFacilitys" :key="facility.groupId">
        <div class="cell" v-if="houseFacility.facilitySort.includes(facilityIndex)">
          <div class="header">
            <img class="icon" :src="facility.icon" alt="">
            <span class="title">{{ facility.groupName }}</span>
          </div>
          <ul class="list">
            <template v-for="facilityInfo of facility.facilitys.slice(0, 4)" :key="facilityInfo.name">
              <li class="item">
                <van-icon class="small-icon" name="passed" />
                {{ facilityInfo.name }}
              </li>
            </template>
          </ul>
        </div>
      </template>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.facility-section {
  .cell {
    display: flex;
    font-size: 12px;
    padding: 15px 0;
    border-radius: 6px;
    background-color: #f7f9fb;

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 90px;

      .icon {
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        display: flex;
        align-items: center;

        margin: 4px 0;
        .small-icon {
          color: #82e5db;
        }
      }
    }
  }
}
</style>