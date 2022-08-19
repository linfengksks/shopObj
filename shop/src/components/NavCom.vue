<template >
  <div class="navCom">
    <!-- 基础导航栏 -->
    <div class="nav-box" v-if="showNav">
      <div class="nav">
        <el-link
          id="url"
          href="https://www.baidu.com"
          target="_blank"
          :underline="false"
          ><i class="el-icon-pear"></i>
        </el-link>
        <div :span="1" v-for="i in navListProcess" :key="i.id">
          <el-link id="url" :href="i.url" target="_blank" :underline="false">{{
            i.name
          }}</el-link>
        </div>
        <el-link @click.prevent="switchSearch" id="url" :underline="false"
          ><i class="el-icon-search"></i>
        </el-link>
        <el-link
          id="url"
          href="https://www.baidu.com"
          target="_blank"
          :underline="false"
          ><i class="el-icon-shopping-bag-2"></i>
        </el-link>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="nav-search" v-if="!showNav">
      <!-- 遮蔽层 -->
      <div
        class="occlude"
        v-if="!showNav"
        style="
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          position: absolute;
          z-index: -1;
          left: 0;
        "
        @click="switchSearch"
      ></div>
      <div class="search-title">
        <i class="el-icon-search"></i>
        <el-input
          class="searchText"
          :style="searchStyle"
          v-model="searchValue"
          placeholder="搜索 apple.com.cn"
        >
        </el-input>
        <el-link @click.prevent="switchSearch" :underline="false"
          ><i class="el-icon-close"></i
        ></el-link>
      </div>
      <!-- 提示栏 -->
      <div class="tips-box">
        <div class="tips-title" :style="searchStyle">
          {{ searchTips.title }}
        </div>
        <div class="tips-list">
          <div class="tips" v-for="i in searchTipsProcess" :key="i.id">
            <span :style="searchStyle">{{ i.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavCom",
  data() {
    return {
      // 控制导航条显示
      showNav: true,
      navList: [
        "商店",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "家居",
        "Apple独家",
        "配件",
        "技术支持",
      ],
      navUrls: [
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
        "www.baidu.com",
      ],
      navListProcess: [],
      searchValue: "",
      // 搜索提示
      searchTips: {
        title: "快速链接",
        tipsList: [
          "查找零售店",
          "配件",
          "AirPods",
          "AirTag",
          "AppleCare+ 服务计划",
        ],
      },
      searchTipsProcess: [],
      searchStyle: "",
    };
  },
  mounted() {
    // 处理导航列表
    let list = [];
    this.navList.forEach((nav, index) => {
      let navs = {
        id: "nav" + index + 1,
        name: nav,
        url: this.navUrls[index],
      };
      list.push(navs);
      if (index == this.navList.length - 1) {
        this.navListProcess = list;
      }
    });
    // 处理提示内容
    list = [];
    this.searchTips.tipsList.forEach((i, index) => {
      list.push({
        id: "tips" + index++,
        name: i,
      });
    });
    this.searchTipsProcess = list;
    // 测试
    // console.log(this.test({ "a.b.c": 1, "a.d.e": 2, e: 3 }));
  },
  methods: {
    //  测试用
    test(obj) {
      const ans = {};
      for (let key in obj) {
        console.log("ans---", ans);
        let keyList = key.split(".");
        let val = obj[key];
        console.log("键的名字", keyList);
        let cur = ans;
        const n = keyList.length;
        for (let i = 0; i < n - 1; i++) {
          cur[keyList[i]] = cur[keyList[i]] || {};
          console.log("cur[keyList[i]]:", cur[keyList[i]]);
          cur = cur[keyList[i]];
          console.log("cur---1", cur);
        }
        cur[keyList[n - 1]] = val;
        console.log("cur---2", cur);
      }
      return ans;
    },
    // 切换搜索框
    switchSearch() {
      this.showNav ? this.showSea() : this.hideSea();
    },
    showSea() {
      this.showNav = !this.showNav;
      setTimeout(() => {
        this.searchStyle = ` left:0;right:0;margin:0 auto;transition: left 0.2s;`;
      }, 10);
    },
    hideSea() {
      this.searchStyle = `left:500px;right:0;margin:0 auto;transition: left 0.2s;background:rgba(245, 245, 247, 0)`;
      setTimeout(() => {
        this.showNav = !this.showNav;
      }, 100);
    },
  },
};
</script>
<style scoped lang="less">
// 采用em的方式来控制大小
// 字体大小12px
@em: 10;
/* 重写less */
.navCom {
  font-size: 1.2rem;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  height: 4.4rem;
  background: black;
  display: flex;
  justify-content: center;
  background-color: #313132;
  width: 100%;
  .nav {
    width: 98rem;
    height: 4.4rem;
    padding: 0 2.2rem;
    background-color: #313132;
    line-height: 4.4rem;
    display: flex;
    justify-content: space-between;
    i {
      color: #d7d7d7;
      font-size: 1.4rem;
      margin-top: 0.5rem;
      text-align: center;
    }
    i:hover {
      transition: color 0.5s;
      color: rgb(245, 245, 247);
    }
    .el-link {
      transition: color 0.5s;
      color: #d7d7d7;
      font-size: 1.2rem;
    }

    .el-link:hover {
      color: rgb(245, 245, 247);
    }
  }
  // 搜索框
  .nav-search {
    .search-title {
      width: 68.2rem;
      display: flex;
      align-items: center;
      // 解决无法选中element深层元素的方法
      &::v-deep .el-input__inner {
        background-color: #313132;
        border: 0;
        color: rgb(245, 245, 247);
        font-size: 1.5rem;
      }
      &::v-deep .el-input__inner::-webkit-input-placeholder {
        color: rgba(245, 245, 247, 0.3);
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }
    }
    .searchText {
      left: 50rem;
      position: relative;
    }
  }
  i {
    font-size: 1.4rem;
    color: rgba(245, 245, 247, 0.5);
    padding: 1rem;
  }
  .el-icon-close {
    font-size: 2rem;
  }
}
// 提示框
.tips-box {
  box-sizing: border-box;
  width: 68.2rem;
  height: 23.9rem;
  background: rgb(255, 255, 255);
  position: absolute;
  border-radius: 0 0 1.8rem 1.8rem;
  padding: 2.3rem 0.7rem 1.8rem 0.7rem;
  .tips-title {
    color: #6e6e73;
    padding: 0 0 1.1rem 3.3rem;
    position: relative;
    left: 50rem;
  }
  .tips {
    color: #1d1d1f;
    line-height: 2.8rem;
    padding-bottom: 0.6rem;
    span {
      color: #1d1d1f;
      font-size: 1em;
      padding: 0 4.8rem;
      display: block;
      position: relative;
      left: 50rem;
    }
  }
  .tips:hover span {
    background: #f5f5f7;
    cursor: pointer;
    color: #06c;
  }
}
</style>