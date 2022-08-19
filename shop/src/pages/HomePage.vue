<!--  -->
<template>
  <div class="HomePage">
    <AdvCom></AdvCom>
    <NavCom></NavCom>
    <ClassCom></ClassCom>
  </div>
</template>

<script>
  import AdvCom from "../components/AdvCom";
  import ClassCom from "../components/ClassCom";
  import NavCom from '../components/NavCom'
  export default {
    name: "HomePage",
    components: {
      AdvCom,
      NavCom,
      ClassCom
    },
    data() {
      return {
      };
    },
  };
</script>

<style>
 
</style>