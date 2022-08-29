<template>
  <div class="PosterCom2">
    <div
      class="poster-box"
      :style="`background-image: url(${posterData.img});`"
    >
      <div class="text-box">
        <div class="subtitle">{{ posterData.subtitle }}</div>
        <div class="title">{{ posterData.title }}</div>
        <div class="text">
          {{ posterData.text }}
        </div>
        <div class="btn">
          <el-link>{{ posterData.btn }}></el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterCom2",
  props: ['posterData'],
  data() {
    return {
    };
  },

  mounted() {
    console.log(this.posterData,'111122212');
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.PosterCom2 {
  margin: 3rem 0;
  position: relative;
  color: #fff;
  .poster-box {
    width: 138rem;
    height: 60rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-box {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 9.8rem;
    text-align: center;
    max-width: 32.7rem;
    .subtitle {
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 0.9rem;
    }
    .text {
      font-size: 2.1rem;
      margin-bottom: 2rem;
    }
    .title {
      font-size: 4.8rem;
      font-weight: 600;
      margin-bottom: 0.9rem;
    }
    &::v-deep .el-link {
      color: #06c;
      font-size: 1.4rem;
    }
  }
}
</style>