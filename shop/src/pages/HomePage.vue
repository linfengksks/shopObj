<!--  -->
<template>
  <div class="HomePage">
    <AdvCom class='advCom'></AdvCom>
    <NavCom class='navCom'></NavCom>
    <ClassCom class='classCom'></ClassCom>
    <ActivitiesCom></ActivitiesCom>
    <PosterCom></PosterCom>
    <PosterBCom></PosterBCom>
  </div>
</template>

<script>
  import AdvCom from "../components/AdvCom";
  import ClassCom from "../components/ClassCom";
  import NavCom from '../components/NavCom'
  import ActivitiesCom from '../components/ActivitiesCom'
  import PosterCom from '../components/PosterCom'
  import PosterBCom from '../components/PosterBCom'
  
  export default {
    name: "HomePage",
    components: {
      AdvCom,
      NavCom,
      ClassCom,
      ActivitiesCom,
      PosterCom,
      PosterBCom
    },
    data() {
      return {
      };
    },
  };
</script>

<style lang="less" scoped>

</style>