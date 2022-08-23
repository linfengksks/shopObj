<template>
  <div class="activitiesCom" :style="tranStyle1">
    <div class="act-box">
      <div class="content">{{ content }}</div>
      <el-link :style="aStyle">{{ btn }}</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivitiesCom",

  data() {
    return {
      content:
        "为高校生活购买 Mac，以 Apple 教育优惠节省更多◊，另有 AirPods 搭配其中◊◊。",
      btn: "立即选购>",
      tranStyle1: "",
      aStyle: "#fff",
    };
  },

  mounted() {
    setTimeout(() => {
      this.tranStyle1 = "height: 5.2rem;";
    }, 200);
    setTimeout(() => {
      this.tranStyle1 = "height: 5.2rem;background:#f5f5f7;color:#1d1d1f;";
      this.aStyle="color:#0071e3;transition: all 2s;";
    }, 3200);
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.activitiesCom {
  width: 100%;
  transition: all 1s;
  overflow: hidden;
  height:0;background:#0071e3;color:#fff;
  .act-box {
    width: 98rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
    height: 100%;
    &::v-deep a {
      font-size: 1.2rem;
      color: #fff;
    }
  }
}
</style>