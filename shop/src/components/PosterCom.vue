<template>
  <div class="poster-com">
    <!-- 文字部分 -->
    <div class="text-box">
      <div class="label-text">新款</div>
      <div class="title-text">MacBook Air</div>
      <div class="subtitle-text">别看轻，别轻看。</div>
      <div class="price-text">RMB <span id="price-num">9499</span>起</div>
      <div class="btn-box">
        <el-button type="success" round>购买</el-button>
        <el-link type="primary">进一步了解></el-link>
      </div>
    </div>
    <!-- 图片部分 -->
    <div class="img-box"></div>
    <div class="block">
      <el-image :src="image">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterCom",

  data() {
    return {
      image:  require("../../static/img/macbook air2.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less">
.poster-com{
    text-align: center;
    .label-text{
        color: #f56300 ;
        font-size: 1.7rem;
    }
}
</style>