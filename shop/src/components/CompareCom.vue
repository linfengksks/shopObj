<template>
  <div class="CompareCom">
    <div class="compare-box">
      <div class="title-box">
        {{ title }}
      </div>
      <div class="nav-box">
        <div class="nav">
          <div
            class="note-mac"
            :style="navStyleWat ? navStyle : ''"
            @click="navStyleWat = !navStyleWat"
          >
            <span>笔记本电脑</span>
          </div>
          <div class="nbsp"></div>
          <div
            class="mac"
            :style="!navStyleWat ? navStyle : ''"
            @click="navStyleWat = !navStyleWat"
          >
            <span>台式电脑</span>
          </div>
        </div>
      </div>
      <CpeCom v-show="navStyleWat"></CpeCom>
      <div v-show="!navStyleWat">12121221</div>
    </div>
  </div>
</template>

<script>
import CpeCom from "../components/CpeCom";
export default {
  name: "CompareCom",
  components: {
    CpeCom,
  },

  data() {
    return {
      title: "哪款Mac适合你？",
      navStyle: "opacity: 1;border-bottom:0.1rem solid black;",
      navStyleWat: 1,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.CompareCom {
  padding-top: 11rem;
  height: 215.7rem;
  position: relative;
  .compare-box {
    width: 98rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .title-box {
      font-size: 4.6rem;
      font-weight: 600;
      text-align: center;
    }
  }
  .nav-box {
    height: 4.3rem;
    // display: flex;
    // justify-content: center;
    font-size: 1.6rem;
    margin: 0 auto;
    position: relative;
    width: 100%;
    margin-bottom: 5.4rem;
    margin-top: 6.5rem;
    .nav {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      div {
        border-bottom: 0.1rem solid #d2d2d7;
      }
      & :nth-child(n):not(:nth-child(2)) {
        cursor: pointer;
        opacity: 0.8;
        line-height: 4.3rem;
      }
    }
    .nbsp {
      width: 6rem;
    }
  }
}
</style>