<template>
    <div class="header">
            <div class="header__left">
                <div class="toggle"></div>
                <div class="logo"></div>
            </div>
            <div class="header__right">
                <div class="search">
                    <input type="text">
                </div>
                <div class="avatar"></div>
            </div>
        </div>
</template>


<script>
   export default{
    name: "TheHeader"
   }
</script>

<style scoped>
   @import url(../../css/layout/header.css);
</style>