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
      image: require("../../static/img/macbook air2.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less">
.poster-com {
  height: 75.2rem;
  text-align: center;
  .label-text {
    margin-top: 6rem;
    color: #f56300;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.85rem;
  }
  .title-text {
    font-size: 5.6rem;
    font-weight: 600;
    color: #1d1d1f;
  }
  .subtitle-text {
    font-size: 2.8rem;
    font-weight: 600;
    color: #1d1d1f;
    margin-bottom: 1.12rem;
  }
  .price-text {
    font-size: 1.7rem;
    color: #1d1d1f;
    margin-top: 2.25rem;
  }
  .btn-box {
    margin-top: 1rem;
    .el-button {
      width: 6.2rem;
      height: 3.6rem;
      background: rgb(0, 113, 227);
      border: none;
      text-align: center;
      position: relative;
      margin-right: 2.4rem;
      &::v-deep span {
        position: absolute;
        left: 0;
        right: 0;
        top: 30%;
        bottom: 0;
        margin: auto;
      }
    }
    &::v-deep a {
      color: #06c;
    }
  }

  .img-box {
    margin-top: 4.5rem;
  }
}
</style>