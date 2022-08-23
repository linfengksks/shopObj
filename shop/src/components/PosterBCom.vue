<template>
  <div class="posterb-com">
    <!-- 文字部分 -->
    <div class="text-box">
      <div class="label-text">新款</div>
      <div class="title-text">13 英寸 MacBook Pro</div>
      <div class="subtitle-text">超机动，硬实力。</div>
      <div class="price-text">RMB <span id="price-num">9999</span>起</div>
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
  name: "PosterBCom",

  data() {
    return {
      image: require("../../static/img/macbook_pro_13.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less">
.posterb-com {
  height: 72.9rem;
  text-align: center;
  background: #000;
  .label-text {
   padding-top: 6rem;
    color: #f56300;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.85rem;
  }
  .title-text {
    font-size: 5.6rem;
    font-weight: 600;
    color: #f5f5f7;
  }
  .subtitle-text {
    font-size: 2.8rem;
    font-weight: 600;
    color: #f5f5f7;
    margin-bottom: 1.12rem;
  }
  .price-text {
    font-size: 1.7rem;
    color: #f5f5f7;
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