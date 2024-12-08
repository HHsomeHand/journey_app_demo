<script setup>
import { ref } from 'vue'

const props = defineProps({
  houseTags: {
    type: Object,
    default: () => ({}),
  },
  houseName: {
    type: String,
    default: "",
  },
  commentBrief: {
    type: Object,
    default: () => ({}),
  },
  location: {
    type: String,
    default: "",
  }
});


</script>

<template>
  <div class="show-info common-padding">
    <h2 class="title">{{ houseName }}</h2>
    <div class="tags">
      <template v-for="(tag) of houseTags" :key="tag.tagCode" >
        <span 
          v-if="tag.tagText != undefined"
          :style="{color: tag.tagText?.color, background: tag.tagText?.background.color}"
          class="tag"
          >
          {{ tag.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment-brief-container cell">
      <div class="left">
        <div class="score">{{ commentBrief.overall }}</div>
        <div class="score-title">{{ commentBrief.scoreTitle }}</div>
        <div class="comment-brief">{{ commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="to-comment">{{ commentBrief.totalCount }}条评论</div>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="cell">
      <div class="left location" >
        {{ location }}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.show-info  {
  margin:16px 0px;
  .title {
    font-size: 21px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
    line-height: 25px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    .tag {
      font-size: 12px;
      margin-right: 5px;
      padding: 2px 4px;
    }
  }

  .cell {
    display: flex;
    margin: 15px 0;
    padding: 8px 12px;
    background-color: #f5f7fa;
    justify-content: space-between;
    font-size: 12px;
    

    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      align-items: center;
      color: var(--primary-color);
    }
  }

  .score {
    font-size: 18px;
    font-weight: bold;
  }
  .score-title, .score {
    color: #333;

    margin-right: 5px;
  }

  .comment-brief {
    color: #999;
  }

  .location {
    font-size: 15px;
    font-weight: bold;
    color: #333;
  }
}
</style>