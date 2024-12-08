<script setup>
import { ref } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  }
});

</script>

<template>
  <div class="house-item-t3">
    <div class="item-inner">
      <img class="cover" :src="itemData.image.url" alt="">
      <div class="content">
        <div class="show-location subtitle">
          <van-icon name="location-o" />
          {{ itemData.location }}
        </div>
        <div class="title">
          {{ itemData.houseName }}
        </div>
        <div class="summary-text subtitle">
          {{ itemData.summaryText }}
        </div>
        <div class="show-price">
          <span class="final-price">￥{{ itemData.finalPrice }}</span>
          <span class="product-price">￥{{ itemData.productPrice }}</span>
          <span v-if="itemData.priceTipBadge" class="tip">{{ itemData.priceTipBadge.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item-t3 {
  width: 50%;
  
  .item-inner {
    padding: 5px;
    border-radius: 6px;
    overflow: hidden;
    background-color: white;
    
    .cover {
      width: 100%;
    }

    .content {
      padding: 5px;
      .subtitle {
        font-size: 12px;
        color: #666;
        
      }

      .show-location {
        margin-bottom: 5px;
      }

      .title {
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin-bottom: 5px;
      }

      .summary-text {
        margin-bottom: 5px;
      }

      .final-price {
        color: var(--primary-color);
        font-size: 14px;
      }

      .product-price {
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 3px;
      }

      .tip {
        color: white;
        font-size: 12px;
        background-color: #ff9c9c;
        padding: 2px 6px;
        border-radius: 8px;
        margin-left: 3px;
      }
    }
  }

}


</style>