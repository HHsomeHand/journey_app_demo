<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  footerText: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div class="detail-section common-padding">
    <h2 class="title">{{ title }}</h2>
    <div class="content">
      <slot>
        <p>默认内容</p>
      </slot>
    </div>
    <div class="footer">
      {{ footerText }}
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-section {
  border-top: 5px solid #f2f3f4;

  .title {
    line-height: 50px;
    font-size: 21px;
    color: #333;
    font-weight: bold;
    border-bottom: #eee solid 1px;
    margin-bottom: 15px;
  }

  .footer {
    color: var(--primary-color);
    font-size: 14px;
    line-height: 44px;
    text-align: right;
    font-weight: 600;
  }
}
</style>