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
            @click="switchCpe"
          >
            <span>笔记本电脑</span>
          </div>
          <div class="nbsp"></div>
          <div
            class="mac"
            :style="!navStyleWat ? navStyle : ''"
            @click="switchCpe"
          >
            <span>台式电脑</span>
          </div>
        </div>
      </div>
      <CpeCom class="cpe1" :style="cpeS1" :pmrList="noteMac"></CpeCom>
      <CpeCom class="cpe2" :style="cpeS2" :pmrList="desktopMac"></CpeCom>
      <!-- 查看更多 -->
      <div class="look-move">
        <el-link> 比较各款 Mac 机型 > </el-link>
        <el-link> 选购 Mac > </el-link>
      </div>
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
      cpeS1: "opacity: 1",
      cpeS2: "opacity: 0",
      navStyleWat: 1,
      // 参数对比
      noteMac: [
        {
          productImg: require("../../static/img/air_mac.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M1芯片机型)",
          pirce: 7999,
          size: "13.3英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M1芯片",
          cpuImg: require("../../static/img/m1.png"),
          coreQuantity: "8核",
          max: 0,
          graphics: "7",
          graphicsMax: 0,
          memoryImg: require("../../static/img/compare.png"),
          memory: "16GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "立体声扬声器"],
          weight: 1.29,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
        {
          productImg: require("../../static/img/air2_mac.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M2芯片机型)",
          pirce: 9499,
          size: "13.6英寸",
          screen: "Liquid 视网膜显示屏",
          cpu: "Apple M2芯片",
          cpuImg: require("../../static/img/m2.png"),
          coreQuantity: "8核",
          max: 1,
          graphics: "10",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "24GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "1080p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "支持空间音频的四扬声器系统"],
          weight: 1.24,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
        {
          productImg: require("../../static/img/pro_mac.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Pro 13 英寸",
          particular: "",
          pirce: 9999,
          size: "13.3 英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M2芯片",
          cpuImg: require("../../static/img/m2.png"),
          coreQuantity: "8核",
          max: 0,
          graphics: "10",
          graphicsMax: 0,
          memoryImg: require("../../static/img/compare.png"),
          memory: "24GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "20",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["录音棚级三麦克风阵列", "支持空间音频的立体声扬声器"],
          weight: 1.38,
          unlockImg: require("../../static/img/zhiwen_box.png"),
          unlock: "触控栏和触控 ID",
        },
        {
          productImg: require("../../static/img/proplus_mac.png"),
          colorImg: require("../../static/img/color.png"),
          label: " ",
          name: "MacBook Pro14 英寸和 16 英寸",
          particular: "",
          pirce: 14999,
          size: "14.2 英寸或 16.2 英寸",
          screen: "Liquid 视网膜 XDR 显示屏",
          cpu: "Apple M1 Pro 芯片或Apple M1 Max 芯片",
          cpuImg: require("../../static/img/m1max.png"),
          coreQuantity: "10 核",
          max: 1,
          graphics: "32",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "64GB",
          storage: "8T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "21",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "1080p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["录音棚级三麦克风阵列", "支持空间音频的六扬声器系统"],
          weight: "1.6 千克或 2.1 千克",
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
      ],
      desktopMac: [
        {
          productImg: require("../../static/img/compare_imac24__bdgus6d1xqb6_large.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M1芯片机型)",
          pirce: 7999,
          size: "13英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M1芯片",
          cpuImg: require("../../static/img/m1.png"),
          coreQuantity: "8核",
          max: 1,
          graphics: "7",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "16GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "立体声扬声器"],
          weight: 1.29,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
        {
          productImg: require("../../static/img/compare_macmini__b77zzeep1s6a_large.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M1芯片机型)",
          pirce: 7999,
          size: "13英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M1芯片",
          cpuImg: require("../../static/img/m1.png"),
          coreQuantity: "8核",
          max: 1,
          graphics: "7",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "16GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "立体声扬声器"],
          weight: 1.29,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
        {
          productImg: require("../../static/img/compare_macstudio__dg371ccau70i_large.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M1芯片机型)",
          pirce: 7999,
          size: "13英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M1芯片",
          cpuImg: require("../../static/img/m1.png"),
          coreQuantity: "8核",
          max: 1,
          graphics: "7",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "16GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "立体声扬声器"],
          weight: 1.29,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
        {
          productImg: require("../../static/img/compare_macpro__cj3i514iwpua_large.png"),
          colorImg: require("../../static/img/color.png"),
          label: "新款",
          name: "MacBook Air",
          particular: "(M1芯片机型)",
          pirce: 7999,
          size: "13英寸",
          screen: "视网膜显示屏",
          cpu: "Apple M1芯片",
          cpuImg: require("../../static/img/m1.png"),
          coreQuantity: "8核",
          max: 1,
          graphics: "7",
          graphicsMax: 1,
          memoryImg: require("../../static/img/compare.png"),
          memory: "16GB",
          storage: "2T",
          batteryImg: require("../../static/img/dianci.png"),
          battery: "18",
          cameraImg: require("../../static/img/compare_icon_camera__dlxow9r3leie_large.png"),
          camera: "720p",
          audioImg: require("../../static/img/yinliang.png"),
          audio: ["三麦克风阵列", "立体声扬声器"],
          weight: 1.29,
          unlockImg: require("../../static/img/zhiwen.png"),
          unlock: "触控 ID",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    switchCpe() {
      this.navStyleWat = !this.navStyleWat;
      if (this.navStyleWat) {
        this.cpeS1 = "opacity:1;";
        this.cpeS2 = "opacity:0;";
      } else {
        this.cpeS1 = "opacity:0;";
        this.cpeS2 = "opacity:1;";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.CompareCom {
  padding-top: 11rem;
  height: 205rem;
  position: relative;
  background:#fafafa;
  .compare-box {
    width: 98rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
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
  .cpe1 {
    position: absolute;
    transition: all 1s;
    left: 0;
    top: 20rem;
  }
  .cpe2 {
    position: absolute;
    transition: all 1s;
    left: 0;
    top: 20rem;
  }
  .look-move {
    position: absolute;
    bottom: 14rem;
    width: 100%;
    text-align: center;
    &::v-deep .el-link {
      margin-right: 4.2rem;
    }
    &::v-deep .el-link--inner {
      font-size: 2.1rem;
      color: #06c;
    }
  }
}
</style>