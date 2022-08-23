<template>
  <div class="ClassCom">
    <div class="nav-wrapper" :style="navStaly">
      <div class="nav-box" v-for="(i, index) in iconList" :key="index">
        <svg-icon
          :className="'icon-nav' + (index + 1)"
          :iconClass="i"
        ></svg-icon>
        <div class="nav-name">{{ titleList[index] }}</div>
        <div class="nav-sale">{{ sale[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassCom",

  data() {
    return {
      iconList: [
        "air",
        "pro",
        "imac",
        "macmini",
        "macstudio",
        "macpro",
        "compare",
        "monitor",
        "equipment",
        "monterey",
        "shopmac",
      ],
      titleList: [
        "MacBook Air",
        "MacBook Pro",
        "iMac 24英寸",
        "Mac mini",
        "Mac Studio",
        "Mac Pro",
        "机型对比",
        "显示器",
        "配件",
        "Monterey",
        "选购Mac",
      ],
      sale: ["新款", "热卖", "", "", "", "", "", "", "", "", "爆款"],
      navList: [],
      imgStyle: ``,
      navStaly:"",
    };
  },

  mounted() {
    // 处理列表数据
    let me = this;
    me.iconList.forEach((i, index) => {
      me.navList.push({
        id: "navIcon" + index,
        icon: i,
        title: me.titleList[index],
      });
    });
    console.log("navList整理后的结果：", me.navList);
    setTimeout(() => {
      this.navStaly = "left:0;visibility:visible;"
    }, 200);
  },

  methods: {},
};
</script>

<style scoped lang="less">
// 图标名列表
@iconList: "air", "pro", "imac", "macmini", "macstudio", "macpro", "compare",
  "monitor", "equipment", "monterey", "shopmac";

.ClassCom {
  margin: 0.8rem auto;
  width: 102.4rem;
  height: 10rem;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 11rem;
    transition: all 0.3s;
    visibility:hidden;
  }
  .nav-box {
    cursor: pointer;
  }
  .nav-box:hover {
    .nav-name {
      color: #06c;
    }
  }
  .icon-nav {
    width: 100%;
    height: 100%;
    display: inline;
  }
  each(@iconList,{
    .icon-nav@{index}{
        // background-image: e(%( url(http://localhost:8080/icons/svg/%s.svg) ,@value))
        width:image-width(%("../icons/svg/%s.svg",@value));
        height: image-height(%("../icons/svg/%s.svg",@value));
        position: relative;
        left: 50%;
        transform:translateX(-50%);
    }
  });
  .nav-name {
    text-align: center;
  }
  .nav-sale {
    text-align: center;
    color: #bf4800;
    font-size: 1rem;
    transform: scale(0.9);
  }
}
</style>