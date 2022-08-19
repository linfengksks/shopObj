<template>
  <div class="AdvCom">
    <div class="tip">
      <span>{{ content }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvCom",

  data() {
    return {
      content: "<广告>",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.AdvCom {
  height: 4rem;
  background: rgb(68, 68, 68);
  position: relative;
  .tip {
    width: 97.6rem;
    height: 4rem;
    color: #a8a8aa;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    span{
       position: absolute;
       right: 0;
       line-height: 4rem;
       transform: scale(0.8);
    }
  }
}
</style>