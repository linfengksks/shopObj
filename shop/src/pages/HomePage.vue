<!--  -->
<template>
  <div class="HomePage">
    <NavCom></NavCom>
    <ClassCom></ClassCom>
  </div>
</template>

<script>
import  ClassCom  from "../components/ClassCom";
import NavCom from '../components/NavCom'
export default {
  name: "HomePage",
  components:{
    NavCom,
    ClassCom
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="css">
</style>
