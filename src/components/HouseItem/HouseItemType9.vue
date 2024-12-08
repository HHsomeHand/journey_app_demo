<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  }
});

const houseScore = computed(() => Number(props.itemData.commentScore));

</script>

<template>
  <div class="house-item-t9">
    <div class="item-inner">
      <img class="cover" :src="itemData.image.url" alt="">
      <div class="desc-area">
        <div class="summary-text">{{ itemData.summaryText }}</div>
        <h3 class="title">{{ itemData.houseName }}</h3>
        <div class="rate-price-container">
          <van-rate :model-value="houseScore" color="#fff" size="12px" readonly allow-half />
          <span class="final-price">¥ {{ itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item-t9 {
  width: 50%;

  .item-inner {
    position: relative;
    color: white;
    font-size: 14px;
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;


    .cover {
      width: 100%;
    }

    .desc-area {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 7px;

      .summary-text {
        font-size: 12px;
        margin-bottom: 7px;
      }

      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin-bottom: 7px;
      }

      .rate-price-container {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>