<!--  -->
<template>
  <div class="HomePage">
    <AdvCom class='advCom'></AdvCom>
    <NavCom class='navCom'></NavCom>
    <ClassCom class='classCom'></ClassCom>
    <PosterCom></PosterCom>
  </div>
</template>

<script>
  import AdvCom from "../components/AdvCom";
  import ClassCom from "../components/ClassCom";
  import NavCom from '../components/NavCom'
  import PosterCom from '../components/PosterCom'
  export default {
    name: "HomePage",
    components: {
      AdvCom,
      NavCom,
      ClassCom,
      PosterCom
    },
    data() {
      return {
      };
    },
  };
</script>

<style lang="less" scoped>

</style>