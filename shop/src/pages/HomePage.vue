<!--  -->
<template>
  <div class="HomePage">
    <AdvCom class="advCom"></AdvCom>
    <NavCom class="navCom"></NavCom>
    <ClassCom class="classCom"></ClassCom>
    <ActivitiesCom></ActivitiesCom>
    <PosterCom></PosterCom>
    <PosterBCom></PosterBCom>
    <CompareCom></CompareCom>
    <PosterCom2 :posterData="posterData1"></PosterCom2>
    <PosterCom2 class="ps2" :posterData="posterData2"></PosterCom2>
  </div>
</template>

<script>
import AdvCom from "../components/AdvCom";
import ClassCom from "../components/ClassCom";
import NavCom from "../components/NavCom";
import ActivitiesCom from "../components/ActivitiesCom";
import PosterCom from "../components/PosterCom";
import PosterBCom from "../components/PosterBCom";
import CompareCom from "../components/CompareCom";
import PosterCom2 from "../components/PosterCom2";

export default {
  name: "HomePage",
  components: {
    AdvCom,
    NavCom,
    ClassCom,
    ActivitiesCom,
    PosterCom,
    PosterBCom,
    CompareCom,
    PosterCom2,
  },
  data() {
    return {
      posterData1: {
        subtitle: "敬 Mac 背后的你",
        title: "原力贯耳",
        text: "看 Skywalker Sound 的大师们如何 借 Mac 之力，突破用声音讲故事的极限。",
        btn: "观看影片",
        img: require("../../static/img/btm_tile__foyxdms85eum_large.jpg"),
      },
      posterData2: {
        subtitle: "为高校生活添装备",
        title: "以教育优惠购买 Mac 可省更多◊",
        text: "另有 AirPods 搭配其中◊◊",
        btn: "立即选购",
        img: require("../../static/img/bts22_gc_familypage_mac__ewtz77ni2p6q_large.jpg"),
      },
    };
  },
};
</script>

<style lang="less">
html { font-size:10px; }
@media(max-width:540px){ html { font-size:8.4375px; } } /*Android常用宽度*/
@media(max-width:480px){ html { font-size:7.5px; } }		/*Android常用宽度*/
@media(max-width:414px){ html { font-size:6.469px; } }  /*i6Plus,i7Plus宽度*/  
@media(max-width:375px){ html { font-size:5.859px; } }	/*i6,i7宽度*/
@media(max-width:360px){ html { font-size:5.625px; } }	/*Android常用宽度*/
@media(max-width:320px){ html { font-size:5px; } }


.ps2 {
  .poster-box{
    background-repeat:no-repeat ;
    background-position: 138rem-69 0;
    background-color: #f2f2f2;
  }
  .subtitle{
    color: #1d1d1f;
  }
  .title {
    color: #1d1d1f;
  }
  .text{
    color:#ca2266;
  }
}
</style>