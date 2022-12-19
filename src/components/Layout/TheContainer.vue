<template>
    <div class="container">
        <TheHeader></TheHeader>
        <TheSideBar></TheSideBar>
        <TheMain></TheMain>
    </div>
</template>


<script>
   import TheHeader from './TheHeader.vue';
   import TheSideBar from './TheSideBar.vue';
   import TheMain from './TheMain.vue';
   export default{
    name: "TheContainer",
    components:{
        TheHeader,TheSideBar,TheMain
    }
   }
</script>

<style scoped>
   @import url(../../css/main.css);
</style>