<template>
  <div class="CpeCom">
    <div class="cpe-box">
      <el-form v-for="(i, index) in pmrList" :key="index" :model="i">
        <div class="top-box">
          <div class="productImg-box">
            <el-image class="productImg" :src="i.productImg">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>

          <el-image class="colorImg" :src="i.colorImg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="label">
            {{ i.label }}
          </div>

          <div class="name-box">
            <div class="name">
              {{ i.name }}
            </div>
            <div class="particular">
              {{ i.particular }}
            </div>
          </div>

          <div class="pirce-box">
            RMB&nbsp;
            <div class="pirce">{{ i.pirce }}</div>
            &nbsp; 起
          </div>
          <div class="btn">
            <el-button type="primary" round>购买</el-button>
          </div>
          <div class="lookMroe">
            <el-link>进一步了解></el-link>
          </div>
        </div>
        <hr class="hr-box" />
        <div class="screen-box">
          <div class="screen-size">
            {{ i.size }}
          </div>
          <div class="screen">
            {{ i.screen }}
          </div>
        </div>

        <div class="cpu-box">
          <el-image class="cpuImg" :src="i.cpuImg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="cpu">
            {{ i.cpu }}
          </div>
        </div>
        <div class="coreQuantity-box">
          <div v-if="i.max">最高可选配</div>
          <div class="coreQuantity">
            {{ i.coreQuantity }}
          </div>
          <div>中央处理器</div>
        </div>
        <div class="graphics-box">
          <div v-show="i.graphicsMax">最高可选配</div>
          <div class="graphics">{{ i.graphics }}核</div>
          <div>图形处理器</div>
        </div>
        <div class="memory-box">
          <el-image class="memoryImg" :src="i.memoryImg"> </el-image>
          <div>最高可选配{{ i.memory }} 统一内存</div>
        </div>
        <div class="storage-box">
          <div>最高可选配</div>
          <div class="storage">
            {{ i.storage }}
          </div>
          <div>存储容量</div>
        </div>
        <div class="battery-box">
          <el-image class="batteryImg" :src="i.batteryImg"> </el-image>
          <div>电池续航最长达 {{ i.battery }} 小时</div>
        </div>
        <div class="camera-box">
          <el-image class="cameraImg" :src="i.cameraImg"></el-image>
          <div>{{ i.camera }} FaceTime 高清摄像头</div>
        </div>
        <div class="audio-box">
          <el-image class="audioImg" :src="i.audioImg"></el-image>
          <div>
            {{ i.audio[0] }}
          </div>
          <div>
            {{ i.audio[1] }}
          </div>
        </div>
        <div class="weight-box">
          <div class="weight">{{ i.weight }}</div>
          <div>重量</div>
        </div>
        <div class="unlock-box">
          <el-image class="unlockImg" :src="i.unlockImg"></el-image>
          <div class="unlock">
            {{ i.unlock }}
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CpeCom",
  props: ["pmrList"],
  data() {
    return {};
  },

  mounted() {
    console.log(this.pmrList, "11111");
  },

  methods: {},
};
</script>

<style lang="less" scoped>
// 居中样式
.toCenter {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
// 下边距40
.mb40 {
  margin-bottom: 4rem;
}
// 字大小21加粗版
.fz21-w {
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0.6rem 0 0.5rem 0;
}
.w71 {
  height: 7.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cpe-box {
  width: 98rem;
  display: flex;
  justify-content: space-between;
  
  .el-form > :nth-child(n):not(:nth-child(1)) {
    margin-bottom: 4rem;
  }
  .el-form {
    border-bottom: 0.1rem solid rgba(0,0,0,0.3);
    letter-spacing: 0.011rem;
    text-align: center;
    width: 21.95rem;
    position: relative;
    font-size: 1.4rem;
    color: #1d1d1f;
    .productImg-box {
      width: 21.95rem;
      height: 16.7rem;
    }
    .colorImg {
      margin-top: 2.5rem;
      margin-bottom: 1.6rem;
    }
    .label {
      color: #bf4800;
      font-size: 1rem;
      height: 1.6rem;
    }
    .name-box {
      height: 5.6rem;
    }
    .name {
      font-size: 2.4rem;
      color: #1d1d1f;
      font-weight: 600;
    }
    .particular {
      font-size: 1.4rem;
    }
    .pirce-box {
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      padding-top: 0.8rem;
      margin-top: 0.8rem;
    }
    .btn::v-deep .el-button {
      margin: 0.6rem 0;
      width: 4.5rem;
      height: 2.5rem;
      font-size: 1rem;
      position: relative;
      span {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: 0.6rem auto;
      }
    }
    .lookMroe::v-deep .el-link {
      color: #06c;
      font-size: 1.4rem;
      margin-bottom: 2.2rem;
    }
    .hr-box {
      opacity: 0.3;
    }
    .screen-box {
      .screen-size {
        font-size: 2.1rem;
        font-weight: 600;
        margin: 0.6rem 0 0.5rem 0;
      }
    }
    .cpu-box {
      height: 7.1rem;
      .cpuImg{
       
      }
    }
    .coreQuantity-box:extend(.w71) {
      .coreQuantity {
        font-size: 2.1rem;
        font-weight: 600;
        margin: 0.6rem 0 0.5rem 0;
      }
    }
    .graphics-box:extend(.w71) {
      .graphics {
        font-size: 2.1rem;
        font-weight: 600;
        margin: 0.6rem 0 0.5rem 0;
      }
    }
    .storage-box:extend(.w71) {
      .storage:extend(.fz21-w) {
      }
    }
    .weight:extend(.fz21-w) {
    }
  }
}
</style>